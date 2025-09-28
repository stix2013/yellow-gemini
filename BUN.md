### Installation

To get started, install the project dependencies using Bun:

```bash
bun install
```

### Development

Run the development server:

```bash
bun run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Testing

Run tests using the following commands:

- **Unit and Integration Tests:**
  ```bash
  bun run test
  ```
- **End-to-End (E2E) Tests:**
  ```bash
  bun run test:e2e
  ```

### Production

Build the application for production:

```bash
bun run build
```

Preview the production build:

```bash
bun run preview
```

---

## 3. Development Conventions

### General

- **Package Manager:** Use `bun` for all package management.
- **Linting:** ESLint is configured in `eslint.config.mjs`.
- **TypeScript:** The project follows the configuration in `tsconfig.json`.
- **Environment Variables:** Bun automatically loads `.env` files, so `dotenv` is not needed.
- **Development Server:** Do not run `bun dev` immediately after creating or modifying files, as this can cause issues.

# Bun API Usage

Prefer the Bun API for common tasks:

- **Web Server:** `Bun.serve()` for WebSockets, HTTPS, and routing (instead of Express).
- **SQLite:** `bun:sqlite` (instead of `better-sqlite3`).
- **Redis:** `Bun.redis` (instead of `ioredis`).
- **Postgres:** `Bun.sql` (instead of `pg` or `postgres.js`).
- **WebSockets:** Use the built-in `WebSocket` (instead of `ws`).
- **File System:** `Bun.file` (instead of `node:fs`).
- **Shell Commands:** `Bun.$` (e.g., `Bun.$`ls``) instead of `execa`.
