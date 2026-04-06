import { IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateMatchScoreDto {
  @IsNumber()
  @IsNotEmpty()
  team1Score!: number;

  @IsNumber()
  @IsNotEmpty()
  team2Score!: number;
}
