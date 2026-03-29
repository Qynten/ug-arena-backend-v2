---
name: Implement Tournament Staff Delegation Backend
overview: Add service methods and controller endpoints for managing tournament staff with strict ownership checks.
todos:
  - id: update-service-methods-with-ownership-checks-and-upsert-logic
    content: Implement getTournamentStaff, assignStaff, and removeStaff in src/tournament/tournament.service.ts with ownership checks.
    status: completed
  - id: update-controller-endpoints-to-expose-staff-management-api
    content: Add staff-related endpoints to src/tournament/tournament.controller.ts and update existing assignStaff endpoint.
    status: completed
isProject: false
---

### 1. Update `src/tournament/tournament.service.ts`

- Add `getTournamentStaff(tournamentId: string)` to query staff members and their user details.
- Update `assignStaff(tournamentId: string, ownerId: string, payload: { userId: string, role: TournamentRoleType })`:
  - Check if the tournament exists.
  - Verify that the `ownerId` matches the tournament's `ownerId`.
  - Use `upsert` to create or update the staff assignment.
- Add `removeStaff(tournamentId: string, ownerId: string, targetUserId: string)`:
  - Check if the tournament exists.
  - Verify that the `ownerId` matches the tournament's `ownerId`.
  - Delete all staff assignments for that user in that tournament.

### 2. Update `src/tournament/tournament.controller.ts`

- Add `@Get(':id/staff')` endpoint.
- Update `@Post(':id/staff')`:
  - Secure with `JwtAuthGuard`.
  - Extract `ownerId` using `@GetUser('id')`.
  - Call service's updated `assignStaff`.
- Add `@Delete(':id/staff/:userId')`:
  - Secure with `JwtAuthGuard`.
  - Extract `ownerId` using `@GetUser('id')`.
  - Call service's `removeStaff`.

### Implementation details

- Import `TournamentRoleType` in `tournament.service.ts`.
- Ensure strict ownership check in service methods.
