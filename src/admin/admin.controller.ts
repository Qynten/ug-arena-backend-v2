import { Controller, Get, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.SUPER_ADMIN)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('users')
  async getUsers() {
    return this.adminService.getUsers();
  }

  @Patch('users/:id/blacklist')
  async toggleBlacklist(
    @Param('id') userId: string,
    @Body('isOwnerBlacklisted') isOwnerBlacklisted: boolean,
  ) {
    return this.adminService.setBlacklist(userId, isOwnerBlacklisted);
  }

  @Get('tournaments')
  async getTournaments() {
    return this.adminService.getTournaments();
  }

  @Delete('tournaments/bulk')
  async deleteTournamentsBulk(@Body('ids') ids: string[]) {
    return this.adminService.deleteTournamentsBulk(ids);
  }

  @Patch('tournaments/:id/featured')
  async toggleFeatured(@Param('id') tournamentId: string, @Body('isFeatured') isFeatured: boolean) {
    return this.adminService.setFeatured(tournamentId, isFeatured);
  }
}
