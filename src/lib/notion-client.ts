import { NotionAPI } from "notion-client";

export const notionClient = new NotionAPI();

export async function getCodeBlockFromNotion(pageId: string) {
  const page = await notionClient.getPage(pageId)
  const blocks = Object.entries(page.block).map(
    ([key, value]) => ({ ...value })
  )
  const codeBlock = blocks.find(block => block.value.type === "code")

  if (!codeBlock) {
    throw new Error("Error when trying to fetch Notion pages")
  }

  const codeBlockContent = codeBlock.value.properties.title[0][0] as string
  
  return { content: codeBlockContent }
}