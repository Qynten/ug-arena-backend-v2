import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDiscordDto {
  @IsString()
  @IsNotEmpty()
  code!: string;
}
