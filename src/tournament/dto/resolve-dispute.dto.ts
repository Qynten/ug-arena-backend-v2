import { IsString, IsNotEmpty } from 'class-validator';

export class ResolveDisputeDto {
  @IsString()
  @IsNotEmpty()
  resolution!: string;

  @IsString()
  @IsNotEmpty()
  tournamentId!: string;
}
