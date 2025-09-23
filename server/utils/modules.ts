import { list_nuxt_modules } from '~/server/tools/dummy';

/**
 * @returns A list of Nuxt modules.
 * @description Fetches the list of Nuxt modules from the `list_nuxt_modules` tool.
 * @example
 * const modules = await listNuxtModules();
 */
export const listNuxtModules = async () => {
  try {
    const modules = await list_nuxt_modules();
    return modules;
  } catch (error) {
    console.error('Error fetching Nuxt modules:', error);
    return [];
  }
};