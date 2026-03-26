import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TournamentRoleType } from '@prisma/client';
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

    // If no roles are required, it might still require just Ownership check for some routes,
    // but the task specifically mentions roles from the decorator.
    // If we want this guard to be generic for Tournament access, we might need a way to say "any role" or "just owner".
    // For now, if no roles are defined on the decorator, we might assume it only requires Ownership or the user doesn't care.
    // But usually, if the guard is applied, we expect some check.
    
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    if (!user) {
      return false;
    }

    const tournamentId = request.params.id || request.body.tournamentId;
    if (!tournamentId) {
      return true; // Or throw an error? Usually guards shouldn't be here if no ID is present.
    }

    const tournament = await this.prisma.tournament.findUnique({
      where: { id: tournamentId },
      select: { ownerId: true },
    });

    if (!tournament) {
      throw new NotFoundException('Tournament not found');
    }

    // Owner has God-mode
    if (tournament.ownerId === user.id) {
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
