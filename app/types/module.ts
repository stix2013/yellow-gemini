export interface Module {
  name: string
  description: string
  category: string
  repo: string
  npm: string
  github: string
  website: string
  learn_more: string
  type: string
  maintainers: {
    name: string
    github: string
  }[]
  compatibility: {
    nuxt: string
  }
  stats: {
    version: string
    downloads: number
    stars: number
    forks: number
    publishedAt: number
    createdAt: number
  }
  contributors: {
    username: string
    contributions: number
  }[]
}
