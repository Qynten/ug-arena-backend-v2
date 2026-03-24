import { IsString, IsNotEmpty, IsOptional, IsNumber, Min, IsUUID, IsArray, ValidateNested, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

// 1. Define what a single Prize Pool must look like
export class CreatePrizePoolDto {
  @IsUUID()
  @IsOptional()
  id?: string;

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

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  regStart?: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  regEnd?: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  seedingStart?: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  seedingEnd?: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  liveStart?: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  liveEnd?: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  checkInStart?: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  checkInEnd?: Date;

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