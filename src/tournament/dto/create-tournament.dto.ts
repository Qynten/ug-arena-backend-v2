import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  Min,
  IsUUID,
  IsArray,
  ValidateNested,
  IsDate,
  IsDateString,
  IsEnum,
  IsBoolean,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { BracketType } from '@prisma/client';

// 1. Define what a single Prize Pool must look like
export class CreatePrizePoolDto {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsNotEmpty()
  position!: string;

  @Type(() => Number)
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
  @IsNotEmpty()
  game!: string;

  @IsString()
  @IsNotEmpty()
  region!: string;

  @IsDateString()
  @IsOptional()
  startTime?: string | Date;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsUUID()
  @IsOptional()
  imageId?: string;

  @Type(() => Number)
  @IsNumber()
  @Min(2)
  maxParticipants!: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  maxTeamSize!: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  minTeamSize?: number;

  @IsEnum(BracketType)
  @IsOptional()
  bracketType?: BracketType;

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

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  allowSubstitutions?: boolean;
}
