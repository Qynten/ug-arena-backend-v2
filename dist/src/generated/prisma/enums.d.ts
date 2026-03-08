export declare const CommonStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly REJECTED: "REJECTED";
};
export type CommonStatus = (typeof CommonStatus)[keyof typeof CommonStatus];
export declare const UserRole: {
    readonly PLAYER: "PLAYER";
    readonly ORGANIZER: "ORGANIZER";
    readonly ADMIN: "ADMIN";
    readonly SUPER_ADMIN: "SUPER_ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const AuthProvider: {
    readonly DISCORD: "DISCORD";
};
export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider];
export declare const TournamentStatus: {
    readonly DRAFT: "DRAFT";
    readonly REGISTRATION: "REGISTRATION";
    readonly SEEDING: "SEEDING";
    readonly LIVE: "LIVE";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type TournamentStatus = (typeof TournamentStatus)[keyof typeof TournamentStatus];
export declare const TournamentType: {
    readonly SOLO: "SOLO";
    readonly TEAM: "TEAM";
};
export type TournamentType = (typeof TournamentType)[keyof typeof TournamentType];
export declare const BracketType: {
    readonly SINGLE_ELIMINATION: "SINGLE_ELIMINATION";
    readonly DOUBLE_ELIMINATION: "DOUBLE_ELIMINATION";
    readonly SWISS: "SWISS";
    readonly ROUND_ROBIN: "ROUND_ROBIN";
};
export type BracketType = (typeof BracketType)[keyof typeof BracketType];
export declare const CheckInStatus: {
    readonly PENDING: "PENDING";
    readonly CHECKED_IN: "CHECKED_IN";
    readonly ABSENT: "ABSENT";
    readonly DISQUALIFIED: "DISQUALIFIED";
};
export type CheckInStatus = (typeof CheckInStatus)[keyof typeof CheckInStatus];
export declare const ParticipantStatus: {
    readonly REGISTERED: "REGISTERED";
    readonly DISQUALIFIED: "DISQUALIFIED";
    readonly CANCELLED: "CANCELLED";
};
export type ParticipantStatus = (typeof ParticipantStatus)[keyof typeof ParticipantStatus];
export declare const DisputeStatus: {
    readonly PENDING: "PENDING";
    readonly RESOLVED: "RESOLVED";
    readonly REJECTED: "REJECTED";
};
export type DisputeStatus = (typeof DisputeStatus)[keyof typeof DisputeStatus];
export declare const EvidenceType: {
    readonly IMAGE: "IMAGE";
    readonly VIDEO: "VIDEO";
    readonly DOCUMENT: "DOCUMENT";
    readonly OTHER: "OTHER";
};
export type EvidenceType = (typeof EvidenceType)[keyof typeof EvidenceType];
export declare const PayoutStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly PAID: "PAID";
    readonly CANCELLED: "CANCELLED";
};
export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus];
export declare const TeamPlayerRole: {
    readonly CAPTAIN: "CAPTAIN";
    readonly MEMBER: "MEMBER";
};
export type TeamPlayerRole = (typeof TeamPlayerRole)[keyof typeof TeamPlayerRole];
export declare const MatchStatus: {
    readonly PENDING: "PENDING";
    readonly ONGOING: "ONGOING";
    readonly COMPLETED: "COMPLETED";
    readonly DISPUTED: "DISPUTED";
};
export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus];
export declare const MatchResult: {
    readonly WIN: "WIN";
    readonly LOSS: "LOSS";
    readonly DRAW: "DRAW";
};
export type MatchResult = (typeof MatchResult)[keyof typeof MatchResult];
export declare const TournamentActivityEnum: {
    readonly TOURNAMENT_CREATE: "TOURNAMENT_CREATE";
    readonly TEAM_REQUEST: "TEAM_REQUEST";
    readonly TEAM_ACCEPTED: "TEAM_ACCEPTED";
    readonly TEAM_REQUEST_REJECTED: "TEAM_REQUEST_REJECTED";
    readonly PLAYER_INVITED_TO_TEAM: "PLAYER_INVITED_TO_TEAM";
    readonly PLAYER_REMOVED_FROM_TEAM: "PLAYER_REMOVED_FROM_TEAM";
    readonly PLAYER_JOINED: "PLAYER_JOINED";
    readonly PLAYER_DECLINE: "PLAYER_DECLINE";
    readonly SCORE_UPDATE: "SCORE_UPDATE";
    readonly MATCH_UPDATE: "MATCH_UPDATE";
    readonly PARTICIPANT_DISQUALIFIED: "PARTICIPANT_DISQUALIFIED";
};
export type TournamentActivityEnum = (typeof TournamentActivityEnum)[keyof typeof TournamentActivityEnum];
export declare const PrizePoolPosition: {
    readonly FIRST: "FIRST";
    readonly SECOND: "SECOND";
    readonly THIRD: "THIRD";
    readonly FOURTH: "FOURTH";
    readonly FIFTH: "FIFTH";
};
export type PrizePoolPosition = (typeof PrizePoolPosition)[keyof typeof PrizePoolPosition];
export declare const OrganizerRequestStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly REJECTED: "REJECTED";
    readonly REVOKED: "REVOKED";
};
export type OrganizerRequestStatus = (typeof OrganizerRequestStatus)[keyof typeof OrganizerRequestStatus];
