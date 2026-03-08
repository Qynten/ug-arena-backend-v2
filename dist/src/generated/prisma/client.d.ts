import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
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
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model UserAccount
 *
 */
export type UserAccount = Prisma.UserAccountModel;
/**
 * Model OrganizerRequest
 *
 */
export type OrganizerRequest = Prisma.OrganizerRequestModel;
/**
 * Model Tournament
 *
 */
export type Tournament = Prisma.TournamentModel;
/**
 * Model Participant
 *
 */
export type Participant = Prisma.ParticipantModel;
/**
 * Model TournamentRoster
 *
 */
export type TournamentRoster = Prisma.TournamentRosterModel;
/**
 * Model AuditLog
 *
 */
export type AuditLog = Prisma.AuditLogModel;
/**
 * Model Team
 *
 */
export type Team = Prisma.TeamModel;
/**
 * Model TeamPlayer
 *
 */
export type TeamPlayer = Prisma.TeamPlayerModel;
/**
 * Model TeamPlayerRegistration
 *
 */
export type TeamPlayerRegistration = Prisma.TeamPlayerRegistrationModel;
/**
 * Model Round
 *
 */
export type Round = Prisma.RoundModel;
/**
 * Model Match
 *
 */
export type Match = Prisma.MatchModel;
/**
 * Model MatchSet
 *
 */
export type MatchSet = Prisma.MatchSetModel;
/**
 * Model MatchDispute
 *
 */
export type MatchDispute = Prisma.MatchDisputeModel;
/**
 * Model DisputeEvidence
 *
 */
export type DisputeEvidence = Prisma.DisputeEvidenceModel;
/**
 * Model DisputeMessage
 *
 */
export type DisputeMessage = Prisma.DisputeMessageModel;
/**
 * Model score
 *
 */
export type score = Prisma.scoreModel;
/**
 * Model TournamentActivity
 *
 */
export type TournamentActivity = Prisma.TournamentActivityModel;
/**
 * Model MatchHistory
 *
 */
export type MatchHistory = Prisma.MatchHistoryModel;
/**
 * Model PrizePool
 *
 */
export type PrizePool = Prisma.PrizePoolModel;
