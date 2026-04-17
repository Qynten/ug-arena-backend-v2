# UG Arena Backend (v2) - Operations & Testing Guide

This is the backend component of the UG Arena platform, built with **NestJS**, **Prisma ORM**, and **PostgreSQL**.

For the full-stack context including the Vue frontend, please refer to the frontend's README or the primary project documentation.

## 🚀 Quick Start (Development)

To run the backend locally, ensure you have PostgreSQL installed and running.

### Setup and Start
```bash
# Install dependencies
npm install

# Start the NestJS backend in development (watch) mode
npm run start:dev
```
The API server will typically start on **`http://localhost:3001`**.

---

## 💻 Need-to-Know Commands

| Command | Description |
| ------- | ----------- |
| `npm run start:dev` | Starts the NestJS API with auto-reload enabled (watch mode). This is your primary development command. |
| `npm run build` | Compiles the TypeScript application into the `dist/` directory for production targeting. |
| `npm run start` | Runs the compiled application (production mode). |
| `npm run mock-seed` | Seeds the database with mock data for testing tournaments, teams, and users. |
| `npm run lint` | Runs ESLint to check for code quality issues. |
| `npm run format` | Runs Prettier to auto-format your source code snippet. |

---

## 🧪 Testing & Validation Guidelines

While the core logic is test-ready via Jest (`@nestjs/testing`), day-to-day operations involve manual verification and seeding to ensure seamless integration with the frontend.

### 1. Seeding Data for Testing
If you need mock users, teams, or tournaments, you can populate the database:
```bash
npm run mock-seed <Tournament Name> <Number of Teams>
npm run mock-seed solo-seed <Tournament Name> <Number of Players>
```
This script (`prisma/mock-seed.ts`) will insert realistic dummy data so you can test database relationships, generating brackets, and real-time chat interactions.

### 2. Validating Real-time Events
This application uses **Socket.IO** (`@nestjs/websockets`). Ensure you validate that server emissions are properly reaching the frontend:
- Modifying a match score triggers bracket updates across all connected clients.
- Raising a dispute on the frontend locks the match and broadcasts the event in real-time.
- Tournament/Team chat interactions save to the database and broadcast instantly.

### 3. API Integrations
You can interact with the API endpoints manually to bypass the UI during testing context:
- Base path is `htp://localhost:3001/`
- Key domains: `/auth`, `/users`, `/tournaments`, `/teams`, `/tournaments/admin`
- Ensure any guarded routes are tested with an `Authorization: Bearer <token>` header (you can obtain a token from the frontend's localStorage after logging in via Discord).

### 4. Database Schema Changes
If you modify `prisma/schema.prisma`:
1. Run `npx prisma format` to format the file.
2. Run `npx prisma db push` (or `npx prisma migrate dev`) to push changes to your local database.
3. Restart the backend server if Prisma Client generates a new typings file.
