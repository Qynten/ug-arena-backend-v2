import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCustomTeamDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name!: string;
}
