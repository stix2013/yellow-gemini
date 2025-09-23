### 1. Understanding the Goal

The primary objective is to diagnose and create a plan to resolve a `ReferenceError` for `listNuxtModules` in the `server/api/modules.get.ts` file. This plan involves creating a new Git branch, documenting the strategy in a new file within the `docs/` directory, and outlining the implementation and verification steps.

### 2. Investigation & Analysis

1.  **Error Analysis**: The error message `ReferenceError: listNuxtModules is not defined` in `server/api/modules.get.ts` indicates that the function `listNuxtModules` is being called without being defined or imported in that file.

2.  **File Inspection**: I will read the contents of `server/api/modules.get.ts` to understand the context in which `listNuxtModules` is used. This will confirm it's being called directly within the event handler.

3.  **Locating the Function Source**:
    *   The name `listNuxtModules` is very similar to the available tool `list_nuxt_modules`. This strongly suggests the developer's intent was to create a server-side utility function that wraps the call to this tool.
    *   I will inspect the `server/` directory, particularly for a `utils` or `lib` subdirectory, to see if a file for such utilities already exists. This will inform where the new function should be created to maintain project conventions.

4.  **Determine New Document Name**: I will list the contents of the `/docs` directory to find the highest numbered markdown file. The current highest is `13-fix-rollup-error.md`, so the new plan document will be named `14-fix-modules-api.md`.

### 3. Proposed Strategic Approach

The strategy is to create a dedicated utility function that fetches the Nuxt modules and then call this function from the API route, ensuring proper imports and asynchronous handling.

*   **Phase 1: Branching and Documentation**
    1.  **Create Branch:** Create a new Git branch named `fix/modules-api-error`.
    2.  **Create Plan File:** Create a new file named `docs/14-fix-modules-api.md` and populate it with this strategic plan.

*   **Phase 2: Implementation**
    1.  **Create Utility File:** Create a new file at `server/utils/modules.ts`.
    2.  **Define `listNuxtModules` Function:** In `server/utils/modules.ts`, define and export an `async` function named `listNuxtModules`. This function will:
        *   Call the `list_nuxt_modules()` tool.
        *   Include a `try...catch` block to handle potential errors during the tool call.
        *   Return the list of modules on success or an empty array/error on failure.
    3.  **Update API Route:** Modify the `server/api/modules.get.ts` file:
        *   Import the `listNuxtModules` function from `~/server/utils/modules`.
        *   Change the `defineEventHandler` to be an `async` function.
        *   Call `await listNuxtModules()` within the handler and return its result.

*   **Phase 3: Finalization & Code Commit**
    1.  **Stage Changes:** Add all modified and new files to the Git staging area (`git add .`).
    2.  **Commit Changes:** Commit the staged files with the message: `feat(api): implement listNuxtModules and fix modules endpoint`.
    3.  **Push Branch:** Push the `fix/modules-api-error` branch to the remote repository.

### 4. Verification Strategy

1.  **Development Server:** After implementing the changes, run `bun dev`. The server should start without the `ReferenceError`.
2.  **API Endpoint Test:** Access the `/api/modules` endpoint using a browser or a tool like `curl`. The endpoint should return a `200 OK` status and a JSON array of Nuxt modules.
3.  **Regression Testing:** Run the full test suite with `bun run test` and `bun run test:e2e` to ensure that the changes have not negatively impacted any other part of the application.

### 5. Anticipated Challenges & Considerations

*   **Tool Failure:** The `list_nuxt_modules` tool could fail. The utility function should gracefully handle this by logging the error and returning an appropriate response (e.g., an empty array with a server-side log) to prevent the API route from crashing.
*   **Performance:** The `list_nuxt_modules` tool might involve a network request or significant computation. To optimize performance and avoid repeated calls, implementing a simple in-memory cache with a Time-to-Live (TTL) within the `server/utils/modules.ts` utility would be a robust enhancement.
*   **Asynchronous Handling:** It is critical that the event handler in `server/api/modules.get.ts` correctly uses `async/await` to handle the Promise returned by the new `listNuxtModules` function.
