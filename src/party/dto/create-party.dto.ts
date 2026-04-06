import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePartyDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name!: string;
}
