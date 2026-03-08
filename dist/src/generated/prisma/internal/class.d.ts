import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userAccount`: Exposes CRUD operations for the **UserAccount** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserAccounts
      * const userAccounts = await prisma.userAccount.findMany()
      * ```
      */
    get userAccount(): Prisma.UserAccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.organizerRequest`: Exposes CRUD operations for the **OrganizerRequest** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OrganizerRequests
      * const organizerRequests = await prisma.organizerRequest.findMany()
      * ```
      */
    get organizerRequest(): Prisma.OrganizerRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tournaments
      * const tournaments = await prisma.tournament.findMany()
      * ```
      */
    get tournament(): Prisma.TournamentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Participants
      * const participants = await prisma.participant.findMany()
      * ```
      */
    get participant(): Prisma.ParticipantDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tournamentRoster`: Exposes CRUD operations for the **TournamentRoster** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TournamentRosters
      * const tournamentRosters = await prisma.tournamentRoster.findMany()
      * ```
      */
    get tournamentRoster(): Prisma.TournamentRosterDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AuditLogs
      * const auditLogs = await prisma.auditLog.findMany()
      * ```
      */
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.team`: Exposes CRUD operations for the **Team** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Teams
      * const teams = await prisma.team.findMany()
      * ```
      */
    get team(): Prisma.TeamDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.teamPlayer`: Exposes CRUD operations for the **TeamPlayer** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TeamPlayers
      * const teamPlayers = await prisma.teamPlayer.findMany()
      * ```
      */
    get teamPlayer(): Prisma.TeamPlayerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.teamPlayerRegistration`: Exposes CRUD operations for the **TeamPlayerRegistration** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TeamPlayerRegistrations
      * const teamPlayerRegistrations = await prisma.teamPlayerRegistration.findMany()
      * ```
      */
    get teamPlayerRegistration(): Prisma.TeamPlayerRegistrationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.round`: Exposes CRUD operations for the **Round** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Rounds
      * const rounds = await prisma.round.findMany()
      * ```
      */
    get round(): Prisma.RoundDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.match`: Exposes CRUD operations for the **Match** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Matches
      * const matches = await prisma.match.findMany()
      * ```
      */
    get match(): Prisma.MatchDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.matchSet`: Exposes CRUD operations for the **MatchSet** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MatchSets
      * const matchSets = await prisma.matchSet.findMany()
      * ```
      */
    get matchSet(): Prisma.MatchSetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.matchDispute`: Exposes CRUD operations for the **MatchDispute** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MatchDisputes
      * const matchDisputes = await prisma.matchDispute.findMany()
      * ```
      */
    get matchDispute(): Prisma.MatchDisputeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.disputeEvidence`: Exposes CRUD operations for the **DisputeEvidence** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DisputeEvidences
      * const disputeEvidences = await prisma.disputeEvidence.findMany()
      * ```
      */
    get disputeEvidence(): Prisma.DisputeEvidenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.disputeMessage`: Exposes CRUD operations for the **DisputeMessage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DisputeMessages
      * const disputeMessages = await prisma.disputeMessage.findMany()
      * ```
      */
    get disputeMessage(): Prisma.DisputeMessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.score`: Exposes CRUD operations for the **score** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Scores
      * const scores = await prisma.score.findMany()
      * ```
      */
    get score(): Prisma.scoreDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tournamentActivity`: Exposes CRUD operations for the **TournamentActivity** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TournamentActivities
      * const tournamentActivities = await prisma.tournamentActivity.findMany()
      * ```
      */
    get tournamentActivity(): Prisma.TournamentActivityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.matchHistory`: Exposes CRUD operations for the **MatchHistory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MatchHistories
      * const matchHistories = await prisma.matchHistory.findMany()
      * ```
      */
    get matchHistory(): Prisma.MatchHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.prizePool`: Exposes CRUD operations for the **PrizePool** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PrizePools
      * const prizePools = await prisma.prizePool.findMany()
      * ```
      */
    get prizePool(): Prisma.PrizePoolDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
