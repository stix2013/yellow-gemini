### 1. Understanding the Goal

The objective is to completely overhaul the application's current homepage and replace it with a new design based on the official Nuxt UI "Landing" template. The final implementation should closely mirror the structure, components, and aesthetic of the live preview available at `https://landing-template.nuxt.dev/`.

### 2. Investigation & Analysis

A thorough investigation is required to understand the components of the target template and how they will integrate into the existing project structure.

*   **Analyze the Target Template:**
    *   Use the `web_fetch` tool on the template's documentation page (`https://ui.nuxt.com/templates/landing`) to extract critical information. This will include:
        *   The names of the specific Nuxt UI components used (e.g., `ULandingHero`, `UPageGrid`, `ULandingCard`).
        *   The required project dependencies (e.g., `@nuxt/ui`, `@nuxt/fonts`).
        *   The necessary configuration in `app.config.ts` for colors, fonts, and component defaults.
        *   The basic structural layout of the page's components.

*   **Assess the Current Project State:**
    *   **Dependencies:** Read `package.json` to confirm that `@nuxt/ui` is installed and to identify if any other required packages (like `@nuxt/fonts`) are missing.
    *   **Configuration:**
        *   Read `nuxt.config.ts` to see how `@nuxt/ui` is currently registered.
        *   Check for the existence of `app.config.ts`. If it exists, read it to understand the current UI configuration. If not, one will need to be created.
    *   **Existing Structure:**
        *   Read `app/pages/index.vue` to have a clear picture of the content that will be replaced.
        *   Read `app/layouts/default.vue` to analyze the current default layout. The landing page template likely provides its own full-page structure, which may require the existing layout's header and footer to be removed or a new, clean layout to be created.
        *   Read `app/app.vue` to understand how the root component is structured and how layouts are applied.

*   **Critical Questions to Answer:**
    *   Are the components used in the template (like `ULandingHero`) part of the standard `@nuxt/ui` library, or were they part of the deprecated `@nuxt/ui-pro`? (The `AGENT.md` file's mention of a migration makes this a critical point).
    *   What specific color palette (primary, gray) and font settings does the template require in `app.config.ts`?
    *   Does the template require a specific layout structure that conflicts with the current `default.vue`?
    *   How will the new landing page affect the existing E2E tests, which are hardcoded to the current homepage's content?

### 3. Proposed Strategic Approach

The implementation will be structured in phases, starting with configuration and moving through component-by-component implementation.

*   **Phase 1: Setup and Configuration**
    1.  **Branching:** Create a new Git branch named `feat/landing-page-redesign`.
    2.  **Dependency Check:** Ensure `@nuxt/ui` and `@nuxt/fonts` are installed. Install if missing.
    3.  **Configuration:** Create or modify `app.config.ts` to define the color palette (primary and gray) and other UI settings to match the landing page template's design.
    4.  **Layout Strategy:** Create a new layout file, `app/layouts/landing.vue`, that contains only a `<slot />`. This ensures a clean slate, free of the default header and footer, and apply this layout specifically to the `index.vue` page.

*   **Phase 2: Rebuilding the Homepage**
    1.  **Clear the Canvas:** Completely clear the existing content of `app/pages/index.vue`.
    2.  **Structure the Page:** Set the `definePageMeta` to use the new `landing` layout.
    3.  **Implement Header:** Re-create the template's header section using the appropriate components (`UHeader`).
    4.  **Implement Hero Section:** Build the main "Hero" section using the `ULandingHero` component.
    5.  **Implement Features Section:** Construct the grid of features using `UPageGrid` and `ULandingCard` components.
    6.  **Implement Footer:** Add the `UFooter` component at the bottom of the page.
    7.  **Populate with Content:** Use the text and assets from the official template as placeholders.

*   **Phase 3: Updating Tests**
    1.  **Analyze E2E Failures:** Run the E2E test suite (`bun test:e2e`) and expect it to fail.
    2.  **Update E2E Test:** Modify `tests/e2e/index.spec.e2e.ts` to reflect the new reality. The test should now look for elements present in the new landing page, such as the main headline in the `ULandingHero` component.

### 4. Verification Strategy

*   **Visual Parity:** The new homepage should be visually identical to the official Nuxt UI Landing template preview. This will be verified by comparing the local result with `https://landing-template.nuxt.dev/`.
*   **Responsiveness:** The page will be checked across multiple viewport sizes (desktop, tablet, mobile) to ensure it is fully responsive.
*   **Interactivity:** All interactive elements, such as buttons and links in the header and footer, must be functional.
*   **Passing Tests:** The entire test suite, including the updated E2E test, must pass successfully (`bun test` and `bun test:e2e`).

### 5. Anticipated Challenges & Considerations

*   **Component Versioning:** The template may have been built with a slightly different version of `@nuxt/ui`. There's a risk of minor discrepancies in component props or behavior. Close attention to the documentation is key.
*   **Configuration Complexity:** Nuxt UI's configuration in `app.config.ts` is powerful but can be complex. Achieving the exact look of the template may require fine-tuning of nested configuration properties.
*   **Asset Management:** The template uses logos and other images. These assets will need to be sourced and placed in the `public/` directory.
*   **Test Brittleness:** The E2E test is inherently brittle when tied to specific UI content. Updating it is straightforward, but this highlights the need for more robust testing strategies in the long run, perhaps using `data-testid` attributes on key elements of the new components.
