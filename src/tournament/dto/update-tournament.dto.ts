import {
  IsString,
  IsOptional,
  IsNumber,
  Min,
  IsArray,
  ValidateNested,
  IsDate,
  IsDateString,
  IsUUID,
  IsEnum,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePrizePoolDto } from './create-tournament.dto';
import { BracketType, TournamentStatus } from '@prisma/client';

export class UpdateTournamentDto {
  // --- Core identity ---
  @IsString()
  @IsOptional()
  name?: string;

  // --- Status override (for admin revert/cancel) ---
  @IsEnum(TournamentStatus)
  @IsOptional()
  status?: TournamentStatus;

  @IsString()
  @IsOptional()
  game?: string;

  @IsString()
  @IsOptional()
  region?: string;

  // --- Dynamic metadata (editable post-creation) ---
  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  rules?: string;

  @IsString()
  @IsOptional()
  requirements?: string;

  // --- Scheduling ---
  @IsDateString()
  @IsOptional()
  startTime?: string | Date;

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

  // --- Capacity ---
  @Type(() => Number)
  @IsNumber()
  @Min(2)
  @IsOptional()
  maxParticipants?: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  maxTeamSize?: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  minTeamSize?: number;

  // --- Bracket ---
  @IsEnum(BracketType)
  @IsOptional()
  bracketType?: BracketType;

  // --- Media ---
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsUUID()
  @IsOptional()
  imageId?: string;

  // --- Prize Pools ---
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePrizePoolDto)
  @IsOptional()
  prizePools?: CreatePrizePoolDto[];

  @IsBoolean()
  @IsOptional()
  allowSubstitutions?: boolean;
}
