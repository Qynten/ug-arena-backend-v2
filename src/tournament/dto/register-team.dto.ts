import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterTeamDto {
  @IsString()
  @IsNotEmpty()
  name!: string;
}
