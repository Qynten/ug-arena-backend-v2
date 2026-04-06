import { IsString, IsNotEmpty } from 'class-validator';

export class AddDisputeMessageDto {
  @IsString()
  @IsNotEmpty()
  content!: string;
}
