import { listNuxtModules } from '~/server/utils/listNuxtModules'

export default defineEventHandler(async () => {
  const modules = await listNuxtModules()
  return modules
})
