import { IsString, IsNotEmpty } from 'class-validator';

export class InvitePlayerDto {
  @IsString()
  @IsNotEmpty()
  discordHandle!: string;
}
