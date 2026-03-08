import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
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
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
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
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
