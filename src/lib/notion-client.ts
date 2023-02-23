import { Client, isFullBlock } from "@notionhq/client"

export const notionClient = new Client({ auth: process.env.NOTION_API_KEY })

export async function getCodeBlockFromNotion(pageId: string) {
  const { results } = await notionClient.blocks.children.list({ block_id: pageId })

  let codeBlock

  for (let block of results) {
    if (isFullBlock(block) && block.type === "code") {
      codeBlock = block
      break
    }
  }

  if (!codeBlock) {
    throw new Error(`Failed to fetch Notion content of ID: ${pageId}`)
  }

  const { plain_text } = codeBlock.code.rich_text[0]

  return { content: plain_text }
}