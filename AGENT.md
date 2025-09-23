# Project Overview

This is a Nuxt 4 project with Bun. Nuxt 4 is a framework for creating Vue 3 applications. It is configured with several Nuxt modules, including:

*   **@nuxt/content:** For content-driven websites.
*   **@nuxt/eslint:** For linting and code style.
*   **@nuxt/image:** for image optimization.
*   **@nuxt/scripts:** for managing third-party scripts.
*   **@nuxt/test-utils:** For testing.
*   **@nuxt/ui:** For UI components.

The main application entry point is `app/app.vue`.

# Building and Running

**Installation:**

```bash
bun install
```

**Development:**

To run the development server:

```bash
bun run dev
```

To test the development server:

```bash
bun run test
```

To test E2E the development server:

```bash
bun run test:e2e
```

The application will be available at [http://localhost:3000](http://localhost:3000).

**Production:**

To build the application for production:

```bash
bun run build
```

To preview the production build:

```bash
bun run preview
```

# Development Conventions

*   **Package Manager:** This project uses `bun` as the package manager.
*   **Linting:** ESLint is used for linting. The configuration is in `eslint.config.mjs`.
*   **TypeScript:** The project uses TypeScript. The configuration is in `tsconfig.json`.
*   Use MCP servers instead of `GoogleSearch` and `web_fetch` when possible.

*   Do not run `bun dev` direct after finish create or modify files.
*   Bun automatically loads .env, so don't use dotenv.

# Bun API
*   `Bun.serve()` supports WebSockets, HTTPS, and routes. Don't use `express`.
*   `bun:sqlite` for SQLite. Don't use `better-sqlite3`.
*   `Bun.redis` for Redis. Don't use `ioredis`.
*   `Bun.sql` for Postgres. Don't use `pg` or `postgres.js`.
*   `WebSocket` is built-in. Don't use `ws`.
*   Prefer `Bun.file` over `node:fs`'s readFile/writeFile
*   Bun.$`ls` instead of execa.

# Routing and Pages

This project uses file-based routing. Pages are created as `.vue` components in the `app/pages` directory. The `app/app.vue` file has been updated to include the `<NuxtPage />` component, which is required to display the content of the pages.

# Directory Structure
*   `pages`: All top-level pages should be placed in the `app/pages` directory.
*   `stores`: Pinia stores should be placed in the `app/stores` directory.


# Fix Problem
* If you get an error `ERROR  Cannot start nuxt:  Could not locate the bindings file. Tried:                      2:03:57 PM
 → /home/stevan/node_modules/.pnpm/better-sqlite3@12.2.0/node_modules/better-sqlite3/build/better_sqlite3.node`

**Fix in `nuxt.config.ts`:** 

```typescript
{
...
  content: {
    experimental: {
      nativeSqlite: true,
    },
  },

..
}
```
* If you get an error `[h3] Invalid or incompatible stream provided` when using Google Gemini's stream response with Nuxt's `sendStream`, it's because the stream from the Gemini SDK is not directly compatible. You need to convert it to a standard `ReadableStream`.

**Fix in `server/api/chat.post.ts`:**

```typescript
import { GoogleGenerativeAI } from '@google/generative-ai';

export default defineEventHandler(async (event) => {
  // ... (get history, message, and initialize genAI)

  const result = await chat.sendMessageStream(message);

  const readableStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of result.stream) {
        controller.enqueue(chunk.text());
      }
      controller.close();
    },
  });

  return sendStream(event, readableStream);
});
```

# Nuxt 4 Document

tch for imperative API calls within methods or event handlers
- useAsyncData example:
<script setup lang="ts">
  const { data, status, error, refresh, clear } = await useAsyncData(
  'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains')
  )
</script>
- Always handle all data fetching states in templates:
<template>
  <div v-if="status === 'pending'">Loading...</div>
  <div v-else-if="status === 'error'">Error: {{ error }}</div>
  <div v-else>{{ data }}</div>
</template>

- Follow component best practices:

  - Create small, focused components for specific tasks
  - Use defineModel for two-way binding between parent and child components
  - Use props for passing data down to child components
  - Use emits for communicating events up to parent components
  - Use composables for shared state and logic across components
  - Use Pinia for global state management
  - Consider provide/inject only for specific cases like theme providers or deeply nested component trees

- Always structure Vue Single File Components in this exact order:

1. <script setup> section first
2. <template> section second
3. <style> section last

- When styling Vue components:

  - If you see Tailwind being used in a file, use Tailwind for styling.
  - Prioritize Tailwind utility classes in the template for most styling needs.
  - Only use the <style> section for CSS properties that Tailwind doesn't support well, such as:
    - Complex animations and transitions
    - Advanced selectors and pseudo-elements
    - Custom scrollbar styling
    - CSS variables for dynamic theming
    - Keyframe animations

- Accessibility:

  - Ensure proper ARIA attributes on interactive elements
  - Maintain keyboard navigation support
  - Use semantic HTML elements appropriately

- For component props and emits:

  - Always use TypeScript interfaces or type aliases with defineProps and defineEmits
  - Define complex types in separate files within the /types directory
  - Use the withDefaults helper for props with default values
  - Mark optional props with the ? symbol
  - Required props should not have the ? symbol

  Example:

  ```ts
  // In types/card.ts
  export type CardProps = {
    title: string;
    description: string;
    image?: string;
    variant?: "primary" | "secondary";
  };

  // In the component
  import type { CardProps } from "~/types/card";

  const props = withDefaults(defineProps<CardProps>(), {
    image: "/default.png",
    variant: "primary",
  });

  const emit = defineEmits<{
    "update:selected": [value: boolean];
    click: [event: MouseEvent];
  }>();
  ```

  - Transitions and animations:

  * Use Vue's built-in `<Transition>` and `<TransitionGroup>` components
  * Combine with CSS classes for complex animations (apply Tailwind if available and possible)

- Vue-specific TypeScript patterns:

  - Type ref() values explicitly when TypeScript can't infer correctly: ref<string>('')
  - Type event handlers with appropriate event types (MouseEvent, KeyboardEvent, etc.)
  - Use PropType for complex prop types in runtime declarations
  - Return explicitly typed objects from composables
  - Use generics for reusable composables that work with different data types

## TypeScript best practices:

- Create dedicated type files in the /types directory organized by domain
- Use namespaces or barrel exports (index.ts) to organize related types
- Define API response types that match your backend contracts
- Use readonly modifiers for immutable properties
- Use Record<K, V> instead of {[key: string]: T} for better type safety
- Avoid using type assertions (as Type) whenever possible
- Never use "as any" as it defeats TypeScript's type checking
- Instead of type casting, prefer:
  - Type guards (if (typeof x === 'string') or custom is\* functions)
  - Type narrowing with instanceof, in operators, or discriminated unions
  - Proper generic types to maintain type information throughout the code
- Only use type assertions when:
  - You have more information than TypeScript can determine
  - Working with external libraries with incomplete type definitions
  - After validating the type with runtime checks
- When needed, prefer "as unknown as Type" over direct "as Type" for safer casting
- Consider using type predicates (user is User) for custom type guards
- Code should be self-documenting; limit the use of comments

## Directory Structure

- All TypeScript interfaces, types, and enums must be defined in dedicated files within the `/types` directory
- Types should be organized by domain (e.g., `user.ts`, `post.ts`, `auth.ts`)
- Use barrel exports with an `index.ts` file to simplify imports

## Naming Conventions

- Use PascalCase for interface, type, and enum names
- Use singular nouns for entity types (e.g., `Post` not `Posts`)
- Suffix interfaces representing props with `Props` (e.g., `ButtonProps`)
- Suffix interfaces representing state with `State` (e.g., `AuthState`)

## Import Pattern

- Always use named imports with the `type` keyword: `import type { Post } from '~/types'`
- Import from the barrel file when possible: `import type { Post, User } from '~/types'`
- Only import directly from specific files when the type is not exported in the barrel file

## Type Definitions

- Keep interfaces focused and cohesive - one interface per concept
- Use composition over inheritance (prefer interface extension over class inheritance)
- Document complex types with JSDoc comments when necessary
- Use TypeScript utility types (Partial, Pick, Omit, etc.) to derive types from base interfaces

## API Types

- Define separate interfaces for API requests and responses
- Suffix API request interfaces with `Request` (e.g., `CreatePostRequest`)
- Suffix API response interfaces with `Response` (e.g., `PostResponse`)
- Define API types in their own namespace or subdirectory for larger applications
``

### Validations

- [x] Follow our [Code of Conduct](https://github.com/antfu/.github/blob/main/CODE_OF_CONDUCT.md)
- [x] Read the [Contributing Guide](https://github.com/antfu/contribute).
- [x] Check that there isn't already an issue that request the same feature to avoid creating a duplicate.



# Nuxt UI Document

**Migration Status:**

The project has been migrated from `@nuxt/ui-pro` to `@nuxt/ui`. The following changes were made or verified:

1.  **Dependencies:** `@nuxt/ui-pro` was removed, and `@nuxt/ui@alpha` was added.
2.  **`nuxt.config.ts`:** The `modules` array already contained `@nuxt/ui` and did not have `@nuxt/ui-pro`.
3.  **`vite.config.ts`:** This file was not found in the project, so no changes were made.
4.  **`app.config.ts`:** The `ui` key was already in use, and `uiPro` was not present, so no changes were made.
5.  **`app/assets/css/main.css`:** The `@import "@nuxt/ui";` was already present, and `@import "@nuxt/ui-pro";` was not found, so no changes were made.

# MCP Servers

This local Gemini CLI setting is configured to use the following MCP servers:

*   **Context7:** Used for searching documentation for various libraries and packages. You can use the `resolve_library_id` and `get_library_docs` tools to interact with this server.
*   **Nuxt:** Used for searching the Nuxt documentation. You can use the `search_nuxt_docs` and `list_nuxt_modules` tools to interact with this server.
*   **GoogleSearch:** Used for searching the web. You can use the `google_web_search` tool to interact with this server.
