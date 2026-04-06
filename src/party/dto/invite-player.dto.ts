import { IsNotEmpty, IsString } from 'class-validator';

export class InvitePlayerDto {
  @IsNotEmpty()
  @IsString()
  discordHandle!: string;
}
