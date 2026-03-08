import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TournamentRoster
 *
 */
export type TournamentRosterModel = runtime.Types.Result.DefaultSelection<Prisma.$TournamentRosterPayload>;
export type AggregateTournamentRoster = {
    _count: TournamentRosterCountAggregateOutputType | null;
    _min: TournamentRosterMinAggregateOutputType | null;
    _max: TournamentRosterMaxAggregateOutputType | null;
};
export type TournamentRosterMinAggregateOutputType = {
    id: string | null;
    participantId: string | null;
    userId: string | null;
    role: $Enums.TeamPlayerRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TournamentRosterMaxAggregateOutputType = {
    id: string | null;
    participantId: string | null;
    userId: string | null;
    role: $Enums.TeamPlayerRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TournamentRosterCountAggregateOutputType = {
    id: number;
    participantId: number;
    userId: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TournamentRosterMinAggregateInputType = {
    id?: true;
    participantId?: true;
    userId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TournamentRosterMaxAggregateInputType = {
    id?: true;
    participantId?: true;
    userId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TournamentRosterCountAggregateInputType = {
    id?: true;
    participantId?: true;
    userId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TournamentRosterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentRoster to aggregate.
     */
    where?: Prisma.TournamentRosterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentRosters to fetch.
     */
    orderBy?: Prisma.TournamentRosterOrderByWithRelationInput | Prisma.TournamentRosterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TournamentRosterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentRosters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentRosters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TournamentRosters
    **/
    _count?: true | TournamentRosterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TournamentRosterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TournamentRosterMaxAggregateInputType;
};
export type GetTournamentRosterAggregateType<T extends TournamentRosterAggregateArgs> = {
    [P in keyof T & keyof AggregateTournamentRoster]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTournamentRoster[P]> : Prisma.GetScalarType<T[P], AggregateTournamentRoster[P]>;
};
export type TournamentRosterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentRosterWhereInput;
    orderBy?: Prisma.TournamentRosterOrderByWithAggregationInput | Prisma.TournamentRosterOrderByWithAggregationInput[];
    by: Prisma.TournamentRosterScalarFieldEnum[] | Prisma.TournamentRosterScalarFieldEnum;
    having?: Prisma.TournamentRosterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TournamentRosterCountAggregateInputType | true;
    _min?: TournamentRosterMinAggregateInputType;
    _max?: TournamentRosterMaxAggregateInputType;
};
export type TournamentRosterGroupByOutputType = {
    id: string;
    participantId: string;
    userId: string;
    role: $Enums.TeamPlayerRole;
    createdAt: Date;
    updatedAt: Date;
    _count: TournamentRosterCountAggregateOutputType | null;
    _min: TournamentRosterMinAggregateOutputType | null;
    _max: TournamentRosterMaxAggregateOutputType | null;
};
type GetTournamentRosterGroupByPayload<T extends TournamentRosterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TournamentRosterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TournamentRosterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TournamentRosterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TournamentRosterGroupByOutputType[P]>;
}>>;
export type TournamentRosterWhereInput = {
    AND?: Prisma.TournamentRosterWhereInput | Prisma.TournamentRosterWhereInput[];
    OR?: Prisma.TournamentRosterWhereInput[];
    NOT?: Prisma.TournamentRosterWhereInput | Prisma.TournamentRosterWhereInput[];
    id?: Prisma.StringFilter<"TournamentRoster"> | string;
    participantId?: Prisma.StringFilter<"TournamentRoster"> | string;
    userId?: Prisma.StringFilter<"TournamentRoster"> | string;
    role?: Prisma.EnumTeamPlayerRoleFilter<"TournamentRoster"> | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFilter<"TournamentRoster"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TournamentRoster"> | Date | string;
    participant?: Prisma.XOR<Prisma.ParticipantScalarRelationFilter, Prisma.ParticipantWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TournamentRosterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    participant?: Prisma.ParticipantOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type TournamentRosterWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    participantId_userId?: Prisma.TournamentRosterParticipantIdUserIdCompoundUniqueInput;
    AND?: Prisma.TournamentRosterWhereInput | Prisma.TournamentRosterWhereInput[];
    OR?: Prisma.TournamentRosterWhereInput[];
    NOT?: Prisma.TournamentRosterWhereInput | Prisma.TournamentRosterWhereInput[];
    participantId?: Prisma.StringFilter<"TournamentRoster"> | string;
    userId?: Prisma.StringFilter<"TournamentRoster"> | string;
    role?: Prisma.EnumTeamPlayerRoleFilter<"TournamentRoster"> | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFilter<"TournamentRoster"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TournamentRoster"> | Date | string;
    participant?: Prisma.XOR<Prisma.ParticipantScalarRelationFilter, Prisma.ParticipantWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "participantId_userId">;
export type TournamentRosterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TournamentRosterCountOrderByAggregateInput;
    _max?: Prisma.TournamentRosterMaxOrderByAggregateInput;
    _min?: Prisma.TournamentRosterMinOrderByAggregateInput;
};
export type TournamentRosterScalarWhereWithAggregatesInput = {
    AND?: Prisma.TournamentRosterScalarWhereWithAggregatesInput | Prisma.TournamentRosterScalarWhereWithAggregatesInput[];
    OR?: Prisma.TournamentRosterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TournamentRosterScalarWhereWithAggregatesInput | Prisma.TournamentRosterScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TournamentRoster"> | string;
    participantId?: Prisma.StringWithAggregatesFilter<"TournamentRoster"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"TournamentRoster"> | string;
    role?: Prisma.EnumTeamPlayerRoleWithAggregatesFilter<"TournamentRoster"> | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TournamentRoster"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TournamentRoster"> | Date | string;
};
export type TournamentRosterCreateInput = {
    id?: string;
    role?: $Enums.TeamPlayerRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participant: Prisma.ParticipantCreateNestedOneWithoutRostersInput;
    user: Prisma.UserCreateNestedOneWithoutTournamentRostersInput;
};
export type TournamentRosterUncheckedCreateInput = {
    id?: string;
    participantId: string;
    userId: string;
    role?: $Enums.TeamPlayerRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentRosterUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumTeamPlayerRoleFieldUpdateOperationsInput | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participant?: Prisma.ParticipantUpdateOneRequiredWithoutRostersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTournamentRostersNestedInput;
};
export type TournamentRosterUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumTeamPlayerRoleFieldUpdateOperationsInput | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRosterCreateManyInput = {
    id?: string;
    participantId: string;
    userId: string;
    role?: $Enums.TeamPlayerRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentRosterUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumTeamPlayerRoleFieldUpdateOperationsInput | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRosterUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumTeamPlayerRoleFieldUpdateOperationsInput | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRosterListRelationFilter = {
    every?: Prisma.TournamentRosterWhereInput;
    some?: Prisma.TournamentRosterWhereInput;
    none?: Prisma.TournamentRosterWhereInput;
};
export type TournamentRosterOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TournamentRosterParticipantIdUserIdCompoundUniqueInput = {
    participantId: string;
    userId: string;
};
export type TournamentRosterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentRosterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentRosterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentRosterCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterCreateWithoutUserInput, Prisma.TournamentRosterUncheckedCreateWithoutUserInput> | Prisma.TournamentRosterCreateWithoutUserInput[] | Prisma.TournamentRosterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TournamentRosterCreateOrConnectWithoutUserInput | Prisma.TournamentRosterCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TournamentRosterCreateManyUserInputEnvelope;
    connect?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
};
export type TournamentRosterUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterCreateWithoutUserInput, Prisma.TournamentRosterUncheckedCreateWithoutUserInput> | Prisma.TournamentRosterCreateWithoutUserInput[] | Prisma.TournamentRosterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TournamentRosterCreateOrConnectWithoutUserInput | Prisma.TournamentRosterCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TournamentRosterCreateManyUserInputEnvelope;
    connect?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
};
export type TournamentRosterUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterCreateWithoutUserInput, Prisma.TournamentRosterUncheckedCreateWithoutUserInput> | Prisma.TournamentRosterCreateWithoutUserInput[] | Prisma.TournamentRosterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TournamentRosterCreateOrConnectWithoutUserInput | Prisma.TournamentRosterCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TournamentRosterUpsertWithWhereUniqueWithoutUserInput | Prisma.TournamentRosterUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TournamentRosterCreateManyUserInputEnvelope;
    set?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    disconnect?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    delete?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    connect?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    update?: Prisma.TournamentRosterUpdateWithWhereUniqueWithoutUserInput | Prisma.TournamentRosterUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TournamentRosterUpdateManyWithWhereWithoutUserInput | Prisma.TournamentRosterUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TournamentRosterScalarWhereInput | Prisma.TournamentRosterScalarWhereInput[];
};
export type TournamentRosterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterCreateWithoutUserInput, Prisma.TournamentRosterUncheckedCreateWithoutUserInput> | Prisma.TournamentRosterCreateWithoutUserInput[] | Prisma.TournamentRosterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TournamentRosterCreateOrConnectWithoutUserInput | Prisma.TournamentRosterCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TournamentRosterUpsertWithWhereUniqueWithoutUserInput | Prisma.TournamentRosterUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TournamentRosterCreateManyUserInputEnvelope;
    set?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    disconnect?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    delete?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    connect?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    update?: Prisma.TournamentRosterUpdateWithWhereUniqueWithoutUserInput | Prisma.TournamentRosterUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TournamentRosterUpdateManyWithWhereWithoutUserInput | Prisma.TournamentRosterUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TournamentRosterScalarWhereInput | Prisma.TournamentRosterScalarWhereInput[];
};
export type TournamentRosterCreateNestedManyWithoutParticipantInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterCreateWithoutParticipantInput, Prisma.TournamentRosterUncheckedCreateWithoutParticipantInput> | Prisma.TournamentRosterCreateWithoutParticipantInput[] | Prisma.TournamentRosterUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.TournamentRosterCreateOrConnectWithoutParticipantInput | Prisma.TournamentRosterCreateOrConnectWithoutParticipantInput[];
    createMany?: Prisma.TournamentRosterCreateManyParticipantInputEnvelope;
    connect?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
};
export type TournamentRosterUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterCreateWithoutParticipantInput, Prisma.TournamentRosterUncheckedCreateWithoutParticipantInput> | Prisma.TournamentRosterCreateWithoutParticipantInput[] | Prisma.TournamentRosterUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.TournamentRosterCreateOrConnectWithoutParticipantInput | Prisma.TournamentRosterCreateOrConnectWithoutParticipantInput[];
    createMany?: Prisma.TournamentRosterCreateManyParticipantInputEnvelope;
    connect?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
};
export type TournamentRosterUpdateManyWithoutParticipantNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterCreateWithoutParticipantInput, Prisma.TournamentRosterUncheckedCreateWithoutParticipantInput> | Prisma.TournamentRosterCreateWithoutParticipantInput[] | Prisma.TournamentRosterUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.TournamentRosterCreateOrConnectWithoutParticipantInput | Prisma.TournamentRosterCreateOrConnectWithoutParticipantInput[];
    upsert?: Prisma.TournamentRosterUpsertWithWhereUniqueWithoutParticipantInput | Prisma.TournamentRosterUpsertWithWhereUniqueWithoutParticipantInput[];
    createMany?: Prisma.TournamentRosterCreateManyParticipantInputEnvelope;
    set?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    disconnect?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    delete?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    connect?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    update?: Prisma.TournamentRosterUpdateWithWhereUniqueWithoutParticipantInput | Prisma.TournamentRosterUpdateWithWhereUniqueWithoutParticipantInput[];
    updateMany?: Prisma.TournamentRosterUpdateManyWithWhereWithoutParticipantInput | Prisma.TournamentRosterUpdateManyWithWhereWithoutParticipantInput[];
    deleteMany?: Prisma.TournamentRosterScalarWhereInput | Prisma.TournamentRosterScalarWhereInput[];
};
export type TournamentRosterUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentRosterCreateWithoutParticipantInput, Prisma.TournamentRosterUncheckedCreateWithoutParticipantInput> | Prisma.TournamentRosterCreateWithoutParticipantInput[] | Prisma.TournamentRosterUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.TournamentRosterCreateOrConnectWithoutParticipantInput | Prisma.TournamentRosterCreateOrConnectWithoutParticipantInput[];
    upsert?: Prisma.TournamentRosterUpsertWithWhereUniqueWithoutParticipantInput | Prisma.TournamentRosterUpsertWithWhereUniqueWithoutParticipantInput[];
    createMany?: Prisma.TournamentRosterCreateManyParticipantInputEnvelope;
    set?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    disconnect?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    delete?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    connect?: Prisma.TournamentRosterWhereUniqueInput | Prisma.TournamentRosterWhereUniqueInput[];
    update?: Prisma.TournamentRosterUpdateWithWhereUniqueWithoutParticipantInput | Prisma.TournamentRosterUpdateWithWhereUniqueWithoutParticipantInput[];
    updateMany?: Prisma.TournamentRosterUpdateManyWithWhereWithoutParticipantInput | Prisma.TournamentRosterUpdateManyWithWhereWithoutParticipantInput[];
    deleteMany?: Prisma.TournamentRosterScalarWhereInput | Prisma.TournamentRosterScalarWhereInput[];
};
export type EnumTeamPlayerRoleFieldUpdateOperationsInput = {
    set?: $Enums.TeamPlayerRole;
};
export type TournamentRosterCreateWithoutUserInput = {
    id?: string;
    role?: $Enums.TeamPlayerRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participant: Prisma.ParticipantCreateNestedOneWithoutRostersInput;
};
export type TournamentRosterUncheckedCreateWithoutUserInput = {
    id?: string;
    participantId: string;
    role?: $Enums.TeamPlayerRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentRosterCreateOrConnectWithoutUserInput = {
    where: Prisma.TournamentRosterWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentRosterCreateWithoutUserInput, Prisma.TournamentRosterUncheckedCreateWithoutUserInput>;
};
export type TournamentRosterCreateManyUserInputEnvelope = {
    data: Prisma.TournamentRosterCreateManyUserInput | Prisma.TournamentRosterCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TournamentRosterUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TournamentRosterWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentRosterUpdateWithoutUserInput, Prisma.TournamentRosterUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TournamentRosterCreateWithoutUserInput, Prisma.TournamentRosterUncheckedCreateWithoutUserInput>;
};
export type TournamentRosterUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TournamentRosterWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentRosterUpdateWithoutUserInput, Prisma.TournamentRosterUncheckedUpdateWithoutUserInput>;
};
export type TournamentRosterUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TournamentRosterScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentRosterUpdateManyMutationInput, Prisma.TournamentRosterUncheckedUpdateManyWithoutUserInput>;
};
export type TournamentRosterScalarWhereInput = {
    AND?: Prisma.TournamentRosterScalarWhereInput | Prisma.TournamentRosterScalarWhereInput[];
    OR?: Prisma.TournamentRosterScalarWhereInput[];
    NOT?: Prisma.TournamentRosterScalarWhereInput | Prisma.TournamentRosterScalarWhereInput[];
    id?: Prisma.StringFilter<"TournamentRoster"> | string;
    participantId?: Prisma.StringFilter<"TournamentRoster"> | string;
    userId?: Prisma.StringFilter<"TournamentRoster"> | string;
    role?: Prisma.EnumTeamPlayerRoleFilter<"TournamentRoster"> | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFilter<"TournamentRoster"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TournamentRoster"> | Date | string;
};
export type TournamentRosterCreateWithoutParticipantInput = {
    id?: string;
    role?: $Enums.TeamPlayerRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTournamentRostersInput;
};
export type TournamentRosterUncheckedCreateWithoutParticipantInput = {
    id?: string;
    userId: string;
    role?: $Enums.TeamPlayerRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentRosterCreateOrConnectWithoutParticipantInput = {
    where: Prisma.TournamentRosterWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentRosterCreateWithoutParticipantInput, Prisma.TournamentRosterUncheckedCreateWithoutParticipantInput>;
};
export type TournamentRosterCreateManyParticipantInputEnvelope = {
    data: Prisma.TournamentRosterCreateManyParticipantInput | Prisma.TournamentRosterCreateManyParticipantInput[];
    skipDuplicates?: boolean;
};
export type TournamentRosterUpsertWithWhereUniqueWithoutParticipantInput = {
    where: Prisma.TournamentRosterWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentRosterUpdateWithoutParticipantInput, Prisma.TournamentRosterUncheckedUpdateWithoutParticipantInput>;
    create: Prisma.XOR<Prisma.TournamentRosterCreateWithoutParticipantInput, Prisma.TournamentRosterUncheckedCreateWithoutParticipantInput>;
};
export type TournamentRosterUpdateWithWhereUniqueWithoutParticipantInput = {
    where: Prisma.TournamentRosterWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentRosterUpdateWithoutParticipantInput, Prisma.TournamentRosterUncheckedUpdateWithoutParticipantInput>;
};
export type TournamentRosterUpdateManyWithWhereWithoutParticipantInput = {
    where: Prisma.TournamentRosterScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentRosterUpdateManyMutationInput, Prisma.TournamentRosterUncheckedUpdateManyWithoutParticipantInput>;
};
export type TournamentRosterCreateManyUserInput = {
    id?: string;
    participantId: string;
    role?: $Enums.TeamPlayerRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentRosterUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumTeamPlayerRoleFieldUpdateOperationsInput | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participant?: Prisma.ParticipantUpdateOneRequiredWithoutRostersNestedInput;
};
export type TournamentRosterUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumTeamPlayerRoleFieldUpdateOperationsInput | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRosterUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumTeamPlayerRoleFieldUpdateOperationsInput | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRosterCreateManyParticipantInput = {
    id?: string;
    userId: string;
    role?: $Enums.TeamPlayerRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentRosterUpdateWithoutParticipantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumTeamPlayerRoleFieldUpdateOperationsInput | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTournamentRostersNestedInput;
};
export type TournamentRosterUncheckedUpdateWithoutParticipantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumTeamPlayerRoleFieldUpdateOperationsInput | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRosterUncheckedUpdateManyWithoutParticipantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumTeamPlayerRoleFieldUpdateOperationsInput | $Enums.TeamPlayerRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRosterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    participantId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    participant?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentRoster"]>;
export type TournamentRosterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    participantId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    participant?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentRoster"]>;
export type TournamentRosterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    participantId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    participant?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentRoster"]>;
export type TournamentRosterSelectScalar = {
    id?: boolean;
    participantId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TournamentRosterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "participantId" | "userId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["tournamentRoster"]>;
export type TournamentRosterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participant?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TournamentRosterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participant?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TournamentRosterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participant?: boolean | Prisma.ParticipantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TournamentRosterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TournamentRoster";
    objects: {
        participant: Prisma.$ParticipantPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        participantId: string;
        userId: string;
        role: $Enums.TeamPlayerRole;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["tournamentRoster"]>;
    composites: {};
};
export type TournamentRosterGetPayload<S extends boolean | null | undefined | TournamentRosterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload, S>;
export type TournamentRosterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TournamentRosterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: TournamentRosterCountAggregateInputType | true;
};
export interface TournamentRosterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TournamentRoster'];
        meta: {
            name: 'TournamentRoster';
        };
    };
    /**
     * Find zero or one TournamentRoster that matches the filter.
     * @param {TournamentRosterFindUniqueArgs} args - Arguments to find a TournamentRoster
     * @example
     * // Get one TournamentRoster
     * const tournamentRoster = await prisma.tournamentRoster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentRosterFindUniqueArgs>(args: Prisma.SelectSubset<T, TournamentRosterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TournamentRoster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentRosterFindUniqueOrThrowArgs} args - Arguments to find a TournamentRoster
     * @example
     * // Get one TournamentRoster
     * const tournamentRoster = await prisma.tournamentRoster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentRosterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TournamentRosterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TournamentRoster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterFindFirstArgs} args - Arguments to find a TournamentRoster
     * @example
     * // Get one TournamentRoster
     * const tournamentRoster = await prisma.tournamentRoster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentRosterFindFirstArgs>(args?: Prisma.SelectSubset<T, TournamentRosterFindFirstArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TournamentRoster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterFindFirstOrThrowArgs} args - Arguments to find a TournamentRoster
     * @example
     * // Get one TournamentRoster
     * const tournamentRoster = await prisma.tournamentRoster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentRosterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TournamentRosterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TournamentRosters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentRosters
     * const tournamentRosters = await prisma.tournamentRoster.findMany()
     *
     * // Get first 10 TournamentRosters
     * const tournamentRosters = await prisma.tournamentRoster.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tournamentRosterWithIdOnly = await prisma.tournamentRoster.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TournamentRosterFindManyArgs>(args?: Prisma.SelectSubset<T, TournamentRosterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TournamentRoster.
     * @param {TournamentRosterCreateArgs} args - Arguments to create a TournamentRoster.
     * @example
     * // Create one TournamentRoster
     * const TournamentRoster = await prisma.tournamentRoster.create({
     *   data: {
     *     // ... data to create a TournamentRoster
     *   }
     * })
     *
     */
    create<T extends TournamentRosterCreateArgs>(args: Prisma.SelectSubset<T, TournamentRosterCreateArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TournamentRosters.
     * @param {TournamentRosterCreateManyArgs} args - Arguments to create many TournamentRosters.
     * @example
     * // Create many TournamentRosters
     * const tournamentRoster = await prisma.tournamentRoster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TournamentRosterCreateManyArgs>(args?: Prisma.SelectSubset<T, TournamentRosterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TournamentRosters and returns the data saved in the database.
     * @param {TournamentRosterCreateManyAndReturnArgs} args - Arguments to create many TournamentRosters.
     * @example
     * // Create many TournamentRosters
     * const tournamentRoster = await prisma.tournamentRoster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TournamentRosters and only return the `id`
     * const tournamentRosterWithIdOnly = await prisma.tournamentRoster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TournamentRosterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TournamentRosterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TournamentRoster.
     * @param {TournamentRosterDeleteArgs} args - Arguments to delete one TournamentRoster.
     * @example
     * // Delete one TournamentRoster
     * const TournamentRoster = await prisma.tournamentRoster.delete({
     *   where: {
     *     // ... filter to delete one TournamentRoster
     *   }
     * })
     *
     */
    delete<T extends TournamentRosterDeleteArgs>(args: Prisma.SelectSubset<T, TournamentRosterDeleteArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TournamentRoster.
     * @param {TournamentRosterUpdateArgs} args - Arguments to update one TournamentRoster.
     * @example
     * // Update one TournamentRoster
     * const tournamentRoster = await prisma.tournamentRoster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TournamentRosterUpdateArgs>(args: Prisma.SelectSubset<T, TournamentRosterUpdateArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TournamentRosters.
     * @param {TournamentRosterDeleteManyArgs} args - Arguments to filter TournamentRosters to delete.
     * @example
     * // Delete a few TournamentRosters
     * const { count } = await prisma.tournamentRoster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TournamentRosterDeleteManyArgs>(args?: Prisma.SelectSubset<T, TournamentRosterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TournamentRosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentRosters
     * const tournamentRoster = await prisma.tournamentRoster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TournamentRosterUpdateManyArgs>(args: Prisma.SelectSubset<T, TournamentRosterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TournamentRosters and returns the data updated in the database.
     * @param {TournamentRosterUpdateManyAndReturnArgs} args - Arguments to update many TournamentRosters.
     * @example
     * // Update many TournamentRosters
     * const tournamentRoster = await prisma.tournamentRoster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TournamentRosters and only return the `id`
     * const tournamentRosterWithIdOnly = await prisma.tournamentRoster.updateManyAndReturn({
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
    updateManyAndReturn<T extends TournamentRosterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TournamentRosterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TournamentRoster.
     * @param {TournamentRosterUpsertArgs} args - Arguments to update or create a TournamentRoster.
     * @example
     * // Update or create a TournamentRoster
     * const tournamentRoster = await prisma.tournamentRoster.upsert({
     *   create: {
     *     // ... data to create a TournamentRoster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentRoster we want to update
     *   }
     * })
     */
    upsert<T extends TournamentRosterUpsertArgs>(args: Prisma.SelectSubset<T, TournamentRosterUpsertArgs<ExtArgs>>): Prisma.Prisma__TournamentRosterClient<runtime.Types.Result.GetResult<Prisma.$TournamentRosterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TournamentRosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterCountArgs} args - Arguments to filter TournamentRosters to count.
     * @example
     * // Count the number of TournamentRosters
     * const count = await prisma.tournamentRoster.count({
     *   where: {
     *     // ... the filter for the TournamentRosters we want to count
     *   }
     * })
    **/
    count<T extends TournamentRosterCountArgs>(args?: Prisma.Subset<T, TournamentRosterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TournamentRosterCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TournamentRoster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentRosterAggregateArgs>(args: Prisma.Subset<T, TournamentRosterAggregateArgs>): Prisma.PrismaPromise<GetTournamentRosterAggregateType<T>>;
    /**
     * Group by TournamentRoster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentRosterGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TournamentRosterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TournamentRosterGroupByArgs['orderBy'];
    } : {
        orderBy?: TournamentRosterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TournamentRosterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentRosterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TournamentRoster model
     */
    readonly fields: TournamentRosterFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TournamentRoster.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TournamentRosterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    participant<T extends Prisma.ParticipantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ParticipantDefaultArgs<ExtArgs>>): Prisma.Prisma__ParticipantClient<runtime.Types.Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the TournamentRoster model
 */
export interface TournamentRosterFieldRefs {
    readonly id: Prisma.FieldRef<"TournamentRoster", 'String'>;
    readonly participantId: Prisma.FieldRef<"TournamentRoster", 'String'>;
    readonly userId: Prisma.FieldRef<"TournamentRoster", 'String'>;
    readonly role: Prisma.FieldRef<"TournamentRoster", 'TeamPlayerRole'>;
    readonly createdAt: Prisma.FieldRef<"TournamentRoster", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TournamentRoster", 'DateTime'>;
}
/**
 * TournamentRoster findUnique
 */
export type TournamentRosterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentRoster to fetch.
     */
    where: Prisma.TournamentRosterWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentRoster findUniqueOrThrow
 */
export type TournamentRosterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentRoster to fetch.
     */
    where: Prisma.TournamentRosterWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentRoster findFirst
 */
export type TournamentRosterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentRoster to fetch.
     */
    where?: Prisma.TournamentRosterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentRosters to fetch.
     */
    orderBy?: Prisma.TournamentRosterOrderByWithRelationInput | Prisma.TournamentRosterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TournamentRosters.
     */
    cursor?: Prisma.TournamentRosterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentRosters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentRosters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentRosters.
     */
    distinct?: Prisma.TournamentRosterScalarFieldEnum | Prisma.TournamentRosterScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentRoster findFirstOrThrow
 */
export type TournamentRosterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentRoster to fetch.
     */
    where?: Prisma.TournamentRosterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentRosters to fetch.
     */
    orderBy?: Prisma.TournamentRosterOrderByWithRelationInput | Prisma.TournamentRosterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TournamentRosters.
     */
    cursor?: Prisma.TournamentRosterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentRosters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentRosters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentRosters.
     */
    distinct?: Prisma.TournamentRosterScalarFieldEnum | Prisma.TournamentRosterScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentRoster findMany
 */
export type TournamentRosterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentRosters to fetch.
     */
    where?: Prisma.TournamentRosterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentRosters to fetch.
     */
    orderBy?: Prisma.TournamentRosterOrderByWithRelationInput | Prisma.TournamentRosterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TournamentRosters.
     */
    cursor?: Prisma.TournamentRosterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentRosters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentRosters.
     */
    skip?: number;
    distinct?: Prisma.TournamentRosterScalarFieldEnum | Prisma.TournamentRosterScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentRoster create
 */
export type TournamentRosterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a TournamentRoster.
     */
    data: Prisma.XOR<Prisma.TournamentRosterCreateInput, Prisma.TournamentRosterUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentRoster createMany
 */
export type TournamentRosterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentRosters.
     */
    data: Prisma.TournamentRosterCreateManyInput | Prisma.TournamentRosterCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TournamentRoster createManyAndReturn
 */
export type TournamentRosterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRoster
     */
    select?: Prisma.TournamentRosterSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRoster
     */
    omit?: Prisma.TournamentRosterOmit<ExtArgs> | null;
    /**
     * The data used to create many TournamentRosters.
     */
    data: Prisma.TournamentRosterCreateManyInput | Prisma.TournamentRosterCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TournamentRoster update
 */
export type TournamentRosterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a TournamentRoster.
     */
    data: Prisma.XOR<Prisma.TournamentRosterUpdateInput, Prisma.TournamentRosterUncheckedUpdateInput>;
    /**
     * Choose, which TournamentRoster to update.
     */
    where: Prisma.TournamentRosterWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentRoster updateMany
 */
export type TournamentRosterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentRosters.
     */
    data: Prisma.XOR<Prisma.TournamentRosterUpdateManyMutationInput, Prisma.TournamentRosterUncheckedUpdateManyInput>;
    /**
     * Filter which TournamentRosters to update
     */
    where?: Prisma.TournamentRosterWhereInput;
    /**
     * Limit how many TournamentRosters to update.
     */
    limit?: number;
};
/**
 * TournamentRoster updateManyAndReturn
 */
export type TournamentRosterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentRoster
     */
    select?: Prisma.TournamentRosterSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentRoster
     */
    omit?: Prisma.TournamentRosterOmit<ExtArgs> | null;
    /**
     * The data used to update TournamentRosters.
     */
    data: Prisma.XOR<Prisma.TournamentRosterUpdateManyMutationInput, Prisma.TournamentRosterUncheckedUpdateManyInput>;
    /**
     * Filter which TournamentRosters to update
     */
    where?: Prisma.TournamentRosterWhereInput;
    /**
     * Limit how many TournamentRosters to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentRosterIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TournamentRoster upsert
 */
export type TournamentRosterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the TournamentRoster to update in case it exists.
     */
    where: Prisma.TournamentRosterWhereUniqueInput;
    /**
     * In case the TournamentRoster found by the `where` argument doesn't exist, create a new TournamentRoster with this data.
     */
    create: Prisma.XOR<Prisma.TournamentRosterCreateInput, Prisma.TournamentRosterUncheckedCreateInput>;
    /**
     * In case the TournamentRoster was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TournamentRosterUpdateInput, Prisma.TournamentRosterUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentRoster delete
 */
export type TournamentRosterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which TournamentRoster to delete.
     */
    where: Prisma.TournamentRosterWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentRoster deleteMany
 */
export type TournamentRosterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentRosters to delete
     */
    where?: Prisma.TournamentRosterWhereInput;
    /**
     * Limit how many TournamentRosters to delete.
     */
    limit?: number;
};
/**
 * TournamentRoster without action
 */
export type TournamentRosterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
