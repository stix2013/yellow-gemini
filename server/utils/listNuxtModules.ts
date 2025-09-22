import { listNuxtModules as listNuxtModulesTool } from '#build/types/nuxt-tools'

export async function listNuxtModules() {
  const modules = await listNuxtModulesTool()
  return modules
}
