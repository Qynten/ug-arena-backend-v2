export declare class CreatePrizePoolDto {
    position: string;
    amount: number;
}
export declare class CreateTournamentDto {
    name: string;
    description?: string;
    maxParticipants: number;
    maxTeamSize: number;
    organizerId: string;
    prizePools?: CreatePrizePoolDto[];
}
