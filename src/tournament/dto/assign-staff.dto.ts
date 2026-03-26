import { IsUUID, IsEnum, IsNotEmpty } from 'class-validator';
import { TournamentRoleType } from '@prisma/client';

export class AssignStaffDto {
  @IsUUID()
  @IsNotEmpty()
  userId!: string;

  @IsEnum(TournamentRoleType)
  @IsNotEmpty()
  role!: TournamentRoleType;
}
