import { SetMetadata } from '@nestjs/common';
import { TournamentRoleType } from '@prisma/client';

export const TOURNAMENT_ROLES_KEY = 'tournament_roles';
export const TournamentRoles = (...roles: TournamentRoleType[]) =>
  SetMetadata(TOURNAMENT_ROLES_KEY, roles);
