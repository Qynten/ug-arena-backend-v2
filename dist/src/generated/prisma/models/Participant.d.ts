import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Participant
 *
 */
export type ParticipantModel = runtime.Types.Result.DefaultSelection<Prisma.$ParticipantPayload>;
export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null;
    _avg: ParticipantAvgAggregateOutputType | null;
    _sum: ParticipantSumAggregateOutputType | null;
    _min: ParticipantMinAggregateOutputType | null;
    _max: ParticipantMaxAggregateOutputType | null;
};
export type ParticipantAvgAggregateOutputType = {
    seed: number | null;
    points: number | null;
    wins: number | null;
    losses: number | null;
    draws: number | null;
    tiebreakerScore: number | null;
    buchholzScore: number | null;
};
export type ParticipantSumAggregateOutputType = {
    seed: number | null;
    points: number | null;
    wins: number | null;
    losses: number | null;
    draws: number | null;
    tiebreakerScore: number | null;
    buchholzScore: number | null;
};
export type ParticipantMinAggregateOutputType = {
    id: string | null;
    tournamentId: string | null;
    userId: string | null;
    teamId: string | null;
    seed: number | null;
    status: $Enums.ParticipantStatus | null;
    checkInStatus: $Enums.CheckInStatus | null;
    points: number | null;
    wins: number | null;
    losses: number | null;
    draws: number | null;
    tiebreakerScore: number | null;
    buchholzScore: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParticipantMaxAggregateOutputType = {
    id: string | null;
    tournamentId: string | null;
    userId: string | null;
    teamId: string | null;
    seed: number | null;
    status: $Enums.ParticipantStatus | null;
    checkInStatus: $Enums.CheckInStatus | null;
    points: number | null;
    wins: number | null;
    losses: number | null;
    draws: number | null;
    tiebreakerScore: number | null;
    buchholzScore: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParticipantCountAggregateOutputType = {
    id: number;
    tournamentId: number;
    userId: number;
    teamId: number;
    seed: number;
    status: number;
    checkInStatus: number;
    points: number;
    wins: number;
    losses: number;
    draws: number;
    tiebreakerScore: number;
    buchholzScore: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ParticipantAvgAggregateInputType = {
    seed?: true;
    points?: true;
    wins?: true;
    losses?: true;
    draws?: true;
    tiebreakerScore?: true;
    buchholzScore?: true;
};
export type ParticipantSumAggregateInputType = {
    seed?: true;
    points?: true;
    wins?: true;
    losses?: true;
    draws?: true;
    tiebreakerScore?: true;
    buchholzScore?: true;
};
export type ParticipantMinAggregateInputType = {
    id?: true;
    tournamentId?: true;
    userId?: true;
    teamId?: true;
    seed?: true;
    status?: true;
    checkInStatus?: true;
    points?: true;
    wins?: true;
    losses?: true;
    draws?: true;
    tiebreakerScore?: true;
    buchholzScore?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParticipantMaxAggregateInputType = {
    id?: true;
    tournamentId?: true;
    userId?: true;
    teamId?: true;
    seed?: true;
    status?: true;
    checkInStatus?: true;
    points?: true;
    wins?: true;
    losses?: true;
    draws?: true;
    tiebreakerScore?: true;
    buchholzScore?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParticipantCountAggregateInputType = {
    id?: true;
    tournamentId?: true;
    userId?: true;
    teamId?: true;
    seed?: true;
    status?: true;
    checkInStatus?: true;
    points?: true;
    wins?: true;
    losses?: true;
    draws?: true;
    tiebreakerScore?: true;
    buchholzScore?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ParticipantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: Prisma.ParticipantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Participants to fetch.
     */
    orderBy?: Prisma.ParticipantOrderByWithRelationInput | Prisma.ParticipantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ParticipantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Participants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ParticipantAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ParticipantSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType;
};
export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
    [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParticipant[P]> : Prisma.GetScalarType<T[P], AggregateParticipant[P]>;
};
export type ParticipantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParticipantWhereInput;
    orderBy?: Prisma.ParticipantOrderByWithAggregationInput | Prisma.ParticipantOrderByWithAggregationInput[];
    by: Prisma.ParticipantScalarFieldEnum[] | Prisma.ParticipantScalarFieldEnum;
    having?: Prisma.ParticipantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParticipantCountAggregateInputType | true;
    _avg?: ParticipantAvgAggregateInputType;
    _sum?: ParticipantSumAggregateInputType;
    _min?: ParticipantMinAggregateInputType;
    _max?: ParticipantMaxAggregateInputType;
};
export type ParticipantGroupByOutputType = {
    id: string;
    tournamentId: string;
    userId: string | null;
    teamId: string | null;
    seed: number;
    status: $Enums.ParticipantStatus;
    checkInStatus: $Enums.CheckInStatus;
    points: number;
    wins: number;
    losses: number;
    draws: number;
    tiebreakerScore: number;
    buchholzScore: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ParticipantCountAggregateOutputType | null;
    _avg: ParticipantAvgAggregateOutputType | null;
    _sum: ParticipantSumAggregateOutputType | null;
    _min: ParticipantMinAggregateOutputType | null;
    _max: ParticipantMaxAggregateOutputType | null;
};
type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParticipantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParticipantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParticipantGroupByOutputType[P]>;
}>>;
export type ParticipantWhereInput = {
    AND?: Prisma.ParticipantWhereInput | Prisma.ParticipantWhereInput[];
    OR?: Prisma.ParticipantWhereInput[];
    NOT?: Prisma.ParticipantWhereInput | Prisma.ParticipantWhereInput[];
    id?: Prisma.StringFilter<"Participant"> | string;
    tournamentId?: Prisma.StringFilter<"Participant"> | string;
    userId?: Prisma.StringNullableFilter<"Participant"> | string | null;
    teamId?: Prisma.StringNullableFilter<"Participant"> | string | null;
    seed?: Prisma.IntFilter<"Participant"> | number;
    status?: Prisma.EnumParticipantStatusFilter<"Participant"> | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFilter<"Participant"> | $Enums.CheckInStatus;
    points?: Prisma.FloatFilter<"Participant"> | number;
    wins?: Prisma.IntFilter<"Participant"> | number;
    losses?: Prisma.IntFilter<"Participant"> | number;
    draws?: Prisma.IntFilter<"Participant"> | number;
    tiebreakerScore?: Prisma.FloatFilter<"Participant"> | number;
    buchholzScore?: Prisma.FloatFilter<"Participant"> | number;
    createdAt?: Prisma.DateTimeFilter<"Participant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Participant"> | Date | string;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    team?: Prisma.XOR<Prisma.TeamNullableScalarRelationFilter, Prisma.TeamWhereInput> | null;
    rosters?: Prisma.TournamentRosterListRelationFilter;
    matchesAsP1?: Prisma.MatchListRelationFilter;
    matchesAsP2?: Prisma.MatchListRelationFilter;
    firstParticipantScores?: Prisma.ScoreListRelationFilter;
    secondParticipantScores?: Prisma.ScoreListRelationFilter;
    matchHistories?: Prisma.MatchHistoryListRelationFilter;
    opponentHistories?: Prisma.MatchHistoryListRelationFilter;
    winnersOf?: Prisma.PrizePoolListRelationFilter;
};
export type ParticipantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    teamId?: Prisma.SortOrderInput | Prisma.SortOrder;
    seed?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    checkInStatus?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    losses?: Prisma.SortOrder;
    draws?: Prisma.SortOrder;
    tiebreakerScore?: Prisma.SortOrder;
    buchholzScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tournament?: Prisma.TournamentOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    team?: Prisma.TeamOrderByWithRelationInput;
    rosters?: Prisma.TournamentRosterOrderByRelationAggregateInput;
    matchesAsP1?: Prisma.MatchOrderByRelationAggregateInput;
    matchesAsP2?: Prisma.MatchOrderByRelationAggregateInput;
    firstParticipantScores?: Prisma.scoreOrderByRelationAggregateInput;
    secondParticipantScores?: Prisma.scoreOrderByRelationAggregateInput;
    matchHistories?: Prisma.MatchHistoryOrderByRelationAggregateInput;
    opponentHistories?: Prisma.MatchHistoryOrderByRelationAggregateInput;
    winnersOf?: Prisma.PrizePoolOrderByRelationAggregateInput;
};
export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tournamentId_userId?: Prisma.ParticipantTournamentIdUserIdCompoundUniqueInput;
    tournamentId_teamId?: Prisma.ParticipantTournamentIdTeamIdCompoundUniqueInput;
    AND?: Prisma.ParticipantWhereInput | Prisma.ParticipantWhereInput[];
    OR?: Prisma.ParticipantWhereInput[];
    NOT?: Prisma.ParticipantWhereInput | Prisma.ParticipantWhereInput[];
    tournamentId?: Prisma.StringFilter<"Participant"> | string;
    userId?: Prisma.StringNullableFilter<"Participant"> | string | null;
    teamId?: Prisma.StringNullableFilter<"Participant"> | string | null;
    seed?: Prisma.IntFilter<"Participant"> | number;
    status?: Prisma.EnumParticipantStatusFilter<"Participant"> | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFilter<"Participant"> | $Enums.CheckInStatus;
    points?: Prisma.FloatFilter<"Participant"> | number;
    wins?: Prisma.IntFilter<"Participant"> | number;
    losses?: Prisma.IntFilter<"Participant"> | number;
    draws?: Prisma.IntFilter<"Participant"> | number;
    tiebreakerScore?: Prisma.FloatFilter<"Participant"> | number;
    buchholzScore?: Prisma.FloatFilter<"Participant"> | number;
    createdAt?: Prisma.DateTimeFilter<"Participant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Participant"> | Date | string;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    team?: Prisma.XOR<Prisma.TeamNullableScalarRelationFilter, Prisma.TeamWhereInput> | null;
    rosters?: Prisma.TournamentRosterListRelationFilter;
    matchesAsP1?: Prisma.MatchListRelationFilter;
    matchesAsP2?: Prisma.MatchListRelationFilter;
    firstParticipantScores?: Prisma.ScoreListRelationFilter;
    secondParticipantScores?: Prisma.ScoreListRelationFilter;
    matchHistories?: Prisma.MatchHistoryListRelationFilter;
    opponentHistories?: Prisma.MatchHistoryListRelationFilter;
    winnersOf?: Prisma.PrizePoolListRelationFilter;
}, "id" | "tournamentId_userId" | "tournamentId_teamId">;
export type ParticipantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    teamId?: Prisma.SortOrderInput | Prisma.SortOrder;
    seed?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    checkInStatus?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    losses?: Prisma.SortOrder;
    draws?: Prisma.SortOrder;
    tiebreakerScore?: Prisma.SortOrder;
    buchholzScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ParticipantCountOrderByAggregateInput;
    _avg?: Prisma.ParticipantAvgOrderByAggregateInput;
    _max?: Prisma.ParticipantMaxOrderByAggregateInput;
    _min?: Prisma.ParticipantMinOrderByAggregateInput;
    _sum?: Prisma.ParticipantSumOrderByAggregateInput;
};
export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParticipantScalarWhereWithAggregatesInput | Prisma.ParticipantScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParticipantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParticipantScalarWhereWithAggregatesInput | Prisma.ParticipantScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Participant"> | string;
    tournamentId?: Prisma.StringWithAggregatesFilter<"Participant"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"Participant"> | string | null;
    teamId?: Prisma.StringNullableWithAggregatesFilter<"Participant"> | string | null;
    seed?: Prisma.IntWithAggregatesFilter<"Participant"> | number;
    status?: Prisma.EnumParticipantStatusWithAggregatesFilter<"Participant"> | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusWithAggregatesFilter<"Participant"> | $Enums.CheckInStatus;
    points?: Prisma.FloatWithAggregatesFilter<"Participant"> | number;
    wins?: Prisma.IntWithAggregatesFilter<"Participant"> | number;
    losses?: Prisma.IntWithAggregatesFilter<"Participant"> | number;
    draws?: Prisma.IntWithAggregatesFilter<"Participant"> | number;
    tiebreakerScore?: Prisma.FloatWithAggregatesFilter<"Participant"> | number;
    buchholzScore?: Prisma.FloatWithAggregatesFilter<"Participant"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Participant"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Participant"> | Date | string;
};
export type ParticipantCreateInput = {
    id?: string;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutParticipantsInput;
    user?: Prisma.UserCreateNestedOneWithoutParticipantsInput;
    team?: Prisma.TeamCreateNestedOneWithoutParticipantsInput;
    rosters?: Prisma.TournamentRosterCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolCreateNestedManyWithoutWinnerInput;
};
export type ParticipantUncheckedCreateInput = {
    id?: string;
    tournamentId: string;
    userId?: string | null;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rosters?: Prisma.TournamentRosterUncheckedCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutWinnerInput;
};
export type ParticipantUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneWithoutParticipantsNestedInput;
    team?: Prisma.TeamUpdateOneWithoutParticipantsNestedInput;
    rosters?: Prisma.TournamentRosterUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rosters?: Prisma.TournamentRosterUncheckedUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUncheckedUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUncheckedUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUncheckedUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantCreateManyInput = {
    id?: string;
    tournamentId: string;
    userId?: string | null;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParticipantUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParticipantUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParticipantListRelationFilter = {
    every?: Prisma.ParticipantWhereInput;
    some?: Prisma.ParticipantWhereInput;
    none?: Prisma.ParticipantWhereInput;
};
export type ParticipantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ParticipantTournamentIdUserIdCompoundUniqueInput = {
    tournamentId: string;
    userId: string;
};
export type ParticipantTournamentIdTeamIdCompoundUniqueInput = {
    tournamentId: string;
    teamId: string;
};
export type ParticipantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    seed?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    checkInStatus?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    losses?: Prisma.SortOrder;
    draws?: Prisma.SortOrder;
    tiebreakerScore?: Prisma.SortOrder;
    buchholzScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParticipantAvgOrderByAggregateInput = {
    seed?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    losses?: Prisma.SortOrder;
    draws?: Prisma.SortOrder;
    tiebreakerScore?: Prisma.SortOrder;
    buchholzScore?: Prisma.SortOrder;
};
export type ParticipantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    seed?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    checkInStatus?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    losses?: Prisma.SortOrder;
    draws?: Prisma.SortOrder;
    tiebreakerScore?: Prisma.SortOrder;
    buchholzScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParticipantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    seed?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    checkInStatus?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    losses?: Prisma.SortOrder;
    draws?: Prisma.SortOrder;
    tiebreakerScore?: Prisma.SortOrder;
    buchholzScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParticipantSumOrderByAggregateInput = {
    seed?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    losses?: Prisma.SortOrder;
    draws?: Prisma.SortOrder;
    tiebreakerScore?: Prisma.SortOrder;
    buchholzScore?: Prisma.SortOrder;
};
export type ParticipantScalarRelationFilter = {
    is?: Prisma.ParticipantWhereInput;
    isNot?: Prisma.ParticipantWhereInput;
};
export type ParticipantNullableScalarRelationFilter = {
    is?: Prisma.ParticipantWhereInput | null;
    isNot?: Prisma.ParticipantWhereInput | null;
};
export type ParticipantCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutUserInput, Prisma.ParticipantUncheckedCreateWithoutUserInput> | Prisma.ParticipantCreateWithoutUserInput[] | Prisma.ParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutUserInput | Prisma.ParticipantCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ParticipantCreateManyUserInputEnvelope;
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
};
export type ParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutUserInput, Prisma.ParticipantUncheckedCreateWithoutUserInput> | Prisma.ParticipantCreateWithoutUserInput[] | Prisma.ParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutUserInput | Prisma.ParticipantCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ParticipantCreateManyUserInputEnvelope;
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
};
export type ParticipantUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutUserInput, Prisma.ParticipantUncheckedCreateWithoutUserInput> | Prisma.ParticipantCreateWithoutUserInput[] | Prisma.ParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutUserInput | Prisma.ParticipantCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ParticipantUpsertWithWhereUniqueWithoutUserInput | Prisma.ParticipantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ParticipantCreateManyUserInputEnvelope;
    set?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    disconnect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    delete?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    update?: Prisma.ParticipantUpdateWithWhereUniqueWithoutUserInput | Prisma.ParticipantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ParticipantUpdateManyWithWhereWithoutUserInput | Prisma.ParticipantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ParticipantScalarWhereInput | Prisma.ParticipantScalarWhereInput[];
};
export type ParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutUserInput, Prisma.ParticipantUncheckedCreateWithoutUserInput> | Prisma.ParticipantCreateWithoutUserInput[] | Prisma.ParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutUserInput | Prisma.ParticipantCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ParticipantUpsertWithWhereUniqueWithoutUserInput | Prisma.ParticipantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ParticipantCreateManyUserInputEnvelope;
    set?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    disconnect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    delete?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    update?: Prisma.ParticipantUpdateWithWhereUniqueWithoutUserInput | Prisma.ParticipantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ParticipantUpdateManyWithWhereWithoutUserInput | Prisma.ParticipantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ParticipantScalarWhereInput | Prisma.ParticipantScalarWhereInput[];
};
export type ParticipantCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutTournamentInput, Prisma.ParticipantUncheckedCreateWithoutTournamentInput> | Prisma.ParticipantCreateWithoutTournamentInput[] | Prisma.ParticipantUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutTournamentInput | Prisma.ParticipantCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.ParticipantCreateManyTournamentInputEnvelope;
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
};
export type ParticipantUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutTournamentInput, Prisma.ParticipantUncheckedCreateWithoutTournamentInput> | Prisma.ParticipantCreateWithoutTournamentInput[] | Prisma.ParticipantUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutTournamentInput | Prisma.ParticipantCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.ParticipantCreateManyTournamentInputEnvelope;
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
};
export type ParticipantUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutTournamentInput, Prisma.ParticipantUncheckedCreateWithoutTournamentInput> | Prisma.ParticipantCreateWithoutTournamentInput[] | Prisma.ParticipantUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutTournamentInput | Prisma.ParticipantCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.ParticipantUpsertWithWhereUniqueWithoutTournamentInput | Prisma.ParticipantUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.ParticipantCreateManyTournamentInputEnvelope;
    set?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    disconnect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    delete?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    update?: Prisma.ParticipantUpdateWithWhereUniqueWithoutTournamentInput | Prisma.ParticipantUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.ParticipantUpdateManyWithWhereWithoutTournamentInput | Prisma.ParticipantUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.ParticipantScalarWhereInput | Prisma.ParticipantScalarWhereInput[];
};
export type ParticipantUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutTournamentInput, Prisma.ParticipantUncheckedCreateWithoutTournamentInput> | Prisma.ParticipantCreateWithoutTournamentInput[] | Prisma.ParticipantUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutTournamentInput | Prisma.ParticipantCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.ParticipantUpsertWithWhereUniqueWithoutTournamentInput | Prisma.ParticipantUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.ParticipantCreateManyTournamentInputEnvelope;
    set?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    disconnect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    delete?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    update?: Prisma.ParticipantUpdateWithWhereUniqueWithoutTournamentInput | Prisma.ParticipantUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.ParticipantUpdateManyWithWhereWithoutTournamentInput | Prisma.ParticipantUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.ParticipantScalarWhereInput | Prisma.ParticipantScalarWhereInput[];
};
export type EnumParticipantStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParticipantStatus;
};
export type EnumCheckInStatusFieldUpdateOperationsInput = {
    set?: $Enums.CheckInStatus;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ParticipantCreateNestedOneWithoutRostersInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutRostersInput, Prisma.ParticipantUncheckedCreateWithoutRostersInput>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutRostersInput;
    connect?: Prisma.ParticipantWhereUniqueInput;
};
export type ParticipantUpdateOneRequiredWithoutRostersNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutRostersInput, Prisma.ParticipantUncheckedCreateWithoutRostersInput>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutRostersInput;
    upsert?: Prisma.ParticipantUpsertWithoutRostersInput;
    connect?: Prisma.ParticipantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParticipantUpdateToOneWithWhereWithoutRostersInput, Prisma.ParticipantUpdateWithoutRostersInput>, Prisma.ParticipantUncheckedUpdateWithoutRostersInput>;
};
export type ParticipantCreateNestedManyWithoutTeamInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutTeamInput, Prisma.ParticipantUncheckedCreateWithoutTeamInput> | Prisma.ParticipantCreateWithoutTeamInput[] | Prisma.ParticipantUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutTeamInput | Prisma.ParticipantCreateOrConnectWithoutTeamInput[];
    createMany?: Prisma.ParticipantCreateManyTeamInputEnvelope;
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
};
export type ParticipantUncheckedCreateNestedManyWithoutTeamInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutTeamInput, Prisma.ParticipantUncheckedCreateWithoutTeamInput> | Prisma.ParticipantCreateWithoutTeamInput[] | Prisma.ParticipantUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutTeamInput | Prisma.ParticipantCreateOrConnectWithoutTeamInput[];
    createMany?: Prisma.ParticipantCreateManyTeamInputEnvelope;
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
};
export type ParticipantUpdateManyWithoutTeamNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutTeamInput, Prisma.ParticipantUncheckedCreateWithoutTeamInput> | Prisma.ParticipantCreateWithoutTeamInput[] | Prisma.ParticipantUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutTeamInput | Prisma.ParticipantCreateOrConnectWithoutTeamInput[];
    upsert?: Prisma.ParticipantUpsertWithWhereUniqueWithoutTeamInput | Prisma.ParticipantUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: Prisma.ParticipantCreateManyTeamInputEnvelope;
    set?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    disconnect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    delete?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    update?: Prisma.ParticipantUpdateWithWhereUniqueWithoutTeamInput | Prisma.ParticipantUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: Prisma.ParticipantUpdateManyWithWhereWithoutTeamInput | Prisma.ParticipantUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: Prisma.ParticipantScalarWhereInput | Prisma.ParticipantScalarWhereInput[];
};
export type ParticipantUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutTeamInput, Prisma.ParticipantUncheckedCreateWithoutTeamInput> | Prisma.ParticipantCreateWithoutTeamInput[] | Prisma.ParticipantUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutTeamInput | Prisma.ParticipantCreateOrConnectWithoutTeamInput[];
    upsert?: Prisma.ParticipantUpsertWithWhereUniqueWithoutTeamInput | Prisma.ParticipantUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: Prisma.ParticipantCreateManyTeamInputEnvelope;
    set?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    disconnect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    delete?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    connect?: Prisma.ParticipantWhereUniqueInput | Prisma.ParticipantWhereUniqueInput[];
    update?: Prisma.ParticipantUpdateWithWhereUniqueWithoutTeamInput | Prisma.ParticipantUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: Prisma.ParticipantUpdateManyWithWhereWithoutTeamInput | Prisma.ParticipantUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: Prisma.ParticipantScalarWhereInput | Prisma.ParticipantScalarWhereInput[];
};
export type ParticipantCreateNestedOneWithoutMatchesAsP1Input = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutMatchesAsP1Input, Prisma.ParticipantUncheckedCreateWithoutMatchesAsP1Input>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutMatchesAsP1Input;
    connect?: Prisma.ParticipantWhereUniqueInput;
};
export type ParticipantCreateNestedOneWithoutMatchesAsP2Input = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutMatchesAsP2Input, Prisma.ParticipantUncheckedCreateWithoutMatchesAsP2Input>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutMatchesAsP2Input;
    connect?: Prisma.ParticipantWhereUniqueInput;
};
export type ParticipantUpdateOneWithoutMatchesAsP1NestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutMatchesAsP1Input, Prisma.ParticipantUncheckedCreateWithoutMatchesAsP1Input>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutMatchesAsP1Input;
    upsert?: Prisma.ParticipantUpsertWithoutMatchesAsP1Input;
    disconnect?: Prisma.ParticipantWhereInput | boolean;
    delete?: Prisma.ParticipantWhereInput | boolean;
    connect?: Prisma.ParticipantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParticipantUpdateToOneWithWhereWithoutMatchesAsP1Input, Prisma.ParticipantUpdateWithoutMatchesAsP1Input>, Prisma.ParticipantUncheckedUpdateWithoutMatchesAsP1Input>;
};
export type ParticipantUpdateOneWithoutMatchesAsP2NestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutMatchesAsP2Input, Prisma.ParticipantUncheckedCreateWithoutMatchesAsP2Input>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutMatchesAsP2Input;
    upsert?: Prisma.ParticipantUpsertWithoutMatchesAsP2Input;
    disconnect?: Prisma.ParticipantWhereInput | boolean;
    delete?: Prisma.ParticipantWhereInput | boolean;
    connect?: Prisma.ParticipantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParticipantUpdateToOneWithWhereWithoutMatchesAsP2Input, Prisma.ParticipantUpdateWithoutMatchesAsP2Input>, Prisma.ParticipantUncheckedUpdateWithoutMatchesAsP2Input>;
};
export type ParticipantCreateNestedOneWithoutFirstParticipantScoresInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutFirstParticipantScoresInput, Prisma.ParticipantUncheckedCreateWithoutFirstParticipantScoresInput>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutFirstParticipantScoresInput;
    connect?: Prisma.ParticipantWhereUniqueInput;
};
export type ParticipantCreateNestedOneWithoutSecondParticipantScoresInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutSecondParticipantScoresInput, Prisma.ParticipantUncheckedCreateWithoutSecondParticipantScoresInput>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutSecondParticipantScoresInput;
    connect?: Prisma.ParticipantWhereUniqueInput;
};
export type ParticipantUpdateOneRequiredWithoutFirstParticipantScoresNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutFirstParticipantScoresInput, Prisma.ParticipantUncheckedCreateWithoutFirstParticipantScoresInput>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutFirstParticipantScoresInput;
    upsert?: Prisma.ParticipantUpsertWithoutFirstParticipantScoresInput;
    connect?: Prisma.ParticipantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParticipantUpdateToOneWithWhereWithoutFirstParticipantScoresInput, Prisma.ParticipantUpdateWithoutFirstParticipantScoresInput>, Prisma.ParticipantUncheckedUpdateWithoutFirstParticipantScoresInput>;
};
export type ParticipantUpdateOneRequiredWithoutSecondParticipantScoresNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutSecondParticipantScoresInput, Prisma.ParticipantUncheckedCreateWithoutSecondParticipantScoresInput>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutSecondParticipantScoresInput;
    upsert?: Prisma.ParticipantUpsertWithoutSecondParticipantScoresInput;
    connect?: Prisma.ParticipantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParticipantUpdateToOneWithWhereWithoutSecondParticipantScoresInput, Prisma.ParticipantUpdateWithoutSecondParticipantScoresInput>, Prisma.ParticipantUncheckedUpdateWithoutSecondParticipantScoresInput>;
};
export type ParticipantCreateNestedOneWithoutMatchHistoriesInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutMatchHistoriesInput, Prisma.ParticipantUncheckedCreateWithoutMatchHistoriesInput>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutMatchHistoriesInput;
    connect?: Prisma.ParticipantWhereUniqueInput;
};
export type ParticipantCreateNestedOneWithoutOpponentHistoriesInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutOpponentHistoriesInput, Prisma.ParticipantUncheckedCreateWithoutOpponentHistoriesInput>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutOpponentHistoriesInput;
    connect?: Prisma.ParticipantWhereUniqueInput;
};
export type ParticipantUpdateOneRequiredWithoutMatchHistoriesNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutMatchHistoriesInput, Prisma.ParticipantUncheckedCreateWithoutMatchHistoriesInput>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutMatchHistoriesInput;
    upsert?: Prisma.ParticipantUpsertWithoutMatchHistoriesInput;
    connect?: Prisma.ParticipantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParticipantUpdateToOneWithWhereWithoutMatchHistoriesInput, Prisma.ParticipantUpdateWithoutMatchHistoriesInput>, Prisma.ParticipantUncheckedUpdateWithoutMatchHistoriesInput>;
};
export type ParticipantUpdateOneRequiredWithoutOpponentHistoriesNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutOpponentHistoriesInput, Prisma.ParticipantUncheckedCreateWithoutOpponentHistoriesInput>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutOpponentHistoriesInput;
    upsert?: Prisma.ParticipantUpsertWithoutOpponentHistoriesInput;
    connect?: Prisma.ParticipantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParticipantUpdateToOneWithWhereWithoutOpponentHistoriesInput, Prisma.ParticipantUpdateWithoutOpponentHistoriesInput>, Prisma.ParticipantUncheckedUpdateWithoutOpponentHistoriesInput>;
};
export type ParticipantCreateNestedOneWithoutWinnersOfInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutWinnersOfInput, Prisma.ParticipantUncheckedCreateWithoutWinnersOfInput>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutWinnersOfInput;
    connect?: Prisma.ParticipantWhereUniqueInput;
};
export type ParticipantUpdateOneWithoutWinnersOfNestedInput = {
    create?: Prisma.XOR<Prisma.ParticipantCreateWithoutWinnersOfInput, Prisma.ParticipantUncheckedCreateWithoutWinnersOfInput>;
    connectOrCreate?: Prisma.ParticipantCreateOrConnectWithoutWinnersOfInput;
    upsert?: Prisma.ParticipantUpsertWithoutWinnersOfInput;
    disconnect?: Prisma.ParticipantWhereInput | boolean;
    delete?: Prisma.ParticipantWhereInput | boolean;
    connect?: Prisma.ParticipantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ParticipantUpdateToOneWithWhereWithoutWinnersOfInput, Prisma.ParticipantUpdateWithoutWinnersOfInput>, Prisma.ParticipantUncheckedUpdateWithoutWinnersOfInput>;
};
export type ParticipantCreateWithoutUserInput = {
    id?: string;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutParticipantsInput;
    team?: Prisma.TeamCreateNestedOneWithoutParticipantsInput;
    rosters?: Prisma.TournamentRosterCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolCreateNestedManyWithoutWinnerInput;
};
export type ParticipantUncheckedCreateWithoutUserInput = {
    id?: string;
    tournamentId: string;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rosters?: Prisma.TournamentRosterUncheckedCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutWinnerInput;
};
export type ParticipantCreateOrConnectWithoutUserInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutUserInput, Prisma.ParticipantUncheckedCreateWithoutUserInput>;
};
export type ParticipantCreateManyUserInputEnvelope = {
    data: Prisma.ParticipantCreateManyUserInput | Prisma.ParticipantCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParticipantUpdateWithoutUserInput, Prisma.ParticipantUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutUserInput, Prisma.ParticipantUncheckedCreateWithoutUserInput>;
};
export type ParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateWithoutUserInput, Prisma.ParticipantUncheckedUpdateWithoutUserInput>;
};
export type ParticipantUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateManyMutationInput, Prisma.ParticipantUncheckedUpdateManyWithoutUserInput>;
};
export type ParticipantScalarWhereInput = {
    AND?: Prisma.ParticipantScalarWhereInput | Prisma.ParticipantScalarWhereInput[];
    OR?: Prisma.ParticipantScalarWhereInput[];
    NOT?: Prisma.ParticipantScalarWhereInput | Prisma.ParticipantScalarWhereInput[];
    id?: Prisma.StringFilter<"Participant"> | string;
    tournamentId?: Prisma.StringFilter<"Participant"> | string;
    userId?: Prisma.StringNullableFilter<"Participant"> | string | null;
    teamId?: Prisma.StringNullableFilter<"Participant"> | string | null;
    seed?: Prisma.IntFilter<"Participant"> | number;
    status?: Prisma.EnumParticipantStatusFilter<"Participant"> | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFilter<"Participant"> | $Enums.CheckInStatus;
    points?: Prisma.FloatFilter<"Participant"> | number;
    wins?: Prisma.IntFilter<"Participant"> | number;
    losses?: Prisma.IntFilter<"Participant"> | number;
    draws?: Prisma.IntFilter<"Participant"> | number;
    tiebreakerScore?: Prisma.FloatFilter<"Participant"> | number;
    buchholzScore?: Prisma.FloatFilter<"Participant"> | number;
    createdAt?: Prisma.DateTimeFilter<"Participant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Participant"> | Date | string;
};
export type ParticipantCreateWithoutTournamentInput = {
    id?: string;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutParticipantsInput;
    team?: Prisma.TeamCreateNestedOneWithoutParticipantsInput;
    rosters?: Prisma.TournamentRosterCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolCreateNestedManyWithoutWinnerInput;
};
export type ParticipantUncheckedCreateWithoutTournamentInput = {
    id?: string;
    userId?: string | null;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rosters?: Prisma.TournamentRosterUncheckedCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutWinnerInput;
};
export type ParticipantCreateOrConnectWithoutTournamentInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutTournamentInput, Prisma.ParticipantUncheckedCreateWithoutTournamentInput>;
};
export type ParticipantCreateManyTournamentInputEnvelope = {
    data: Prisma.ParticipantCreateManyTournamentInput | Prisma.ParticipantCreateManyTournamentInput[];
    skipDuplicates?: boolean;
};
export type ParticipantUpsertWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParticipantUpdateWithoutTournamentInput, Prisma.ParticipantUncheckedUpdateWithoutTournamentInput>;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutTournamentInput, Prisma.ParticipantUncheckedCreateWithoutTournamentInput>;
};
export type ParticipantUpdateWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateWithoutTournamentInput, Prisma.ParticipantUncheckedUpdateWithoutTournamentInput>;
};
export type ParticipantUpdateManyWithWhereWithoutTournamentInput = {
    where: Prisma.ParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateManyMutationInput, Prisma.ParticipantUncheckedUpdateManyWithoutTournamentInput>;
};
export type ParticipantCreateWithoutRostersInput = {
    id?: string;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutParticipantsInput;
    user?: Prisma.UserCreateNestedOneWithoutParticipantsInput;
    team?: Prisma.TeamCreateNestedOneWithoutParticipantsInput;
    matchesAsP1?: Prisma.MatchCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolCreateNestedManyWithoutWinnerInput;
};
export type ParticipantUncheckedCreateWithoutRostersInput = {
    id?: string;
    tournamentId: string;
    userId?: string | null;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    matchesAsP1?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutWinnerInput;
};
export type ParticipantCreateOrConnectWithoutRostersInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutRostersInput, Prisma.ParticipantUncheckedCreateWithoutRostersInput>;
};
export type ParticipantUpsertWithoutRostersInput = {
    update: Prisma.XOR<Prisma.ParticipantUpdateWithoutRostersInput, Prisma.ParticipantUncheckedUpdateWithoutRostersInput>;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutRostersInput, Prisma.ParticipantUncheckedCreateWithoutRostersInput>;
    where?: Prisma.ParticipantWhereInput;
};
export type ParticipantUpdateToOneWithWhereWithoutRostersInput = {
    where?: Prisma.ParticipantWhereInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateWithoutRostersInput, Prisma.ParticipantUncheckedUpdateWithoutRostersInput>;
};
export type ParticipantUpdateWithoutRostersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneWithoutParticipantsNestedInput;
    team?: Prisma.TeamUpdateOneWithoutParticipantsNestedInput;
    matchesAsP1?: Prisma.MatchUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateWithoutRostersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matchesAsP1?: Prisma.MatchUncheckedUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUncheckedUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUncheckedUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantCreateWithoutTeamInput = {
    id?: string;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutParticipantsInput;
    user?: Prisma.UserCreateNestedOneWithoutParticipantsInput;
    rosters?: Prisma.TournamentRosterCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolCreateNestedManyWithoutWinnerInput;
};
export type ParticipantUncheckedCreateWithoutTeamInput = {
    id?: string;
    tournamentId: string;
    userId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rosters?: Prisma.TournamentRosterUncheckedCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutWinnerInput;
};
export type ParticipantCreateOrConnectWithoutTeamInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutTeamInput, Prisma.ParticipantUncheckedCreateWithoutTeamInput>;
};
export type ParticipantCreateManyTeamInputEnvelope = {
    data: Prisma.ParticipantCreateManyTeamInput | Prisma.ParticipantCreateManyTeamInput[];
    skipDuplicates?: boolean;
};
export type ParticipantUpsertWithWhereUniqueWithoutTeamInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParticipantUpdateWithoutTeamInput, Prisma.ParticipantUncheckedUpdateWithoutTeamInput>;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutTeamInput, Prisma.ParticipantUncheckedCreateWithoutTeamInput>;
};
export type ParticipantUpdateWithWhereUniqueWithoutTeamInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateWithoutTeamInput, Prisma.ParticipantUncheckedUpdateWithoutTeamInput>;
};
export type ParticipantUpdateManyWithWhereWithoutTeamInput = {
    where: Prisma.ParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateManyMutationInput, Prisma.ParticipantUncheckedUpdateManyWithoutTeamInput>;
};
export type ParticipantCreateWithoutMatchesAsP1Input = {
    id?: string;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutParticipantsInput;
    user?: Prisma.UserCreateNestedOneWithoutParticipantsInput;
    team?: Prisma.TeamCreateNestedOneWithoutParticipantsInput;
    rosters?: Prisma.TournamentRosterCreateNestedManyWithoutParticipantInput;
    matchesAsP2?: Prisma.MatchCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolCreateNestedManyWithoutWinnerInput;
};
export type ParticipantUncheckedCreateWithoutMatchesAsP1Input = {
    id?: string;
    tournamentId: string;
    userId?: string | null;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rosters?: Prisma.TournamentRosterUncheckedCreateNestedManyWithoutParticipantInput;
    matchesAsP2?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutWinnerInput;
};
export type ParticipantCreateOrConnectWithoutMatchesAsP1Input = {
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutMatchesAsP1Input, Prisma.ParticipantUncheckedCreateWithoutMatchesAsP1Input>;
};
export type ParticipantCreateWithoutMatchesAsP2Input = {
    id?: string;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutParticipantsInput;
    user?: Prisma.UserCreateNestedOneWithoutParticipantsInput;
    team?: Prisma.TeamCreateNestedOneWithoutParticipantsInput;
    rosters?: Prisma.TournamentRosterCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchCreateNestedManyWithoutParticipant1Input;
    firstParticipantScores?: Prisma.scoreCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolCreateNestedManyWithoutWinnerInput;
};
export type ParticipantUncheckedCreateWithoutMatchesAsP2Input = {
    id?: string;
    tournamentId: string;
    userId?: string | null;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rosters?: Prisma.TournamentRosterUncheckedCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant1Input;
    firstParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutWinnerInput;
};
export type ParticipantCreateOrConnectWithoutMatchesAsP2Input = {
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutMatchesAsP2Input, Prisma.ParticipantUncheckedCreateWithoutMatchesAsP2Input>;
};
export type ParticipantUpsertWithoutMatchesAsP1Input = {
    update: Prisma.XOR<Prisma.ParticipantUpdateWithoutMatchesAsP1Input, Prisma.ParticipantUncheckedUpdateWithoutMatchesAsP1Input>;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutMatchesAsP1Input, Prisma.ParticipantUncheckedCreateWithoutMatchesAsP1Input>;
    where?: Prisma.ParticipantWhereInput;
};
export type ParticipantUpdateToOneWithWhereWithoutMatchesAsP1Input = {
    where?: Prisma.ParticipantWhereInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateWithoutMatchesAsP1Input, Prisma.ParticipantUncheckedUpdateWithoutMatchesAsP1Input>;
};
export type ParticipantUpdateWithoutMatchesAsP1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneWithoutParticipantsNestedInput;
    team?: Prisma.TeamUpdateOneWithoutParticipantsNestedInput;
    rosters?: Prisma.TournamentRosterUpdateManyWithoutParticipantNestedInput;
    matchesAsP2?: Prisma.MatchUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateWithoutMatchesAsP1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rosters?: Prisma.TournamentRosterUncheckedUpdateManyWithoutParticipantNestedInput;
    matchesAsP2?: Prisma.MatchUncheckedUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUncheckedUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUpsertWithoutMatchesAsP2Input = {
    update: Prisma.XOR<Prisma.ParticipantUpdateWithoutMatchesAsP2Input, Prisma.ParticipantUncheckedUpdateWithoutMatchesAsP2Input>;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutMatchesAsP2Input, Prisma.ParticipantUncheckedCreateWithoutMatchesAsP2Input>;
    where?: Prisma.ParticipantWhereInput;
};
export type ParticipantUpdateToOneWithWhereWithoutMatchesAsP2Input = {
    where?: Prisma.ParticipantWhereInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateWithoutMatchesAsP2Input, Prisma.ParticipantUncheckedUpdateWithoutMatchesAsP2Input>;
};
export type ParticipantUpdateWithoutMatchesAsP2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneWithoutParticipantsNestedInput;
    team?: Prisma.TeamUpdateOneWithoutParticipantsNestedInput;
    rosters?: Prisma.TournamentRosterUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUpdateManyWithoutParticipant1NestedInput;
    firstParticipantScores?: Prisma.scoreUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateWithoutMatchesAsP2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rosters?: Prisma.TournamentRosterUncheckedUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUncheckedUpdateManyWithoutParticipant1NestedInput;
    firstParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUncheckedUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantCreateWithoutFirstParticipantScoresInput = {
    id?: string;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutParticipantsInput;
    user?: Prisma.UserCreateNestedOneWithoutParticipantsInput;
    team?: Prisma.TeamCreateNestedOneWithoutParticipantsInput;
    rosters?: Prisma.TournamentRosterCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchCreateNestedManyWithoutParticipant2Input;
    secondParticipantScores?: Prisma.scoreCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolCreateNestedManyWithoutWinnerInput;
};
export type ParticipantUncheckedCreateWithoutFirstParticipantScoresInput = {
    id?: string;
    tournamentId: string;
    userId?: string | null;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rosters?: Prisma.TournamentRosterUncheckedCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant2Input;
    secondParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutWinnerInput;
};
export type ParticipantCreateOrConnectWithoutFirstParticipantScoresInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutFirstParticipantScoresInput, Prisma.ParticipantUncheckedCreateWithoutFirstParticipantScoresInput>;
};
export type ParticipantCreateWithoutSecondParticipantScoresInput = {
    id?: string;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutParticipantsInput;
    user?: Prisma.UserCreateNestedOneWithoutParticipantsInput;
    team?: Prisma.TeamCreateNestedOneWithoutParticipantsInput;
    rosters?: Prisma.TournamentRosterCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreCreateNestedManyWithoutFirstParticipantInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolCreateNestedManyWithoutWinnerInput;
};
export type ParticipantUncheckedCreateWithoutSecondParticipantScoresInput = {
    id?: string;
    tournamentId: string;
    userId?: string | null;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rosters?: Prisma.TournamentRosterUncheckedCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutFirstParticipantInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutWinnerInput;
};
export type ParticipantCreateOrConnectWithoutSecondParticipantScoresInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutSecondParticipantScoresInput, Prisma.ParticipantUncheckedCreateWithoutSecondParticipantScoresInput>;
};
export type ParticipantUpsertWithoutFirstParticipantScoresInput = {
    update: Prisma.XOR<Prisma.ParticipantUpdateWithoutFirstParticipantScoresInput, Prisma.ParticipantUncheckedUpdateWithoutFirstParticipantScoresInput>;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutFirstParticipantScoresInput, Prisma.ParticipantUncheckedCreateWithoutFirstParticipantScoresInput>;
    where?: Prisma.ParticipantWhereInput;
};
export type ParticipantUpdateToOneWithWhereWithoutFirstParticipantScoresInput = {
    where?: Prisma.ParticipantWhereInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateWithoutFirstParticipantScoresInput, Prisma.ParticipantUncheckedUpdateWithoutFirstParticipantScoresInput>;
};
export type ParticipantUpdateWithoutFirstParticipantScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneWithoutParticipantsNestedInput;
    team?: Prisma.TeamUpdateOneWithoutParticipantsNestedInput;
    rosters?: Prisma.TournamentRosterUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUpdateManyWithoutParticipant2NestedInput;
    secondParticipantScores?: Prisma.scoreUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateWithoutFirstParticipantScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rosters?: Prisma.TournamentRosterUncheckedUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUncheckedUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUncheckedUpdateManyWithoutParticipant2NestedInput;
    secondParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUncheckedUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUpsertWithoutSecondParticipantScoresInput = {
    update: Prisma.XOR<Prisma.ParticipantUpdateWithoutSecondParticipantScoresInput, Prisma.ParticipantUncheckedUpdateWithoutSecondParticipantScoresInput>;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutSecondParticipantScoresInput, Prisma.ParticipantUncheckedCreateWithoutSecondParticipantScoresInput>;
    where?: Prisma.ParticipantWhereInput;
};
export type ParticipantUpdateToOneWithWhereWithoutSecondParticipantScoresInput = {
    where?: Prisma.ParticipantWhereInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateWithoutSecondParticipantScoresInput, Prisma.ParticipantUncheckedUpdateWithoutSecondParticipantScoresInput>;
};
export type ParticipantUpdateWithoutSecondParticipantScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneWithoutParticipantsNestedInput;
    team?: Prisma.TeamUpdateOneWithoutParticipantsNestedInput;
    rosters?: Prisma.TournamentRosterUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUpdateManyWithoutFirstParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateWithoutSecondParticipantScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rosters?: Prisma.TournamentRosterUncheckedUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUncheckedUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUncheckedUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutFirstParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUncheckedUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantCreateWithoutMatchHistoriesInput = {
    id?: string;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutParticipantsInput;
    user?: Prisma.UserCreateNestedOneWithoutParticipantsInput;
    team?: Prisma.TeamCreateNestedOneWithoutParticipantsInput;
    rosters?: Prisma.TournamentRosterCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreCreateNestedManyWithoutSecondParticipantInput;
    opponentHistories?: Prisma.MatchHistoryCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolCreateNestedManyWithoutWinnerInput;
};
export type ParticipantUncheckedCreateWithoutMatchHistoriesInput = {
    id?: string;
    tournamentId: string;
    userId?: string | null;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rosters?: Prisma.TournamentRosterUncheckedCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutSecondParticipantInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutOpponentInput;
    winnersOf?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutWinnerInput;
};
export type ParticipantCreateOrConnectWithoutMatchHistoriesInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutMatchHistoriesInput, Prisma.ParticipantUncheckedCreateWithoutMatchHistoriesInput>;
};
export type ParticipantCreateWithoutOpponentHistoriesInput = {
    id?: string;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutParticipantsInput;
    user?: Prisma.UserCreateNestedOneWithoutParticipantsInput;
    team?: Prisma.TeamCreateNestedOneWithoutParticipantsInput;
    rosters?: Prisma.TournamentRosterCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutParticipantInput;
    winnersOf?: Prisma.PrizePoolCreateNestedManyWithoutWinnerInput;
};
export type ParticipantUncheckedCreateWithoutOpponentHistoriesInput = {
    id?: string;
    tournamentId: string;
    userId?: string | null;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rosters?: Prisma.TournamentRosterUncheckedCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutParticipantInput;
    winnersOf?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutWinnerInput;
};
export type ParticipantCreateOrConnectWithoutOpponentHistoriesInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutOpponentHistoriesInput, Prisma.ParticipantUncheckedCreateWithoutOpponentHistoriesInput>;
};
export type ParticipantUpsertWithoutMatchHistoriesInput = {
    update: Prisma.XOR<Prisma.ParticipantUpdateWithoutMatchHistoriesInput, Prisma.ParticipantUncheckedUpdateWithoutMatchHistoriesInput>;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutMatchHistoriesInput, Prisma.ParticipantUncheckedCreateWithoutMatchHistoriesInput>;
    where?: Prisma.ParticipantWhereInput;
};
export type ParticipantUpdateToOneWithWhereWithoutMatchHistoriesInput = {
    where?: Prisma.ParticipantWhereInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateWithoutMatchHistoriesInput, Prisma.ParticipantUncheckedUpdateWithoutMatchHistoriesInput>;
};
export type ParticipantUpdateWithoutMatchHistoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneWithoutParticipantsNestedInput;
    team?: Prisma.TeamUpdateOneWithoutParticipantsNestedInput;
    rosters?: Prisma.TournamentRosterUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUpdateManyWithoutSecondParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateWithoutMatchHistoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rosters?: Prisma.TournamentRosterUncheckedUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUncheckedUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUncheckedUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutSecondParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUncheckedUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUpsertWithoutOpponentHistoriesInput = {
    update: Prisma.XOR<Prisma.ParticipantUpdateWithoutOpponentHistoriesInput, Prisma.ParticipantUncheckedUpdateWithoutOpponentHistoriesInput>;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutOpponentHistoriesInput, Prisma.ParticipantUncheckedCreateWithoutOpponentHistoriesInput>;
    where?: Prisma.ParticipantWhereInput;
};
export type ParticipantUpdateToOneWithWhereWithoutOpponentHistoriesInput = {
    where?: Prisma.ParticipantWhereInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateWithoutOpponentHistoriesInput, Prisma.ParticipantUncheckedUpdateWithoutOpponentHistoriesInput>;
};
export type ParticipantUpdateWithoutOpponentHistoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneWithoutParticipantsNestedInput;
    team?: Prisma.TeamUpdateOneWithoutParticipantsNestedInput;
    rosters?: Prisma.TournamentRosterUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutParticipantNestedInput;
    winnersOf?: Prisma.PrizePoolUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateWithoutOpponentHistoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rosters?: Prisma.TournamentRosterUncheckedUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUncheckedUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUncheckedUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutParticipantNestedInput;
    winnersOf?: Prisma.PrizePoolUncheckedUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantCreateWithoutWinnersOfInput = {
    id?: string;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutParticipantsInput;
    user?: Prisma.UserCreateNestedOneWithoutParticipantsInput;
    team?: Prisma.TeamCreateNestedOneWithoutParticipantsInput;
    rosters?: Prisma.TournamentRosterCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryCreateNestedManyWithoutOpponentInput;
};
export type ParticipantUncheckedCreateWithoutWinnersOfInput = {
    id?: string;
    tournamentId: string;
    userId?: string | null;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rosters?: Prisma.TournamentRosterUncheckedCreateNestedManyWithoutParticipantInput;
    matchesAsP1?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant1Input;
    matchesAsP2?: Prisma.MatchUncheckedCreateNestedManyWithoutParticipant2Input;
    firstParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutFirstParticipantInput;
    secondParticipantScores?: Prisma.scoreUncheckedCreateNestedManyWithoutSecondParticipantInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutParticipantInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutOpponentInput;
};
export type ParticipantCreateOrConnectWithoutWinnersOfInput = {
    where: Prisma.ParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutWinnersOfInput, Prisma.ParticipantUncheckedCreateWithoutWinnersOfInput>;
};
export type ParticipantUpsertWithoutWinnersOfInput = {
    update: Prisma.XOR<Prisma.ParticipantUpdateWithoutWinnersOfInput, Prisma.ParticipantUncheckedUpdateWithoutWinnersOfInput>;
    create: Prisma.XOR<Prisma.ParticipantCreateWithoutWinnersOfInput, Prisma.ParticipantUncheckedCreateWithoutWinnersOfInput>;
    where?: Prisma.ParticipantWhereInput;
};
export type ParticipantUpdateToOneWithWhereWithoutWinnersOfInput = {
    where?: Prisma.ParticipantWhereInput;
    data: Prisma.XOR<Prisma.ParticipantUpdateWithoutWinnersOfInput, Prisma.ParticipantUncheckedUpdateWithoutWinnersOfInput>;
};
export type ParticipantUpdateWithoutWinnersOfInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneWithoutParticipantsNestedInput;
    team?: Prisma.TeamUpdateOneWithoutParticipantsNestedInput;
    rosters?: Prisma.TournamentRosterUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUpdateManyWithoutOpponentNestedInput;
};
export type ParticipantUncheckedUpdateWithoutWinnersOfInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rosters?: Prisma.TournamentRosterUncheckedUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUncheckedUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUncheckedUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutOpponentNestedInput;
};
export type ParticipantCreateManyUserInput = {
    id?: string;
    tournamentId: string;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParticipantUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutParticipantsNestedInput;
    team?: Prisma.TeamUpdateOneWithoutParticipantsNestedInput;
    rosters?: Prisma.TournamentRosterUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rosters?: Prisma.TournamentRosterUncheckedUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUncheckedUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUncheckedUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUncheckedUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParticipantCreateManyTournamentInput = {
    id?: string;
    userId?: string | null;
    teamId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParticipantUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutParticipantsNestedInput;
    team?: Prisma.TeamUpdateOneWithoutParticipantsNestedInput;
    rosters?: Prisma.TournamentRosterUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rosters?: Prisma.TournamentRosterUncheckedUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUncheckedUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUncheckedUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUncheckedUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateManyWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teamId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParticipantCreateManyTeamInput = {
    id?: string;
    tournamentId: string;
    userId?: string | null;
    seed?: number;
    status?: $Enums.ParticipantStatus;
    checkInStatus?: $Enums.CheckInStatus;
    points?: number;
    wins?: number;
    losses?: number;
    draws?: number;
    tiebreakerScore?: number;
    buchholzScore?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParticipantUpdateWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneWithoutParticipantsNestedInput;
    rosters?: Prisma.TournamentRosterUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rosters?: Prisma.TournamentRosterUncheckedUpdateManyWithoutParticipantNestedInput;
    matchesAsP1?: Prisma.MatchUncheckedUpdateManyWithoutParticipant1NestedInput;
    matchesAsP2?: Prisma.MatchUncheckedUpdateManyWithoutParticipant2NestedInput;
    firstParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutFirstParticipantNestedInput;
    secondParticipantScores?: Prisma.scoreUncheckedUpdateManyWithoutSecondParticipantNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutParticipantNestedInput;
    opponentHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutOpponentNestedInput;
    winnersOf?: Prisma.PrizePoolUncheckedUpdateManyWithoutWinnerNestedInput;
};
export type ParticipantUncheckedUpdateManyWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seed?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus;
    checkInStatus?: Prisma.EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus;
    points?: Prisma.FloatFieldUpdateOperationsInput | number;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    losses?: Prisma.IntFieldUpdateOperationsInput | number;
    draws?: Prisma.IntFieldUpdateOperationsInput | number;
    tiebreakerScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    buchholzScore?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ParticipantCountOutputType
 */
export type ParticipantCountOutputType = {
    rosters: number;
    matchesAsP1: number;
    matchesAsP2: number;
    firstParticipantScores: number;
    secondParticipantScores: number;
    matchHistories: number;
    opponentHistories: number;
    winnersOf: number;
};
export type ParticipantCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rosters?: boolean | ParticipantCountOutputTypeCountRostersArgs;
    matchesAsP1?: boolean | ParticipantCountOutputTypeCountMatchesAsP1Args;
    matchesAsP2?: boolean | ParticipantCountOutputTypeCountMatchesAsP2Args;
    firstParticipantScores?: boolean | ParticipantCountOutputTypeCountFirstParticipantScoresArgs;
    secondParticipantScores?: boolean | ParticipantCountOutputTypeCountSecondParticipantScoresArgs;
    matchHistories?: boolean | ParticipantCountOutputTypeCountMatchHistoriesArgs;
    opponentHistories?: boolean | ParticipantCountOutputTypeCountOpponentHistoriesArgs;
    winnersOf?: boolean | ParticipantCountOutputTypeCountWinnersOfArgs;
};
/**
 * ParticipantCountOutputType without action
 */
export type ParticipantCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCountOutputType
     */
    select?: Prisma.ParticipantCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ParticipantCountOutputType without action
 */
export type ParticipantCountOutputTypeCountRostersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentRosterWhereInput;
};
/**
 * ParticipantCountOutputType without action
 */
export type ParticipantCountOutputTypeCountMatchesAsP1Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
};
/**
 * ParticipantCountOutputType without action
 */
export type ParticipantCountOutputTypeCountMatchesAsP2Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
};
/**
 * ParticipantCountOutputType without action
 */
export type ParticipantCountOutputTypeCountFirstParticipantScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.scoreWhereInput;
};
/**
 * ParticipantCountOutputType without action
 */
export type ParticipantCountOutputTypeCountSecondParticipantScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.scoreWhereInput;
};
/**
 * ParticipantCountOutputType without action
 */
export type ParticipantCountOutputTypeCountMatchHistoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchHistoryWhereInput;
};
/**
 * ParticipantCountOutputType without action
 */
export type ParticipantCountOutputTypeCountOpponentHistoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchHistoryWhereInput;
};
/**
 * ParticipantCountOutputType without action
 */
export type ParticipantCountOutputTypeCountWinnersOfArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrizePoolWhereInput;
};
export type ParticipantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    userId?: boolean;
    teamId?: boolean;
    seed?: boolean;
    status?: boolean;
    checkInStatus?: boolean;
    points?: boolean;
    wins?: boolean;
    losses?: boolean;
    draws?: boolean;
    tiebreakerScore?: boolean;
    buchholzScore?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Participant$userArgs<ExtArgs>;
    team?: boolean | Prisma.Participant$teamArgs<ExtArgs>;
    rosters?: boolean | Prisma.Participant$rostersArgs<ExtArgs>;
    matchesAsP1?: boolean | Prisma.Participant$matchesAsP1Args<ExtArgs>;
    matchesAsP2?: boolean | Prisma.Participant$matchesAsP2Args<ExtArgs>;
    firstParticipantScores?: boolean | Prisma.Participant$firstParticipantScoresArgs<ExtArgs>;
    secondParticipantScores?: boolean | Prisma.Participant$secondParticipantScoresArgs<ExtArgs>;
    matchHistories?: boolean | Prisma.Participant$matchHistoriesArgs<ExtArgs>;
    opponentHistories?: boolean | Prisma.Participant$opponentHistoriesArgs<ExtArgs>;
    winnersOf?: boolean | Prisma.Participant$winnersOfArgs<ExtArgs>;
    _count?: boolean | Prisma.ParticipantCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["participant"]>;
export type ParticipantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    userId?: boolean;
    teamId?: boolean;
    seed?: boolean;
    status?: boolean;
    checkInStatus?: boolean;
    points?: boolean;
    wins?: boolean;
    losses?: boolean;
    draws?: boolean;
    tiebreakerScore?: boolean;
    buchholzScore?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Participant$userArgs<ExtArgs>;
    team?: boolean | Prisma.Participant$teamArgs<ExtArgs>;
}, ExtArgs["result"]["participant"]>;
export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    userId?: boolean;
    teamId?: boolean;
    seed?: boolean;
    status?: boolean;
    checkInStatus?: boolean;
    points?: boolean;
    wins?: boolean;
    losses?: boolean;
    draws?: boolean;
    tiebreakerScore?: boolean;
    buchholzScore?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Participant$userArgs<ExtArgs>;
    team?: boolean | Prisma.Participant$teamArgs<ExtArgs>;
}, ExtArgs["result"]["participant"]>;
export type ParticipantSelectScalar = {
    id?: boolean;
    tournamentId?: boolean;
    userId?: boolean;
    teamId?: boolean;
    seed?: boolean;
    status?: boolean;
    checkInStatus?: boolean;
    points?: boolean;
    wins?: boolean;
    losses?: boolean;
    draws?: boolean;
    tiebreakerScore?: boolean;
    buchholzScore?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ParticipantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tournamentId" | "userId" | "teamId" | "seed" | "status" | "checkInStatus" | "points" | "wins" | "losses" | "draws" | "tiebreakerScore" | "buchholzScore" | "createdAt" | "updatedAt", ExtArgs["result"]["participant"]>;
export type ParticipantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Participant$userArgs<ExtArgs>;
    team?: boolean | Prisma.Participant$teamArgs<ExtArgs>;
    rosters?: boolean | Prisma.Participant$rostersArgs<ExtArgs>;
    matchesAsP1?: boolean | Prisma.Participant$matchesAsP1Args<ExtArgs>;
    matchesAsP2?: boolean | Prisma.Participant$matchesAsP2Args<ExtArgs>;
    firstParticipantScores?: boolean | Prisma.Participant$firstParticipantScoresArgs<ExtArgs>;
    secondParticipantScores?: boolean | Prisma.Participant$secondParticipantScoresArgs<ExtArgs>;
    matchHistories?: boolean | Prisma.Participant$matchHistoriesArgs<ExtArgs>;
    opponentHistories?: boolean | Prisma.Participant$opponentHistoriesArgs<ExtArgs>;
    winnersOf?: boolean | Prisma.Participant$winnersOfArgs<ExtArgs>;
    _count?: boolean | Prisma.ParticipantCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Participant$userArgs<ExtArgs>;
    team?: boolean | Prisma.Participant$teamArgs<ExtArgs>;
};
export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Participant$userArgs<ExtArgs>;
    team?: boolean | Prisma.Participant$teamArgs<ExtArgs>;
};
export type $ParticipantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Participant";
    objects: {
        tournament: Prisma.$TournamentPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
        team: Prisma.$TeamPayload<ExtArgs> | null;
        rosters: Prisma.$TournamentRosterPayload<ExtArgs>[];
        matchesAsP1: Prisma.$MatchPayload<ExtArgs>[];
        matchesAsP2: Prisma.$MatchPayload<ExtArgs>[];
        firstParticipantScores: Prisma.$scorePayload<ExtArgs>[];
        secondParticipantScores: Prisma.$scorePayload<ExtArgs>[];
        matchHistories: Prisma.$MatchHistoryPayload<ExtArgs>[];
        opponentHistories: Prisma.$MatchHistoryPayload<ExtArgs>[];
        winnersOf: Prisma.$PrizePoolPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tournamentId: string;
        userId: string | null;
        teamId: string | null;
        seed: number;
        status: $Enums.ParticipantStatus;
        checkInStatus: $Enums.CheckInStatus;
        points: number;
        wins: number;
        losses: number;
        draws: number;
        tiebreakerScore: number;
        buchholzScore: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["participant"]>;
    composites: {};
};
export type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParticipantPayload, S>;
export type ParticipantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: ParticipantCountAggregateInputType | true;
};
export interface ParticipantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Participant'];
        meta: {
            name: 'Participant';
        };
    };
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: Prisma.SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: Prisma.SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     *
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ParticipantFindManyArgs>(args?: Prisma.SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     *
     */
    create<T extends ParticipantCreateArgs>(args: Prisma.SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: Prisma.SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     *
     */
    delete<T extends ParticipantDeleteArgs>(args: Prisma.SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ParticipantUpdateArgs>(args: Prisma.SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: Prisma.SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: Prisma.SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(args?: Prisma.Subset<T, ParticipantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParticipantCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantAggregateArgs>(args: Prisma.Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>;
    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ParticipantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParticipantGroupByArgs['orderBy'];
    } : {
        orderBy?: ParticipantGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Participant model
     */
    readonly fields: ParticipantFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Participant.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tournament<T extends Prisma.TournamentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TournamentDefaultArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.Participant$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Participant$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    team<T extends Prisma.Participant$teamArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Participant$teamArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    rosters<T extends Prisma.Participant$rostersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Participant$rostersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    matchesAsP1<T extends Prisma.Participant$matchesAsP1Args<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Participant$matchesAsP1Args<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    matchesAsP2<T extends Prisma.Participant$matchesAsP2Args<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Participant$matchesAsP2Args<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    firstParticipantScores<T extends Prisma.Participant$firstParticipantScoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Participant$firstParticipantScoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    secondParticipantScores<T extends Prisma.Participant$secondParticipantScoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Participant$secondParticipantScoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    matchHistories<T extends Prisma.Participant$matchHistoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Participant$matchHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    opponentHistories<T extends Prisma.Participant$opponentHistoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Participant$opponentHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    winnersOf<T extends Prisma.Participant$winnersOfArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Participant$winnersOfArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrizePoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Participant model
 */
export interface ParticipantFieldRefs {
    readonly id: Prisma.FieldRef<"Participant", 'String'>;
    readonly tournamentId: Prisma.FieldRef<"Participant", 'String'>;
    readonly userId: Prisma.FieldRef<"Participant", 'String'>;
    readonly teamId: Prisma.FieldRef<"Participant", 'String'>;
    readonly seed: Prisma.FieldRef<"Participant", 'Int'>;
    readonly status: Prisma.FieldRef<"Participant", 'ParticipantStatus'>;
    readonly checkInStatus: Prisma.FieldRef<"Participant", 'CheckInStatus'>;
    readonly points: Prisma.FieldRef<"Participant", 'Float'>;
    readonly wins: Prisma.FieldRef<"Participant", 'Int'>;
    readonly losses: Prisma.FieldRef<"Participant", 'Int'>;
    readonly draws: Prisma.FieldRef<"Participant", 'Int'>;
    readonly tiebreakerScore: Prisma.FieldRef<"Participant", 'Float'>;
    readonly buchholzScore: Prisma.FieldRef<"Participant", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Participant", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Participant", 'DateTime'>;
}
/**
 * Participant findUnique
 */
export type ParticipantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Participant
     */
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    /**
     * Filter, which Participant to fetch.
     */
    where: Prisma.ParticipantWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Participant findUniqueOrThrow
 */
export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Participant
     */
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    /**
     * Filter, which Participant to fetch.
     */
    where: Prisma.ParticipantWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Participant findFirst
 */
export type ParticipantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Participant
     */
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    /**
     * Filter, which Participant to fetch.
     */
    where?: Prisma.ParticipantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Participants to fetch.
     */
    orderBy?: Prisma.ParticipantOrderByWithRelationInput | Prisma.ParticipantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Participants.
     */
    cursor?: Prisma.ParticipantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Participants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Participants.
     */
    distinct?: Prisma.ParticipantScalarFieldEnum | Prisma.ParticipantScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Participant findFirstOrThrow
 */
export type ParticipantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Participant
     */
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    /**
     * Filter, which Participant to fetch.
     */
    where?: Prisma.ParticipantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Participants to fetch.
     */
    orderBy?: Prisma.ParticipantOrderByWithRelationInput | Prisma.ParticipantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Participants.
     */
    cursor?: Prisma.ParticipantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Participants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Participants.
     */
    distinct?: Prisma.ParticipantScalarFieldEnum | Prisma.ParticipantScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Participant findMany
 */
export type ParticipantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Participant
     */
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    /**
     * Filter, which Participants to fetch.
     */
    where?: Prisma.ParticipantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Participants to fetch.
     */
    orderBy?: Prisma.ParticipantOrderByWithRelationInput | Prisma.ParticipantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Participants.
     */
    cursor?: Prisma.ParticipantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Participants.
     */
    skip?: number;
    distinct?: Prisma.ParticipantScalarFieldEnum | Prisma.ParticipantScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Participant create
 */
export type ParticipantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Participant
     */
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    /**
     * The data needed to create a Participant.
     */
    data: Prisma.XOR<Prisma.ParticipantCreateInput, Prisma.ParticipantUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Participant createMany
 */
export type ParticipantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: Prisma.ParticipantCreateManyInput | Prisma.ParticipantCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Participant createManyAndReturn
 */
export type ParticipantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: Prisma.ParticipantSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Participant
     */
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    /**
     * The data used to create many Participants.
     */
    data: Prisma.ParticipantCreateManyInput | Prisma.ParticipantCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Participant update
 */
export type ParticipantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Participant
     */
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    /**
     * The data needed to update a Participant.
     */
    data: Prisma.XOR<Prisma.ParticipantUpdateInput, Prisma.ParticipantUncheckedUpdateInput>;
    /**
     * Choose, which Participant to update.
     */
    where: Prisma.ParticipantWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Participant updateMany
 */
export type ParticipantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: Prisma.XOR<Prisma.ParticipantUpdateManyMutationInput, Prisma.ParticipantUncheckedUpdateManyInput>;
    /**
     * Filter which Participants to update
     */
    where?: Prisma.ParticipantWhereInput;
    /**
     * Limit how many Participants to update.
     */
    limit?: number;
};
/**
 * Participant updateManyAndReturn
 */
export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: Prisma.ParticipantSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Participant
     */
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    /**
     * The data used to update Participants.
     */
    data: Prisma.XOR<Prisma.ParticipantUpdateManyMutationInput, Prisma.ParticipantUncheckedUpdateManyInput>;
    /**
     * Filter which Participants to update
     */
    where?: Prisma.ParticipantWhereInput;
    /**
     * Limit how many Participants to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Participant upsert
 */
export type ParticipantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Participant
     */
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: Prisma.ParticipantWhereUniqueInput;
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: Prisma.XOR<Prisma.ParticipantCreateInput, Prisma.ParticipantUncheckedCreateInput>;
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ParticipantUpdateInput, Prisma.ParticipantUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Participant delete
 */
export type ParticipantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Participant
     */
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
    /**
     * Filter which Participant to delete.
     */
    where: Prisma.ParticipantWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Participant deleteMany
 */
export type ParticipantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: Prisma.ParticipantWhereInput;
    /**
     * Limit how many Participants to delete.
     */
    limit?: number;
};
/**
 * Participant.user
 */
export type Participant$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * Participant.team
 */
export type Participant$teamArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: Prisma.TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: Prisma.TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamInclude<ExtArgs> | null;
    where?: Prisma.TeamWhereInput;
};
/**
 * Participant.rosters
 */
export type Participant$rostersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRoster
     */
    select?: Prisma.TournamentRosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRoster
     */
    omit?: Prisma.TournamentRosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterInclude<ExtArgs> | null;
    where?: Prisma.TournamentRosterWhereInput;
    orderBy?: Prisma.TournamentRosterOrderByWithRelationInput | Prisma.TournamentRosterOrderByWithRelationInput[];
    cursor?: Prisma.TournamentRosterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TournamentRosterScalarFieldEnum | Prisma.TournamentRosterScalarFieldEnum[];
};
/**
 * Participant.matchesAsP1
 */
export type Participant$matchesAsP1Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: Prisma.MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchScalarFieldEnum | Prisma.MatchScalarFieldEnum[];
};
/**
 * Participant.matchesAsP2
 */
export type Participant$matchesAsP2Args<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: Prisma.MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchScalarFieldEnum | Prisma.MatchScalarFieldEnum[];
};
/**
 * Participant.firstParticipantScores
 */
export type Participant$firstParticipantScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the score
     */
    select?: Prisma.scoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the score
     */
    omit?: Prisma.scoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.scoreInclude<ExtArgs> | null;
    where?: Prisma.scoreWhereInput;
    orderBy?: Prisma.scoreOrderByWithRelationInput | Prisma.scoreOrderByWithRelationInput[];
    cursor?: Prisma.scoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScoreScalarFieldEnum | Prisma.ScoreScalarFieldEnum[];
};
/**
 * Participant.secondParticipantScores
 */
export type Participant$secondParticipantScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the score
     */
    select?: Prisma.scoreSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the score
     */
    omit?: Prisma.scoreOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.scoreInclude<ExtArgs> | null;
    where?: Prisma.scoreWhereInput;
    orderBy?: Prisma.scoreOrderByWithRelationInput | Prisma.scoreOrderByWithRelationInput[];
    cursor?: Prisma.scoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScoreScalarFieldEnum | Prisma.ScoreScalarFieldEnum[];
};
/**
 * Participant.matchHistories
 */
export type Participant$matchHistoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: Prisma.MatchHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: Prisma.MatchHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatchHistoryInclude<ExtArgs> | null;
    where?: Prisma.MatchHistoryWhereInput;
    orderBy?: Prisma.MatchHistoryOrderByWithRelationInput | Prisma.MatchHistoryOrderByWithRelationInput[];
    cursor?: Prisma.MatchHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchHistoryScalarFieldEnum | Prisma.MatchHistoryScalarFieldEnum[];
};
/**
 * Participant.opponentHistories
 */
export type Participant$opponentHistoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: Prisma.MatchHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: Prisma.MatchHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatchHistoryInclude<ExtArgs> | null;
    where?: Prisma.MatchHistoryWhereInput;
    orderBy?: Prisma.MatchHistoryOrderByWithRelationInput | Prisma.MatchHistoryOrderByWithRelationInput[];
    cursor?: Prisma.MatchHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchHistoryScalarFieldEnum | Prisma.MatchHistoryScalarFieldEnum[];
};
/**
 * Participant.winnersOf
 */
export type Participant$winnersOfArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizePool
     */
    select?: Prisma.PrizePoolSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizePool
     */
    omit?: Prisma.PrizePoolOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizePoolInclude<ExtArgs> | null;
    where?: Prisma.PrizePoolWhereInput;
    orderBy?: Prisma.PrizePoolOrderByWithRelationInput | Prisma.PrizePoolOrderByWithRelationInput[];
    cursor?: Prisma.PrizePoolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrizePoolScalarFieldEnum | Prisma.PrizePoolScalarFieldEnum[];
};
/**
 * Participant without action
 */
export type ParticipantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: Prisma.ParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Participant
     */
    omit?: Prisma.ParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ParticipantInclude<ExtArgs> | null;
};
export {};
