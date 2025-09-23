# Strategic Plan: Refactor to a Serverless Architecture

### 1. Understanding the Goal

The primary objective is to completely remove all server-side functionality from the Nuxt application, effectively converting it into a Single-Page Application (SPA). This involves eliminating the backend API, updating frontend components that consume it, and modifying the Nuxt configuration to disable Server-Side Rendering (SSR). Concurrently, the main navigation menu in the `AppHeader` component must be updated to remove links to now-defunct pages. Finally, the test suite must be updated to reflect these removals and changes, ensuring all remaining tests pass.

### 2. Investigation & Analysis

A thorough investigation is required to understand the scope of the server-side logic and its integration with the frontend before planning any changes.

1.  **Identify All Server-Side Logic:**
    *   **Action:** Read the contents of `server/api/modules.get.ts` and `server/utils/modules.ts`.
    *   **Purpose:** To confirm their function, which is to provide a list of Nuxt modules. This is the primary server functionality that needs to be removed.
    *   **Question:** Are there any other files in the `server/` directory that contain logic, middleware, or utilities that need to be considered for removal?

2.  **Locate Frontend Consumers of the Server API:**
    *   **Action:** Perform a project-wide search for the string `/api/modules`.
    *   **Purpose:** To identify all pages or components that make requests to the server endpoint. The primary suspect is `app/pages/modules.vue`.
    *   **Action:** Read the file `app/pages/modules.vue`.
    *   **Purpose:** To understand how it fetches and displays data from the API. This will confirm it's the main consumer and will need to be removed.

3.  **Analyze the Header Component:**
    *   **Action:** Read the file `app/components/AppHeader.vue`.
    *   **Purpose:** To inspect the navigation links and identify the menu item that points to the `/modules` page. This is the link that needs to be removed to "fix" the menu.

4.  **Review Nuxt Configuration:**
    *   **Action:** Read the file `nuxt.config.ts`.
    *   **Purpose:** To check the current rendering mode (likely `ssr: true`) and identify any other server-related configurations that need to be changed or removed.
    *   **Critical Question:** Is the `ssr` property explicitly set? To disable the server, this will need to be set to `false`.

5.  **Assess the Impact on Testing:**
    *   **Action:** Use `glob` to list all test files in the `test/` directory, paying special attention to the `test/e2e/` subdirectory.
    *   **Purpose:** To identify tests related to the features being removed.
    *   **Action:** Read the contents of any test files related to the `modules.vue` page or the `AppHeader.vue` component (e.g., `AppHeader.spec.ts`).
    *   **Purpose:** To understand what is being asserted so a plan can be made to either delete the test file or modify its assertions. For example, the `AppHeader` test should be changed to assert the "Modules" link *does not* exist.

### 3. Proposed Strategic Approach

The refactoring will be executed in four distinct phases to ensure a clean and verifiable transition to a serverless, client-side rendered application.

*   **Phase 1: Eradication of Server-Side Code**
    1.  Delete the `server/api/` directory entirely, removing the `modules.get.ts` endpoint.
    2.  Delete the `server/utils/` directory, removing the `modules.ts` utility function that supports the API.

*   **Phase 2: Frontend Component and Page Realignment**
    1.  Delete the `app/pages/modules.vue` file, as it will no longer have a data source.
    2.  Modify `app/components/AppHeader.vue` to remove the `UHorizontalNavigation` link that points to the `/modules` route.

*   **Phase 3: Transition to Client-Side Rendering**
    1.  Modify the `nuxt.config.ts` file by setting the `ssr` property to `false`. This is the key step that disables Nuxt's server-side rendering capabilities.

*   **Phase 4: Test Suite Synchronization**
    1.  Review all files in `test/e2e/`. Any test file that specifically tests the `/modules` page should be deleted.
    2.  Modify `test/nuxt/AppHeader.spec.ts` to update any snapshots and change the test assertion to confirm that the "Modules" navigation link is no longer rendered.

### 4. Verification Strategy

1.  **Successful Build:** The application must build successfully without errors using the `bun build` command.
2.  **Automated Testing:** The entire test suite must pass after the modifications. This will be verified by running `bun run test` and `bun run test:e2e`.
3.  **Manual UI/UX Verification:**
    *   Run the preview using `bun preview`.
    *   Confirm the "Modules" link is absent from the application header.
    *   Attempting to navigate directly to `/modules` should result in a 404 "Page not found" error.
    *   Using browser developer tools, inspect the network tab to ensure no client-side requests are being made to `/api/modules` or any other API endpoint.
    *   Verify that all other pages (Home, About, FAQ, etc.) render and function correctly.

### 5. Anticipated Challenges & Considerations

*   **State Management:** The Pinia store (`app/stores/locale.ts`) appears simple, but a check should be performed to ensure no other stores are implicitly relying on server-side data. The removal of server logic is not expected to impact the existing locale store.
*   **Third-Party Module Behavior:** Some Nuxt modules can behave differently depending on the rendering mode (`ssr: true` vs `ssr: false`). While the currently installed modules are standard, there's a minor risk of unexpected behavior after switching to a full SPA mode.
*   **Future Scalability:** This plan makes the application purely client-side. If any server-side logic is needed in the future, this decision will need to be reversed. The current goal, however, is the complete removal of the server, which this plan achieves.
