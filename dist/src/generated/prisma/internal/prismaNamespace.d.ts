import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.4.2
 * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly UserAccount: "UserAccount";
    readonly OrganizerRequest: "OrganizerRequest";
    readonly Tournament: "Tournament";
    readonly Participant: "Participant";
    readonly TournamentRoster: "TournamentRoster";
    readonly AuditLog: "AuditLog";
    readonly Team: "Team";
    readonly TeamPlayer: "TeamPlayer";
    readonly TeamPlayerRegistration: "TeamPlayerRegistration";
    readonly Round: "Round";
    readonly Match: "Match";
    readonly MatchSet: "MatchSet";
    readonly MatchDispute: "MatchDispute";
    readonly DisputeEvidence: "DisputeEvidence";
    readonly DisputeMessage: "DisputeMessage";
    readonly score: "score";
    readonly TournamentActivity: "TournamentActivity";
    readonly MatchHistory: "MatchHistory";
    readonly PrizePool: "PrizePool";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "userAccount" | "organizerRequest" | "tournament" | "participant" | "tournamentRoster" | "auditLog" | "team" | "teamPlayer" | "teamPlayerRegistration" | "round" | "match" | "matchSet" | "matchDispute" | "disputeEvidence" | "disputeMessage" | "score" | "tournamentActivity" | "matchHistory" | "prizePool";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        UserAccount: {
            payload: Prisma.$UserAccountPayload<ExtArgs>;
            fields: Prisma.UserAccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserAccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserAccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAccountPayload>;
                };
                findFirst: {
                    args: Prisma.UserAccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserAccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAccountPayload>;
                };
                findMany: {
                    args: Prisma.UserAccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAccountPayload>[];
                };
                create: {
                    args: Prisma.UserAccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAccountPayload>;
                };
                createMany: {
                    args: Prisma.UserAccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserAccountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAccountPayload>[];
                };
                delete: {
                    args: Prisma.UserAccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAccountPayload>;
                };
                update: {
                    args: Prisma.UserAccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAccountPayload>;
                };
                deleteMany: {
                    args: Prisma.UserAccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserAccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserAccountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAccountPayload>[];
                };
                upsert: {
                    args: Prisma.UserAccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAccountPayload>;
                };
                aggregate: {
                    args: Prisma.UserAccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserAccount>;
                };
                groupBy: {
                    args: Prisma.UserAccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserAccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserAccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserAccountCountAggregateOutputType> | number;
                };
            };
        };
        OrganizerRequest: {
            payload: Prisma.$OrganizerRequestPayload<ExtArgs>;
            fields: Prisma.OrganizerRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrganizerRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizerRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrganizerRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizerRequestPayload>;
                };
                findFirst: {
                    args: Prisma.OrganizerRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizerRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrganizerRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizerRequestPayload>;
                };
                findMany: {
                    args: Prisma.OrganizerRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizerRequestPayload>[];
                };
                create: {
                    args: Prisma.OrganizerRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizerRequestPayload>;
                };
                createMany: {
                    args: Prisma.OrganizerRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrganizerRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizerRequestPayload>[];
                };
                delete: {
                    args: Prisma.OrganizerRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizerRequestPayload>;
                };
                update: {
                    args: Prisma.OrganizerRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizerRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.OrganizerRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrganizerRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrganizerRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizerRequestPayload>[];
                };
                upsert: {
                    args: Prisma.OrganizerRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizerRequestPayload>;
                };
                aggregate: {
                    args: Prisma.OrganizerRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrganizerRequest>;
                };
                groupBy: {
                    args: Prisma.OrganizerRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganizerRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrganizerRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganizerRequestCountAggregateOutputType> | number;
                };
            };
        };
        Tournament: {
            payload: Prisma.$TournamentPayload<ExtArgs>;
            fields: Prisma.TournamentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TournamentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>;
                };
                findFirst: {
                    args: Prisma.TournamentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>;
                };
                findMany: {
                    args: Prisma.TournamentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>[];
                };
                create: {
                    args: Prisma.TournamentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>;
                };
                createMany: {
                    args: Prisma.TournamentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>[];
                };
                delete: {
                    args: Prisma.TournamentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>;
                };
                update: {
                    args: Prisma.TournamentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>;
                };
                deleteMany: {
                    args: Prisma.TournamentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TournamentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>[];
                };
                upsert: {
                    args: Prisma.TournamentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentPayload>;
                };
                aggregate: {
                    args: Prisma.TournamentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTournament>;
                };
                groupBy: {
                    args: Prisma.TournamentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TournamentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TournamentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TournamentCountAggregateOutputType> | number;
                };
            };
        };
        Participant: {
            payload: Prisma.$ParticipantPayload<ExtArgs>;
            fields: Prisma.ParticipantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParticipantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>;
                };
                findFirst: {
                    args: Prisma.ParticipantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>;
                };
                findMany: {
                    args: Prisma.ParticipantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>[];
                };
                create: {
                    args: Prisma.ParticipantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>;
                };
                createMany: {
                    args: Prisma.ParticipantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>[];
                };
                delete: {
                    args: Prisma.ParticipantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>;
                };
                update: {
                    args: Prisma.ParticipantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>;
                };
                deleteMany: {
                    args: Prisma.ParticipantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParticipantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>[];
                };
                upsert: {
                    args: Prisma.ParticipantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParticipantPayload>;
                };
                aggregate: {
                    args: Prisma.ParticipantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParticipant>;
                };
                groupBy: {
                    args: Prisma.ParticipantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParticipantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ParticipantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParticipantCountAggregateOutputType> | number;
                };
            };
        };
        TournamentRoster: {
            payload: Prisma.$TournamentRosterPayload<ExtArgs>;
            fields: Prisma.TournamentRosterFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TournamentRosterFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TournamentRosterFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPayload>;
                };
                findFirst: {
                    args: Prisma.TournamentRosterFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TournamentRosterFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPayload>;
                };
                findMany: {
                    args: Prisma.TournamentRosterFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPayload>[];
                };
                create: {
                    args: Prisma.TournamentRosterCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPayload>;
                };
                createMany: {
                    args: Prisma.TournamentRosterCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TournamentRosterCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPayload>[];
                };
                delete: {
                    args: Prisma.TournamentRosterDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPayload>;
                };
                update: {
                    args: Prisma.TournamentRosterUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPayload>;
                };
                deleteMany: {
                    args: Prisma.TournamentRosterDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TournamentRosterUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TournamentRosterUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPayload>[];
                };
                upsert: {
                    args: Prisma.TournamentRosterUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentRosterPayload>;
                };
                aggregate: {
                    args: Prisma.TournamentRosterAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTournamentRoster>;
                };
                groupBy: {
                    args: Prisma.TournamentRosterGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TournamentRosterGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TournamentRosterCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TournamentRosterCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        Team: {
            payload: Prisma.$TeamPayload<ExtArgs>;
            fields: Prisma.TeamFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeamFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                findFirst: {
                    args: Prisma.TeamFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                findMany: {
                    args: Prisma.TeamFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>[];
                };
                create: {
                    args: Prisma.TeamCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                createMany: {
                    args: Prisma.TeamCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>[];
                };
                delete: {
                    args: Prisma.TeamDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                update: {
                    args: Prisma.TeamUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                deleteMany: {
                    args: Prisma.TeamDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeamUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>[];
                };
                upsert: {
                    args: Prisma.TeamUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                aggregate: {
                    args: Prisma.TeamAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeam>;
                };
                groupBy: {
                    args: Prisma.TeamGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeamGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeamCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeamCountAggregateOutputType> | number;
                };
            };
        };
        TeamPlayer: {
            payload: Prisma.$TeamPlayerPayload<ExtArgs>;
            fields: Prisma.TeamPlayerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeamPlayerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeamPlayerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerPayload>;
                };
                findFirst: {
                    args: Prisma.TeamPlayerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeamPlayerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerPayload>;
                };
                findMany: {
                    args: Prisma.TeamPlayerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerPayload>[];
                };
                create: {
                    args: Prisma.TeamPlayerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerPayload>;
                };
                createMany: {
                    args: Prisma.TeamPlayerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeamPlayerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerPayload>[];
                };
                delete: {
                    args: Prisma.TeamPlayerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerPayload>;
                };
                update: {
                    args: Prisma.TeamPlayerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerPayload>;
                };
                deleteMany: {
                    args: Prisma.TeamPlayerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeamPlayerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeamPlayerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerPayload>[];
                };
                upsert: {
                    args: Prisma.TeamPlayerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerPayload>;
                };
                aggregate: {
                    args: Prisma.TeamPlayerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeamPlayer>;
                };
                groupBy: {
                    args: Prisma.TeamPlayerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeamPlayerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeamPlayerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeamPlayerCountAggregateOutputType> | number;
                };
            };
        };
        TeamPlayerRegistration: {
            payload: Prisma.$TeamPlayerRegistrationPayload<ExtArgs>;
            fields: Prisma.TeamPlayerRegistrationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeamPlayerRegistrationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerRegistrationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeamPlayerRegistrationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerRegistrationPayload>;
                };
                findFirst: {
                    args: Prisma.TeamPlayerRegistrationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerRegistrationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeamPlayerRegistrationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerRegistrationPayload>;
                };
                findMany: {
                    args: Prisma.TeamPlayerRegistrationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerRegistrationPayload>[];
                };
                create: {
                    args: Prisma.TeamPlayerRegistrationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerRegistrationPayload>;
                };
                createMany: {
                    args: Prisma.TeamPlayerRegistrationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TeamPlayerRegistrationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerRegistrationPayload>[];
                };
                delete: {
                    args: Prisma.TeamPlayerRegistrationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerRegistrationPayload>;
                };
                update: {
                    args: Prisma.TeamPlayerRegistrationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerRegistrationPayload>;
                };
                deleteMany: {
                    args: Prisma.TeamPlayerRegistrationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeamPlayerRegistrationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TeamPlayerRegistrationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerRegistrationPayload>[];
                };
                upsert: {
                    args: Prisma.TeamPlayerRegistrationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPlayerRegistrationPayload>;
                };
                aggregate: {
                    args: Prisma.TeamPlayerRegistrationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeamPlayerRegistration>;
                };
                groupBy: {
                    args: Prisma.TeamPlayerRegistrationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeamPlayerRegistrationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeamPlayerRegistrationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeamPlayerRegistrationCountAggregateOutputType> | number;
                };
            };
        };
        Round: {
            payload: Prisma.$RoundPayload<ExtArgs>;
            fields: Prisma.RoundFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoundFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoundPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoundFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoundPayload>;
                };
                findFirst: {
                    args: Prisma.RoundFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoundPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoundFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoundPayload>;
                };
                findMany: {
                    args: Prisma.RoundFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoundPayload>[];
                };
                create: {
                    args: Prisma.RoundCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoundPayload>;
                };
                createMany: {
                    args: Prisma.RoundCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoundCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoundPayload>[];
                };
                delete: {
                    args: Prisma.RoundDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoundPayload>;
                };
                update: {
                    args: Prisma.RoundUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoundPayload>;
                };
                deleteMany: {
                    args: Prisma.RoundDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoundUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoundUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoundPayload>[];
                };
                upsert: {
                    args: Prisma.RoundUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoundPayload>;
                };
                aggregate: {
                    args: Prisma.RoundAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRound>;
                };
                groupBy: {
                    args: Prisma.RoundGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoundGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoundCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoundCountAggregateOutputType> | number;
                };
            };
        };
        Match: {
            payload: Prisma.$MatchPayload<ExtArgs>;
            fields: Prisma.MatchFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MatchFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                findFirst: {
                    args: Prisma.MatchFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                findMany: {
                    args: Prisma.MatchFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>[];
                };
                create: {
                    args: Prisma.MatchCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                createMany: {
                    args: Prisma.MatchCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>[];
                };
                delete: {
                    args: Prisma.MatchDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                update: {
                    args: Prisma.MatchUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                deleteMany: {
                    args: Prisma.MatchDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MatchUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>[];
                };
                upsert: {
                    args: Prisma.MatchUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchPayload>;
                };
                aggregate: {
                    args: Prisma.MatchAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMatch>;
                };
                groupBy: {
                    args: Prisma.MatchGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MatchCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchCountAggregateOutputType> | number;
                };
            };
        };
        MatchSet: {
            payload: Prisma.$MatchSetPayload<ExtArgs>;
            fields: Prisma.MatchSetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MatchSetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchSetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MatchSetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchSetPayload>;
                };
                findFirst: {
                    args: Prisma.MatchSetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchSetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MatchSetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchSetPayload>;
                };
                findMany: {
                    args: Prisma.MatchSetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchSetPayload>[];
                };
                create: {
                    args: Prisma.MatchSetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchSetPayload>;
                };
                createMany: {
                    args: Prisma.MatchSetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MatchSetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchSetPayload>[];
                };
                delete: {
                    args: Prisma.MatchSetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchSetPayload>;
                };
                update: {
                    args: Prisma.MatchSetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchSetPayload>;
                };
                deleteMany: {
                    args: Prisma.MatchSetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MatchSetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MatchSetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchSetPayload>[];
                };
                upsert: {
                    args: Prisma.MatchSetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchSetPayload>;
                };
                aggregate: {
                    args: Prisma.MatchSetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMatchSet>;
                };
                groupBy: {
                    args: Prisma.MatchSetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchSetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MatchSetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchSetCountAggregateOutputType> | number;
                };
            };
        };
        MatchDispute: {
            payload: Prisma.$MatchDisputePayload<ExtArgs>;
            fields: Prisma.MatchDisputeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MatchDisputeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchDisputePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MatchDisputeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchDisputePayload>;
                };
                findFirst: {
                    args: Prisma.MatchDisputeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchDisputePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MatchDisputeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchDisputePayload>;
                };
                findMany: {
                    args: Prisma.MatchDisputeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchDisputePayload>[];
                };
                create: {
                    args: Prisma.MatchDisputeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchDisputePayload>;
                };
                createMany: {
                    args: Prisma.MatchDisputeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MatchDisputeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchDisputePayload>[];
                };
                delete: {
                    args: Prisma.MatchDisputeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchDisputePayload>;
                };
                update: {
                    args: Prisma.MatchDisputeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchDisputePayload>;
                };
                deleteMany: {
                    args: Prisma.MatchDisputeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MatchDisputeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MatchDisputeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchDisputePayload>[];
                };
                upsert: {
                    args: Prisma.MatchDisputeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchDisputePayload>;
                };
                aggregate: {
                    args: Prisma.MatchDisputeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMatchDispute>;
                };
                groupBy: {
                    args: Prisma.MatchDisputeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchDisputeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MatchDisputeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchDisputeCountAggregateOutputType> | number;
                };
            };
        };
        DisputeEvidence: {
            payload: Prisma.$DisputeEvidencePayload<ExtArgs>;
            fields: Prisma.DisputeEvidenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DisputeEvidenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeEvidencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DisputeEvidenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeEvidencePayload>;
                };
                findFirst: {
                    args: Prisma.DisputeEvidenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeEvidencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DisputeEvidenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeEvidencePayload>;
                };
                findMany: {
                    args: Prisma.DisputeEvidenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeEvidencePayload>[];
                };
                create: {
                    args: Prisma.DisputeEvidenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeEvidencePayload>;
                };
                createMany: {
                    args: Prisma.DisputeEvidenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DisputeEvidenceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeEvidencePayload>[];
                };
                delete: {
                    args: Prisma.DisputeEvidenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeEvidencePayload>;
                };
                update: {
                    args: Prisma.DisputeEvidenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeEvidencePayload>;
                };
                deleteMany: {
                    args: Prisma.DisputeEvidenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DisputeEvidenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DisputeEvidenceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeEvidencePayload>[];
                };
                upsert: {
                    args: Prisma.DisputeEvidenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeEvidencePayload>;
                };
                aggregate: {
                    args: Prisma.DisputeEvidenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDisputeEvidence>;
                };
                groupBy: {
                    args: Prisma.DisputeEvidenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisputeEvidenceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DisputeEvidenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisputeEvidenceCountAggregateOutputType> | number;
                };
            };
        };
        DisputeMessage: {
            payload: Prisma.$DisputeMessagePayload<ExtArgs>;
            fields: Prisma.DisputeMessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DisputeMessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeMessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DisputeMessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeMessagePayload>;
                };
                findFirst: {
                    args: Prisma.DisputeMessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeMessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DisputeMessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeMessagePayload>;
                };
                findMany: {
                    args: Prisma.DisputeMessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeMessagePayload>[];
                };
                create: {
                    args: Prisma.DisputeMessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeMessagePayload>;
                };
                createMany: {
                    args: Prisma.DisputeMessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DisputeMessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeMessagePayload>[];
                };
                delete: {
                    args: Prisma.DisputeMessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeMessagePayload>;
                };
                update: {
                    args: Prisma.DisputeMessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeMessagePayload>;
                };
                deleteMany: {
                    args: Prisma.DisputeMessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DisputeMessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DisputeMessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeMessagePayload>[];
                };
                upsert: {
                    args: Prisma.DisputeMessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputeMessagePayload>;
                };
                aggregate: {
                    args: Prisma.DisputeMessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDisputeMessage>;
                };
                groupBy: {
                    args: Prisma.DisputeMessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisputeMessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DisputeMessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisputeMessageCountAggregateOutputType> | number;
                };
            };
        };
        score: {
            payload: Prisma.$scorePayload<ExtArgs>;
            fields: Prisma.scoreFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.scoreFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$scorePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.scoreFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$scorePayload>;
                };
                findFirst: {
                    args: Prisma.scoreFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$scorePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.scoreFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$scorePayload>;
                };
                findMany: {
                    args: Prisma.scoreFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$scorePayload>[];
                };
                create: {
                    args: Prisma.scoreCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$scorePayload>;
                };
                createMany: {
                    args: Prisma.scoreCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.scoreCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$scorePayload>[];
                };
                delete: {
                    args: Prisma.scoreDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$scorePayload>;
                };
                update: {
                    args: Prisma.scoreUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$scorePayload>;
                };
                deleteMany: {
                    args: Prisma.scoreDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.scoreUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.scoreUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$scorePayload>[];
                };
                upsert: {
                    args: Prisma.scoreUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$scorePayload>;
                };
                aggregate: {
                    args: Prisma.ScoreAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateScore>;
                };
                groupBy: {
                    args: Prisma.scoreGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ScoreGroupByOutputType>[];
                };
                count: {
                    args: Prisma.scoreCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ScoreCountAggregateOutputType> | number;
                };
            };
        };
        TournamentActivity: {
            payload: Prisma.$TournamentActivityPayload<ExtArgs>;
            fields: Prisma.TournamentActivityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TournamentActivityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentActivityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TournamentActivityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentActivityPayload>;
                };
                findFirst: {
                    args: Prisma.TournamentActivityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentActivityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TournamentActivityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentActivityPayload>;
                };
                findMany: {
                    args: Prisma.TournamentActivityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentActivityPayload>[];
                };
                create: {
                    args: Prisma.TournamentActivityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentActivityPayload>;
                };
                createMany: {
                    args: Prisma.TournamentActivityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TournamentActivityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentActivityPayload>[];
                };
                delete: {
                    args: Prisma.TournamentActivityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentActivityPayload>;
                };
                update: {
                    args: Prisma.TournamentActivityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentActivityPayload>;
                };
                deleteMany: {
                    args: Prisma.TournamentActivityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TournamentActivityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TournamentActivityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentActivityPayload>[];
                };
                upsert: {
                    args: Prisma.TournamentActivityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TournamentActivityPayload>;
                };
                aggregate: {
                    args: Prisma.TournamentActivityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTournamentActivity>;
                };
                groupBy: {
                    args: Prisma.TournamentActivityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TournamentActivityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TournamentActivityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TournamentActivityCountAggregateOutputType> | number;
                };
            };
        };
        MatchHistory: {
            payload: Prisma.$MatchHistoryPayload<ExtArgs>;
            fields: Prisma.MatchHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MatchHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MatchHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.MatchHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MatchHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchHistoryPayload>;
                };
                findMany: {
                    args: Prisma.MatchHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchHistoryPayload>[];
                };
                create: {
                    args: Prisma.MatchHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchHistoryPayload>;
                };
                createMany: {
                    args: Prisma.MatchHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MatchHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchHistoryPayload>[];
                };
                delete: {
                    args: Prisma.MatchHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchHistoryPayload>;
                };
                update: {
                    args: Prisma.MatchHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.MatchHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MatchHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MatchHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.MatchHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatchHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.MatchHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMatchHistory>;
                };
                groupBy: {
                    args: Prisma.MatchHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MatchHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatchHistoryCountAggregateOutputType> | number;
                };
            };
        };
        PrizePool: {
            payload: Prisma.$PrizePoolPayload<ExtArgs>;
            fields: Prisma.PrizePoolFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PrizePoolFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrizePoolPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PrizePoolFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrizePoolPayload>;
                };
                findFirst: {
                    args: Prisma.PrizePoolFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrizePoolPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PrizePoolFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrizePoolPayload>;
                };
                findMany: {
                    args: Prisma.PrizePoolFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrizePoolPayload>[];
                };
                create: {
                    args: Prisma.PrizePoolCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrizePoolPayload>;
                };
                createMany: {
                    args: Prisma.PrizePoolCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PrizePoolCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrizePoolPayload>[];
                };
                delete: {
                    args: Prisma.PrizePoolDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrizePoolPayload>;
                };
                update: {
                    args: Prisma.PrizePoolUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrizePoolPayload>;
                };
                deleteMany: {
                    args: Prisma.PrizePoolDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PrizePoolUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PrizePoolUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrizePoolPayload>[];
                };
                upsert: {
                    args: Prisma.PrizePoolUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PrizePoolPayload>;
                };
                aggregate: {
                    args: Prisma.PrizePoolAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePrizePool>;
                };
                groupBy: {
                    args: Prisma.PrizePoolGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PrizePoolGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PrizePoolCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PrizePoolCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly photo: "photo";
    readonly contactNO: "contactNO";
    readonly location: "location";
    readonly status: "status";
    readonly roles: "roles";
    readonly isBlocked: "isBlocked";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RelationLoadStrategy: {
    readonly query: "query";
    readonly join: "join";
};
export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy];
export declare const UserAccountScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly provider: "provider";
    readonly providerAccountId: "providerAccountId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly expiresAt: "expiresAt";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserAccountScalarFieldEnum = (typeof UserAccountScalarFieldEnum)[keyof typeof UserAccountScalarFieldEnum];
export declare const OrganizerRequestScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrganizerRequestScalarFieldEnum = (typeof OrganizerRequestScalarFieldEnum)[keyof typeof OrganizerRequestScalarFieldEnum];
export declare const TournamentScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly type: "type";
    readonly status: "status";
    readonly regStart: "regStart";
    readonly regEnd: "regEnd";
    readonly seedingStart: "seedingStart";
    readonly seedingEnd: "seedingEnd";
    readonly liveStart: "liveStart";
    readonly liveEnd: "liveEnd";
    readonly checkInStart: "checkInStart";
    readonly checkInEnd: "checkInEnd";
    readonly maxParticipants: "maxParticipants";
    readonly minTeamSize: "minTeamSize";
    readonly maxTeamSize: "maxTeamSize";
    readonly bestOf: "bestOf";
    readonly allowDraws: "allowDraws";
    readonly logo: "logo";
    readonly metadata: "metadata";
    readonly isDeleted: "isDeleted";
    readonly organizerId: "organizerId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum];
export declare const ParticipantScalarFieldEnum: {
    readonly id: "id";
    readonly tournamentId: "tournamentId";
    readonly userId: "userId";
    readonly teamId: "teamId";
    readonly seed: "seed";
    readonly status: "status";
    readonly checkInStatus: "checkInStatus";
    readonly points: "points";
    readonly wins: "wins";
    readonly losses: "losses";
    readonly draws: "draws";
    readonly tiebreakerScore: "tiebreakerScore";
    readonly buchholzScore: "buchholzScore";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum];
export declare const TournamentRosterScalarFieldEnum: {
    readonly id: "id";
    readonly participantId: "participantId";
    readonly userId: "userId";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TournamentRosterScalarFieldEnum = (typeof TournamentRosterScalarFieldEnum)[keyof typeof TournamentRosterScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly tournamentId: "tournamentId";
    readonly action: "action";
    readonly payload: "payload";
    readonly snapshot: "snapshot";
    readonly performedById: "performedById";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const TeamScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly currentRoundId: "currentRoundId";
    readonly tournamentId: "tournamentId";
    readonly isDeleted: "isDeleted";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];
export declare const TeamPlayerScalarFieldEnum: {
    readonly id: "id";
    readonly role: "role";
    readonly joinedAt: "joinedAt";
    readonly teamId: "teamId";
    readonly playerId: "playerId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TeamPlayerScalarFieldEnum = (typeof TeamPlayerScalarFieldEnum)[keyof typeof TeamPlayerScalarFieldEnum];
export declare const TeamPlayerRegistrationScalarFieldEnum: {
    readonly id: "id";
    readonly teamId: "teamId";
    readonly playerId: "playerId";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TeamPlayerRegistrationScalarFieldEnum = (typeof TeamPlayerRegistrationScalarFieldEnum)[keyof typeof TeamPlayerRegistrationScalarFieldEnum];
export declare const RoundScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly tournamentId: "tournamentId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RoundScalarFieldEnum = (typeof RoundScalarFieldEnum)[keyof typeof RoundScalarFieldEnum];
export declare const MatchScalarFieldEnum: {
    readonly id: "id";
    readonly tournamentId: "tournamentId";
    readonly roundId: "roundId";
    readonly participant1Id: "participant1Id";
    readonly participant2Id: "participant2Id";
    readonly p1Score: "p1Score";
    readonly p2Score: "p2Score";
    readonly status: "status";
    readonly winnerId: "winnerId";
    readonly draw: "draw";
    readonly nextMatchId: "nextMatchId";
    readonly loserMoveToMatchId: "loserMoveToMatchId";
    readonly branch: "branch";
    readonly scheduledAt: "scheduledAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum];
export declare const MatchSetScalarFieldEnum: {
    readonly id: "id";
    readonly matchId: "matchId";
    readonly p1Score: "p1Score";
    readonly p2Score: "p2Score";
    readonly setNumber: "setNumber";
    readonly evidenceUrl: "evidenceUrl";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MatchSetScalarFieldEnum = (typeof MatchSetScalarFieldEnum)[keyof typeof MatchSetScalarFieldEnum];
export declare const MatchDisputeScalarFieldEnum: {
    readonly id: "id";
    readonly matchId: "matchId";
    readonly reportedById: "reportedById";
    readonly status: "status";
    readonly resolution: "resolution";
    readonly resolvedById: "resolvedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MatchDisputeScalarFieldEnum = (typeof MatchDisputeScalarFieldEnum)[keyof typeof MatchDisputeScalarFieldEnum];
export declare const DisputeEvidenceScalarFieldEnum: {
    readonly id: "id";
    readonly disputeId: "disputeId";
    readonly url: "url";
    readonly type: "type";
    readonly description: "description";
    readonly uploadedById: "uploadedById";
    readonly createdAt: "createdAt";
};
export type DisputeEvidenceScalarFieldEnum = (typeof DisputeEvidenceScalarFieldEnum)[keyof typeof DisputeEvidenceScalarFieldEnum];
export declare const DisputeMessageScalarFieldEnum: {
    readonly id: "id";
    readonly disputeId: "disputeId";
    readonly senderId: "senderId";
    readonly content: "content";
    readonly createdAt: "createdAt";
};
export type DisputeMessageScalarFieldEnum = (typeof DisputeMessageScalarFieldEnum)[keyof typeof DisputeMessageScalarFieldEnum];
export declare const ScoreScalarFieldEnum: {
    readonly id: "id";
    readonly tournamentId: "tournamentId";
    readonly firstParticipantId: "firstParticipantId";
    readonly secondParticipantId: "secondParticipantId";
    readonly firstParticipantScore: "firstParticipantScore";
    readonly secondParticipantScore: "secondParticipantScore";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ScoreScalarFieldEnum = (typeof ScoreScalarFieldEnum)[keyof typeof ScoreScalarFieldEnum];
export declare const TournamentActivityScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly tournamentId: "tournamentId";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TournamentActivityScalarFieldEnum = (typeof TournamentActivityScalarFieldEnum)[keyof typeof TournamentActivityScalarFieldEnum];
export declare const MatchHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly participantId: "participantId";
    readonly opponentId: "opponentId";
    readonly tournamentId: "tournamentId";
    readonly roundId: "roundId";
    readonly matchId: "matchId";
    readonly participantScore: "participantScore";
    readonly opponentScore: "opponentScore";
    readonly result: "result";
    readonly createdAt: "createdAt";
};
export type MatchHistoryScalarFieldEnum = (typeof MatchHistoryScalarFieldEnum)[keyof typeof MatchHistoryScalarFieldEnum];
export declare const PrizePoolScalarFieldEnum: {
    readonly id: "id";
    readonly position: "position";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly tournamentId: "tournamentId";
    readonly winnerId: "winnerId";
    readonly payoutStatus: "payoutStatus";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PrizePoolScalarFieldEnum = (typeof PrizePoolScalarFieldEnum)[keyof typeof PrizePoolScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'UserStatus'
 */
export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>;
/**
 * Reference to a field of type 'UserStatus[]'
 */
export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>;
/**
 * Reference to a field of type 'UserRole[]'
 */
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
/**
 * Reference to a field of type 'UserRole'
 */
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'AuthProvider'
 */
export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>;
/**
 * Reference to a field of type 'AuthProvider[]'
 */
export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'OrganizerRequestStatus'
 */
export type EnumOrganizerRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizerRequestStatus'>;
/**
 * Reference to a field of type 'OrganizerRequestStatus[]'
 */
export type ListEnumOrganizerRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganizerRequestStatus[]'>;
/**
 * Reference to a field of type 'TournamentType'
 */
export type EnumTournamentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentType'>;
/**
 * Reference to a field of type 'TournamentType[]'
 */
export type ListEnumTournamentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentType[]'>;
/**
 * Reference to a field of type 'TournamentStatus'
 */
export type EnumTournamentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStatus'>;
/**
 * Reference to a field of type 'TournamentStatus[]'
 */
export type ListEnumTournamentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStatus[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'ParticipantStatus'
 */
export type EnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus'>;
/**
 * Reference to a field of type 'ParticipantStatus[]'
 */
export type ListEnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus[]'>;
/**
 * Reference to a field of type 'CheckInStatus'
 */
export type EnumCheckInStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckInStatus'>;
/**
 * Reference to a field of type 'CheckInStatus[]'
 */
export type ListEnumCheckInStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckInStatus[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'TeamPlayerRole'
 */
export type EnumTeamPlayerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamPlayerRole'>;
/**
 * Reference to a field of type 'TeamPlayerRole[]'
 */
export type ListEnumTeamPlayerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamPlayerRole[]'>;
/**
 * Reference to a field of type 'CommonStatus'
 */
export type EnumCommonStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommonStatus'>;
/**
 * Reference to a field of type 'CommonStatus[]'
 */
export type ListEnumCommonStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommonStatus[]'>;
/**
 * Reference to a field of type 'MatchStatus'
 */
export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>;
/**
 * Reference to a field of type 'MatchStatus[]'
 */
export type ListEnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus[]'>;
/**
 * Reference to a field of type 'DisputeStatus'
 */
export type EnumDisputeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisputeStatus'>;
/**
 * Reference to a field of type 'DisputeStatus[]'
 */
export type ListEnumDisputeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisputeStatus[]'>;
/**
 * Reference to a field of type 'EvidenceType'
 */
export type EnumEvidenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvidenceType'>;
/**
 * Reference to a field of type 'EvidenceType[]'
 */
export type ListEnumEvidenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvidenceType[]'>;
/**
 * Reference to a field of type 'TournamentActivityEnum'
 */
export type EnumTournamentActivityEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentActivityEnum'>;
/**
 * Reference to a field of type 'TournamentActivityEnum[]'
 */
export type ListEnumTournamentActivityEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentActivityEnum[]'>;
/**
 * Reference to a field of type 'MatchResult'
 */
export type EnumMatchResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchResult'>;
/**
 * Reference to a field of type 'MatchResult[]'
 */
export type ListEnumMatchResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchResult[]'>;
/**
 * Reference to a field of type 'PrizePoolPosition'
 */
export type EnumPrizePoolPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrizePoolPosition'>;
/**
 * Reference to a field of type 'PrizePoolPosition[]'
 */
export type ListEnumPrizePoolPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrizePoolPosition[]'>;
/**
 * Reference to a field of type 'PayoutStatus'
 */
export type EnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus'>;
/**
 * Reference to a field of type 'PayoutStatus[]'
 */
export type ListEnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    userAccount?: Prisma.UserAccountOmit;
    organizerRequest?: Prisma.OrganizerRequestOmit;
    tournament?: Prisma.TournamentOmit;
    participant?: Prisma.ParticipantOmit;
    tournamentRoster?: Prisma.TournamentRosterOmit;
    auditLog?: Prisma.AuditLogOmit;
    team?: Prisma.TeamOmit;
    teamPlayer?: Prisma.TeamPlayerOmit;
    teamPlayerRegistration?: Prisma.TeamPlayerRegistrationOmit;
    round?: Prisma.RoundOmit;
    match?: Prisma.MatchOmit;
    matchSet?: Prisma.MatchSetOmit;
    matchDispute?: Prisma.MatchDisputeOmit;
    disputeEvidence?: Prisma.DisputeEvidenceOmit;
    disputeMessage?: Prisma.DisputeMessageOmit;
    score?: Prisma.scoreOmit;
    tournamentActivity?: Prisma.TournamentActivityOmit;
    matchHistory?: Prisma.MatchHistoryOmit;
    prizePool?: Prisma.PrizePoolOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
