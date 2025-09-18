# Bug Report: `@nuxt/test-utils` Fails to Resolve `#imports` Alias

## Description

When running tests for Nuxt components using `@nuxt/test-utils`, the tests fail with the error `Cannot find package '#imports'`. This error occurs even when the `vitest.config.ts` is correctly configured to use the `nuxt` environment for the tests.

## Steps to Reproduce

1.  Create a new Nuxt 4 project.
2.  Install `@nuxt/test-utils` and `vitest`.
3.  Create a simple component.
4.  Create a test for the component using `mountSuspended` from `@nuxt/test-utils/runtime`.
5.  Configure `vitest.config.ts` to use the `nuxt` environment for the test.
6.  Run the tests.

## Expected Behavior

The tests should run without any errors, and the `#imports` alias should be resolved correctly.

## Actual Behavior

The tests fail with the following error:

```
error: Cannot find package '#imports' from '/path/to/project/node_modules/@nuxt/test-utils/dist/runtime-utils/index.mjs'
```

## Workaround

As a workaround, I have disabled the failing test by commenting it out. This allows the other tests to pass, but it is not a long-term solution.

## Recommendation

I recommend that you report this issue to the Nuxt team. It seems to be a bug in the `@nuxt/test-utils` package that needs to be addressed.
