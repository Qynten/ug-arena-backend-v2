import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Tournament
 *
 */
export type TournamentModel = runtime.Types.Result.DefaultSelection<Prisma.$TournamentPayload>;
export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null;
    _avg: TournamentAvgAggregateOutputType | null;
    _sum: TournamentSumAggregateOutputType | null;
    _min: TournamentMinAggregateOutputType | null;
    _max: TournamentMaxAggregateOutputType | null;
};
export type TournamentAvgAggregateOutputType = {
    maxParticipants: number | null;
    minTeamSize: number | null;
    maxTeamSize: number | null;
    bestOf: number | null;
};
export type TournamentSumAggregateOutputType = {
    maxParticipants: number | null;
    minTeamSize: number | null;
    maxTeamSize: number | null;
    bestOf: number | null;
};
export type TournamentMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    type: $Enums.TournamentType | null;
    status: $Enums.TournamentStatus | null;
    regStart: Date | null;
    regEnd: Date | null;
    seedingStart: Date | null;
    seedingEnd: Date | null;
    liveStart: Date | null;
    liveEnd: Date | null;
    checkInStart: Date | null;
    checkInEnd: Date | null;
    maxParticipants: number | null;
    minTeamSize: number | null;
    maxTeamSize: number | null;
    bestOf: number | null;
    allowDraws: boolean | null;
    logo: string | null;
    isDeleted: boolean | null;
    organizerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TournamentMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    type: $Enums.TournamentType | null;
    status: $Enums.TournamentStatus | null;
    regStart: Date | null;
    regEnd: Date | null;
    seedingStart: Date | null;
    seedingEnd: Date | null;
    liveStart: Date | null;
    liveEnd: Date | null;
    checkInStart: Date | null;
    checkInEnd: Date | null;
    maxParticipants: number | null;
    minTeamSize: number | null;
    maxTeamSize: number | null;
    bestOf: number | null;
    allowDraws: boolean | null;
    logo: string | null;
    isDeleted: boolean | null;
    organizerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TournamentCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    type: number;
    status: number;
    regStart: number;
    regEnd: number;
    seedingStart: number;
    seedingEnd: number;
    liveStart: number;
    liveEnd: number;
    checkInStart: number;
    checkInEnd: number;
    maxParticipants: number;
    minTeamSize: number;
    maxTeamSize: number;
    bestOf: number;
    allowDraws: number;
    logo: number;
    metadata: number;
    isDeleted: number;
    organizerId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TournamentAvgAggregateInputType = {
    maxParticipants?: true;
    minTeamSize?: true;
    maxTeamSize?: true;
    bestOf?: true;
};
export type TournamentSumAggregateInputType = {
    maxParticipants?: true;
    minTeamSize?: true;
    maxTeamSize?: true;
    bestOf?: true;
};
export type TournamentMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    type?: true;
    status?: true;
    regStart?: true;
    regEnd?: true;
    seedingStart?: true;
    seedingEnd?: true;
    liveStart?: true;
    liveEnd?: true;
    checkInStart?: true;
    checkInEnd?: true;
    maxParticipants?: true;
    minTeamSize?: true;
    maxTeamSize?: true;
    bestOf?: true;
    allowDraws?: true;
    logo?: true;
    isDeleted?: true;
    organizerId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TournamentMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    type?: true;
    status?: true;
    regStart?: true;
    regEnd?: true;
    seedingStart?: true;
    seedingEnd?: true;
    liveStart?: true;
    liveEnd?: true;
    checkInStart?: true;
    checkInEnd?: true;
    maxParticipants?: true;
    minTeamSize?: true;
    maxTeamSize?: true;
    bestOf?: true;
    allowDraws?: true;
    logo?: true;
    isDeleted?: true;
    organizerId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TournamentCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    type?: true;
    status?: true;
    regStart?: true;
    regEnd?: true;
    seedingStart?: true;
    seedingEnd?: true;
    liveStart?: true;
    liveEnd?: true;
    checkInStart?: true;
    checkInEnd?: true;
    maxParticipants?: true;
    minTeamSize?: true;
    maxTeamSize?: true;
    bestOf?: true;
    allowDraws?: true;
    logo?: true;
    metadata?: true;
    isDeleted?: true;
    organizerId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TournamentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TournamentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tournaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TournamentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TournamentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType;
};
export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
    [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTournament[P]> : Prisma.GetScalarType<T[P], AggregateTournament[P]>;
};
export type TournamentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentWhereInput;
    orderBy?: Prisma.TournamentOrderByWithAggregationInput | Prisma.TournamentOrderByWithAggregationInput[];
    by: Prisma.TournamentScalarFieldEnum[] | Prisma.TournamentScalarFieldEnum;
    having?: Prisma.TournamentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TournamentCountAggregateInputType | true;
    _avg?: TournamentAvgAggregateInputType;
    _sum?: TournamentSumAggregateInputType;
    _min?: TournamentMinAggregateInputType;
    _max?: TournamentMaxAggregateInputType;
};
export type TournamentGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    type: $Enums.TournamentType;
    status: $Enums.TournamentStatus;
    regStart: Date | null;
    regEnd: Date | null;
    seedingStart: Date | null;
    seedingEnd: Date | null;
    liveStart: Date | null;
    liveEnd: Date | null;
    checkInStart: Date | null;
    checkInEnd: Date | null;
    maxParticipants: number;
    minTeamSize: number;
    maxTeamSize: number;
    bestOf: number;
    allowDraws: boolean;
    logo: string | null;
    metadata: runtime.JsonValue | null;
    isDeleted: boolean;
    organizerId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: TournamentCountAggregateOutputType | null;
    _avg: TournamentAvgAggregateOutputType | null;
    _sum: TournamentSumAggregateOutputType | null;
    _min: TournamentMinAggregateOutputType | null;
    _max: TournamentMaxAggregateOutputType | null;
};
type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TournamentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TournamentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TournamentGroupByOutputType[P]>;
}>>;
export type TournamentWhereInput = {
    AND?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    OR?: Prisma.TournamentWhereInput[];
    NOT?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    id?: Prisma.StringFilter<"Tournament"> | string;
    name?: Prisma.StringFilter<"Tournament"> | string;
    description?: Prisma.StringFilter<"Tournament"> | string;
    type?: Prisma.EnumTournamentTypeFilter<"Tournament"> | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus;
    regStart?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    regEnd?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    seedingStart?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    seedingEnd?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    liveStart?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    liveEnd?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    checkInStart?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    checkInEnd?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    maxParticipants?: Prisma.IntFilter<"Tournament"> | number;
    minTeamSize?: Prisma.IntFilter<"Tournament"> | number;
    maxTeamSize?: Prisma.IntFilter<"Tournament"> | number;
    bestOf?: Prisma.IntFilter<"Tournament"> | number;
    allowDraws?: Prisma.BoolFilter<"Tournament"> | boolean;
    logo?: Prisma.StringNullableFilter<"Tournament"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Tournament">;
    isDeleted?: Prisma.BoolFilter<"Tournament"> | boolean;
    organizerId?: Prisma.StringFilter<"Tournament"> | string;
    createdAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    prizePools?: Prisma.PrizePoolListRelationFilter;
    organizer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    participants?: Prisma.ParticipantListRelationFilter;
    matches?: Prisma.MatchListRelationFilter;
    teams?: Prisma.TeamListRelationFilter;
    rounds?: Prisma.RoundListRelationFilter;
    scores?: Prisma.ScoreListRelationFilter;
    activities?: Prisma.TournamentActivityListRelationFilter;
    matchHistories?: Prisma.MatchHistoryListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
};
export type TournamentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    regStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    regEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    seedingStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    seedingEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    liveStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    liveEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkInStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkInEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    maxParticipants?: Prisma.SortOrder;
    minTeamSize?: Prisma.SortOrder;
    maxTeamSize?: Prisma.SortOrder;
    bestOf?: Prisma.SortOrder;
    allowDraws?: Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    prizePools?: Prisma.PrizePoolOrderByRelationAggregateInput;
    organizer?: Prisma.UserOrderByWithRelationInput;
    participants?: Prisma.ParticipantOrderByRelationAggregateInput;
    matches?: Prisma.MatchOrderByRelationAggregateInput;
    teams?: Prisma.TeamOrderByRelationAggregateInput;
    rounds?: Prisma.RoundOrderByRelationAggregateInput;
    scores?: Prisma.scoreOrderByRelationAggregateInput;
    activities?: Prisma.TournamentActivityOrderByRelationAggregateInput;
    matchHistories?: Prisma.MatchHistoryOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
};
export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    OR?: Prisma.TournamentWhereInput[];
    NOT?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    name?: Prisma.StringFilter<"Tournament"> | string;
    description?: Prisma.StringFilter<"Tournament"> | string;
    type?: Prisma.EnumTournamentTypeFilter<"Tournament"> | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus;
    regStart?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    regEnd?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    seedingStart?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    seedingEnd?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    liveStart?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    liveEnd?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    checkInStart?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    checkInEnd?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    maxParticipants?: Prisma.IntFilter<"Tournament"> | number;
    minTeamSize?: Prisma.IntFilter<"Tournament"> | number;
    maxTeamSize?: Prisma.IntFilter<"Tournament"> | number;
    bestOf?: Prisma.IntFilter<"Tournament"> | number;
    allowDraws?: Prisma.BoolFilter<"Tournament"> | boolean;
    logo?: Prisma.StringNullableFilter<"Tournament"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Tournament">;
    isDeleted?: Prisma.BoolFilter<"Tournament"> | boolean;
    organizerId?: Prisma.StringFilter<"Tournament"> | string;
    createdAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    prizePools?: Prisma.PrizePoolListRelationFilter;
    organizer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    participants?: Prisma.ParticipantListRelationFilter;
    matches?: Prisma.MatchListRelationFilter;
    teams?: Prisma.TeamListRelationFilter;
    rounds?: Prisma.RoundListRelationFilter;
    scores?: Prisma.ScoreListRelationFilter;
    activities?: Prisma.TournamentActivityListRelationFilter;
    matchHistories?: Prisma.MatchHistoryListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
}, "id">;
export type TournamentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    regStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    regEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    seedingStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    seedingEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    liveStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    liveEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkInStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkInEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    maxParticipants?: Prisma.SortOrder;
    minTeamSize?: Prisma.SortOrder;
    maxTeamSize?: Prisma.SortOrder;
    bestOf?: Prisma.SortOrder;
    allowDraws?: Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TournamentCountOrderByAggregateInput;
    _avg?: Prisma.TournamentAvgOrderByAggregateInput;
    _max?: Prisma.TournamentMaxOrderByAggregateInput;
    _min?: Prisma.TournamentMinOrderByAggregateInput;
    _sum?: Prisma.TournamentSumOrderByAggregateInput;
};
export type TournamentScalarWhereWithAggregatesInput = {
    AND?: Prisma.TournamentScalarWhereWithAggregatesInput | Prisma.TournamentScalarWhereWithAggregatesInput[];
    OR?: Prisma.TournamentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TournamentScalarWhereWithAggregatesInput | Prisma.TournamentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Tournament"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Tournament"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Tournament"> | string;
    type?: Prisma.EnumTournamentTypeWithAggregatesFilter<"Tournament"> | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusWithAggregatesFilter<"Tournament"> | $Enums.TournamentStatus;
    regStart?: Prisma.DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null;
    regEnd?: Prisma.DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null;
    seedingStart?: Prisma.DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null;
    seedingEnd?: Prisma.DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null;
    liveStart?: Prisma.DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null;
    liveEnd?: Prisma.DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null;
    checkInStart?: Prisma.DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null;
    checkInEnd?: Prisma.DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null;
    maxParticipants?: Prisma.IntWithAggregatesFilter<"Tournament"> | number;
    minTeamSize?: Prisma.IntWithAggregatesFilter<"Tournament"> | number;
    maxTeamSize?: Prisma.IntWithAggregatesFilter<"Tournament"> | number;
    bestOf?: Prisma.IntWithAggregatesFilter<"Tournament"> | number;
    allowDraws?: Prisma.BoolWithAggregatesFilter<"Tournament"> | boolean;
    logo?: Prisma.StringNullableWithAggregatesFilter<"Tournament"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"Tournament">;
    isDeleted?: Prisma.BoolWithAggregatesFilter<"Tournament"> | boolean;
    organizerId?: Prisma.StringWithAggregatesFilter<"Tournament"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Tournament"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Tournament"> | Date | string;
};
export type TournamentCreateInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolCreateNestedManyWithoutTournamentInput;
    organizer: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutTournamentInput;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamUncheckedCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundUncheckedCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreUncheckedCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityUncheckedCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUpdateManyWithoutTournamentNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUncheckedUpdateManyWithoutTournamentNestedInput;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUncheckedUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUncheckedUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUncheckedUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateManyInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentListRelationFilter = {
    every?: Prisma.TournamentWhereInput;
    some?: Prisma.TournamentWhereInput;
    none?: Prisma.TournamentWhereInput;
};
export type TournamentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TournamentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    regStart?: Prisma.SortOrder;
    regEnd?: Prisma.SortOrder;
    seedingStart?: Prisma.SortOrder;
    seedingEnd?: Prisma.SortOrder;
    liveStart?: Prisma.SortOrder;
    liveEnd?: Prisma.SortOrder;
    checkInStart?: Prisma.SortOrder;
    checkInEnd?: Prisma.SortOrder;
    maxParticipants?: Prisma.SortOrder;
    minTeamSize?: Prisma.SortOrder;
    maxTeamSize?: Prisma.SortOrder;
    bestOf?: Prisma.SortOrder;
    allowDraws?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentAvgOrderByAggregateInput = {
    maxParticipants?: Prisma.SortOrder;
    minTeamSize?: Prisma.SortOrder;
    maxTeamSize?: Prisma.SortOrder;
    bestOf?: Prisma.SortOrder;
};
export type TournamentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    regStart?: Prisma.SortOrder;
    regEnd?: Prisma.SortOrder;
    seedingStart?: Prisma.SortOrder;
    seedingEnd?: Prisma.SortOrder;
    liveStart?: Prisma.SortOrder;
    liveEnd?: Prisma.SortOrder;
    checkInStart?: Prisma.SortOrder;
    checkInEnd?: Prisma.SortOrder;
    maxParticipants?: Prisma.SortOrder;
    minTeamSize?: Prisma.SortOrder;
    maxTeamSize?: Prisma.SortOrder;
    bestOf?: Prisma.SortOrder;
    allowDraws?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    regStart?: Prisma.SortOrder;
    regEnd?: Prisma.SortOrder;
    seedingStart?: Prisma.SortOrder;
    seedingEnd?: Prisma.SortOrder;
    liveStart?: Prisma.SortOrder;
    liveEnd?: Prisma.SortOrder;
    checkInStart?: Prisma.SortOrder;
    checkInEnd?: Prisma.SortOrder;
    maxParticipants?: Prisma.SortOrder;
    minTeamSize?: Prisma.SortOrder;
    maxTeamSize?: Prisma.SortOrder;
    bestOf?: Prisma.SortOrder;
    allowDraws?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    organizerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentSumOrderByAggregateInput = {
    maxParticipants?: Prisma.SortOrder;
    minTeamSize?: Prisma.SortOrder;
    maxTeamSize?: Prisma.SortOrder;
    bestOf?: Prisma.SortOrder;
};
export type TournamentScalarRelationFilter = {
    is?: Prisma.TournamentWhereInput;
    isNot?: Prisma.TournamentWhereInput;
};
export type TournamentCreateNestedManyWithoutOrganizerInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutOrganizerInput, Prisma.TournamentUncheckedCreateWithoutOrganizerInput> | Prisma.TournamentCreateWithoutOrganizerInput[] | Prisma.TournamentUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutOrganizerInput | Prisma.TournamentCreateOrConnectWithoutOrganizerInput[];
    createMany?: Prisma.TournamentCreateManyOrganizerInputEnvelope;
    connect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
};
export type TournamentUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutOrganizerInput, Prisma.TournamentUncheckedCreateWithoutOrganizerInput> | Prisma.TournamentCreateWithoutOrganizerInput[] | Prisma.TournamentUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutOrganizerInput | Prisma.TournamentCreateOrConnectWithoutOrganizerInput[];
    createMany?: Prisma.TournamentCreateManyOrganizerInputEnvelope;
    connect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
};
export type TournamentUpdateManyWithoutOrganizerNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutOrganizerInput, Prisma.TournamentUncheckedCreateWithoutOrganizerInput> | Prisma.TournamentCreateWithoutOrganizerInput[] | Prisma.TournamentUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutOrganizerInput | Prisma.TournamentCreateOrConnectWithoutOrganizerInput[];
    upsert?: Prisma.TournamentUpsertWithWhereUniqueWithoutOrganizerInput | Prisma.TournamentUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: Prisma.TournamentCreateManyOrganizerInputEnvelope;
    set?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    disconnect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    delete?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    connect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    update?: Prisma.TournamentUpdateWithWhereUniqueWithoutOrganizerInput | Prisma.TournamentUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?: Prisma.TournamentUpdateManyWithWhereWithoutOrganizerInput | Prisma.TournamentUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: Prisma.TournamentScalarWhereInput | Prisma.TournamentScalarWhereInput[];
};
export type TournamentUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutOrganizerInput, Prisma.TournamentUncheckedCreateWithoutOrganizerInput> | Prisma.TournamentCreateWithoutOrganizerInput[] | Prisma.TournamentUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutOrganizerInput | Prisma.TournamentCreateOrConnectWithoutOrganizerInput[];
    upsert?: Prisma.TournamentUpsertWithWhereUniqueWithoutOrganizerInput | Prisma.TournamentUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: Prisma.TournamentCreateManyOrganizerInputEnvelope;
    set?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    disconnect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    delete?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    connect?: Prisma.TournamentWhereUniqueInput | Prisma.TournamentWhereUniqueInput[];
    update?: Prisma.TournamentUpdateWithWhereUniqueWithoutOrganizerInput | Prisma.TournamentUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?: Prisma.TournamentUpdateManyWithWhereWithoutOrganizerInput | Prisma.TournamentUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: Prisma.TournamentScalarWhereInput | Prisma.TournamentScalarWhereInput[];
};
export type EnumTournamentTypeFieldUpdateOperationsInput = {
    set?: $Enums.TournamentType;
};
export type EnumTournamentStatusFieldUpdateOperationsInput = {
    set?: $Enums.TournamentStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TournamentCreateNestedOneWithoutParticipantsInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutParticipantsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutParticipantsInput;
    upsert?: Prisma.TournamentUpsertWithoutParticipantsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutParticipantsInput, Prisma.TournamentUpdateWithoutParticipantsInput>, Prisma.TournamentUncheckedUpdateWithoutParticipantsInput>;
};
export type TournamentCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutAuditLogsInput, Prisma.TournamentUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutAuditLogsInput, Prisma.TournamentUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.TournamentUpsertWithoutAuditLogsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.TournamentUpdateWithoutAuditLogsInput>, Prisma.TournamentUncheckedUpdateWithoutAuditLogsInput>;
};
export type TournamentCreateNestedOneWithoutTeamsInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutTeamsInput, Prisma.TournamentUncheckedCreateWithoutTeamsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutTeamsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutTeamsInput, Prisma.TournamentUncheckedCreateWithoutTeamsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutTeamsInput;
    upsert?: Prisma.TournamentUpsertWithoutTeamsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutTeamsInput, Prisma.TournamentUpdateWithoutTeamsInput>, Prisma.TournamentUncheckedUpdateWithoutTeamsInput>;
};
export type TournamentCreateNestedOneWithoutRoundsInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutRoundsInput, Prisma.TournamentUncheckedCreateWithoutRoundsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutRoundsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutRoundsInput, Prisma.TournamentUncheckedCreateWithoutRoundsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutRoundsInput;
    upsert?: Prisma.TournamentUpsertWithoutRoundsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutRoundsInput, Prisma.TournamentUpdateWithoutRoundsInput>, Prisma.TournamentUncheckedUpdateWithoutRoundsInput>;
};
export type TournamentCreateNestedOneWithoutMatchesInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutMatchesInput, Prisma.TournamentUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutMatchesInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutMatchesInput, Prisma.TournamentUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutMatchesInput;
    upsert?: Prisma.TournamentUpsertWithoutMatchesInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutMatchesInput, Prisma.TournamentUpdateWithoutMatchesInput>, Prisma.TournamentUncheckedUpdateWithoutMatchesInput>;
};
export type TournamentCreateNestedOneWithoutScoresInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutScoresInput, Prisma.TournamentUncheckedCreateWithoutScoresInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutScoresInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutScoresNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutScoresInput, Prisma.TournamentUncheckedCreateWithoutScoresInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutScoresInput;
    upsert?: Prisma.TournamentUpsertWithoutScoresInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutScoresInput, Prisma.TournamentUpdateWithoutScoresInput>, Prisma.TournamentUncheckedUpdateWithoutScoresInput>;
};
export type TournamentCreateNestedOneWithoutActivitiesInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutActivitiesInput, Prisma.TournamentUncheckedCreateWithoutActivitiesInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutActivitiesInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutActivitiesInput, Prisma.TournamentUncheckedCreateWithoutActivitiesInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutActivitiesInput;
    upsert?: Prisma.TournamentUpsertWithoutActivitiesInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutActivitiesInput, Prisma.TournamentUpdateWithoutActivitiesInput>, Prisma.TournamentUncheckedUpdateWithoutActivitiesInput>;
};
export type TournamentCreateNestedOneWithoutMatchHistoriesInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutMatchHistoriesInput, Prisma.TournamentUncheckedCreateWithoutMatchHistoriesInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutMatchHistoriesInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutMatchHistoriesNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutMatchHistoriesInput, Prisma.TournamentUncheckedCreateWithoutMatchHistoriesInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutMatchHistoriesInput;
    upsert?: Prisma.TournamentUpsertWithoutMatchHistoriesInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutMatchHistoriesInput, Prisma.TournamentUpdateWithoutMatchHistoriesInput>, Prisma.TournamentUncheckedUpdateWithoutMatchHistoriesInput>;
};
export type TournamentCreateNestedOneWithoutPrizePoolsInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutPrizePoolsInput, Prisma.TournamentUncheckedCreateWithoutPrizePoolsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutPrizePoolsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutPrizePoolsNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutPrizePoolsInput, Prisma.TournamentUncheckedCreateWithoutPrizePoolsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutPrizePoolsInput;
    upsert?: Prisma.TournamentUpsertWithoutPrizePoolsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutPrizePoolsInput, Prisma.TournamentUpdateWithoutPrizePoolsInput>, Prisma.TournamentUncheckedUpdateWithoutPrizePoolsInput>;
};
export type TournamentCreateWithoutOrganizerInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolCreateNestedManyWithoutTournamentInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutOrganizerInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutTournamentInput;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamUncheckedCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundUncheckedCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreUncheckedCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityUncheckedCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutOrganizerInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutOrganizerInput, Prisma.TournamentUncheckedCreateWithoutOrganizerInput>;
};
export type TournamentCreateManyOrganizerInputEnvelope = {
    data: Prisma.TournamentCreateManyOrganizerInput | Prisma.TournamentCreateManyOrganizerInput[];
    skipDuplicates?: boolean;
};
export type TournamentUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: Prisma.TournamentWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutOrganizerInput, Prisma.TournamentUncheckedUpdateWithoutOrganizerInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutOrganizerInput, Prisma.TournamentUncheckedCreateWithoutOrganizerInput>;
};
export type TournamentUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: Prisma.TournamentWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutOrganizerInput, Prisma.TournamentUncheckedUpdateWithoutOrganizerInput>;
};
export type TournamentUpdateManyWithWhereWithoutOrganizerInput = {
    where: Prisma.TournamentScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateManyMutationInput, Prisma.TournamentUncheckedUpdateManyWithoutOrganizerInput>;
};
export type TournamentScalarWhereInput = {
    AND?: Prisma.TournamentScalarWhereInput | Prisma.TournamentScalarWhereInput[];
    OR?: Prisma.TournamentScalarWhereInput[];
    NOT?: Prisma.TournamentScalarWhereInput | Prisma.TournamentScalarWhereInput[];
    id?: Prisma.StringFilter<"Tournament"> | string;
    name?: Prisma.StringFilter<"Tournament"> | string;
    description?: Prisma.StringFilter<"Tournament"> | string;
    type?: Prisma.EnumTournamentTypeFilter<"Tournament"> | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus;
    regStart?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    regEnd?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    seedingStart?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    seedingEnd?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    liveStart?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    liveEnd?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    checkInStart?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    checkInEnd?: Prisma.DateTimeNullableFilter<"Tournament"> | Date | string | null;
    maxParticipants?: Prisma.IntFilter<"Tournament"> | number;
    minTeamSize?: Prisma.IntFilter<"Tournament"> | number;
    maxTeamSize?: Prisma.IntFilter<"Tournament"> | number;
    bestOf?: Prisma.IntFilter<"Tournament"> | number;
    allowDraws?: Prisma.BoolFilter<"Tournament"> | boolean;
    logo?: Prisma.StringNullableFilter<"Tournament"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Tournament">;
    isDeleted?: Prisma.BoolFilter<"Tournament"> | boolean;
    organizerId?: Prisma.StringFilter<"Tournament"> | string;
    createdAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
};
export type TournamentCreateWithoutParticipantsInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolCreateNestedManyWithoutTournamentInput;
    organizer: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutParticipantsInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamUncheckedCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundUncheckedCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreUncheckedCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityUncheckedCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutParticipantsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput>;
};
export type TournamentUpsertWithoutParticipantsInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutParticipantsInput, Prisma.TournamentUncheckedUpdateWithoutParticipantsInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutParticipantsInput, Prisma.TournamentUncheckedCreateWithoutParticipantsInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutParticipantsInput, Prisma.TournamentUncheckedUpdateWithoutParticipantsInput>;
};
export type TournamentUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUpdateManyWithoutTournamentNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUncheckedUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUncheckedUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUncheckedUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolCreateNestedManyWithoutTournamentInput;
    organizer: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutTournamentInput;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamUncheckedCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundUncheckedCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreUncheckedCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityUncheckedCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutAuditLogsInput, Prisma.TournamentUncheckedCreateWithoutAuditLogsInput>;
};
export type TournamentUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutAuditLogsInput, Prisma.TournamentUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutAuditLogsInput, Prisma.TournamentUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutAuditLogsInput, Prisma.TournamentUncheckedUpdateWithoutAuditLogsInput>;
};
export type TournamentUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUpdateManyWithoutTournamentNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUncheckedUpdateManyWithoutTournamentNestedInput;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUncheckedUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUncheckedUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUncheckedUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateWithoutTeamsInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolCreateNestedManyWithoutTournamentInput;
    organizer: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutTeamsInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutTournamentInput;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundUncheckedCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreUncheckedCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityUncheckedCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutTeamsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutTeamsInput, Prisma.TournamentUncheckedCreateWithoutTeamsInput>;
};
export type TournamentUpsertWithoutTeamsInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutTeamsInput, Prisma.TournamentUncheckedUpdateWithoutTeamsInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutTeamsInput, Prisma.TournamentUncheckedCreateWithoutTeamsInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutTeamsInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutTeamsInput, Prisma.TournamentUncheckedUpdateWithoutTeamsInput>;
};
export type TournamentUpdateWithoutTeamsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUpdateManyWithoutTournamentNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutTeamsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUncheckedUpdateManyWithoutTournamentNestedInput;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUncheckedUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUncheckedUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUncheckedUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateWithoutRoundsInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolCreateNestedManyWithoutTournamentInput;
    organizer: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutRoundsInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutTournamentInput;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamUncheckedCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreUncheckedCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityUncheckedCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutRoundsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutRoundsInput, Prisma.TournamentUncheckedCreateWithoutRoundsInput>;
};
export type TournamentUpsertWithoutRoundsInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutRoundsInput, Prisma.TournamentUncheckedUpdateWithoutRoundsInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutRoundsInput, Prisma.TournamentUncheckedCreateWithoutRoundsInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutRoundsInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutRoundsInput, Prisma.TournamentUncheckedUpdateWithoutRoundsInput>;
};
export type TournamentUpdateWithoutRoundsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUpdateManyWithoutTournamentNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutRoundsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUncheckedUpdateManyWithoutTournamentNestedInput;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUncheckedUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUncheckedUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateWithoutMatchesInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolCreateNestedManyWithoutTournamentInput;
    organizer: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutMatchesInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutTournamentInput;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamUncheckedCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundUncheckedCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreUncheckedCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityUncheckedCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutMatchesInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutMatchesInput, Prisma.TournamentUncheckedCreateWithoutMatchesInput>;
};
export type TournamentUpsertWithoutMatchesInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutMatchesInput, Prisma.TournamentUncheckedUpdateWithoutMatchesInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutMatchesInput, Prisma.TournamentUncheckedCreateWithoutMatchesInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutMatchesInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutMatchesInput, Prisma.TournamentUncheckedUpdateWithoutMatchesInput>;
};
export type TournamentUpdateWithoutMatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUpdateManyWithoutTournamentNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutMatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUncheckedUpdateManyWithoutTournamentNestedInput;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUncheckedUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUncheckedUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUncheckedUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateWithoutScoresInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolCreateNestedManyWithoutTournamentInput;
    organizer: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutScoresInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutTournamentInput;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamUncheckedCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundUncheckedCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityUncheckedCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutScoresInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutScoresInput, Prisma.TournamentUncheckedCreateWithoutScoresInput>;
};
export type TournamentUpsertWithoutScoresInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutScoresInput, Prisma.TournamentUncheckedUpdateWithoutScoresInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutScoresInput, Prisma.TournamentUncheckedCreateWithoutScoresInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutScoresInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutScoresInput, Prisma.TournamentUncheckedUpdateWithoutScoresInput>;
};
export type TournamentUpdateWithoutScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUpdateManyWithoutTournamentNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUncheckedUpdateManyWithoutTournamentNestedInput;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUncheckedUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUncheckedUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateWithoutActivitiesInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolCreateNestedManyWithoutTournamentInput;
    organizer: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutActivitiesInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutTournamentInput;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamUncheckedCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundUncheckedCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreUncheckedCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutActivitiesInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutActivitiesInput, Prisma.TournamentUncheckedCreateWithoutActivitiesInput>;
};
export type TournamentUpsertWithoutActivitiesInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutActivitiesInput, Prisma.TournamentUncheckedUpdateWithoutActivitiesInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutActivitiesInput, Prisma.TournamentUncheckedCreateWithoutActivitiesInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutActivitiesInput, Prisma.TournamentUncheckedUpdateWithoutActivitiesInput>;
};
export type TournamentUpdateWithoutActivitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUpdateManyWithoutTournamentNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutActivitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUncheckedUpdateManyWithoutTournamentNestedInput;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUncheckedUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUncheckedUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateWithoutMatchHistoriesInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolCreateNestedManyWithoutTournamentInput;
    organizer: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutMatchHistoriesInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prizePools?: Prisma.PrizePoolUncheckedCreateNestedManyWithoutTournamentInput;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamUncheckedCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundUncheckedCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreUncheckedCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityUncheckedCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutMatchHistoriesInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutMatchHistoriesInput, Prisma.TournamentUncheckedCreateWithoutMatchHistoriesInput>;
};
export type TournamentUpsertWithoutMatchHistoriesInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutMatchHistoriesInput, Prisma.TournamentUncheckedUpdateWithoutMatchHistoriesInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutMatchHistoriesInput, Prisma.TournamentUncheckedCreateWithoutMatchHistoriesInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutMatchHistoriesInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutMatchHistoriesInput, Prisma.TournamentUncheckedUpdateWithoutMatchHistoriesInput>;
};
export type TournamentUpdateWithoutMatchHistoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUpdateManyWithoutTournamentNestedInput;
    organizer?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutMatchHistoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUncheckedUpdateManyWithoutTournamentNestedInput;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUncheckedUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUncheckedUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUncheckedUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateWithoutPrizePoolsInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organizer: Prisma.UserCreateNestedOneWithoutTournamentsInput;
    participants?: Prisma.ParticipantCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutPrizePoolsInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    organizerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participants?: Prisma.ParticipantUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
    teams?: Prisma.TeamUncheckedCreateNestedManyWithoutTournamentInput;
    rounds?: Prisma.RoundUncheckedCreateNestedManyWithoutTournamentInput;
    scores?: Prisma.scoreUncheckedCreateNestedManyWithoutTournamentInput;
    activities?: Prisma.TournamentActivityUncheckedCreateNestedManyWithoutTournamentInput;
    matchHistories?: Prisma.MatchHistoryUncheckedCreateNestedManyWithoutTournamentInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutPrizePoolsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutPrizePoolsInput, Prisma.TournamentUncheckedCreateWithoutPrizePoolsInput>;
};
export type TournamentUpsertWithoutPrizePoolsInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutPrizePoolsInput, Prisma.TournamentUncheckedUpdateWithoutPrizePoolsInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutPrizePoolsInput, Prisma.TournamentUncheckedCreateWithoutPrizePoolsInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutPrizePoolsInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutPrizePoolsInput, Prisma.TournamentUncheckedUpdateWithoutPrizePoolsInput>;
};
export type TournamentUpdateWithoutPrizePoolsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: Prisma.UserUpdateOneRequiredWithoutTournamentsNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutPrizePoolsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUncheckedUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUncheckedUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUncheckedUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateManyOrganizerInput = {
    id?: string;
    name: string;
    description: string;
    type?: $Enums.TournamentType;
    status?: $Enums.TournamentStatus;
    regStart?: Date | string | null;
    regEnd?: Date | string | null;
    seedingStart?: Date | string | null;
    seedingEnd?: Date | string | null;
    liveStart?: Date | string | null;
    liveEnd?: Date | string | null;
    checkInStart?: Date | string | null;
    checkInEnd?: Date | string | null;
    maxParticipants: number;
    minTeamSize?: number;
    maxTeamSize?: number;
    bestOf?: number;
    allowDraws?: boolean;
    logo?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentUpdateWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUpdateManyWithoutTournamentNestedInput;
    participants?: Prisma.ParticipantUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prizePools?: Prisma.PrizePoolUncheckedUpdateManyWithoutTournamentNestedInput;
    participants?: Prisma.ParticipantUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    teams?: Prisma.TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    rounds?: Prisma.RoundUncheckedUpdateManyWithoutTournamentNestedInput;
    scores?: Prisma.scoreUncheckedUpdateManyWithoutTournamentNestedInput;
    activities?: Prisma.TournamentActivityUncheckedUpdateManyWithoutTournamentNestedInput;
    matchHistories?: Prisma.MatchHistoryUncheckedUpdateManyWithoutTournamentNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateManyWithoutOrganizerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentTypeFieldUpdateOperationsInput | $Enums.TournamentType;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    regStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    regEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    seedingEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    liveEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    checkInEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    maxParticipants?: Prisma.IntFieldUpdateOperationsInput | number;
    minTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    maxTeamSize?: Prisma.IntFieldUpdateOperationsInput | number;
    bestOf?: Prisma.IntFieldUpdateOperationsInput | number;
    allowDraws?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type TournamentCountOutputType
 */
export type TournamentCountOutputType = {
    prizePools: number;
    participants: number;
    matches: number;
    teams: number;
    rounds: number;
    scores: number;
    activities: number;
    matchHistories: number;
    auditLogs: number;
};
export type TournamentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prizePools?: boolean | TournamentCountOutputTypeCountPrizePoolsArgs;
    participants?: boolean | TournamentCountOutputTypeCountParticipantsArgs;
    matches?: boolean | TournamentCountOutputTypeCountMatchesArgs;
    teams?: boolean | TournamentCountOutputTypeCountTeamsArgs;
    rounds?: boolean | TournamentCountOutputTypeCountRoundsArgs;
    scores?: boolean | TournamentCountOutputTypeCountScoresArgs;
    activities?: boolean | TournamentCountOutputTypeCountActivitiesArgs;
    matchHistories?: boolean | TournamentCountOutputTypeCountMatchHistoriesArgs;
    auditLogs?: boolean | TournamentCountOutputTypeCountAuditLogsArgs;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: Prisma.TournamentCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeCountPrizePoolsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrizePoolWhereInput;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeCountParticipantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParticipantWhereInput;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeCountMatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeCountTeamsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeamWhereInput;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeCountRoundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoundWhereInput;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeCountScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.scoreWhereInput;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeCountActivitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentActivityWhereInput;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeCountMatchHistoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchHistoryWhereInput;
};
/**
 * TournamentCountOutputType without action
 */
export type TournamentCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type TournamentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    type?: boolean;
    status?: boolean;
    regStart?: boolean;
    regEnd?: boolean;
    seedingStart?: boolean;
    seedingEnd?: boolean;
    liveStart?: boolean;
    liveEnd?: boolean;
    checkInStart?: boolean;
    checkInEnd?: boolean;
    maxParticipants?: boolean;
    minTeamSize?: boolean;
    maxTeamSize?: boolean;
    bestOf?: boolean;
    allowDraws?: boolean;
    logo?: boolean;
    metadata?: boolean;
    isDeleted?: boolean;
    organizerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    prizePools?: boolean | Prisma.Tournament$prizePoolsArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    participants?: boolean | Prisma.Tournament$participantsArgs<ExtArgs>;
    matches?: boolean | Prisma.Tournament$matchesArgs<ExtArgs>;
    teams?: boolean | Prisma.Tournament$teamsArgs<ExtArgs>;
    rounds?: boolean | Prisma.Tournament$roundsArgs<ExtArgs>;
    scores?: boolean | Prisma.Tournament$scoresArgs<ExtArgs>;
    activities?: boolean | Prisma.Tournament$activitiesArgs<ExtArgs>;
    matchHistories?: boolean | Prisma.Tournament$matchHistoriesArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.Tournament$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.TournamentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournament"]>;
export type TournamentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    type?: boolean;
    status?: boolean;
    regStart?: boolean;
    regEnd?: boolean;
    seedingStart?: boolean;
    seedingEnd?: boolean;
    liveStart?: boolean;
    liveEnd?: boolean;
    checkInStart?: boolean;
    checkInEnd?: boolean;
    maxParticipants?: boolean;
    minTeamSize?: boolean;
    maxTeamSize?: boolean;
    bestOf?: boolean;
    allowDraws?: boolean;
    logo?: boolean;
    metadata?: boolean;
    isDeleted?: boolean;
    organizerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournament"]>;
export type TournamentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    type?: boolean;
    status?: boolean;
    regStart?: boolean;
    regEnd?: boolean;
    seedingStart?: boolean;
    seedingEnd?: boolean;
    liveStart?: boolean;
    liveEnd?: boolean;
    checkInStart?: boolean;
    checkInEnd?: boolean;
    maxParticipants?: boolean;
    minTeamSize?: boolean;
    maxTeamSize?: boolean;
    bestOf?: boolean;
    allowDraws?: boolean;
    logo?: boolean;
    metadata?: boolean;
    isDeleted?: boolean;
    organizerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournament"]>;
export type TournamentSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    type?: boolean;
    status?: boolean;
    regStart?: boolean;
    regEnd?: boolean;
    seedingStart?: boolean;
    seedingEnd?: boolean;
    liveStart?: boolean;
    liveEnd?: boolean;
    checkInStart?: boolean;
    checkInEnd?: boolean;
    maxParticipants?: boolean;
    minTeamSize?: boolean;
    maxTeamSize?: boolean;
    bestOf?: boolean;
    allowDraws?: boolean;
    logo?: boolean;
    metadata?: boolean;
    isDeleted?: boolean;
    organizerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TournamentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "type" | "status" | "regStart" | "regEnd" | "seedingStart" | "seedingEnd" | "liveStart" | "liveEnd" | "checkInStart" | "checkInEnd" | "maxParticipants" | "minTeamSize" | "maxTeamSize" | "bestOf" | "allowDraws" | "logo" | "metadata" | "isDeleted" | "organizerId" | "createdAt" | "updatedAt", ExtArgs["result"]["tournament"]>;
export type TournamentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prizePools?: boolean | Prisma.Tournament$prizePoolsArgs<ExtArgs>;
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    participants?: boolean | Prisma.Tournament$participantsArgs<ExtArgs>;
    matches?: boolean | Prisma.Tournament$matchesArgs<ExtArgs>;
    teams?: boolean | Prisma.Tournament$teamsArgs<ExtArgs>;
    rounds?: boolean | Prisma.Tournament$roundsArgs<ExtArgs>;
    scores?: boolean | Prisma.Tournament$scoresArgs<ExtArgs>;
    activities?: boolean | Prisma.Tournament$activitiesArgs<ExtArgs>;
    matchHistories?: boolean | Prisma.Tournament$matchHistoriesArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.Tournament$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.TournamentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TournamentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organizer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TournamentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tournament";
    objects: {
        prizePools: Prisma.$PrizePoolPayload<ExtArgs>[];
        organizer: Prisma.$UserPayload<ExtArgs>;
        participants: Prisma.$ParticipantPayload<ExtArgs>[];
        matches: Prisma.$MatchPayload<ExtArgs>[];
        teams: Prisma.$TeamPayload<ExtArgs>[];
        rounds: Prisma.$RoundPayload<ExtArgs>[];
        scores: Prisma.$scorePayload<ExtArgs>[];
        activities: Prisma.$TournamentActivityPayload<ExtArgs>[];
        matchHistories: Prisma.$MatchHistoryPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string;
        type: $Enums.TournamentType;
        status: $Enums.TournamentStatus;
        regStart: Date | null;
        regEnd: Date | null;
        seedingStart: Date | null;
        seedingEnd: Date | null;
        liveStart: Date | null;
        liveEnd: Date | null;
        checkInStart: Date | null;
        checkInEnd: Date | null;
        maxParticipants: number;
        minTeamSize: number;
        maxTeamSize: number;
        bestOf: number;
        allowDraws: boolean;
        logo: string | null;
        metadata: runtime.JsonValue | null;
        isDeleted: boolean;
        organizerId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["tournament"]>;
    composites: {};
};
export type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TournamentPayload, S>;
export type TournamentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: TournamentCountAggregateInputType | true;
};
export interface TournamentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tournament'];
        meta: {
            name: 'Tournament';
        };
    };
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: Prisma.SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: Prisma.SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     *
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TournamentFindManyArgs>(args?: Prisma.SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     *
     */
    create<T extends TournamentCreateArgs>(args: Prisma.SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TournamentCreateManyArgs>(args?: Prisma.SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     *
     */
    delete<T extends TournamentDeleteArgs>(args: Prisma.SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TournamentUpdateArgs>(args: Prisma.SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: Prisma.SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: Prisma.SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
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
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: Prisma.SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(args?: Prisma.Subset<T, TournamentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TournamentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentAggregateArgs>(args: Prisma.Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>;
    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TournamentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TournamentGroupByArgs['orderBy'];
    } : {
        orderBy?: TournamentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Tournament model
     */
    readonly fields: TournamentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Tournament.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    prizePools<T extends Prisma.Tournament$prizePoolsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$prizePoolsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrizePoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    organizer<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    participants<T extends Prisma.Tournament$participantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    matches<T extends Prisma.Tournament$matchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    teams<T extends Prisma.Tournament$teamsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rounds<T extends Prisma.Tournament$roundsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$roundsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    scores<T extends Prisma.Tournament$scoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$scorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    activities<T extends Prisma.Tournament$activitiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    matchHistories<T extends Prisma.Tournament$matchHistoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$matchHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.Tournament$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Tournament model
 */
export interface TournamentFieldRefs {
    readonly id: Prisma.FieldRef<"Tournament", 'String'>;
    readonly name: Prisma.FieldRef<"Tournament", 'String'>;
    readonly description: Prisma.FieldRef<"Tournament", 'String'>;
    readonly type: Prisma.FieldRef<"Tournament", 'TournamentType'>;
    readonly status: Prisma.FieldRef<"Tournament", 'TournamentStatus'>;
    readonly regStart: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly regEnd: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly seedingStart: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly seedingEnd: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly liveStart: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly liveEnd: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly checkInStart: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly checkInEnd: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly maxParticipants: Prisma.FieldRef<"Tournament", 'Int'>;
    readonly minTeamSize: Prisma.FieldRef<"Tournament", 'Int'>;
    readonly maxTeamSize: Prisma.FieldRef<"Tournament", 'Int'>;
    readonly bestOf: Prisma.FieldRef<"Tournament", 'Int'>;
    readonly allowDraws: Prisma.FieldRef<"Tournament", 'Boolean'>;
    readonly logo: Prisma.FieldRef<"Tournament", 'String'>;
    readonly metadata: Prisma.FieldRef<"Tournament", 'Json'>;
    readonly isDeleted: Prisma.FieldRef<"Tournament", 'Boolean'>;
    readonly organizerId: Prisma.FieldRef<"Tournament", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Tournament", 'DateTime'>;
}
/**
 * Tournament findUnique
 */
export type TournamentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    /**
     * Filter, which Tournament to fetch.
     */
    where: Prisma.TournamentWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament findUniqueOrThrow
 */
export type TournamentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    /**
     * Filter, which Tournament to fetch.
     */
    where: Prisma.TournamentWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament findFirst
 */
export type TournamentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    /**
     * Filter, which Tournament to fetch.
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tournaments.
     */
    cursor?: Prisma.TournamentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tournaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tournaments.
     */
    distinct?: Prisma.TournamentScalarFieldEnum | Prisma.TournamentScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament findFirstOrThrow
 */
export type TournamentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    /**
     * Filter, which Tournament to fetch.
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tournaments.
     */
    cursor?: Prisma.TournamentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tournaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tournaments.
     */
    distinct?: Prisma.TournamentScalarFieldEnum | Prisma.TournamentScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament findMany
 */
export type TournamentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tournaments.
     */
    cursor?: Prisma.TournamentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tournaments.
     */
    skip?: number;
    distinct?: Prisma.TournamentScalarFieldEnum | Prisma.TournamentScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament create
 */
export type TournamentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Tournament.
     */
    data: Prisma.XOR<Prisma.TournamentCreateInput, Prisma.TournamentUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament createMany
 */
export type TournamentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: Prisma.TournamentCreateManyInput | Prisma.TournamentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Tournament createManyAndReturn
 */
export type TournamentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * The data used to create many Tournaments.
     */
    data: Prisma.TournamentCreateManyInput | Prisma.TournamentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Tournament update
 */
export type TournamentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Tournament.
     */
    data: Prisma.XOR<Prisma.TournamentUpdateInput, Prisma.TournamentUncheckedUpdateInput>;
    /**
     * Choose, which Tournament to update.
     */
    where: Prisma.TournamentWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament updateMany
 */
export type TournamentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: Prisma.XOR<Prisma.TournamentUpdateManyMutationInput, Prisma.TournamentUncheckedUpdateManyInput>;
    /**
     * Filter which Tournaments to update
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number;
};
/**
 * Tournament updateManyAndReturn
 */
export type TournamentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * The data used to update Tournaments.
     */
    data: Prisma.XOR<Prisma.TournamentUpdateManyMutationInput, Prisma.TournamentUncheckedUpdateManyInput>;
    /**
     * Filter which Tournaments to update
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Tournament upsert
 */
export type TournamentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: Prisma.TournamentWhereUniqueInput;
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: Prisma.XOR<Prisma.TournamentCreateInput, Prisma.TournamentUncheckedCreateInput>;
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TournamentUpdateInput, Prisma.TournamentUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament delete
 */
export type TournamentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    /**
     * Filter which Tournament to delete.
     */
    where: Prisma.TournamentWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * Tournament deleteMany
 */
export type TournamentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: Prisma.TournamentWhereInput;
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number;
};
/**
 * Tournament.prizePools
 */
export type Tournament$prizePoolsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Tournament.participants
 */
export type Tournament$participantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ParticipantWhereInput;
    orderBy?: Prisma.ParticipantOrderByWithRelationInput | Prisma.ParticipantOrderByWithRelationInput[];
    cursor?: Prisma.ParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParticipantScalarFieldEnum | Prisma.ParticipantScalarFieldEnum[];
};
/**
 * Tournament.matches
 */
export type Tournament$matchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Tournament.teams
 */
export type Tournament$teamsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.TeamOrderByWithRelationInput | Prisma.TeamOrderByWithRelationInput[];
    cursor?: Prisma.TeamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TeamScalarFieldEnum | Prisma.TeamScalarFieldEnum[];
};
/**
 * Tournament.rounds
 */
export type Tournament$roundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: Prisma.RoundSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Round
     */
    omit?: Prisma.RoundOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RoundInclude<ExtArgs> | null;
    where?: Prisma.RoundWhereInput;
    orderBy?: Prisma.RoundOrderByWithRelationInput | Prisma.RoundOrderByWithRelationInput[];
    cursor?: Prisma.RoundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoundScalarFieldEnum | Prisma.RoundScalarFieldEnum[];
};
/**
 * Tournament.scores
 */
export type Tournament$scoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Tournament.activities
 */
export type Tournament$activitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentActivity
     */
    select?: Prisma.TournamentActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentActivity
     */
    omit?: Prisma.TournamentActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentActivityInclude<ExtArgs> | null;
    where?: Prisma.TournamentActivityWhereInput;
    orderBy?: Prisma.TournamentActivityOrderByWithRelationInput | Prisma.TournamentActivityOrderByWithRelationInput[];
    cursor?: Prisma.TournamentActivityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TournamentActivityScalarFieldEnum | Prisma.TournamentActivityScalarFieldEnum[];
};
/**
 * Tournament.matchHistories
 */
export type Tournament$matchHistoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Tournament.auditLogs
 */
export type Tournament$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
/**
 * Tournament without action
 */
export type TournamentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentInclude<ExtArgs> | null;
};
export {};
