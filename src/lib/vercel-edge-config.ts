import { getAll } from "@vercel/edge-config";
import { z } from "zod";

const notionPagesIdStore = z.object({
  general: z.string(),
  fish: z.string(),
  devSetup: z.string(),
  gamingSetup: z.string(),
})

export async function getNotionPagesId() {
  const pagesId = await getAll()

  return notionPagesIdStore.parse(pagesId)
}
