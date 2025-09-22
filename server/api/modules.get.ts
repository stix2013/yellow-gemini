export default defineEventHandler(async () => {
  // @ts-ignore
  const modules = await list_nuxt_modules()
  return modules
})
