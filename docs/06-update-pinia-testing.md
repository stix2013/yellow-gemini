# Strategic Plan: Update @pinia/testing to v1.0.2

## 1. Understanding the Goal

The primary objective is to update the `@pinia/testing` package from version `0.1.7` to `1.0.2`. This includes refactoring the existing Pinia store unit tests to utilize the recommended testing utilities provided by `@pinia/testing`, aligning with modern best practices and the likely original intent of the project.

## 2. Investigation & Analysis

A thorough investigation of the codebase was conducted to understand the current state of testing and the usage of Pinia.

*   **Dependency Confirmation:** `package.json` confirms that `@pinia/testing` is a development dependency currently at version `0.1.7`.
*   **Usage Analysis:** The investigation revealed that `@pinia/testing` is not currently being used in any of the test files. The existing Pinia store test in `tests/stores/locale.test.ts` manually sets up and tears down the Pinia instance using `createPinia` and `setActivePinia` from the core `pinia` package.
*   **Project Intent:** The document `docs/03-fix-testing.md` contains a note about "Refactoring the test to properly use helpers from `@pinia/testing`," which strongly suggests that using this package is the intended approach for testing Pinia stores in this project.
*   **Breaking Changes & New Usage:** Research on the `@pinia/testing` package between versions `0.1.7` and `1.0.2` indicates that the primary utility is the `createTestingPinia` function. This function simplifies the setup of Pinia for testing by automatically mocking actions and providing an easy way to set initial state.

## 3. Proposed Strategic Approach

The following phased approach will be taken to update the package and refactor the tests.

### Phase 1: Dependency Update

1.  **Modify `package.json`:** Update the version of `@pinia/testing` from `0.1.7` to `1.0.2`.
2.  **Install Dependencies:** Run `bun install` to update the `bun.lock` file and install the new version of the package.

### Phase 2: Test Refactoring

1.  **Update `tests/stores/locale.test.ts`:**
    *   Remove the manual `setActivePinia(createPinia())` setup in the `beforeEach` block.
    *   Import `createTestingPinia` from `@pinia/testing`.
    *   Refactor the tests to use `createTestingPinia`. This will likely involve creating a testing pinia instance and passing it to the component or store being tested. The `createTestingPinia` function will be used to set up the testing environment for the store, and the tests will be adapted to use the features it provides, such as `initialState` and action spying.

## 4. Verification Strategy

The success of this plan will be verified through the following steps:

1.  **Unit Tests:** Execute the entire test suite by running `bun test`. All tests, especially those in `tests/stores/locale.test.ts`, must pass.
2.  **E2E Tests:** Execute the E2E test suite by running `bun test:e2e`. All E2E tests must pass to ensure that the changes to the store testing have not introduced any regressions in the application's end-to-end behavior.
3.  **Linting:** Run the project's linter to ensure the new code adheres to the project's coding style.

## 5. Anticipated Challenges & Considerations

*   **API Changes:** The API of `@pinia/testing` has likely changed between `0.1.7` and `1.0.2`. The refactoring will need to carefully follow the new API's documentation.
*   **Test Logic Adaptation:** The existing test logic will need to be adapted to the new testing paradigm introduced by `createTestingPinia`. This may involve changing how assertions are made, particularly for actions, which will be mocked by default.
*   **Dependency Conflicts:** Although unlikely, there is a small risk that the updated version of `@pinia/testing` could have conflicts with other dependencies. The `bun install` step will help identify these early.
