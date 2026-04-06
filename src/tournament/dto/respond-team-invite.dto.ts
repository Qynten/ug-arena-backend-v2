import { IsIn, IsNotEmpty } from 'class-validator';

export class RespondTeamInviteDto {
  @IsIn(['ACCEPTED', 'REJECTED'])
  @IsNotEmpty()
  status!: 'ACCEPTED' | 'REJECTED';
}
