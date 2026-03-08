import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TournamentActivity
 *
 */
export type TournamentActivityModel = runtime.Types.Result.DefaultSelection<Prisma.$TournamentActivityPayload>;
export type AggregateTournamentActivity = {
    _count: TournamentActivityCountAggregateOutputType | null;
    _min: TournamentActivityMinAggregateOutputType | null;
    _max: TournamentActivityMaxAggregateOutputType | null;
};
export type TournamentActivityMinAggregateOutputType = {
    id: string | null;
    type: $Enums.TournamentActivityEnum | null;
    tournamentId: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TournamentActivityMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.TournamentActivityEnum | null;
    tournamentId: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TournamentActivityCountAggregateOutputType = {
    id: number;
    type: number;
    tournamentId: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TournamentActivityMinAggregateInputType = {
    id?: true;
    type?: true;
    tournamentId?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TournamentActivityMaxAggregateInputType = {
    id?: true;
    type?: true;
    tournamentId?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TournamentActivityCountAggregateInputType = {
    id?: true;
    type?: true;
    tournamentId?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TournamentActivityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentActivity to aggregate.
     */
    where?: Prisma.TournamentActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentActivities to fetch.
     */
    orderBy?: Prisma.TournamentActivityOrderByWithRelationInput | Prisma.TournamentActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TournamentActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TournamentActivities
    **/
    _count?: true | TournamentActivityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TournamentActivityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TournamentActivityMaxAggregateInputType;
};
export type GetTournamentActivityAggregateType<T extends TournamentActivityAggregateArgs> = {
    [P in keyof T & keyof AggregateTournamentActivity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTournamentActivity[P]> : Prisma.GetScalarType<T[P], AggregateTournamentActivity[P]>;
};
export type TournamentActivityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentActivityWhereInput;
    orderBy?: Prisma.TournamentActivityOrderByWithAggregationInput | Prisma.TournamentActivityOrderByWithAggregationInput[];
    by: Prisma.TournamentActivityScalarFieldEnum[] | Prisma.TournamentActivityScalarFieldEnum;
    having?: Prisma.TournamentActivityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TournamentActivityCountAggregateInputType | true;
    _min?: TournamentActivityMinAggregateInputType;
    _max?: TournamentActivityMaxAggregateInputType;
};
export type TournamentActivityGroupByOutputType = {
    id: string;
    type: $Enums.TournamentActivityEnum;
    tournamentId: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    _count: TournamentActivityCountAggregateOutputType | null;
    _min: TournamentActivityMinAggregateOutputType | null;
    _max: TournamentActivityMaxAggregateOutputType | null;
};
type GetTournamentActivityGroupByPayload<T extends TournamentActivityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TournamentActivityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TournamentActivityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TournamentActivityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TournamentActivityGroupByOutputType[P]>;
}>>;
export type TournamentActivityWhereInput = {
    AND?: Prisma.TournamentActivityWhereInput | Prisma.TournamentActivityWhereInput[];
    OR?: Prisma.TournamentActivityWhereInput[];
    NOT?: Prisma.TournamentActivityWhereInput | Prisma.TournamentActivityWhereInput[];
    id?: Prisma.StringFilter<"TournamentActivity"> | string;
    type?: Prisma.EnumTournamentActivityEnumFilter<"TournamentActivity"> | $Enums.TournamentActivityEnum;
    tournamentId?: Prisma.StringFilter<"TournamentActivity"> | string;
    description?: Prisma.StringFilter<"TournamentActivity"> | string;
    createdAt?: Prisma.DateTimeFilter<"TournamentActivity"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TournamentActivity"> | Date | string;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
};
export type TournamentActivityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tournament?: Prisma.TournamentOrderByWithRelationInput;
};
export type TournamentActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TournamentActivityWhereInput | Prisma.TournamentActivityWhereInput[];
    OR?: Prisma.TournamentActivityWhereInput[];
    NOT?: Prisma.TournamentActivityWhereInput | Prisma.TournamentActivityWhereInput[];
    type?: Prisma.EnumTournamentActivityEnumFilter<"TournamentActivity"> | $Enums.TournamentActivityEnum;
    tournamentId?: Prisma.StringFilter<"TournamentActivity"> | string;
    description?: Prisma.StringFilter<"TournamentActivity"> | string;
    createdAt?: Prisma.DateTimeFilter<"TournamentActivity"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TournamentActivity"> | Date | string;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
}, "id">;
export type TournamentActivityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TournamentActivityCountOrderByAggregateInput;
    _max?: Prisma.TournamentActivityMaxOrderByAggregateInput;
    _min?: Prisma.TournamentActivityMinOrderByAggregateInput;
};
export type TournamentActivityScalarWhereWithAggregatesInput = {
    AND?: Prisma.TournamentActivityScalarWhereWithAggregatesInput | Prisma.TournamentActivityScalarWhereWithAggregatesInput[];
    OR?: Prisma.TournamentActivityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TournamentActivityScalarWhereWithAggregatesInput | Prisma.TournamentActivityScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TournamentActivity"> | string;
    type?: Prisma.EnumTournamentActivityEnumWithAggregatesFilter<"TournamentActivity"> | $Enums.TournamentActivityEnum;
    tournamentId?: Prisma.StringWithAggregatesFilter<"TournamentActivity"> | string;
    description?: Prisma.StringWithAggregatesFilter<"TournamentActivity"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TournamentActivity"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TournamentActivity"> | Date | string;
};
export type TournamentActivityCreateInput = {
    id?: string;
    type: $Enums.TournamentActivityEnum;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutActivitiesInput;
};
export type TournamentActivityUncheckedCreateInput = {
    id?: string;
    type: $Enums.TournamentActivityEnum;
    tournamentId: string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentActivityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentActivityEnumFieldUpdateOperationsInput | $Enums.TournamentActivityEnum;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutActivitiesNestedInput;
};
export type TournamentActivityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentActivityEnumFieldUpdateOperationsInput | $Enums.TournamentActivityEnum;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentActivityCreateManyInput = {
    id?: string;
    type: $Enums.TournamentActivityEnum;
    tournamentId: string;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentActivityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentActivityEnumFieldUpdateOperationsInput | $Enums.TournamentActivityEnum;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentActivityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentActivityEnumFieldUpdateOperationsInput | $Enums.TournamentActivityEnum;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentActivityListRelationFilter = {
    every?: Prisma.TournamentActivityWhereInput;
    some?: Prisma.TournamentActivityWhereInput;
    none?: Prisma.TournamentActivityWhereInput;
};
export type TournamentActivityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TournamentActivityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentActivityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentActivityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentActivityCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.TournamentActivityCreateWithoutTournamentInput, Prisma.TournamentActivityUncheckedCreateWithoutTournamentInput> | Prisma.TournamentActivityCreateWithoutTournamentInput[] | Prisma.TournamentActivityUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentActivityCreateOrConnectWithoutTournamentInput | Prisma.TournamentActivityCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.TournamentActivityCreateManyTournamentInputEnvelope;
    connect?: Prisma.TournamentActivityWhereUniqueInput | Prisma.TournamentActivityWhereUniqueInput[];
};
export type TournamentActivityUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.TournamentActivityCreateWithoutTournamentInput, Prisma.TournamentActivityUncheckedCreateWithoutTournamentInput> | Prisma.TournamentActivityCreateWithoutTournamentInput[] | Prisma.TournamentActivityUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentActivityCreateOrConnectWithoutTournamentInput | Prisma.TournamentActivityCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.TournamentActivityCreateManyTournamentInputEnvelope;
    connect?: Prisma.TournamentActivityWhereUniqueInput | Prisma.TournamentActivityWhereUniqueInput[];
};
export type TournamentActivityUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentActivityCreateWithoutTournamentInput, Prisma.TournamentActivityUncheckedCreateWithoutTournamentInput> | Prisma.TournamentActivityCreateWithoutTournamentInput[] | Prisma.TournamentActivityUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentActivityCreateOrConnectWithoutTournamentInput | Prisma.TournamentActivityCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.TournamentActivityUpsertWithWhereUniqueWithoutTournamentInput | Prisma.TournamentActivityUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.TournamentActivityCreateManyTournamentInputEnvelope;
    set?: Prisma.TournamentActivityWhereUniqueInput | Prisma.TournamentActivityWhereUniqueInput[];
    disconnect?: Prisma.TournamentActivityWhereUniqueInput | Prisma.TournamentActivityWhereUniqueInput[];
    delete?: Prisma.TournamentActivityWhereUniqueInput | Prisma.TournamentActivityWhereUniqueInput[];
    connect?: Prisma.TournamentActivityWhereUniqueInput | Prisma.TournamentActivityWhereUniqueInput[];
    update?: Prisma.TournamentActivityUpdateWithWhereUniqueWithoutTournamentInput | Prisma.TournamentActivityUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.TournamentActivityUpdateManyWithWhereWithoutTournamentInput | Prisma.TournamentActivityUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.TournamentActivityScalarWhereInput | Prisma.TournamentActivityScalarWhereInput[];
};
export type TournamentActivityUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentActivityCreateWithoutTournamentInput, Prisma.TournamentActivityUncheckedCreateWithoutTournamentInput> | Prisma.TournamentActivityCreateWithoutTournamentInput[] | Prisma.TournamentActivityUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentActivityCreateOrConnectWithoutTournamentInput | Prisma.TournamentActivityCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.TournamentActivityUpsertWithWhereUniqueWithoutTournamentInput | Prisma.TournamentActivityUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.TournamentActivityCreateManyTournamentInputEnvelope;
    set?: Prisma.TournamentActivityWhereUniqueInput | Prisma.TournamentActivityWhereUniqueInput[];
    disconnect?: Prisma.TournamentActivityWhereUniqueInput | Prisma.TournamentActivityWhereUniqueInput[];
    delete?: Prisma.TournamentActivityWhereUniqueInput | Prisma.TournamentActivityWhereUniqueInput[];
    connect?: Prisma.TournamentActivityWhereUniqueInput | Prisma.TournamentActivityWhereUniqueInput[];
    update?: Prisma.TournamentActivityUpdateWithWhereUniqueWithoutTournamentInput | Prisma.TournamentActivityUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.TournamentActivityUpdateManyWithWhereWithoutTournamentInput | Prisma.TournamentActivityUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.TournamentActivityScalarWhereInput | Prisma.TournamentActivityScalarWhereInput[];
};
export type EnumTournamentActivityEnumFieldUpdateOperationsInput = {
    set?: $Enums.TournamentActivityEnum;
};
export type TournamentActivityCreateWithoutTournamentInput = {
    id?: string;
    type: $Enums.TournamentActivityEnum;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentActivityUncheckedCreateWithoutTournamentInput = {
    id?: string;
    type: $Enums.TournamentActivityEnum;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentActivityCreateOrConnectWithoutTournamentInput = {
    where: Prisma.TournamentActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentActivityCreateWithoutTournamentInput, Prisma.TournamentActivityUncheckedCreateWithoutTournamentInput>;
};
export type TournamentActivityCreateManyTournamentInputEnvelope = {
    data: Prisma.TournamentActivityCreateManyTournamentInput | Prisma.TournamentActivityCreateManyTournamentInput[];
    skipDuplicates?: boolean;
};
export type TournamentActivityUpsertWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.TournamentActivityWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentActivityUpdateWithoutTournamentInput, Prisma.TournamentActivityUncheckedUpdateWithoutTournamentInput>;
    create: Prisma.XOR<Prisma.TournamentActivityCreateWithoutTournamentInput, Prisma.TournamentActivityUncheckedCreateWithoutTournamentInput>;
};
export type TournamentActivityUpdateWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.TournamentActivityWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentActivityUpdateWithoutTournamentInput, Prisma.TournamentActivityUncheckedUpdateWithoutTournamentInput>;
};
export type TournamentActivityUpdateManyWithWhereWithoutTournamentInput = {
    where: Prisma.TournamentActivityScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentActivityUpdateManyMutationInput, Prisma.TournamentActivityUncheckedUpdateManyWithoutTournamentInput>;
};
export type TournamentActivityScalarWhereInput = {
    AND?: Prisma.TournamentActivityScalarWhereInput | Prisma.TournamentActivityScalarWhereInput[];
    OR?: Prisma.TournamentActivityScalarWhereInput[];
    NOT?: Prisma.TournamentActivityScalarWhereInput | Prisma.TournamentActivityScalarWhereInput[];
    id?: Prisma.StringFilter<"TournamentActivity"> | string;
    type?: Prisma.EnumTournamentActivityEnumFilter<"TournamentActivity"> | $Enums.TournamentActivityEnum;
    tournamentId?: Prisma.StringFilter<"TournamentActivity"> | string;
    description?: Prisma.StringFilter<"TournamentActivity"> | string;
    createdAt?: Prisma.DateTimeFilter<"TournamentActivity"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TournamentActivity"> | Date | string;
};
export type TournamentActivityCreateManyTournamentInput = {
    id?: string;
    type: $Enums.TournamentActivityEnum;
    description: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentActivityUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentActivityEnumFieldUpdateOperationsInput | $Enums.TournamentActivityEnum;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentActivityUncheckedUpdateWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentActivityEnumFieldUpdateOperationsInput | $Enums.TournamentActivityEnum;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentActivityUncheckedUpdateManyWithoutTournamentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTournamentActivityEnumFieldUpdateOperationsInput | $Enums.TournamentActivityEnum;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentActivitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    tournamentId?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentActivity"]>;
export type TournamentActivitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    tournamentId?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentActivity"]>;
export type TournamentActivitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    tournamentId?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentActivity"]>;
export type TournamentActivitySelectScalar = {
    id?: boolean;
    type?: boolean;
    tournamentId?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TournamentActivityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "tournamentId" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["tournamentActivity"]>;
export type TournamentActivityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type TournamentActivityIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type TournamentActivityIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type $TournamentActivityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TournamentActivity";
    objects: {
        tournament: Prisma.$TournamentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: $Enums.TournamentActivityEnum;
        tournamentId: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["tournamentActivity"]>;
    composites: {};
};
export type TournamentActivityGetPayload<S extends boolean | null | undefined | TournamentActivityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload, S>;
export type TournamentActivityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TournamentActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: TournamentActivityCountAggregateInputType | true;
};
export interface TournamentActivityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TournamentActivity'];
        meta: {
            name: 'TournamentActivity';
        };
    };
    /**
     * Find zero or one TournamentActivity that matches the filter.
     * @param {TournamentActivityFindUniqueArgs} args - Arguments to find a TournamentActivity
     * @example
     * // Get one TournamentActivity
     * const tournamentActivity = await prisma.tournamentActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentActivityFindUniqueArgs>(args: Prisma.SelectSubset<T, TournamentActivityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TournamentActivityClient<runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TournamentActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentActivityFindUniqueOrThrowArgs} args - Arguments to find a TournamentActivity
     * @example
     * // Get one TournamentActivity
     * const tournamentActivity = await prisma.tournamentActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentActivityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TournamentActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentActivityClient<runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TournamentActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentActivityFindFirstArgs} args - Arguments to find a TournamentActivity
     * @example
     * // Get one TournamentActivity
     * const tournamentActivity = await prisma.tournamentActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentActivityFindFirstArgs>(args?: Prisma.SelectSubset<T, TournamentActivityFindFirstArgs<ExtArgs>>): Prisma.Prisma__TournamentActivityClient<runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TournamentActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentActivityFindFirstOrThrowArgs} args - Arguments to find a TournamentActivity
     * @example
     * // Get one TournamentActivity
     * const tournamentActivity = await prisma.tournamentActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentActivityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TournamentActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentActivityClient<runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TournamentActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentActivities
     * const tournamentActivities = await prisma.tournamentActivity.findMany()
     *
     * // Get first 10 TournamentActivities
     * const tournamentActivities = await prisma.tournamentActivity.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tournamentActivityWithIdOnly = await prisma.tournamentActivity.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TournamentActivityFindManyArgs>(args?: Prisma.SelectSubset<T, TournamentActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TournamentActivity.
     * @param {TournamentActivityCreateArgs} args - Arguments to create a TournamentActivity.
     * @example
     * // Create one TournamentActivity
     * const TournamentActivity = await prisma.tournamentActivity.create({
     *   data: {
     *     // ... data to create a TournamentActivity
     *   }
     * })
     *
     */
    create<T extends TournamentActivityCreateArgs>(args: Prisma.SelectSubset<T, TournamentActivityCreateArgs<ExtArgs>>): Prisma.Prisma__TournamentActivityClient<runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TournamentActivities.
     * @param {TournamentActivityCreateManyArgs} args - Arguments to create many TournamentActivities.
     * @example
     * // Create many TournamentActivities
     * const tournamentActivity = await prisma.tournamentActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TournamentActivityCreateManyArgs>(args?: Prisma.SelectSubset<T, TournamentActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TournamentActivities and returns the data saved in the database.
     * @param {TournamentActivityCreateManyAndReturnArgs} args - Arguments to create many TournamentActivities.
     * @example
     * // Create many TournamentActivities
     * const tournamentActivity = await prisma.tournamentActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TournamentActivities and only return the `id`
     * const tournamentActivityWithIdOnly = await prisma.tournamentActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TournamentActivityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TournamentActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TournamentActivity.
     * @param {TournamentActivityDeleteArgs} args - Arguments to delete one TournamentActivity.
     * @example
     * // Delete one TournamentActivity
     * const TournamentActivity = await prisma.tournamentActivity.delete({
     *   where: {
     *     // ... filter to delete one TournamentActivity
     *   }
     * })
     *
     */
    delete<T extends TournamentActivityDeleteArgs>(args: Prisma.SelectSubset<T, TournamentActivityDeleteArgs<ExtArgs>>): Prisma.Prisma__TournamentActivityClient<runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TournamentActivity.
     * @param {TournamentActivityUpdateArgs} args - Arguments to update one TournamentActivity.
     * @example
     * // Update one TournamentActivity
     * const tournamentActivity = await prisma.tournamentActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TournamentActivityUpdateArgs>(args: Prisma.SelectSubset<T, TournamentActivityUpdateArgs<ExtArgs>>): Prisma.Prisma__TournamentActivityClient<runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TournamentActivities.
     * @param {TournamentActivityDeleteManyArgs} args - Arguments to filter TournamentActivities to delete.
     * @example
     * // Delete a few TournamentActivities
     * const { count } = await prisma.tournamentActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TournamentActivityDeleteManyArgs>(args?: Prisma.SelectSubset<T, TournamentActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TournamentActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentActivities
     * const tournamentActivity = await prisma.tournamentActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TournamentActivityUpdateManyArgs>(args: Prisma.SelectSubset<T, TournamentActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TournamentActivities and returns the data updated in the database.
     * @param {TournamentActivityUpdateManyAndReturnArgs} args - Arguments to update many TournamentActivities.
     * @example
     * // Update many TournamentActivities
     * const tournamentActivity = await prisma.tournamentActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TournamentActivities and only return the `id`
     * const tournamentActivityWithIdOnly = await prisma.tournamentActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends TournamentActivityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TournamentActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TournamentActivity.
     * @param {TournamentActivityUpsertArgs} args - Arguments to update or create a TournamentActivity.
     * @example
     * // Update or create a TournamentActivity
     * const tournamentActivity = await prisma.tournamentActivity.upsert({
     *   create: {
     *     // ... data to create a TournamentActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentActivity we want to update
     *   }
     * })
     */
    upsert<T extends TournamentActivityUpsertArgs>(args: Prisma.SelectSubset<T, TournamentActivityUpsertArgs<ExtArgs>>): Prisma.Prisma__TournamentActivityClient<runtime.Types.Result.GetResult<Prisma.$TournamentActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TournamentActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentActivityCountArgs} args - Arguments to filter TournamentActivities to count.
     * @example
     * // Count the number of TournamentActivities
     * const count = await prisma.tournamentActivity.count({
     *   where: {
     *     // ... the filter for the TournamentActivities we want to count
     *   }
     * })
    **/
    count<T extends TournamentActivityCountArgs>(args?: Prisma.Subset<T, TournamentActivityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TournamentActivityCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TournamentActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentActivityAggregateArgs>(args: Prisma.Subset<T, TournamentActivityAggregateArgs>): Prisma.PrismaPromise<GetTournamentActivityAggregateType<T>>;
    /**
     * Group by TournamentActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentActivityGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TournamentActivityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TournamentActivityGroupByArgs['orderBy'];
    } : {
        orderBy?: TournamentActivityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TournamentActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TournamentActivity model
     */
    readonly fields: TournamentActivityFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TournamentActivity.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TournamentActivityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tournament<T extends Prisma.TournamentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TournamentDefaultArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the TournamentActivity model
 */
export interface TournamentActivityFieldRefs {
    readonly id: Prisma.FieldRef<"TournamentActivity", 'String'>;
    readonly type: Prisma.FieldRef<"TournamentActivity", 'TournamentActivityEnum'>;
    readonly tournamentId: Prisma.FieldRef<"TournamentActivity", 'String'>;
    readonly description: Prisma.FieldRef<"TournamentActivity", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TournamentActivity", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TournamentActivity", 'DateTime'>;
}
/**
 * TournamentActivity findUnique
 */
export type TournamentActivityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentActivity to fetch.
     */
    where: Prisma.TournamentActivityWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentActivity findUniqueOrThrow
 */
export type TournamentActivityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentActivity to fetch.
     */
    where: Prisma.TournamentActivityWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentActivity findFirst
 */
export type TournamentActivityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentActivity to fetch.
     */
    where?: Prisma.TournamentActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentActivities to fetch.
     */
    orderBy?: Prisma.TournamentActivityOrderByWithRelationInput | Prisma.TournamentActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TournamentActivities.
     */
    cursor?: Prisma.TournamentActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentActivities.
     */
    distinct?: Prisma.TournamentActivityScalarFieldEnum | Prisma.TournamentActivityScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentActivity findFirstOrThrow
 */
export type TournamentActivityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentActivity to fetch.
     */
    where?: Prisma.TournamentActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentActivities to fetch.
     */
    orderBy?: Prisma.TournamentActivityOrderByWithRelationInput | Prisma.TournamentActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TournamentActivities.
     */
    cursor?: Prisma.TournamentActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TournamentActivities.
     */
    distinct?: Prisma.TournamentActivityScalarFieldEnum | Prisma.TournamentActivityScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentActivity findMany
 */
export type TournamentActivityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which TournamentActivities to fetch.
     */
    where?: Prisma.TournamentActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TournamentActivities to fetch.
     */
    orderBy?: Prisma.TournamentActivityOrderByWithRelationInput | Prisma.TournamentActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TournamentActivities.
     */
    cursor?: Prisma.TournamentActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TournamentActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TournamentActivities.
     */
    skip?: number;
    distinct?: Prisma.TournamentActivityScalarFieldEnum | Prisma.TournamentActivityScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentActivity create
 */
export type TournamentActivityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a TournamentActivity.
     */
    data: Prisma.XOR<Prisma.TournamentActivityCreateInput, Prisma.TournamentActivityUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentActivity createMany
 */
export type TournamentActivityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentActivities.
     */
    data: Prisma.TournamentActivityCreateManyInput | Prisma.TournamentActivityCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TournamentActivity createManyAndReturn
 */
export type TournamentActivityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentActivity
     */
    select?: Prisma.TournamentActivitySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentActivity
     */
    omit?: Prisma.TournamentActivityOmit<ExtArgs> | null;
    /**
     * The data used to create many TournamentActivities.
     */
    data: Prisma.TournamentActivityCreateManyInput | Prisma.TournamentActivityCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentActivityIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TournamentActivity update
 */
export type TournamentActivityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a TournamentActivity.
     */
    data: Prisma.XOR<Prisma.TournamentActivityUpdateInput, Prisma.TournamentActivityUncheckedUpdateInput>;
    /**
     * Choose, which TournamentActivity to update.
     */
    where: Prisma.TournamentActivityWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentActivity updateMany
 */
export type TournamentActivityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentActivities.
     */
    data: Prisma.XOR<Prisma.TournamentActivityUpdateManyMutationInput, Prisma.TournamentActivityUncheckedUpdateManyInput>;
    /**
     * Filter which TournamentActivities to update
     */
    where?: Prisma.TournamentActivityWhereInput;
    /**
     * Limit how many TournamentActivities to update.
     */
    limit?: number;
};
/**
 * TournamentActivity updateManyAndReturn
 */
export type TournamentActivityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentActivity
     */
    select?: Prisma.TournamentActivitySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TournamentActivity
     */
    omit?: Prisma.TournamentActivityOmit<ExtArgs> | null;
    /**
     * The data used to update TournamentActivities.
     */
    data: Prisma.XOR<Prisma.TournamentActivityUpdateManyMutationInput, Prisma.TournamentActivityUncheckedUpdateManyInput>;
    /**
     * Filter which TournamentActivities to update
     */
    where?: Prisma.TournamentActivityWhereInput;
    /**
     * Limit how many TournamentActivities to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TournamentActivityIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TournamentActivity upsert
 */
export type TournamentActivityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the TournamentActivity to update in case it exists.
     */
    where: Prisma.TournamentActivityWhereUniqueInput;
    /**
     * In case the TournamentActivity found by the `where` argument doesn't exist, create a new TournamentActivity with this data.
     */
    create: Prisma.XOR<Prisma.TournamentActivityCreateInput, Prisma.TournamentActivityUncheckedCreateInput>;
    /**
     * In case the TournamentActivity was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TournamentActivityUpdateInput, Prisma.TournamentActivityUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentActivity delete
 */
export type TournamentActivityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which TournamentActivity to delete.
     */
    where: Prisma.TournamentActivityWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * TournamentActivity deleteMany
 */
export type TournamentActivityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentActivities to delete
     */
    where?: Prisma.TournamentActivityWhereInput;
    /**
     * Limit how many TournamentActivities to delete.
     */
    limit?: number;
};
/**
 * TournamentActivity without action
 */
export type TournamentActivityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
