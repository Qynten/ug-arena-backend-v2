import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TeamPlayerRegistration
 *
 */
export type TeamPlayerRegistrationModel = runtime.Types.Result.DefaultSelection<Prisma.$TeamPlayerRegistrationPayload>;
export type AggregateTeamPlayerRegistration = {
    _count: TeamPlayerRegistrationCountAggregateOutputType | null;
    _min: TeamPlayerRegistrationMinAggregateOutputType | null;
    _max: TeamPlayerRegistrationMaxAggregateOutputType | null;
};
export type TeamPlayerRegistrationMinAggregateOutputType = {
    id: string | null;
    teamId: string | null;
    playerId: string | null;
    status: $Enums.CommonStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TeamPlayerRegistrationMaxAggregateOutputType = {
    id: string | null;
    teamId: string | null;
    playerId: string | null;
    status: $Enums.CommonStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TeamPlayerRegistrationCountAggregateOutputType = {
    id: number;
    teamId: number;
    playerId: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TeamPlayerRegistrationMinAggregateInputType = {
    id?: true;
    teamId?: true;
    playerId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TeamPlayerRegistrationMaxAggregateInputType = {
    id?: true;
    teamId?: true;
    playerId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TeamPlayerRegistrationCountAggregateInputType = {
    id?: true;
    teamId?: true;
    playerId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TeamPlayerRegistrationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TeamPlayerRegistration to aggregate.
     */
    where?: Prisma.TeamPlayerRegistrationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeamPlayerRegistrations to fetch.
     */
    orderBy?: Prisma.TeamPlayerRegistrationOrderByWithRelationInput | Prisma.TeamPlayerRegistrationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeamPlayerRegistrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeamPlayerRegistrations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TeamPlayerRegistrations
    **/
    _count?: true | TeamPlayerRegistrationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TeamPlayerRegistrationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TeamPlayerRegistrationMaxAggregateInputType;
};
export type GetTeamPlayerRegistrationAggregateType<T extends TeamPlayerRegistrationAggregateArgs> = {
    [P in keyof T & keyof AggregateTeamPlayerRegistration]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeamPlayerRegistration[P]> : Prisma.GetScalarType<T[P], AggregateTeamPlayerRegistration[P]>;
};
export type TeamPlayerRegistrationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeamPlayerRegistrationWhereInput;
    orderBy?: Prisma.TeamPlayerRegistrationOrderByWithAggregationInput | Prisma.TeamPlayerRegistrationOrderByWithAggregationInput[];
    by: Prisma.TeamPlayerRegistrationScalarFieldEnum[] | Prisma.TeamPlayerRegistrationScalarFieldEnum;
    having?: Prisma.TeamPlayerRegistrationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamPlayerRegistrationCountAggregateInputType | true;
    _min?: TeamPlayerRegistrationMinAggregateInputType;
    _max?: TeamPlayerRegistrationMaxAggregateInputType;
};
export type TeamPlayerRegistrationGroupByOutputType = {
    id: string;
    teamId: string;
    playerId: string;
    status: $Enums.CommonStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: TeamPlayerRegistrationCountAggregateOutputType | null;
    _min: TeamPlayerRegistrationMinAggregateOutputType | null;
    _max: TeamPlayerRegistrationMaxAggregateOutputType | null;
};
type GetTeamPlayerRegistrationGroupByPayload<T extends TeamPlayerRegistrationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TeamPlayerRegistrationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TeamPlayerRegistrationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TeamPlayerRegistrationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TeamPlayerRegistrationGroupByOutputType[P]>;
}>>;
export type TeamPlayerRegistrationWhereInput = {
    AND?: Prisma.TeamPlayerRegistrationWhereInput | Prisma.TeamPlayerRegistrationWhereInput[];
    OR?: Prisma.TeamPlayerRegistrationWhereInput[];
    NOT?: Prisma.TeamPlayerRegistrationWhereInput | Prisma.TeamPlayerRegistrationWhereInput[];
    id?: Prisma.StringFilter<"TeamPlayerRegistration"> | string;
    teamId?: Prisma.StringFilter<"TeamPlayerRegistration"> | string;
    playerId?: Prisma.StringFilter<"TeamPlayerRegistration"> | string;
    status?: Prisma.EnumCommonStatusFilter<"TeamPlayerRegistration"> | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFilter<"TeamPlayerRegistration"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TeamPlayerRegistration"> | Date | string;
    team?: Prisma.XOR<Prisma.TeamScalarRelationFilter, Prisma.TeamWhereInput>;
    player?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TeamPlayerRegistrationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    team?: Prisma.TeamOrderByWithRelationInput;
    player?: Prisma.UserOrderByWithRelationInput;
};
export type TeamPlayerRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TeamPlayerRegistrationWhereInput | Prisma.TeamPlayerRegistrationWhereInput[];
    OR?: Prisma.TeamPlayerRegistrationWhereInput[];
    NOT?: Prisma.TeamPlayerRegistrationWhereInput | Prisma.TeamPlayerRegistrationWhereInput[];
    teamId?: Prisma.StringFilter<"TeamPlayerRegistration"> | string;
    playerId?: Prisma.StringFilter<"TeamPlayerRegistration"> | string;
    status?: Prisma.EnumCommonStatusFilter<"TeamPlayerRegistration"> | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFilter<"TeamPlayerRegistration"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TeamPlayerRegistration"> | Date | string;
    team?: Prisma.XOR<Prisma.TeamScalarRelationFilter, Prisma.TeamWhereInput>;
    player?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type TeamPlayerRegistrationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TeamPlayerRegistrationCountOrderByAggregateInput;
    _max?: Prisma.TeamPlayerRegistrationMaxOrderByAggregateInput;
    _min?: Prisma.TeamPlayerRegistrationMinOrderByAggregateInput;
};
export type TeamPlayerRegistrationScalarWhereWithAggregatesInput = {
    AND?: Prisma.TeamPlayerRegistrationScalarWhereWithAggregatesInput | Prisma.TeamPlayerRegistrationScalarWhereWithAggregatesInput[];
    OR?: Prisma.TeamPlayerRegistrationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TeamPlayerRegistrationScalarWhereWithAggregatesInput | Prisma.TeamPlayerRegistrationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TeamPlayerRegistration"> | string;
    teamId?: Prisma.StringWithAggregatesFilter<"TeamPlayerRegistration"> | string;
    playerId?: Prisma.StringWithAggregatesFilter<"TeamPlayerRegistration"> | string;
    status?: Prisma.EnumCommonStatusWithAggregatesFilter<"TeamPlayerRegistration"> | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TeamPlayerRegistration"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TeamPlayerRegistration"> | Date | string;
};
export type TeamPlayerRegistrationCreateInput = {
    id?: string;
    status?: $Enums.CommonStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    team: Prisma.TeamCreateNestedOneWithoutTeamPlayerRegistrationsInput;
    player: Prisma.UserCreateNestedOneWithoutTeamPlayerRegistrationsInput;
};
export type TeamPlayerRegistrationUncheckedCreateInput = {
    id?: string;
    teamId: string;
    playerId: string;
    status?: $Enums.CommonStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeamPlayerRegistrationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCommonStatusFieldUpdateOperationsInput | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneRequiredWithoutTeamPlayerRegistrationsNestedInput;
    player?: Prisma.UserUpdateOneRequiredWithoutTeamPlayerRegistrationsNestedInput;
};
export type TeamPlayerRegistrationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCommonStatusFieldUpdateOperationsInput | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamPlayerRegistrationCreateManyInput = {
    id?: string;
    teamId: string;
    playerId: string;
    status?: $Enums.CommonStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeamPlayerRegistrationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCommonStatusFieldUpdateOperationsInput | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamPlayerRegistrationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCommonStatusFieldUpdateOperationsInput | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamPlayerRegistrationListRelationFilter = {
    every?: Prisma.TeamPlayerRegistrationWhereInput;
    some?: Prisma.TeamPlayerRegistrationWhereInput;
    none?: Prisma.TeamPlayerRegistrationWhereInput;
};
export type TeamPlayerRegistrationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TeamPlayerRegistrationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TeamPlayerRegistrationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TeamPlayerRegistrationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teamId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TeamPlayerRegistrationCreateNestedManyWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateWithoutPlayerInput, Prisma.TeamPlayerRegistrationUncheckedCreateWithoutPlayerInput> | Prisma.TeamPlayerRegistrationCreateWithoutPlayerInput[] | Prisma.TeamPlayerRegistrationUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TeamPlayerRegistrationCreateOrConnectWithoutPlayerInput | Prisma.TeamPlayerRegistrationCreateOrConnectWithoutPlayerInput[];
    createMany?: Prisma.TeamPlayerRegistrationCreateManyPlayerInputEnvelope;
    connect?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
};
export type TeamPlayerRegistrationUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateWithoutPlayerInput, Prisma.TeamPlayerRegistrationUncheckedCreateWithoutPlayerInput> | Prisma.TeamPlayerRegistrationCreateWithoutPlayerInput[] | Prisma.TeamPlayerRegistrationUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TeamPlayerRegistrationCreateOrConnectWithoutPlayerInput | Prisma.TeamPlayerRegistrationCreateOrConnectWithoutPlayerInput[];
    createMany?: Prisma.TeamPlayerRegistrationCreateManyPlayerInputEnvelope;
    connect?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
};
export type TeamPlayerRegistrationUpdateManyWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateWithoutPlayerInput, Prisma.TeamPlayerRegistrationUncheckedCreateWithoutPlayerInput> | Prisma.TeamPlayerRegistrationCreateWithoutPlayerInput[] | Prisma.TeamPlayerRegistrationUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TeamPlayerRegistrationCreateOrConnectWithoutPlayerInput | Prisma.TeamPlayerRegistrationCreateOrConnectWithoutPlayerInput[];
    upsert?: Prisma.TeamPlayerRegistrationUpsertWithWhereUniqueWithoutPlayerInput | Prisma.TeamPlayerRegistrationUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: Prisma.TeamPlayerRegistrationCreateManyPlayerInputEnvelope;
    set?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    disconnect?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    delete?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    connect?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    update?: Prisma.TeamPlayerRegistrationUpdateWithWhereUniqueWithoutPlayerInput | Prisma.TeamPlayerRegistrationUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?: Prisma.TeamPlayerRegistrationUpdateManyWithWhereWithoutPlayerInput | Prisma.TeamPlayerRegistrationUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: Prisma.TeamPlayerRegistrationScalarWhereInput | Prisma.TeamPlayerRegistrationScalarWhereInput[];
};
export type TeamPlayerRegistrationUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateWithoutPlayerInput, Prisma.TeamPlayerRegistrationUncheckedCreateWithoutPlayerInput> | Prisma.TeamPlayerRegistrationCreateWithoutPlayerInput[] | Prisma.TeamPlayerRegistrationUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TeamPlayerRegistrationCreateOrConnectWithoutPlayerInput | Prisma.TeamPlayerRegistrationCreateOrConnectWithoutPlayerInput[];
    upsert?: Prisma.TeamPlayerRegistrationUpsertWithWhereUniqueWithoutPlayerInput | Prisma.TeamPlayerRegistrationUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: Prisma.TeamPlayerRegistrationCreateManyPlayerInputEnvelope;
    set?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    disconnect?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    delete?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    connect?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    update?: Prisma.TeamPlayerRegistrationUpdateWithWhereUniqueWithoutPlayerInput | Prisma.TeamPlayerRegistrationUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?: Prisma.TeamPlayerRegistrationUpdateManyWithWhereWithoutPlayerInput | Prisma.TeamPlayerRegistrationUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: Prisma.TeamPlayerRegistrationScalarWhereInput | Prisma.TeamPlayerRegistrationScalarWhereInput[];
};
export type TeamPlayerRegistrationCreateNestedManyWithoutTeamInput = {
    create?: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateWithoutTeamInput, Prisma.TeamPlayerRegistrationUncheckedCreateWithoutTeamInput> | Prisma.TeamPlayerRegistrationCreateWithoutTeamInput[] | Prisma.TeamPlayerRegistrationUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.TeamPlayerRegistrationCreateOrConnectWithoutTeamInput | Prisma.TeamPlayerRegistrationCreateOrConnectWithoutTeamInput[];
    createMany?: Prisma.TeamPlayerRegistrationCreateManyTeamInputEnvelope;
    connect?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
};
export type TeamPlayerRegistrationUncheckedCreateNestedManyWithoutTeamInput = {
    create?: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateWithoutTeamInput, Prisma.TeamPlayerRegistrationUncheckedCreateWithoutTeamInput> | Prisma.TeamPlayerRegistrationCreateWithoutTeamInput[] | Prisma.TeamPlayerRegistrationUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.TeamPlayerRegistrationCreateOrConnectWithoutTeamInput | Prisma.TeamPlayerRegistrationCreateOrConnectWithoutTeamInput[];
    createMany?: Prisma.TeamPlayerRegistrationCreateManyTeamInputEnvelope;
    connect?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
};
export type TeamPlayerRegistrationUpdateManyWithoutTeamNestedInput = {
    create?: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateWithoutTeamInput, Prisma.TeamPlayerRegistrationUncheckedCreateWithoutTeamInput> | Prisma.TeamPlayerRegistrationCreateWithoutTeamInput[] | Prisma.TeamPlayerRegistrationUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.TeamPlayerRegistrationCreateOrConnectWithoutTeamInput | Prisma.TeamPlayerRegistrationCreateOrConnectWithoutTeamInput[];
    upsert?: Prisma.TeamPlayerRegistrationUpsertWithWhereUniqueWithoutTeamInput | Prisma.TeamPlayerRegistrationUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: Prisma.TeamPlayerRegistrationCreateManyTeamInputEnvelope;
    set?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    disconnect?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    delete?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    connect?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    update?: Prisma.TeamPlayerRegistrationUpdateWithWhereUniqueWithoutTeamInput | Prisma.TeamPlayerRegistrationUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: Prisma.TeamPlayerRegistrationUpdateManyWithWhereWithoutTeamInput | Prisma.TeamPlayerRegistrationUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: Prisma.TeamPlayerRegistrationScalarWhereInput | Prisma.TeamPlayerRegistrationScalarWhereInput[];
};
export type TeamPlayerRegistrationUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateWithoutTeamInput, Prisma.TeamPlayerRegistrationUncheckedCreateWithoutTeamInput> | Prisma.TeamPlayerRegistrationCreateWithoutTeamInput[] | Prisma.TeamPlayerRegistrationUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: Prisma.TeamPlayerRegistrationCreateOrConnectWithoutTeamInput | Prisma.TeamPlayerRegistrationCreateOrConnectWithoutTeamInput[];
    upsert?: Prisma.TeamPlayerRegistrationUpsertWithWhereUniqueWithoutTeamInput | Prisma.TeamPlayerRegistrationUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: Prisma.TeamPlayerRegistrationCreateManyTeamInputEnvelope;
    set?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    disconnect?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    delete?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    connect?: Prisma.TeamPlayerRegistrationWhereUniqueInput | Prisma.TeamPlayerRegistrationWhereUniqueInput[];
    update?: Prisma.TeamPlayerRegistrationUpdateWithWhereUniqueWithoutTeamInput | Prisma.TeamPlayerRegistrationUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: Prisma.TeamPlayerRegistrationUpdateManyWithWhereWithoutTeamInput | Prisma.TeamPlayerRegistrationUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: Prisma.TeamPlayerRegistrationScalarWhereInput | Prisma.TeamPlayerRegistrationScalarWhereInput[];
};
export type EnumCommonStatusFieldUpdateOperationsInput = {
    set?: $Enums.CommonStatus;
};
export type TeamPlayerRegistrationCreateWithoutPlayerInput = {
    id?: string;
    status?: $Enums.CommonStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    team: Prisma.TeamCreateNestedOneWithoutTeamPlayerRegistrationsInput;
};
export type TeamPlayerRegistrationUncheckedCreateWithoutPlayerInput = {
    id?: string;
    teamId: string;
    status?: $Enums.CommonStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeamPlayerRegistrationCreateOrConnectWithoutPlayerInput = {
    where: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateWithoutPlayerInput, Prisma.TeamPlayerRegistrationUncheckedCreateWithoutPlayerInput>;
};
export type TeamPlayerRegistrationCreateManyPlayerInputEnvelope = {
    data: Prisma.TeamPlayerRegistrationCreateManyPlayerInput | Prisma.TeamPlayerRegistrationCreateManyPlayerInput[];
    skipDuplicates?: boolean;
};
export type TeamPlayerRegistrationUpsertWithWhereUniqueWithoutPlayerInput = {
    where: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeamPlayerRegistrationUpdateWithoutPlayerInput, Prisma.TeamPlayerRegistrationUncheckedUpdateWithoutPlayerInput>;
    create: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateWithoutPlayerInput, Prisma.TeamPlayerRegistrationUncheckedCreateWithoutPlayerInput>;
};
export type TeamPlayerRegistrationUpdateWithWhereUniqueWithoutPlayerInput = {
    where: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeamPlayerRegistrationUpdateWithoutPlayerInput, Prisma.TeamPlayerRegistrationUncheckedUpdateWithoutPlayerInput>;
};
export type TeamPlayerRegistrationUpdateManyWithWhereWithoutPlayerInput = {
    where: Prisma.TeamPlayerRegistrationScalarWhereInput;
    data: Prisma.XOR<Prisma.TeamPlayerRegistrationUpdateManyMutationInput, Prisma.TeamPlayerRegistrationUncheckedUpdateManyWithoutPlayerInput>;
};
export type TeamPlayerRegistrationScalarWhereInput = {
    AND?: Prisma.TeamPlayerRegistrationScalarWhereInput | Prisma.TeamPlayerRegistrationScalarWhereInput[];
    OR?: Prisma.TeamPlayerRegistrationScalarWhereInput[];
    NOT?: Prisma.TeamPlayerRegistrationScalarWhereInput | Prisma.TeamPlayerRegistrationScalarWhereInput[];
    id?: Prisma.StringFilter<"TeamPlayerRegistration"> | string;
    teamId?: Prisma.StringFilter<"TeamPlayerRegistration"> | string;
    playerId?: Prisma.StringFilter<"TeamPlayerRegistration"> | string;
    status?: Prisma.EnumCommonStatusFilter<"TeamPlayerRegistration"> | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFilter<"TeamPlayerRegistration"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TeamPlayerRegistration"> | Date | string;
};
export type TeamPlayerRegistrationCreateWithoutTeamInput = {
    id?: string;
    status?: $Enums.CommonStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    player: Prisma.UserCreateNestedOneWithoutTeamPlayerRegistrationsInput;
};
export type TeamPlayerRegistrationUncheckedCreateWithoutTeamInput = {
    id?: string;
    playerId: string;
    status?: $Enums.CommonStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeamPlayerRegistrationCreateOrConnectWithoutTeamInput = {
    where: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateWithoutTeamInput, Prisma.TeamPlayerRegistrationUncheckedCreateWithoutTeamInput>;
};
export type TeamPlayerRegistrationCreateManyTeamInputEnvelope = {
    data: Prisma.TeamPlayerRegistrationCreateManyTeamInput | Prisma.TeamPlayerRegistrationCreateManyTeamInput[];
    skipDuplicates?: boolean;
};
export type TeamPlayerRegistrationUpsertWithWhereUniqueWithoutTeamInput = {
    where: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.TeamPlayerRegistrationUpdateWithoutTeamInput, Prisma.TeamPlayerRegistrationUncheckedUpdateWithoutTeamInput>;
    create: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateWithoutTeamInput, Prisma.TeamPlayerRegistrationUncheckedCreateWithoutTeamInput>;
};
export type TeamPlayerRegistrationUpdateWithWhereUniqueWithoutTeamInput = {
    where: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.TeamPlayerRegistrationUpdateWithoutTeamInput, Prisma.TeamPlayerRegistrationUncheckedUpdateWithoutTeamInput>;
};
export type TeamPlayerRegistrationUpdateManyWithWhereWithoutTeamInput = {
    where: Prisma.TeamPlayerRegistrationScalarWhereInput;
    data: Prisma.XOR<Prisma.TeamPlayerRegistrationUpdateManyMutationInput, Prisma.TeamPlayerRegistrationUncheckedUpdateManyWithoutTeamInput>;
};
export type TeamPlayerRegistrationCreateManyPlayerInput = {
    id?: string;
    teamId: string;
    status?: $Enums.CommonStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeamPlayerRegistrationUpdateWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCommonStatusFieldUpdateOperationsInput | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    team?: Prisma.TeamUpdateOneRequiredWithoutTeamPlayerRegistrationsNestedInput;
};
export type TeamPlayerRegistrationUncheckedUpdateWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCommonStatusFieldUpdateOperationsInput | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamPlayerRegistrationUncheckedUpdateManyWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teamId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCommonStatusFieldUpdateOperationsInput | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamPlayerRegistrationCreateManyTeamInput = {
    id?: string;
    playerId: string;
    status?: $Enums.CommonStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TeamPlayerRegistrationUpdateWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCommonStatusFieldUpdateOperationsInput | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    player?: Prisma.UserUpdateOneRequiredWithoutTeamPlayerRegistrationsNestedInput;
};
export type TeamPlayerRegistrationUncheckedUpdateWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCommonStatusFieldUpdateOperationsInput | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamPlayerRegistrationUncheckedUpdateManyWithoutTeamInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumCommonStatusFieldUpdateOperationsInput | $Enums.CommonStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TeamPlayerRegistrationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teamId?: boolean;
    playerId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teamPlayerRegistration"]>;
export type TeamPlayerRegistrationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teamId?: boolean;
    playerId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teamPlayerRegistration"]>;
export type TeamPlayerRegistrationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teamId?: boolean;
    playerId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teamPlayerRegistration"]>;
export type TeamPlayerRegistrationSelectScalar = {
    id?: boolean;
    teamId?: boolean;
    playerId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TeamPlayerRegistrationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "teamId" | "playerId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["teamPlayerRegistration"]>;
export type TeamPlayerRegistrationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TeamPlayerRegistrationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TeamPlayerRegistrationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    team?: boolean | Prisma.TeamDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TeamPlayerRegistrationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TeamPlayerRegistration";
    objects: {
        team: Prisma.$TeamPayload<ExtArgs>;
        player: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        teamId: string;
        playerId: string;
        status: $Enums.CommonStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["teamPlayerRegistration"]>;
    composites: {};
};
export type TeamPlayerRegistrationGetPayload<S extends boolean | null | undefined | TeamPlayerRegistrationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TeamPlayerRegistrationPayload, S>;
export type TeamPlayerRegistrationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TeamPlayerRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: TeamPlayerRegistrationCountAggregateInputType | true;
};
export interface TeamPlayerRegistrationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TeamPlayerRegistration'];
        meta: {
            name: 'TeamPlayerRegistration';
        };
    };
    /**
     * Find zero or one TeamPlayerRegistration that matches the filter.
     * @param {TeamPlayerRegistrationFindUniqueArgs} args - Arguments to find a TeamPlayerRegistration
     * @example
     * // Get one TeamPlayerRegistration
     * const teamPlayerRegistration = await prisma.teamPlayerRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamPlayerRegistrationFindUniqueArgs>(args: Prisma.SelectSubset<T, TeamPlayerRegistrationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TeamPlayerRegistrationClient<runtime.Types.Result.GetResult<Prisma.$TeamPlayerRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TeamPlayerRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamPlayerRegistrationFindUniqueOrThrowArgs} args - Arguments to find a TeamPlayerRegistration
     * @example
     * // Get one TeamPlayerRegistration
     * const teamPlayerRegistration = await prisma.teamPlayerRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamPlayerRegistrationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TeamPlayerRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeamPlayerRegistrationClient<runtime.Types.Result.GetResult<Prisma.$TeamPlayerRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TeamPlayerRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerRegistrationFindFirstArgs} args - Arguments to find a TeamPlayerRegistration
     * @example
     * // Get one TeamPlayerRegistration
     * const teamPlayerRegistration = await prisma.teamPlayerRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamPlayerRegistrationFindFirstArgs>(args?: Prisma.SelectSubset<T, TeamPlayerRegistrationFindFirstArgs<ExtArgs>>): Prisma.Prisma__TeamPlayerRegistrationClient<runtime.Types.Result.GetResult<Prisma.$TeamPlayerRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TeamPlayerRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerRegistrationFindFirstOrThrowArgs} args - Arguments to find a TeamPlayerRegistration
     * @example
     * // Get one TeamPlayerRegistration
     * const teamPlayerRegistration = await prisma.teamPlayerRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamPlayerRegistrationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TeamPlayerRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeamPlayerRegistrationClient<runtime.Types.Result.GetResult<Prisma.$TeamPlayerRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TeamPlayerRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamPlayerRegistrations
     * const teamPlayerRegistrations = await prisma.teamPlayerRegistration.findMany()
     *
     * // Get first 10 TeamPlayerRegistrations
     * const teamPlayerRegistrations = await prisma.teamPlayerRegistration.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamPlayerRegistrationWithIdOnly = await prisma.teamPlayerRegistration.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TeamPlayerRegistrationFindManyArgs>(args?: Prisma.SelectSubset<T, TeamPlayerRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeamPlayerRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TeamPlayerRegistration.
     * @param {TeamPlayerRegistrationCreateArgs} args - Arguments to create a TeamPlayerRegistration.
     * @example
     * // Create one TeamPlayerRegistration
     * const TeamPlayerRegistration = await prisma.teamPlayerRegistration.create({
     *   data: {
     *     // ... data to create a TeamPlayerRegistration
     *   }
     * })
     *
     */
    create<T extends TeamPlayerRegistrationCreateArgs>(args: Prisma.SelectSubset<T, TeamPlayerRegistrationCreateArgs<ExtArgs>>): Prisma.Prisma__TeamPlayerRegistrationClient<runtime.Types.Result.GetResult<Prisma.$TeamPlayerRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TeamPlayerRegistrations.
     * @param {TeamPlayerRegistrationCreateManyArgs} args - Arguments to create many TeamPlayerRegistrations.
     * @example
     * // Create many TeamPlayerRegistrations
     * const teamPlayerRegistration = await prisma.teamPlayerRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TeamPlayerRegistrationCreateManyArgs>(args?: Prisma.SelectSubset<T, TeamPlayerRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TeamPlayerRegistrations and returns the data saved in the database.
     * @param {TeamPlayerRegistrationCreateManyAndReturnArgs} args - Arguments to create many TeamPlayerRegistrations.
     * @example
     * // Create many TeamPlayerRegistrations
     * const teamPlayerRegistration = await prisma.teamPlayerRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TeamPlayerRegistrations and only return the `id`
     * const teamPlayerRegistrationWithIdOnly = await prisma.teamPlayerRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TeamPlayerRegistrationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TeamPlayerRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeamPlayerRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TeamPlayerRegistration.
     * @param {TeamPlayerRegistrationDeleteArgs} args - Arguments to delete one TeamPlayerRegistration.
     * @example
     * // Delete one TeamPlayerRegistration
     * const TeamPlayerRegistration = await prisma.teamPlayerRegistration.delete({
     *   where: {
     *     // ... filter to delete one TeamPlayerRegistration
     *   }
     * })
     *
     */
    delete<T extends TeamPlayerRegistrationDeleteArgs>(args: Prisma.SelectSubset<T, TeamPlayerRegistrationDeleteArgs<ExtArgs>>): Prisma.Prisma__TeamPlayerRegistrationClient<runtime.Types.Result.GetResult<Prisma.$TeamPlayerRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TeamPlayerRegistration.
     * @param {TeamPlayerRegistrationUpdateArgs} args - Arguments to update one TeamPlayerRegistration.
     * @example
     * // Update one TeamPlayerRegistration
     * const teamPlayerRegistration = await prisma.teamPlayerRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TeamPlayerRegistrationUpdateArgs>(args: Prisma.SelectSubset<T, TeamPlayerRegistrationUpdateArgs<ExtArgs>>): Prisma.Prisma__TeamPlayerRegistrationClient<runtime.Types.Result.GetResult<Prisma.$TeamPlayerRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TeamPlayerRegistrations.
     * @param {TeamPlayerRegistrationDeleteManyArgs} args - Arguments to filter TeamPlayerRegistrations to delete.
     * @example
     * // Delete a few TeamPlayerRegistrations
     * const { count } = await prisma.teamPlayerRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TeamPlayerRegistrationDeleteManyArgs>(args?: Prisma.SelectSubset<T, TeamPlayerRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TeamPlayerRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamPlayerRegistrations
     * const teamPlayerRegistration = await prisma.teamPlayerRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TeamPlayerRegistrationUpdateManyArgs>(args: Prisma.SelectSubset<T, TeamPlayerRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TeamPlayerRegistrations and returns the data updated in the database.
     * @param {TeamPlayerRegistrationUpdateManyAndReturnArgs} args - Arguments to update many TeamPlayerRegistrations.
     * @example
     * // Update many TeamPlayerRegistrations
     * const teamPlayerRegistration = await prisma.teamPlayerRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TeamPlayerRegistrations and only return the `id`
     * const teamPlayerRegistrationWithIdOnly = await prisma.teamPlayerRegistration.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamPlayerRegistrationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TeamPlayerRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeamPlayerRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TeamPlayerRegistration.
     * @param {TeamPlayerRegistrationUpsertArgs} args - Arguments to update or create a TeamPlayerRegistration.
     * @example
     * // Update or create a TeamPlayerRegistration
     * const teamPlayerRegistration = await prisma.teamPlayerRegistration.upsert({
     *   create: {
     *     // ... data to create a TeamPlayerRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamPlayerRegistration we want to update
     *   }
     * })
     */
    upsert<T extends TeamPlayerRegistrationUpsertArgs>(args: Prisma.SelectSubset<T, TeamPlayerRegistrationUpsertArgs<ExtArgs>>): Prisma.Prisma__TeamPlayerRegistrationClient<runtime.Types.Result.GetResult<Prisma.$TeamPlayerRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TeamPlayerRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerRegistrationCountArgs} args - Arguments to filter TeamPlayerRegistrations to count.
     * @example
     * // Count the number of TeamPlayerRegistrations
     * const count = await prisma.teamPlayerRegistration.count({
     *   where: {
     *     // ... the filter for the TeamPlayerRegistrations we want to count
     *   }
     * })
    **/
    count<T extends TeamPlayerRegistrationCountArgs>(args?: Prisma.Subset<T, TeamPlayerRegistrationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TeamPlayerRegistrationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TeamPlayerRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamPlayerRegistrationAggregateArgs>(args: Prisma.Subset<T, TeamPlayerRegistrationAggregateArgs>): Prisma.PrismaPromise<GetTeamPlayerRegistrationAggregateType<T>>;
    /**
     * Group by TeamPlayerRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerRegistrationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TeamPlayerRegistrationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TeamPlayerRegistrationGroupByArgs['orderBy'];
    } : {
        orderBy?: TeamPlayerRegistrationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TeamPlayerRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamPlayerRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TeamPlayerRegistration model
     */
    readonly fields: TeamPlayerRegistrationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TeamPlayerRegistration.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TeamPlayerRegistrationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    team<T extends Prisma.TeamDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeamDefaultArgs<ExtArgs>>): Prisma.Prisma__TeamClient<runtime.Types.Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    player<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the TeamPlayerRegistration model
 */
export interface TeamPlayerRegistrationFieldRefs {
    readonly id: Prisma.FieldRef<"TeamPlayerRegistration", 'String'>;
    readonly teamId: Prisma.FieldRef<"TeamPlayerRegistration", 'String'>;
    readonly playerId: Prisma.FieldRef<"TeamPlayerRegistration", 'String'>;
    readonly status: Prisma.FieldRef<"TeamPlayerRegistration", 'CommonStatus'>;
    readonly createdAt: Prisma.FieldRef<"TeamPlayerRegistration", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TeamPlayerRegistration", 'DateTime'>;
}
/**
 * TeamPlayerRegistration findUnique
 */
export type TeamPlayerRegistrationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayerRegistration
     */
    select?: Prisma.TeamPlayerRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamPlayerRegistration
     */
    omit?: Prisma.TeamPlayerRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamPlayerRegistrationInclude<ExtArgs> | null;
    /**
     * Filter, which TeamPlayerRegistration to fetch.
     */
    where: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TeamPlayerRegistration findUniqueOrThrow
 */
export type TeamPlayerRegistrationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayerRegistration
     */
    select?: Prisma.TeamPlayerRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamPlayerRegistration
     */
    omit?: Prisma.TeamPlayerRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamPlayerRegistrationInclude<ExtArgs> | null;
    /**
     * Filter, which TeamPlayerRegistration to fetch.
     */
    where: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TeamPlayerRegistration findFirst
 */
export type TeamPlayerRegistrationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayerRegistration
     */
    select?: Prisma.TeamPlayerRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamPlayerRegistration
     */
    omit?: Prisma.TeamPlayerRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamPlayerRegistrationInclude<ExtArgs> | null;
    /**
     * Filter, which TeamPlayerRegistration to fetch.
     */
    where?: Prisma.TeamPlayerRegistrationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeamPlayerRegistrations to fetch.
     */
    orderBy?: Prisma.TeamPlayerRegistrationOrderByWithRelationInput | Prisma.TeamPlayerRegistrationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TeamPlayerRegistrations.
     */
    cursor?: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeamPlayerRegistrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeamPlayerRegistrations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeamPlayerRegistrations.
     */
    distinct?: Prisma.TeamPlayerRegistrationScalarFieldEnum | Prisma.TeamPlayerRegistrationScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TeamPlayerRegistration findFirstOrThrow
 */
export type TeamPlayerRegistrationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayerRegistration
     */
    select?: Prisma.TeamPlayerRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamPlayerRegistration
     */
    omit?: Prisma.TeamPlayerRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamPlayerRegistrationInclude<ExtArgs> | null;
    /**
     * Filter, which TeamPlayerRegistration to fetch.
     */
    where?: Prisma.TeamPlayerRegistrationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeamPlayerRegistrations to fetch.
     */
    orderBy?: Prisma.TeamPlayerRegistrationOrderByWithRelationInput | Prisma.TeamPlayerRegistrationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TeamPlayerRegistrations.
     */
    cursor?: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeamPlayerRegistrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeamPlayerRegistrations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TeamPlayerRegistrations.
     */
    distinct?: Prisma.TeamPlayerRegistrationScalarFieldEnum | Prisma.TeamPlayerRegistrationScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TeamPlayerRegistration findMany
 */
export type TeamPlayerRegistrationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayerRegistration
     */
    select?: Prisma.TeamPlayerRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamPlayerRegistration
     */
    omit?: Prisma.TeamPlayerRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamPlayerRegistrationInclude<ExtArgs> | null;
    /**
     * Filter, which TeamPlayerRegistrations to fetch.
     */
    where?: Prisma.TeamPlayerRegistrationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TeamPlayerRegistrations to fetch.
     */
    orderBy?: Prisma.TeamPlayerRegistrationOrderByWithRelationInput | Prisma.TeamPlayerRegistrationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TeamPlayerRegistrations.
     */
    cursor?: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TeamPlayerRegistrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TeamPlayerRegistrations.
     */
    skip?: number;
    distinct?: Prisma.TeamPlayerRegistrationScalarFieldEnum | Prisma.TeamPlayerRegistrationScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TeamPlayerRegistration create
 */
export type TeamPlayerRegistrationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayerRegistration
     */
    select?: Prisma.TeamPlayerRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamPlayerRegistration
     */
    omit?: Prisma.TeamPlayerRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamPlayerRegistrationInclude<ExtArgs> | null;
    /**
     * The data needed to create a TeamPlayerRegistration.
     */
    data: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateInput, Prisma.TeamPlayerRegistrationUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TeamPlayerRegistration createMany
 */
export type TeamPlayerRegistrationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamPlayerRegistrations.
     */
    data: Prisma.TeamPlayerRegistrationCreateManyInput | Prisma.TeamPlayerRegistrationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TeamPlayerRegistration createManyAndReturn
 */
export type TeamPlayerRegistrationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayerRegistration
     */
    select?: Prisma.TeamPlayerRegistrationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamPlayerRegistration
     */
    omit?: Prisma.TeamPlayerRegistrationOmit<ExtArgs> | null;
    /**
     * The data used to create many TeamPlayerRegistrations.
     */
    data: Prisma.TeamPlayerRegistrationCreateManyInput | Prisma.TeamPlayerRegistrationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamPlayerRegistrationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TeamPlayerRegistration update
 */
export type TeamPlayerRegistrationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayerRegistration
     */
    select?: Prisma.TeamPlayerRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamPlayerRegistration
     */
    omit?: Prisma.TeamPlayerRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamPlayerRegistrationInclude<ExtArgs> | null;
    /**
     * The data needed to update a TeamPlayerRegistration.
     */
    data: Prisma.XOR<Prisma.TeamPlayerRegistrationUpdateInput, Prisma.TeamPlayerRegistrationUncheckedUpdateInput>;
    /**
     * Choose, which TeamPlayerRegistration to update.
     */
    where: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TeamPlayerRegistration updateMany
 */
export type TeamPlayerRegistrationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamPlayerRegistrations.
     */
    data: Prisma.XOR<Prisma.TeamPlayerRegistrationUpdateManyMutationInput, Prisma.TeamPlayerRegistrationUncheckedUpdateManyInput>;
    /**
     * Filter which TeamPlayerRegistrations to update
     */
    where?: Prisma.TeamPlayerRegistrationWhereInput;
    /**
     * Limit how many TeamPlayerRegistrations to update.
     */
    limit?: number;
};
/**
 * TeamPlayerRegistration updateManyAndReturn
 */
export type TeamPlayerRegistrationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayerRegistration
     */
    select?: Prisma.TeamPlayerRegistrationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamPlayerRegistration
     */
    omit?: Prisma.TeamPlayerRegistrationOmit<ExtArgs> | null;
    /**
     * The data used to update TeamPlayerRegistrations.
     */
    data: Prisma.XOR<Prisma.TeamPlayerRegistrationUpdateManyMutationInput, Prisma.TeamPlayerRegistrationUncheckedUpdateManyInput>;
    /**
     * Filter which TeamPlayerRegistrations to update
     */
    where?: Prisma.TeamPlayerRegistrationWhereInput;
    /**
     * Limit how many TeamPlayerRegistrations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamPlayerRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TeamPlayerRegistration upsert
 */
export type TeamPlayerRegistrationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayerRegistration
     */
    select?: Prisma.TeamPlayerRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamPlayerRegistration
     */
    omit?: Prisma.TeamPlayerRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamPlayerRegistrationInclude<ExtArgs> | null;
    /**
     * The filter to search for the TeamPlayerRegistration to update in case it exists.
     */
    where: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    /**
     * In case the TeamPlayerRegistration found by the `where` argument doesn't exist, create a new TeamPlayerRegistration with this data.
     */
    create: Prisma.XOR<Prisma.TeamPlayerRegistrationCreateInput, Prisma.TeamPlayerRegistrationUncheckedCreateInput>;
    /**
     * In case the TeamPlayerRegistration was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TeamPlayerRegistrationUpdateInput, Prisma.TeamPlayerRegistrationUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TeamPlayerRegistration delete
 */
export type TeamPlayerRegistrationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayerRegistration
     */
    select?: Prisma.TeamPlayerRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamPlayerRegistration
     */
    omit?: Prisma.TeamPlayerRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamPlayerRegistrationInclude<ExtArgs> | null;
    /**
     * Filter which TeamPlayerRegistration to delete.
     */
    where: Prisma.TeamPlayerRegistrationWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TeamPlayerRegistration deleteMany
 */
export type TeamPlayerRegistrationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TeamPlayerRegistrations to delete
     */
    where?: Prisma.TeamPlayerRegistrationWhereInput;
    /**
     * Limit how many TeamPlayerRegistrations to delete.
     */
    limit?: number;
};
/**
 * TeamPlayerRegistration without action
 */
export type TeamPlayerRegistrationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayerRegistration
     */
    select?: Prisma.TeamPlayerRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TeamPlayerRegistration
     */
    omit?: Prisma.TeamPlayerRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeamPlayerRegistrationInclude<ExtArgs> | null;
};
export {};
