---
name: Implement My Tournaments backend and fix permissions
overview: Implement `GET /tournaments/my-tournaments` endpoint and update tournament viewing permissions to be public.
todos:
  - id: implement-service-method-final
    content: Implement `findMyTournaments` in `src/tournament/tournament.service.ts`.
    status: completed
  - id: update-controller-endpoints-final
    content: Add `my-tournaments` endpoint and update permissions in `src/tournament/tournament.controller.ts`.
    status: completed
isProject: false
---

### Backend Changes

1. **Update `src/tournament/tournament.service.ts`**

- Implement `findMyTournaments(userId: string)` to fetch tournaments where the user is the owner (`ownerId: userId`).
  - Return an object containing `owned` tournaments and an empty `managed` array for now.
  - Path: `[src/tournament/tournament.service.ts](src/tournament/tournament.service.ts)`

1. **Update `src/tournament/tournament.controller.ts`**

- Add `@Get('my-tournaments')` endpoint above `@Get(':id')`.
  - Use `@GetUser('id')` to get the logged-in user's ID.
  - Remove `@Roles()` decorators from `findAll` and `findOne` methods to make them public (still under `JwtAuthGuard` if applicable, but accessible to any authenticated user or fully public if the guard is removed - user asked to strip `@Roles()`, I will check if `JwtAuthGuard` should stay).
  - Path: `[src/tournament/tournament.controller.ts](src/tournament/tournament.controller.ts)`

### Frontend Changes (If accessible)

1. **Update `src/views/TournamentDetails.vue`**

- Note: The user confirmed this file is in a different repository context, but I will provide the suggested logic if I were to edit it.
  - Improve API response handling to support various wrapping formats (`response.data?.data || response.data || response`).
  - Add `console.error` in catch blocks for better debugging.

### Visual Flow

```mermaid
graph TD
    A[Frontend] -->|GET /tournaments/my-tournaments| B(TournamentController)
    B -->|findMyTournaments| C(TournamentService)
    C -->|Prisma Query| D[(PostgreSQL)]
    D -->|owned tournaments| C
    C -->|{ owned, managed: [] }| B
    B -->|JSON Response| A
```
