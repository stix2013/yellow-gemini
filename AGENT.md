# Yellow Project Guidelines

This document provides a comprehensive overview of the Yellow project, including setup instructions, development conventions, and technical documentation.

---

## 1. Project Overview

Yellow is a Nuxt 4 application built with Bun. It leverages several Nuxt modules to enhance functionality:

- **@nuxt/content:** For content-driven features.
- **@nuxt/eslint:** For code linting and style enforcement.
- **@nuxt/image:** For image optimization.
- **@nuxt/scripts:** For managing third-party scripts.
- **@nuxt/test-utils:** For testing purposes.
- **@nuxt/ui:** For the user interface components.

The main application entry point is `app/app.vue`.

### Bun API

See [BUN.md](./BUN.md) for details.

---

## 4. Project Structure

### Directory Layout

- **Pages:** All top-level pages are located in `app/pages`.
- **Stores:** Pinia stores are in `app/stores`.
- **Types:** All TypeScript types, interfaces, and enums are in `app/types`.

### Routing

The project uses file-based routing. Nuxt automatically generates routes based on the `.vue` components in the `app/pages` directory. The `<NuxtPage />` component in `app/app.vue` displays the content of the current page.

---

## 5. Nuxt Documentation

### Data Fetching

- Use `useAsyncData` for fetching data in components.
- Always handle all data fetching states (`pending`, `error`, `data`) in your templates.

**Example:**

```vue
<script setup lang="ts">
  const { data, status, error, refresh, clear } = await useAsyncData(
    'mountains',
    () => $fetch('https://api.nuxtjs.dev/mountains')
  );
</script>

<template>
  <div v-if="status === 'pending'">Loading...</div>
  <div v-else-if="status === 'error'">Error: {{ error }}</div>
  <div v-else>{{ data }}</div>
</template>
```

### Component Best Practices

- Create small, focused components.
- Use `defineModel` for two-way data binding.
- Use `props` to pass data down to child components.
- Use `emits` to communicate events up to parent components.
- Use composables for shared logic.
- Use Pinia for global state management.
- Use `provide`/`inject` sparingly.

### Vue Single File Components (SFCs)

Structure your SFCs in the following order:

1.  `<script setup>`
2.  `<template>`
3.  `<style>`

### Styling

- Use Tailwind CSS for styling.
- Prioritize utility classes in the template.
- Use the `<style>` section only for CSS properties not well-supported by Tailwind.

### Accessibility

- Use proper ARIA attributes.
- Ensure keyboard navigation is supported.
- Use semantic HTML elements.

### Component Props and Emits

- Use TypeScript interfaces or type aliases with `defineProps` and `defineEmits`.
- Define complex types in the `/types` directory.
- Use `withDefaults` for props with default values.

**Example:**

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

### Nuxt UI

See [NUXTUI.md](./NUXTUI.md) for details.

---

## 6. TypeScript Guidelines

### Directory Structure

- All TypeScript interfaces, types, and enums must be in the `/types` directory.
- Organize types by domain (e.g., `user.ts`, `post.ts`).
- Use a barrel file (`index.ts`) to simplify imports.

### Naming Conventions

- Use **PascalCase** for interface, type, and enum names.
- Use singular nouns for entity types (e.g., `Post`).
- Suffix prop interfaces with `Props` (e.g., `ButtonProps`).
- Suffix state interfaces with `State` (e.g., `AuthState`).

### Import Pattern

- Use named imports with the `type` keyword: `import type { Post } from '~/types'`.
- Import from the barrel file whenever possible.

### Type Definitions

- Keep interfaces focused and cohesive.
- Use composition over inheritance.
- Use TypeScript utility types (`Partial`, `Pick`, `Omit`, etc.).

### API Types

- Define separate interfaces for API requests and responses.
- Suffix request interfaces with `Request` (e.g., `CreatePostRequest`).
- Suffix response interfaces with `Response` (e.g., `PostResponse`).

---

## 7. Troubleshooting

### `better-sqlite3` Binding Error

If you encounter an error related to `better-sqlite3`, enable native SQLite in `nuxt.config.ts`:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  content: {
    experimental: {
      nativeSqlite: true,
    },
  },
});
```

### Gemini Stream Compatibility Error

If you get an `Invalid or incompatible stream` error when using Google Gemini's stream response with Nuxt's `sendStream`, convert the stream to a standard `ReadableStream`:

```typescript
// server/api/chat.post.ts
import { GoogleGenerativeAI } from '@google/generative-ai';

export default defineEventHandler(async (event) => {
  // ...
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

---

## 8. Available Tools

This project is configured to use the following MCP servers for external information retrieval:

- **Context7:** For searching library and package documentation.
- **Nuxt:** For searching the Nuxt documentation.
- **GoogleSearch:** For general web searches.

---

## 9. Contributing

Before contributing, please:

- Follow our [Code of Conduct](https://github.com/antfu/.github/blob/main/CODE_OF_CONDUCT.md).
- Read the [Contributing Guide](https://github.com/antfu/contribute).
- Check for existing issues to avoid duplicates.
