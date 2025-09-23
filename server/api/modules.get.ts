import { listNuxtModules } from '~/server/utils/modules';

export default defineEventHandler(async () => {
  const modules = await listNuxtModules();
  return modules;
});
