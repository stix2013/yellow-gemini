# Nuxt 4 Starter Project

This is a Nuxt 4 project using Bun as the package manager.

## Project Overview

This project is a starter for building Vue 3 applications with Nuxt 4. It's configured with the following Nuxt modules:

*   **@nuxt/content:** For content-driven websites.
*   **@nuxt/eslint:** For linting and code style.
*   **@nuxt/image:** for image optimization.
*   **@nuxt/scripts:** for managing third-party scripts.
*   **@nuxt/test-utils:** For testing.
*   **@nuxt/ui:** For UI components.

The main application entry point is `app/app.vue`.

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed.

### Installation

Install the project dependencies:

```bash
bun install
```

### Development

Start the development server:

```bash
bun dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Production

To build the application for production:

```bash
bun build
```

To preview the production build:

```bash
bun preview
```

## Testing

This project uses `vitest` for testing. Test files are located in the `tests` directory.

To run the tests:

```bash
bun test
```

## Development Conventions

*   **Package Manager:** This project uses `bun`.
*   **Linting:** ESLint is used for linting (`eslint.config.mjs`).
*   **TypeScript:** The project uses TypeScript (`tsconfig.json`).
*   **Routing:** File-based routing in the `app/pages` directory.
*   **State Management:** Pinia stores are in the `app/stores` directory.