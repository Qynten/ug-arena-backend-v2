import { IsString, IsOptional } from 'class-validator';

export class UpdateMatchParticipantsDto {
  @IsOptional()
  @IsString()
  participant1Id?: string | null;

  @IsOptional()
  @IsString()
  participant2Id?: string | null;
}
