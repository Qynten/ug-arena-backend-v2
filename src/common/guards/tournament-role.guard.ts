import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TournamentRoleType, UserRole } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { TOURNAMENT_ROLES_KEY } from '../decorators/tournament-roles.decorator';

@Injectable()
export class TournamentRoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<TournamentRoleType[]>(
      TOURNAMENT_ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      return false;
    }

    // Account for system-level ADMIN or SUPER_ADMIN roles
    const isSystemAdmin =
      user.roles?.includes(UserRole.ADMIN) ||
      user.roles?.includes(UserRole.SUPER_ADMIN);

    if (isSystemAdmin) {
      return true;
    }

    const tournamentId = 
      request.params.id || 
      request.params.tournamentId || 
      request.body.tournamentId ||
      request.query.tournamentId;

    if (!tournamentId) {
      return false;
    }

    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { ownerId: true, organizerId: true },
    });

    if (!tournament) {
      throw new NotFoundException('Tournament not found');
    }

    // Owner has God-mode (including legacy organizerId)
    if (tournament.ownerId === user.id || tournament.organizerId === user.id) {
      return true;
    }

    // If no roles required, only owner can access
    if (!requiredRoles || requiredRoles.length === 0) {
      return false;
    }

    // Check for staff roles
    const staff = await this.prisma.tournamentStaff.findFirst({
      where: {
        tournamentId,
        userId: user.id,
        role: { in: requiredRoles },
      },
    });

    if (!staff) {
      throw new ForbiddenException('Insufficient permissions for this tournament');
    }

    return true;
  }
}
