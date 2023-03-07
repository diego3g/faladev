import { get } from '@vercel/edge-config'
import { z } from 'zod'

const notionPagesIdStore = z.object({
  terminal_general: z.string(),
  terminal_fish: z.string(),
  setup_dev: z.string(),
  setup_gaming: z.string(),
  others_tools: z.string(),
})

export async function getNotionPagesId() {
  const pagesId = await get('notion')

  return notionPagesIdStore.parse(pagesId)
}
