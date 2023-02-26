import { Client, isFullBlock } from '@notionhq/client'
import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export const notionClient = new Client({ auth: process.env.NOTION_API_KEY })

export async function getCodeBlockFromNotion(pageId: string) {
  const { results } = await notionClient.blocks.children.list({ block_id: pageId })

  const codeBlock = results.find(
    block => isFullBlock(block) && block.type === 'code'
  ) as CodeBlockObjectResponse | undefined

  if (!codeBlock) {
    throw new Error(`Failed to fetch Notion content of ID: ${pageId}`)
  }

  const { plain_text } = codeBlock.code.rich_text[0]

  return { content: plain_text }
}
