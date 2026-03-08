import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model MatchHistory
 *
 */
export type MatchHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$MatchHistoryPayload>;
export type AggregateMatchHistory = {
    _count: MatchHistoryCountAggregateOutputType | null;
    _avg: MatchHistoryAvgAggregateOutputType | null;
    _sum: MatchHistorySumAggregateOutputType | null;
    _min: MatchHistoryMinAggregateOutputType | null;
    _max: MatchHistoryMaxAggregateOutputType | null;
};
export type MatchHistoryAvgAggregateOutputType = {
    participantScore: number | null;
    opponentScore: number | null;
};
export type MatchHistorySumAggregateOutputType = {
    participantScore: number | null;
    opponentScore: number | null;
};
export type MatchHistoryMinAggregateOutputType = {
    id: string | null;
    participantId: string | null;
    opponentId: string | null;
    tournamentId: string | null;
    roundId: string | null;
    matchId: string | null;
    participantScore: number | null;
    opponentScore: number | null;
    result: $Enums.MatchResult | null;
    createdAt: Date | null;
};
export type MatchHistoryMaxAggregateOutputType = {
    id: string | null;
    participantId: string | null;
    opponentId: string | null;
    tournamentId: string | null;
    roundId: string | null;
    matchId: string | null;
    participantScore: number | null;
    opponentScore: number | null;
    result: $Enums.MatchResult | null;
    createdAt: Date | null;
};
export type MatchHistoryCountAggregateOutputType = {
    id: number;
    participantId: number;
    opponentId: number;
    tournamentId: number;
    roundId: number;
    matchId: number;
    participantScore: number;
    opponentScore: number;
    result: number;
    createdAt: number;
    _all: number;
};
export type MatchHistoryAvgAggregateInputType = {
    participantScore?: true;
    opponentScore?: true;
};
export type MatchHistorySumAggregateInputType = {
    participantScore?: true;
    opponentScore?: true;
};
export type MatchHistoryMinAggregateInputType = {
    id?: true;
    participantId?: true;
    opponentId?: true;
    tournamentId?: true;
    roundId?: true;
    matchId?: true;
    participantScore?: true;
    opponentScore?: true;
    result?: true;
    createdAt?: true;
};
export type MatchHistoryMaxAggregateInputType = {
    id?: true;
    participantId?: true;
    opponentId?: true;
    tournamentId?: true;
    roundId?: true;
    matchId?: true;
    participantScore?: true;
    opponentScore?: true;
    result?: true;
    createdAt?: true;
};
export type MatchHistoryCountAggregateInputType = {
    id?: true;
    participantId?: true;
    opponentId?: true;
    tournamentId?: true;
    roundId?: true;
    matchId?: true;
    participantScore?: true;
    opponentScore?: true;
    result?: true;
    createdAt?: true;
    _all?: true;
};
export type MatchHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MatchHistory to aggregate.
     */
    where?: Prisma.MatchHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MatchHistories to fetch.
     */
    orderBy?: Prisma.MatchHistoryOrderByWithRelationInput | Prisma.MatchHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MatchHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MatchHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MatchHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MatchHistories
    **/
    _count?: true | MatchHistoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MatchHistoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MatchHistorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MatchHistoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MatchHistoryMaxAggregateInputType;
};
export type GetMatchHistoryAggregateType<T extends MatchHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateMatchHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMatchHistory[P]> : Prisma.GetScalarType<T[P], AggregateMatchHistory[P]>;
};
export type MatchHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchHistoryWhereInput;
    orderBy?: Prisma.MatchHistoryOrderByWithAggregationInput | Prisma.MatchHistoryOrderByWithAggregationInput[];
    by: Prisma.MatchHistoryScalarFieldEnum[] | Prisma.MatchHistoryScalarFieldEnum;
    having?: Prisma.MatchHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatchHistoryCountAggregateInputType | true;
    _avg?: MatchHistoryAvgAggregateInputType;
    _sum?: MatchHistorySumAggregateInputType;
    _min?: MatchHistoryMinAggregateInputType;
    _max?: MatchHistoryMaxAggregateInputType;
};
export type MatchHistoryGroupByOutputType = {
    id: string;
    participantId: string;
    opponentId: string;
    tournamentId: string;
    roundId: string;
    matchId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt: Date;
    _count: MatchHistoryCountAggregateOutputType | null;
    _avg: MatchHistoryAvgAggregateOutputType | null;
    _sum: MatchHistorySumAggregateOutputType | null;
    _min: MatchHistoryMinAggregateOutputType | null;
    _max: MatchHistoryMaxAggregateOutputType | null;
};
type GetMatchHistoryGroupByPayload<T extends MatchHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MatchHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MatchHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MatchHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MatchHistoryGroupByOutputType[P]>;
}>>;
export type MatchHistoryWhereInput = {
    AND?: Prisma.MatchHistoryWhereInput | Prisma.MatchHistoryWhereInput[];
    OR?: Prisma.MatchHistoryWhereInput[];
    NOT?: Prisma.MatchHistoryWhereInput | Prisma.MatchHistoryWhereInput[];
    id?: Prisma.StringFilter<"MatchHistory"> | string;
    participantId?: Prisma.StringFilter<"MatchHistory"> | string;
    opponentId?: Prisma.StringFilter<"MatchHistory"> | string;
    tournamentId?: Prisma.StringFilter<"MatchHistory"> | string;
    roundId?: Prisma.StringFilter<"MatchHistory"> | string;
    matchId?: Prisma.StringFilter<"MatchHistory"> | string;
    participantScore?: Prisma.IntFilter<"MatchHistory"> | number;
    opponentScore?: Prisma.IntFilter<"MatchHistory"> | number;
    result?: Prisma.EnumMatchResultFilter<"MatchHistory"> | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFilter<"MatchHistory"> | Date | string;
    participant?: Prisma.XOR<Prisma.ParticipantScalarRelationFilter, Prisma.ParticipantWhereInput>;
    opponent?: Prisma.XOR<Prisma.ParticipantScalarRelationFilter, Prisma.ParticipantWhereInput>;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    round?: Prisma.XOR<Prisma.RoundScalarRelationFilter, Prisma.RoundWhereInput>;
    match?: Prisma.XOR<Prisma.MatchScalarRelationFilter, Prisma.MatchWhereInput>;
};
export type MatchHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    opponentId?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    roundId?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    participantScore?: Prisma.SortOrder;
    opponentScore?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    participant?: Prisma.ParticipantOrderByWithRelationInput;
    opponent?: Prisma.ParticipantOrderByWithRelationInput;
    tournament?: Prisma.TournamentOrderByWithRelationInput;
    round?: Prisma.RoundOrderByWithRelationInput;
    match?: Prisma.MatchOrderByWithRelationInput;
};
export type MatchHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MatchHistoryWhereInput | Prisma.MatchHistoryWhereInput[];
    OR?: Prisma.MatchHistoryWhereInput[];
    NOT?: Prisma.MatchHistoryWhereInput | Prisma.MatchHistoryWhereInput[];
    participantId?: Prisma.StringFilter<"MatchHistory"> | string;
    opponentId?: Prisma.StringFilter<"MatchHistory"> | string;
    tournamentId?: Prisma.StringFilter<"MatchHistory"> | string;
    roundId?: Prisma.StringFilter<"MatchHistory"> | string;
    matchId?: Prisma.StringFilter<"MatchHistory"> | string;
    participantScore?: Prisma.IntFilter<"MatchHistory"> | number;
    opponentScore?: Prisma.IntFilter<"MatchHistory"> | number;
    result?: Prisma.EnumMatchResultFilter<"MatchHistory"> | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFilter<"MatchHistory"> | Date | string;
    participant?: Prisma.XOR<Prisma.ParticipantScalarRelationFilter, Prisma.ParticipantWhereInput>;
    opponent?: Prisma.XOR<Prisma.ParticipantScalarRelationFilter, Prisma.ParticipantWhereInput>;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    round?: Prisma.XOR<Prisma.RoundScalarRelationFilter, Prisma.RoundWhereInput>;
    match?: Prisma.XOR<Prisma.MatchScalarRelationFilter, Prisma.MatchWhereInput>;
}, "id">;
export type MatchHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    opponentId?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    roundId?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    participantScore?: Prisma.SortOrder;
    opponentScore?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MatchHistoryCountOrderByAggregateInput;
    _avg?: Prisma.MatchHistoryAvgOrderByAggregateInput;
    _max?: Prisma.MatchHistoryMaxOrderByAggregateInput;
    _min?: Prisma.MatchHistoryMinOrderByAggregateInput;
    _sum?: Prisma.MatchHistorySumOrderByAggregateInput;
};
export type MatchHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.MatchHistoryScalarWhereWithAggregatesInput | Prisma.MatchHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.MatchHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MatchHistoryScalarWhereWithAggregatesInput | Prisma.MatchHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MatchHistory"> | string;
    participantId?: Prisma.StringWithAggregatesFilter<"MatchHistory"> | string;
    opponentId?: Prisma.StringWithAggregatesFilter<"MatchHistory"> | string;
    tournamentId?: Prisma.StringWithAggregatesFilter<"MatchHistory"> | string;
    roundId?: Prisma.StringWithAggregatesFilter<"MatchHistory"> | string;
    matchId?: Prisma.StringWithAggregatesFilter<"MatchHistory"> | string;
    participantScore?: Prisma.IntWithAggregatesFilter<"MatchHistory"> | number;
    opponentScore?: Prisma.IntWithAggregatesFilter<"MatchHistory"> | number;
    result?: Prisma.EnumMatchResultWithAggregatesFilter<"MatchHistory"> | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MatchHistory"> | Date | string;
};
export type MatchHistoryCreateInput = {
    id?: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
    participant: Prisma.ParticipantCreateNestedOneWithoutMatchHistoriesInput;
    opponent: Prisma.ParticipantCreateNestedOneWithoutOpponentHistoriesInput;
    tournament: Prisma.TournamentCreateNestedOneWithoutMatchHistoriesInput;
    round: Prisma.RoundCreateNestedOneWithoutMatchHistoriesInput;
    match: Prisma.MatchCreateNestedOneWithoutMatchHistoriesInput;
};
export type MatchHistoryUncheckedCreateInput = {
    id?: string;
    participantId: string;
    opponentId: string;
    tournamentId: string;
    roundId: string;
    matchId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
};
export type MatchHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participant?: Prisma.ParticipantUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    opponent?: Prisma.ParticipantUpdateOneRequiredWithoutOpponentHistoriesNestedInput;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    round?: Prisma.RoundUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    match?: Prisma.MatchUpdateOneRequiredWithoutMatchHistoriesNestedInput;
};
export type MatchHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    opponentId?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    roundId?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistoryCreateManyInput = {
    id?: string;
    participantId: string;
    opponentId: string;
    tournamentId: string;
    roundId: string;
    matchId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
};
export type MatchHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    opponentId?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    roundId?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistoryListRelationFilter = {
    every?: Prisma.MatchHistoryWhereInput;
    some?: Prisma.MatchHistoryWhereInput;
    none?: Prisma.MatchHistoryWhereInput;
};
export type MatchHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MatchHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    opponentId?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    roundId?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    participantScore?: Prisma.SortOrder;
    opponentScore?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MatchHistoryAvgOrderByAggregateInput = {
    participantScore?: Prisma.SortOrder;
    opponentScore?: Prisma.SortOrder;
};
export type MatchHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    opponentId?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    roundId?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    participantScore?: Prisma.SortOrder;
    opponentScore?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MatchHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    opponentId?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    roundId?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    participantScore?: Prisma.SortOrder;
    opponentScore?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MatchHistorySumOrderByAggregateInput = {
    participantScore?: Prisma.SortOrder;
    opponentScore?: Prisma.SortOrder;
};
export type MatchHistoryCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutTournamentInput, Prisma.MatchHistoryUncheckedCreateWithoutTournamentInput> | Prisma.MatchHistoryCreateWithoutTournamentInput[] | Prisma.MatchHistoryUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutTournamentInput | Prisma.MatchHistoryCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.MatchHistoryCreateManyTournamentInputEnvelope;
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
};
export type MatchHistoryUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutTournamentInput, Prisma.MatchHistoryUncheckedCreateWithoutTournamentInput> | Prisma.MatchHistoryCreateWithoutTournamentInput[] | Prisma.MatchHistoryUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutTournamentInput | Prisma.MatchHistoryCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.MatchHistoryCreateManyTournamentInputEnvelope;
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
};
export type MatchHistoryUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutTournamentInput, Prisma.MatchHistoryUncheckedCreateWithoutTournamentInput> | Prisma.MatchHistoryCreateWithoutTournamentInput[] | Prisma.MatchHistoryUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutTournamentInput | Prisma.MatchHistoryCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.MatchHistoryUpsertWithWhereUniqueWithoutTournamentInput | Prisma.MatchHistoryUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.MatchHistoryCreateManyTournamentInputEnvelope;
    set?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    disconnect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    delete?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    update?: Prisma.MatchHistoryUpdateWithWhereUniqueWithoutTournamentInput | Prisma.MatchHistoryUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.MatchHistoryUpdateManyWithWhereWithoutTournamentInput | Prisma.MatchHistoryUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.MatchHistoryScalarWhereInput | Prisma.MatchHistoryScalarWhereInput[];
};
export type MatchHistoryUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutTournamentInput, Prisma.MatchHistoryUncheckedCreateWithoutTournamentInput> | Prisma.MatchHistoryCreateWithoutTournamentInput[] | Prisma.MatchHistoryUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutTournamentInput | Prisma.MatchHistoryCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.MatchHistoryUpsertWithWhereUniqueWithoutTournamentInput | Prisma.MatchHistoryUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.MatchHistoryCreateManyTournamentInputEnvelope;
    set?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    disconnect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    delete?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    update?: Prisma.MatchHistoryUpdateWithWhereUniqueWithoutTournamentInput | Prisma.MatchHistoryUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.MatchHistoryUpdateManyWithWhereWithoutTournamentInput | Prisma.MatchHistoryUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.MatchHistoryScalarWhereInput | Prisma.MatchHistoryScalarWhereInput[];
};
export type MatchHistoryCreateNestedManyWithoutParticipantInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutParticipantInput, Prisma.MatchHistoryUncheckedCreateWithoutParticipantInput> | Prisma.MatchHistoryCreateWithoutParticipantInput[] | Prisma.MatchHistoryUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutParticipantInput | Prisma.MatchHistoryCreateOrConnectWithoutParticipantInput[];
    createMany?: Prisma.MatchHistoryCreateManyParticipantInputEnvelope;
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
};
export type MatchHistoryCreateNestedManyWithoutOpponentInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutOpponentInput, Prisma.MatchHistoryUncheckedCreateWithoutOpponentInput> | Prisma.MatchHistoryCreateWithoutOpponentInput[] | Prisma.MatchHistoryUncheckedCreateWithoutOpponentInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutOpponentInput | Prisma.MatchHistoryCreateOrConnectWithoutOpponentInput[];
    createMany?: Prisma.MatchHistoryCreateManyOpponentInputEnvelope;
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
};
export type MatchHistoryUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutParticipantInput, Prisma.MatchHistoryUncheckedCreateWithoutParticipantInput> | Prisma.MatchHistoryCreateWithoutParticipantInput[] | Prisma.MatchHistoryUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutParticipantInput | Prisma.MatchHistoryCreateOrConnectWithoutParticipantInput[];
    createMany?: Prisma.MatchHistoryCreateManyParticipantInputEnvelope;
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
};
export type MatchHistoryUncheckedCreateNestedManyWithoutOpponentInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutOpponentInput, Prisma.MatchHistoryUncheckedCreateWithoutOpponentInput> | Prisma.MatchHistoryCreateWithoutOpponentInput[] | Prisma.MatchHistoryUncheckedCreateWithoutOpponentInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutOpponentInput | Prisma.MatchHistoryCreateOrConnectWithoutOpponentInput[];
    createMany?: Prisma.MatchHistoryCreateManyOpponentInputEnvelope;
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
};
export type MatchHistoryUpdateManyWithoutParticipantNestedInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutParticipantInput, Prisma.MatchHistoryUncheckedCreateWithoutParticipantInput> | Prisma.MatchHistoryCreateWithoutParticipantInput[] | Prisma.MatchHistoryUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutParticipantInput | Prisma.MatchHistoryCreateOrConnectWithoutParticipantInput[];
    upsert?: Prisma.MatchHistoryUpsertWithWhereUniqueWithoutParticipantInput | Prisma.MatchHistoryUpsertWithWhereUniqueWithoutParticipantInput[];
    createMany?: Prisma.MatchHistoryCreateManyParticipantInputEnvelope;
    set?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    disconnect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    delete?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    update?: Prisma.MatchHistoryUpdateWithWhereUniqueWithoutParticipantInput | Prisma.MatchHistoryUpdateWithWhereUniqueWithoutParticipantInput[];
    updateMany?: Prisma.MatchHistoryUpdateManyWithWhereWithoutParticipantInput | Prisma.MatchHistoryUpdateManyWithWhereWithoutParticipantInput[];
    deleteMany?: Prisma.MatchHistoryScalarWhereInput | Prisma.MatchHistoryScalarWhereInput[];
};
export type MatchHistoryUpdateManyWithoutOpponentNestedInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutOpponentInput, Prisma.MatchHistoryUncheckedCreateWithoutOpponentInput> | Prisma.MatchHistoryCreateWithoutOpponentInput[] | Prisma.MatchHistoryUncheckedCreateWithoutOpponentInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutOpponentInput | Prisma.MatchHistoryCreateOrConnectWithoutOpponentInput[];
    upsert?: Prisma.MatchHistoryUpsertWithWhereUniqueWithoutOpponentInput | Prisma.MatchHistoryUpsertWithWhereUniqueWithoutOpponentInput[];
    createMany?: Prisma.MatchHistoryCreateManyOpponentInputEnvelope;
    set?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    disconnect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    delete?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    update?: Prisma.MatchHistoryUpdateWithWhereUniqueWithoutOpponentInput | Prisma.MatchHistoryUpdateWithWhereUniqueWithoutOpponentInput[];
    updateMany?: Prisma.MatchHistoryUpdateManyWithWhereWithoutOpponentInput | Prisma.MatchHistoryUpdateManyWithWhereWithoutOpponentInput[];
    deleteMany?: Prisma.MatchHistoryScalarWhereInput | Prisma.MatchHistoryScalarWhereInput[];
};
export type MatchHistoryUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutParticipantInput, Prisma.MatchHistoryUncheckedCreateWithoutParticipantInput> | Prisma.MatchHistoryCreateWithoutParticipantInput[] | Prisma.MatchHistoryUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutParticipantInput | Prisma.MatchHistoryCreateOrConnectWithoutParticipantInput[];
    upsert?: Prisma.MatchHistoryUpsertWithWhereUniqueWithoutParticipantInput | Prisma.MatchHistoryUpsertWithWhereUniqueWithoutParticipantInput[];
    createMany?: Prisma.MatchHistoryCreateManyParticipantInputEnvelope;
    set?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    disconnect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    delete?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    update?: Prisma.MatchHistoryUpdateWithWhereUniqueWithoutParticipantInput | Prisma.MatchHistoryUpdateWithWhereUniqueWithoutParticipantInput[];
    updateMany?: Prisma.MatchHistoryUpdateManyWithWhereWithoutParticipantInput | Prisma.MatchHistoryUpdateManyWithWhereWithoutParticipantInput[];
    deleteMany?: Prisma.MatchHistoryScalarWhereInput | Prisma.MatchHistoryScalarWhereInput[];
};
export type MatchHistoryUncheckedUpdateManyWithoutOpponentNestedInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutOpponentInput, Prisma.MatchHistoryUncheckedCreateWithoutOpponentInput> | Prisma.MatchHistoryCreateWithoutOpponentInput[] | Prisma.MatchHistoryUncheckedCreateWithoutOpponentInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutOpponentInput | Prisma.MatchHistoryCreateOrConnectWithoutOpponentInput[];
    upsert?: Prisma.MatchHistoryUpsertWithWhereUniqueWithoutOpponentInput | Prisma.MatchHistoryUpsertWithWhereUniqueWithoutOpponentInput[];
    createMany?: Prisma.MatchHistoryCreateManyOpponentInputEnvelope;
    set?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    disconnect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    delete?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    update?: Prisma.MatchHistoryUpdateWithWhereUniqueWithoutOpponentInput | Prisma.MatchHistoryUpdateWithWhereUniqueWithoutOpponentInput[];
    updateMany?: Prisma.MatchHistoryUpdateManyWithWhereWithoutOpponentInput | Prisma.MatchHistoryUpdateManyWithWhereWithoutOpponentInput[];
    deleteMany?: Prisma.MatchHistoryScalarWhereInput | Prisma.MatchHistoryScalarWhereInput[];
};
export type MatchHistoryCreateNestedManyWithoutRoundInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutRoundInput, Prisma.MatchHistoryUncheckedCreateWithoutRoundInput> | Prisma.MatchHistoryCreateWithoutRoundInput[] | Prisma.MatchHistoryUncheckedCreateWithoutRoundInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutRoundInput | Prisma.MatchHistoryCreateOrConnectWithoutRoundInput[];
    createMany?: Prisma.MatchHistoryCreateManyRoundInputEnvelope;
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
};
export type MatchHistoryUncheckedCreateNestedManyWithoutRoundInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutRoundInput, Prisma.MatchHistoryUncheckedCreateWithoutRoundInput> | Prisma.MatchHistoryCreateWithoutRoundInput[] | Prisma.MatchHistoryUncheckedCreateWithoutRoundInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutRoundInput | Prisma.MatchHistoryCreateOrConnectWithoutRoundInput[];
    createMany?: Prisma.MatchHistoryCreateManyRoundInputEnvelope;
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
};
export type MatchHistoryUpdateManyWithoutRoundNestedInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutRoundInput, Prisma.MatchHistoryUncheckedCreateWithoutRoundInput> | Prisma.MatchHistoryCreateWithoutRoundInput[] | Prisma.MatchHistoryUncheckedCreateWithoutRoundInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutRoundInput | Prisma.MatchHistoryCreateOrConnectWithoutRoundInput[];
    upsert?: Prisma.MatchHistoryUpsertWithWhereUniqueWithoutRoundInput | Prisma.MatchHistoryUpsertWithWhereUniqueWithoutRoundInput[];
    createMany?: Prisma.MatchHistoryCreateManyRoundInputEnvelope;
    set?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    disconnect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    delete?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    update?: Prisma.MatchHistoryUpdateWithWhereUniqueWithoutRoundInput | Prisma.MatchHistoryUpdateWithWhereUniqueWithoutRoundInput[];
    updateMany?: Prisma.MatchHistoryUpdateManyWithWhereWithoutRoundInput | Prisma.MatchHistoryUpdateManyWithWhereWithoutRoundInput[];
    deleteMany?: Prisma.MatchHistoryScalarWhereInput | Prisma.MatchHistoryScalarWhereInput[];
};
export type MatchHistoryUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutRoundInput, Prisma.MatchHistoryUncheckedCreateWithoutRoundInput> | Prisma.MatchHistoryCreateWithoutRoundInput[] | Prisma.MatchHistoryUncheckedCreateWithoutRoundInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutRoundInput | Prisma.MatchHistoryCreateOrConnectWithoutRoundInput[];
    upsert?: Prisma.MatchHistoryUpsertWithWhereUniqueWithoutRoundInput | Prisma.MatchHistoryUpsertWithWhereUniqueWithoutRoundInput[];
    createMany?: Prisma.MatchHistoryCreateManyRoundInputEnvelope;
    set?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    disconnect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    delete?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    update?: Prisma.MatchHistoryUpdateWithWhereUniqueWithoutRoundInput | Prisma.MatchHistoryUpdateWithWhereUniqueWithoutRoundInput[];
    updateMany?: Prisma.MatchHistoryUpdateManyWithWhereWithoutRoundInput | Prisma.MatchHistoryUpdateManyWithWhereWithoutRoundInput[];
    deleteMany?: Prisma.MatchHistoryScalarWhereInput | Prisma.MatchHistoryScalarWhereInput[];
};
export type MatchHistoryCreateNestedManyWithoutMatchInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutMatchInput, Prisma.MatchHistoryUncheckedCreateWithoutMatchInput> | Prisma.MatchHistoryCreateWithoutMatchInput[] | Prisma.MatchHistoryUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutMatchInput | Prisma.MatchHistoryCreateOrConnectWithoutMatchInput[];
    createMany?: Prisma.MatchHistoryCreateManyMatchInputEnvelope;
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
};
export type MatchHistoryUncheckedCreateNestedManyWithoutMatchInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutMatchInput, Prisma.MatchHistoryUncheckedCreateWithoutMatchInput> | Prisma.MatchHistoryCreateWithoutMatchInput[] | Prisma.MatchHistoryUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutMatchInput | Prisma.MatchHistoryCreateOrConnectWithoutMatchInput[];
    createMany?: Prisma.MatchHistoryCreateManyMatchInputEnvelope;
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
};
export type MatchHistoryUpdateManyWithoutMatchNestedInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutMatchInput, Prisma.MatchHistoryUncheckedCreateWithoutMatchInput> | Prisma.MatchHistoryCreateWithoutMatchInput[] | Prisma.MatchHistoryUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutMatchInput | Prisma.MatchHistoryCreateOrConnectWithoutMatchInput[];
    upsert?: Prisma.MatchHistoryUpsertWithWhereUniqueWithoutMatchInput | Prisma.MatchHistoryUpsertWithWhereUniqueWithoutMatchInput[];
    createMany?: Prisma.MatchHistoryCreateManyMatchInputEnvelope;
    set?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    disconnect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    delete?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    update?: Prisma.MatchHistoryUpdateWithWhereUniqueWithoutMatchInput | Prisma.MatchHistoryUpdateWithWhereUniqueWithoutMatchInput[];
    updateMany?: Prisma.MatchHistoryUpdateManyWithWhereWithoutMatchInput | Prisma.MatchHistoryUpdateManyWithWhereWithoutMatchInput[];
    deleteMany?: Prisma.MatchHistoryScalarWhereInput | Prisma.MatchHistoryScalarWhereInput[];
};
export type MatchHistoryUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: Prisma.XOR<Prisma.MatchHistoryCreateWithoutMatchInput, Prisma.MatchHistoryUncheckedCreateWithoutMatchInput> | Prisma.MatchHistoryCreateWithoutMatchInput[] | Prisma.MatchHistoryUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.MatchHistoryCreateOrConnectWithoutMatchInput | Prisma.MatchHistoryCreateOrConnectWithoutMatchInput[];
    upsert?: Prisma.MatchHistoryUpsertWithWhereUniqueWithoutMatchInput | Prisma.MatchHistoryUpsertWithWhereUniqueWithoutMatchInput[];
    createMany?: Prisma.MatchHistoryCreateManyMatchInputEnvelope;
    set?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    disconnect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    delete?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    connect?: Prisma.MatchHistoryWhereUniqueInput | Prisma.MatchHistoryWhereUniqueInput[];
    update?: Prisma.MatchHistoryUpdateWithWhereUniqueWithoutMatchInput | Prisma.MatchHistoryUpdateWithWhereUniqueWithoutMatchInput[];
    updateMany?: Prisma.MatchHistoryUpdateManyWithWhereWithoutMatchInput | Prisma.MatchHistoryUpdateManyWithWhereWithoutMatchInput[];
    deleteMany?: Prisma.MatchHistoryScalarWhereInput | Prisma.MatchHistoryScalarWhereInput[];
};
export type EnumMatchResultFieldUpdateOperationsInput = {
    set?: $Enums.MatchResult;
};
export type MatchHistoryCreateWithoutTournamentInput = {
    id?: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
    participant: Prisma.ParticipantCreateNestedOneWithoutMatchHistoriesInput;
    opponent: Prisma.ParticipantCreateNestedOneWithoutOpponentHistoriesInput;
    round: Prisma.RoundCreateNestedOneWithoutMatchHistoriesInput;
    match: Prisma.MatchCreateNestedOneWithoutMatchHistoriesInput;
};
export type MatchHistoryUncheckedCreateWithoutTournamentInput = {
    id?: string;
    participantId: string;
    opponentId: string;
    roundId: string;
    matchId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
};
export type MatchHistoryCreateOrConnectWithoutTournamentInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchHistoryCreateWithoutTournamentInput, Prisma.MatchHistoryUncheckedCreateWithoutTournamentInput>;
};
export type MatchHistoryCreateManyTournamentInputEnvelope = {
    data: Prisma.MatchHistoryCreateManyTournamentInput | Prisma.MatchHistoryCreateManyTournamentInput[];
    skipDuplicates?: boolean;
};
export type MatchHistoryUpsertWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchHistoryUpdateWithoutTournamentInput, Prisma.MatchHistoryUncheckedUpdateWithoutTournamentInput>;
    create: Prisma.XOR<Prisma.MatchHistoryCreateWithoutTournamentInput, Prisma.MatchHistoryUncheckedCreateWithoutTournamentInput>;
};
export type MatchHistoryUpdateWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchHistoryUpdateWithoutTournamentInput, Prisma.MatchHistoryUncheckedUpdateWithoutTournamentInput>;
};
export type MatchHistoryUpdateManyWithWhereWithoutTournamentInput = {
    where: Prisma.MatchHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchHistoryUpdateManyMutationInput, Prisma.MatchHistoryUncheckedUpdateManyWithoutTournamentInput>;
};
export type MatchHistoryScalarWhereInput = {
    AND?: Prisma.MatchHistoryScalarWhereInput | Prisma.MatchHistoryScalarWhereInput[];
    OR?: Prisma.MatchHistoryScalarWhereInput[];
    NOT?: Prisma.MatchHistoryScalarWhereInput | Prisma.MatchHistoryScalarWhereInput[];
    id?: Prisma.StringFilter<"MatchHistory"> | string;
    participantId?: Prisma.StringFilter<"MatchHistory"> | string;
    opponentId?: Prisma.StringFilter<"MatchHistory"> | string;
    tournamentId?: Prisma.StringFilter<"MatchHistory"> | string;
    roundId?: Prisma.StringFilter<"MatchHistory"> | string;
    matchId?: Prisma.StringFilter<"MatchHistory"> | string;
    participantScore?: Prisma.IntFilter<"MatchHistory"> | number;
    opponentScore?: Prisma.IntFilter<"MatchHistory"> | number;
    result?: Prisma.EnumMatchResultFilter<"MatchHistory"> | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFilter<"MatchHistory"> | Date | string;
};
export type MatchHistoryCreateWithoutParticipantInput = {
    id?: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
    opponent: Prisma.ParticipantCreateNestedOneWithoutOpponentHistoriesInput;
    tournament: Prisma.TournamentCreateNestedOneWithoutMatchHistoriesInput;
    round: Prisma.RoundCreateNestedOneWithoutMatchHistoriesInput;
    match: Prisma.MatchCreateNestedOneWithoutMatchHistoriesInput;
};
export type MatchHistoryUncheckedCreateWithoutParticipantInput = {
    id?: string;
    opponentId: string;
    tournamentId: string;
    roundId: string;
    matchId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
};
export type MatchHistoryCreateOrConnectWithoutParticipantInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchHistoryCreateWithoutParticipantInput, Prisma.MatchHistoryUncheckedCreateWithoutParticipantInput>;
};
export type MatchHistoryCreateManyParticipantInputEnvelope = {
    data: Prisma.MatchHistoryCreateManyParticipantInput | Prisma.MatchHistoryCreateManyParticipantInput[];
    skipDuplicates?: boolean;
};
export type MatchHistoryCreateWithoutOpponentInput = {
    id?: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
    participant: Prisma.ParticipantCreateNestedOneWithoutMatchHistoriesInput;
    tournament: Prisma.TournamentCreateNestedOneWithoutMatchHistoriesInput;
    round: Prisma.RoundCreateNestedOneWithoutMatchHistoriesInput;
    match: Prisma.MatchCreateNestedOneWithoutMatchHistoriesInput;
};
export type MatchHistoryUncheckedCreateWithoutOpponentInput = {
    id?: string;
    participantId: string;
    tournamentId: string;
    roundId: string;
    matchId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
};
export type MatchHistoryCreateOrConnectWithoutOpponentInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchHistoryCreateWithoutOpponentInput, Prisma.MatchHistoryUncheckedCreateWithoutOpponentInput>;
};
export type MatchHistoryCreateManyOpponentInputEnvelope = {
    data: Prisma.MatchHistoryCreateManyOpponentInput | Prisma.MatchHistoryCreateManyOpponentInput[];
    skipDuplicates?: boolean;
};
export type MatchHistoryUpsertWithWhereUniqueWithoutParticipantInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchHistoryUpdateWithoutParticipantInput, Prisma.MatchHistoryUncheckedUpdateWithoutParticipantInput>;
    create: Prisma.XOR<Prisma.MatchHistoryCreateWithoutParticipantInput, Prisma.MatchHistoryUncheckedCreateWithoutParticipantInput>;
};
export type MatchHistoryUpdateWithWhereUniqueWithoutParticipantInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchHistoryUpdateWithoutParticipantInput, Prisma.MatchHistoryUncheckedUpdateWithoutParticipantInput>;
};
export type MatchHistoryUpdateManyWithWhereWithoutParticipantInput = {
    where: Prisma.MatchHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchHistoryUpdateManyMutationInput, Prisma.MatchHistoryUncheckedUpdateManyWithoutParticipantInput>;
};
export type MatchHistoryUpsertWithWhereUniqueWithoutOpponentInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchHistoryUpdateWithoutOpponentInput, Prisma.MatchHistoryUncheckedUpdateWithoutOpponentInput>;
    create: Prisma.XOR<Prisma.MatchHistoryCreateWithoutOpponentInput, Prisma.MatchHistoryUncheckedCreateWithoutOpponentInput>;
};
export type MatchHistoryUpdateWithWhereUniqueWithoutOpponentInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchHistoryUpdateWithoutOpponentInput, Prisma.MatchHistoryUncheckedUpdateWithoutOpponentInput>;
};
export type MatchHistoryUpdateManyWithWhereWithoutOpponentInput = {
    where: Prisma.MatchHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchHistoryUpdateManyMutationInput, Prisma.MatchHistoryUncheckedUpdateManyWithoutOpponentInput>;
};
export type MatchHistoryCreateWithoutRoundInput = {
    id?: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
    participant: Prisma.ParticipantCreateNestedOneWithoutMatchHistoriesInput;
    opponent: Prisma.ParticipantCreateNestedOneWithoutOpponentHistoriesInput;
    tournament: Prisma.TournamentCreateNestedOneWithoutMatchHistoriesInput;
    match: Prisma.MatchCreateNestedOneWithoutMatchHistoriesInput;
};
export type MatchHistoryUncheckedCreateWithoutRoundInput = {
    id?: string;
    participantId: string;
    opponentId: string;
    tournamentId: string;
    matchId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
};
export type MatchHistoryCreateOrConnectWithoutRoundInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchHistoryCreateWithoutRoundInput, Prisma.MatchHistoryUncheckedCreateWithoutRoundInput>;
};
export type MatchHistoryCreateManyRoundInputEnvelope = {
    data: Prisma.MatchHistoryCreateManyRoundInput | Prisma.MatchHistoryCreateManyRoundInput[];
    skipDuplicates?: boolean;
};
export type MatchHistoryUpsertWithWhereUniqueWithoutRoundInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchHistoryUpdateWithoutRoundInput, Prisma.MatchHistoryUncheckedUpdateWithoutRoundInput>;
    create: Prisma.XOR<Prisma.MatchHistoryCreateWithoutRoundInput, Prisma.MatchHistoryUncheckedCreateWithoutRoundInput>;
};
export type MatchHistoryUpdateWithWhereUniqueWithoutRoundInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchHistoryUpdateWithoutRoundInput, Prisma.MatchHistoryUncheckedUpdateWithoutRoundInput>;
};
export type MatchHistoryUpdateManyWithWhereWithoutRoundInput = {
    where: Prisma.MatchHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchHistoryUpdateManyMutationInput, Prisma.MatchHistoryUncheckedUpdateManyWithoutRoundInput>;
};
export type MatchHistoryCreateWithoutMatchInput = {
    id?: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
    participant: Prisma.ParticipantCreateNestedOneWithoutMatchHistoriesInput;
    opponent: Prisma.ParticipantCreateNestedOneWithoutOpponentHistoriesInput;
    tournament: Prisma.TournamentCreateNestedOneWithoutMatchHistoriesInput;
    round: Prisma.RoundCreateNestedOneWithoutMatchHistoriesInput;
};
export type MatchHistoryUncheckedCreateWithoutMatchInput = {
    id?: string;
    participantId: string;
    opponentId: string;
    tournamentId: string;
    roundId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
};
export type MatchHistoryCreateOrConnectWithoutMatchInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchHistoryCreateWithoutMatchInput, Prisma.MatchHistoryUncheckedCreateWithoutMatchInput>;
};
export type MatchHistoryCreateManyMatchInputEnvelope = {
    data: Prisma.MatchHistoryCreateManyMatchInput | Prisma.MatchHistoryCreateManyMatchInput[];
    skipDuplicates?: boolean;
};
export type MatchHistoryUpsertWithWhereUniqueWithoutMatchInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchHistoryUpdateWithoutMatchInput, Prisma.MatchHistoryUncheckedUpdateWithoutMatchInput>;
    create: Prisma.XOR<Prisma.MatchHistoryCreateWithoutMatchInput, Prisma.MatchHistoryUncheckedCreateWithoutMatchInput>;
};
export type MatchHistoryUpdateWithWhereUniqueWithoutMatchInput = {
    where: Prisma.MatchHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchHistoryUpdateWithoutMatchInput, Prisma.MatchHistoryUncheckedUpdateWithoutMatchInput>;
};
export type MatchHistoryUpdateManyWithWhereWithoutMatchInput = {
    where: Prisma.MatchHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchHistoryUpdateManyMutationInput, Prisma.MatchHistoryUncheckedUpdateManyWithoutMatchInput>;
};
export type MatchHistoryCreateManyTournamentInput = {
    id?: string;
    participantId: string;
    opponentId: string;
    roundId: string;
    matchId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
};
export type MatchHistoryUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participant?: Prisma.ParticipantUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    opponent?: Prisma.ParticipantUpdateOneRequiredWithoutOpponentHistoriesNestedInput;
    round?: Prisma.RoundUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    match?: Prisma.MatchUpdateOneRequiredWithoutMatchHistoriesNestedInput;
};
export type MatchHistoryUncheckedUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    opponentId?: Prisma.StringFieldUpdateOperationsInput | string;
    roundId?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistoryUncheckedUpdateManyWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    opponentId?: Prisma.StringFieldUpdateOperationsInput | string;
    roundId?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistoryCreateManyParticipantInput = {
    id?: string;
    opponentId: string;
    tournamentId: string;
    roundId: string;
    matchId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
};
export type MatchHistoryCreateManyOpponentInput = {
    id?: string;
    participantId: string;
    tournamentId: string;
    roundId: string;
    matchId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
};
export type MatchHistoryUpdateWithoutParticipantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    opponent?: Prisma.ParticipantUpdateOneRequiredWithoutOpponentHistoriesNestedInput;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    round?: Prisma.RoundUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    match?: Prisma.MatchUpdateOneRequiredWithoutMatchHistoriesNestedInput;
};
export type MatchHistoryUncheckedUpdateWithoutParticipantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    opponentId?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    roundId?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistoryUncheckedUpdateManyWithoutParticipantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    opponentId?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    roundId?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistoryUpdateWithoutOpponentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participant?: Prisma.ParticipantUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    round?: Prisma.RoundUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    match?: Prisma.MatchUpdateOneRequiredWithoutMatchHistoriesNestedInput;
};
export type MatchHistoryUncheckedUpdateWithoutOpponentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    roundId?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistoryUncheckedUpdateManyWithoutOpponentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    roundId?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistoryCreateManyRoundInput = {
    id?: string;
    participantId: string;
    opponentId: string;
    tournamentId: string;
    matchId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
};
export type MatchHistoryUpdateWithoutRoundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participant?: Prisma.ParticipantUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    opponent?: Prisma.ParticipantUpdateOneRequiredWithoutOpponentHistoriesNestedInput;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    match?: Prisma.MatchUpdateOneRequiredWithoutMatchHistoriesNestedInput;
};
export type MatchHistoryUncheckedUpdateWithoutRoundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    opponentId?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistoryUncheckedUpdateManyWithoutRoundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    opponentId?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    matchId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistoryCreateManyMatchInput = {
    id?: string;
    participantId: string;
    opponentId: string;
    tournamentId: string;
    roundId: string;
    participantScore: number;
    opponentScore: number;
    result: $Enums.MatchResult;
    createdAt?: Date | string;
};
export type MatchHistoryUpdateWithoutMatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participant?: Prisma.ParticipantUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    opponent?: Prisma.ParticipantUpdateOneRequiredWithoutOpponentHistoriesNestedInput;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutMatchHistoriesNestedInput;
    round?: Prisma.RoundUpdateOneRequiredWithoutMatchHistoriesNestedInput;
};
export type MatchHistoryUncheckedUpdateWithoutMatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    opponentId?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    roundId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistoryUncheckedUpdateManyWithoutMatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    opponentId?: Prisma.StringFieldUpdateOperationsInput | string;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    roundId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantScore?: Prisma.IntFieldUpdateOperationsInput | number;
    opponentScore?: Prisma.IntFieldUpdateOperationsInput | number;
    result?: Prisma.EnumMatchResultFieldUpdateOperationsInput | $Enums.MatchResult;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    participantId?: boolean;
    opponentId?: boolean;
    tournamentId?: boolean;
    roundId?: boolean;
    matchId?: boolean;
    participantScore?: boolean;
    opponentScore?: boolean;
    result?: boolean;
    createdAt?: boolean;
    participant?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    opponent?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    round?: boolean | Prisma.RoundDefaultArgs<ExtArgs>;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matchHistory"]>;
export type MatchHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    participantId?: boolean;
    opponentId?: boolean;
    tournamentId?: boolean;
    roundId?: boolean;
    matchId?: boolean;
    participantScore?: boolean;
    opponentScore?: boolean;
    result?: boolean;
    createdAt?: boolean;
    participant?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    opponent?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    round?: boolean | Prisma.RoundDefaultArgs<ExtArgs>;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matchHistory"]>;
export type MatchHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    participantId?: boolean;
    opponentId?: boolean;
    tournamentId?: boolean;
    roundId?: boolean;
    matchId?: boolean;
    participantScore?: boolean;
    opponentScore?: boolean;
    result?: boolean;
    createdAt?: boolean;
    participant?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    opponent?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    round?: boolean | Prisma.RoundDefaultArgs<ExtArgs>;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matchHistory"]>;
export type MatchHistorySelectScalar = {
    id?: boolean;
    participantId?: boolean;
    opponentId?: boolean;
    tournamentId?: boolean;
    roundId?: boolean;
    matchId?: boolean;
    participantScore?: boolean;
    opponentScore?: boolean;
    result?: boolean;
    createdAt?: boolean;
};
export type MatchHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "participantId" | "opponentId" | "tournamentId" | "roundId" | "matchId" | "participantScore" | "opponentScore" | "result" | "createdAt", ExtArgs["result"]["matchHistory"]>;
export type MatchHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participant?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    opponent?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    round?: boolean | Prisma.RoundDefaultArgs<ExtArgs>;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
};
export type MatchHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participant?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    opponent?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    round?: boolean | Prisma.RoundDefaultArgs<ExtArgs>;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
};
export type MatchHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participant?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    opponent?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    round?: boolean | Prisma.RoundDefaultArgs<ExtArgs>;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
};
export type $MatchHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MatchHistory";
    objects: {
        participant: Prisma.$ParticipantPayload<ExtArgs>;
        opponent: Prisma.$ParticipantPayload<ExtArgs>;
        tournament: Prisma.$TournamentPayload<ExtArgs>;
        round: Prisma.$RoundPayload<ExtArgs>;
        match: Prisma.$MatchPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        participantId: string;
        opponentId: string;
        tournamentId: string;
        roundId: string;
        matchId: string;
        participantScore: number;
        opponentScore: number;
        result: $Enums.MatchResult;
        createdAt: Date;
    }, ExtArgs["result"]["matchHistory"]>;
    composites: {};
};
export type MatchHistoryGetPayload<S extends boolean | null | undefined | MatchHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload, S>;
export type MatchHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MatchHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: MatchHistoryCountAggregateInputType | true;
};
export interface MatchHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MatchHistory'];
        meta: {
            name: 'MatchHistory';
        };
    };
    /**
     * Find zero or one MatchHistory that matches the filter.
     * @param {MatchHistoryFindUniqueArgs} args - Arguments to find a MatchHistory
     * @example
     * // Get one MatchHistory
     * const matchHistory = await prisma.matchHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, MatchHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MatchHistoryClient<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MatchHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchHistoryFindUniqueOrThrowArgs} args - Arguments to find a MatchHistory
     * @example
     * // Get one MatchHistory
     * const matchHistory = await prisma.matchHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MatchHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchHistoryClient<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MatchHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryFindFirstArgs} args - Arguments to find a MatchHistory
     * @example
     * // Get one MatchHistory
     * const matchHistory = await prisma.matchHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, MatchHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__MatchHistoryClient<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MatchHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryFindFirstOrThrowArgs} args - Arguments to find a MatchHistory
     * @example
     * // Get one MatchHistory
     * const matchHistory = await prisma.matchHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MatchHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchHistoryClient<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MatchHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchHistories
     * const matchHistories = await prisma.matchHistory.findMany()
     *
     * // Get first 10 MatchHistories
     * const matchHistories = await prisma.matchHistory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const matchHistoryWithIdOnly = await prisma.matchHistory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MatchHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, MatchHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MatchHistory.
     * @param {MatchHistoryCreateArgs} args - Arguments to create a MatchHistory.
     * @example
     * // Create one MatchHistory
     * const MatchHistory = await prisma.matchHistory.create({
     *   data: {
     *     // ... data to create a MatchHistory
     *   }
     * })
     *
     */
    create<T extends MatchHistoryCreateArgs>(args: Prisma.SelectSubset<T, MatchHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__MatchHistoryClient<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MatchHistories.
     * @param {MatchHistoryCreateManyArgs} args - Arguments to create many MatchHistories.
     * @example
     * // Create many MatchHistories
     * const matchHistory = await prisma.matchHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MatchHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, MatchHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MatchHistories and returns the data saved in the database.
     * @param {MatchHistoryCreateManyAndReturnArgs} args - Arguments to create many MatchHistories.
     * @example
     * // Create many MatchHistories
     * const matchHistory = await prisma.matchHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MatchHistories and only return the `id`
     * const matchHistoryWithIdOnly = await prisma.matchHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MatchHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MatchHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MatchHistory.
     * @param {MatchHistoryDeleteArgs} args - Arguments to delete one MatchHistory.
     * @example
     * // Delete one MatchHistory
     * const MatchHistory = await prisma.matchHistory.delete({
     *   where: {
     *     // ... filter to delete one MatchHistory
     *   }
     * })
     *
     */
    delete<T extends MatchHistoryDeleteArgs>(args: Prisma.SelectSubset<T, MatchHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__MatchHistoryClient<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MatchHistory.
     * @param {MatchHistoryUpdateArgs} args - Arguments to update one MatchHistory.
     * @example
     * // Update one MatchHistory
     * const matchHistory = await prisma.matchHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MatchHistoryUpdateArgs>(args: Prisma.SelectSubset<T, MatchHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__MatchHistoryClient<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MatchHistories.
     * @param {MatchHistoryDeleteManyArgs} args - Arguments to filter MatchHistories to delete.
     * @example
     * // Delete a few MatchHistories
     * const { count } = await prisma.matchHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MatchHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, MatchHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MatchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchHistories
     * const matchHistory = await prisma.matchHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MatchHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, MatchHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MatchHistories and returns the data updated in the database.
     * @param {MatchHistoryUpdateManyAndReturnArgs} args - Arguments to update many MatchHistories.
     * @example
     * // Update many MatchHistories
     * const matchHistory = await prisma.matchHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MatchHistories and only return the `id`
     * const matchHistoryWithIdOnly = await prisma.matchHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MatchHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MatchHistory.
     * @param {MatchHistoryUpsertArgs} args - Arguments to update or create a MatchHistory.
     * @example
     * // Update or create a MatchHistory
     * const matchHistory = await prisma.matchHistory.upsert({
     *   create: {
     *     // ... data to create a MatchHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchHistory we want to update
     *   }
     * })
     */
    upsert<T extends MatchHistoryUpsertArgs>(args: Prisma.SelectSubset<T, MatchHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__MatchHistoryClient<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MatchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryCountArgs} args - Arguments to filter MatchHistories to count.
     * @example
     * // Count the number of MatchHistories
     * const count = await prisma.matchHistory.count({
     *   where: {
     *     // ... the filter for the MatchHistories we want to count
     *   }
     * })
    **/
    count<T extends MatchHistoryCountArgs>(args?: Prisma.Subset<T, MatchHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MatchHistoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MatchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchHistoryAggregateArgs>(args: Prisma.Subset<T, MatchHistoryAggregateArgs>): Prisma.PrismaPromise<GetMatchHistoryAggregateType<T>>;
    /**
     * Group by MatchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchHistoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MatchHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MatchHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: MatchHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MatchHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MatchHistory model
     */
    readonly fields: MatchHistoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MatchHistory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MatchHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    participant<T extends Prisma.ParticipantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParticipantDefaultArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    opponent<T extends Prisma.ParticipantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParticipantDefaultArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tournament<T extends Prisma.TournamentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TournamentDefaultArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    round<T extends Prisma.RoundDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoundDefaultArgs<ExtArgs>>): Prisma.Prisma__RoundClient<runtime.Types.Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    match<T extends Prisma.MatchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MatchDefaultArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the MatchHistory model
 */
export interface MatchHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"MatchHistory", 'String'>;
    readonly participantId: Prisma.FieldRef<"MatchHistory", 'String'>;
    readonly opponentId: Prisma.FieldRef<"MatchHistory", 'String'>;
    readonly tournamentId: Prisma.FieldRef<"MatchHistory", 'String'>;
    readonly roundId: Prisma.FieldRef<"MatchHistory", 'String'>;
    readonly matchId: Prisma.FieldRef<"MatchHistory", 'String'>;
    readonly participantScore: Prisma.FieldRef<"MatchHistory", 'Int'>;
    readonly opponentScore: Prisma.FieldRef<"MatchHistory", 'Int'>;
    readonly result: Prisma.FieldRef<"MatchHistory", 'MatchResult'>;
    readonly createdAt: Prisma.FieldRef<"MatchHistory", 'DateTime'>;
}
/**
 * MatchHistory findUnique
 */
export type MatchHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MatchHistory to fetch.
     */
    where: Prisma.MatchHistoryWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * MatchHistory findUniqueOrThrow
 */
export type MatchHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MatchHistory to fetch.
     */
    where: Prisma.MatchHistoryWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * MatchHistory findFirst
 */
export type MatchHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MatchHistory to fetch.
     */
    where?: Prisma.MatchHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MatchHistories to fetch.
     */
    orderBy?: Prisma.MatchHistoryOrderByWithRelationInput | Prisma.MatchHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MatchHistories.
     */
    cursor?: Prisma.MatchHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MatchHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MatchHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MatchHistories.
     */
    distinct?: Prisma.MatchHistoryScalarFieldEnum | Prisma.MatchHistoryScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * MatchHistory findFirstOrThrow
 */
export type MatchHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MatchHistory to fetch.
     */
    where?: Prisma.MatchHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MatchHistories to fetch.
     */
    orderBy?: Prisma.MatchHistoryOrderByWithRelationInput | Prisma.MatchHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MatchHistories.
     */
    cursor?: Prisma.MatchHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MatchHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MatchHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MatchHistories.
     */
    distinct?: Prisma.MatchHistoryScalarFieldEnum | Prisma.MatchHistoryScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * MatchHistory findMany
 */
export type MatchHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MatchHistories to fetch.
     */
    where?: Prisma.MatchHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MatchHistories to fetch.
     */
    orderBy?: Prisma.MatchHistoryOrderByWithRelationInput | Prisma.MatchHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MatchHistories.
     */
    cursor?: Prisma.MatchHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MatchHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MatchHistories.
     */
    skip?: number;
    distinct?: Prisma.MatchHistoryScalarFieldEnum | Prisma.MatchHistoryScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * MatchHistory create
 */
export type MatchHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a MatchHistory.
     */
    data: Prisma.XOR<Prisma.MatchHistoryCreateInput, Prisma.MatchHistoryUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * MatchHistory createMany
 */
export type MatchHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchHistories.
     */
    data: Prisma.MatchHistoryCreateManyInput | Prisma.MatchHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MatchHistory createManyAndReturn
 */
export type MatchHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: Prisma.MatchHistorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: Prisma.MatchHistoryOmit<ExtArgs> | null;
    /**
     * The data used to create many MatchHistories.
     */
    data: Prisma.MatchHistoryCreateManyInput | Prisma.MatchHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatchHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * MatchHistory update
 */
export type MatchHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a MatchHistory.
     */
    data: Prisma.XOR<Prisma.MatchHistoryUpdateInput, Prisma.MatchHistoryUncheckedUpdateInput>;
    /**
     * Choose, which MatchHistory to update.
     */
    where: Prisma.MatchHistoryWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * MatchHistory updateMany
 */
export type MatchHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchHistories.
     */
    data: Prisma.XOR<Prisma.MatchHistoryUpdateManyMutationInput, Prisma.MatchHistoryUncheckedUpdateManyInput>;
    /**
     * Filter which MatchHistories to update
     */
    where?: Prisma.MatchHistoryWhereInput;
    /**
     * Limit how many MatchHistories to update.
     */
    limit?: number;
};
/**
 * MatchHistory updateManyAndReturn
 */
export type MatchHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchHistory
     */
    select?: Prisma.MatchHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchHistory
     */
    omit?: Prisma.MatchHistoryOmit<ExtArgs> | null;
    /**
     * The data used to update MatchHistories.
     */
    data: Prisma.XOR<Prisma.MatchHistoryUpdateManyMutationInput, Prisma.MatchHistoryUncheckedUpdateManyInput>;
    /**
     * Filter which MatchHistories to update
     */
    where?: Prisma.MatchHistoryWhereInput;
    /**
     * Limit how many MatchHistories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatchHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * MatchHistory upsert
 */
export type MatchHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the MatchHistory to update in case it exists.
     */
    where: Prisma.MatchHistoryWhereUniqueInput;
    /**
     * In case the MatchHistory found by the `where` argument doesn't exist, create a new MatchHistory with this data.
     */
    create: Prisma.XOR<Prisma.MatchHistoryCreateInput, Prisma.MatchHistoryUncheckedCreateInput>;
    /**
     * In case the MatchHistory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MatchHistoryUpdateInput, Prisma.MatchHistoryUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * MatchHistory delete
 */
export type MatchHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which MatchHistory to delete.
     */
    where: Prisma.MatchHistoryWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * MatchHistory deleteMany
 */
export type MatchHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MatchHistories to delete
     */
    where?: Prisma.MatchHistoryWhereInput;
    /**
     * Limit how many MatchHistories to delete.
     */
    limit?: number;
};
/**
 * MatchHistory without action
 */
export type MatchHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
