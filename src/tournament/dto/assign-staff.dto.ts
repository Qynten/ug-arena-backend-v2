import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { TournamentRoleType } from '@prisma/client';

export class AssignStaffDto {
  @IsString()
  @IsNotEmpty()
  discordHandle!: string;

  @IsEnum(TournamentRoleType)
  @IsNotEmpty()
  role!: TournamentRoleType;
}
