import { IsString, IsNotEmpty, IsOptional, IsNumber, Min, IsUUID, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// 1. Define what a single Prize Pool must look like
export class CreatePrizePoolDto {
  @IsString()
  @IsNotEmpty()
  position!: string;

  @IsNumber()
  @Min(0)
  amount!: number;
}

// 2. Update your main Tournament DTO
export class CreateTournamentDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(2)
  maxParticipants!: number;

  @IsNumber()
  @Min(1)
  maxTeamSize!: number;

  @IsUUID()
  @IsOptional()
  organizerId?: string;

  // 3. Add the dynamic array of Prize Pools
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePrizePoolDto)
  @IsOptional() // Making it optional in case an event has no prize money
  prizePools?: CreatePrizePoolDto[];
}