import { CodePreview } from '@/components/CodePreview'
import { getCodeBlockFromNotion } from '@/lib/notion-client'
import { getNotionPagesId } from '@/lib/vercel-edge-config'
import shiki from 'shiki'

export const metadata = {
  title: 'Gaming Setup',
}

export default async function GamingSetup() {
  const { setup_gaming } = await getNotionPagesId()
  const { content } = await getCodeBlockFromNotion(setup_gaming)

  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(content, { lang: 'md' })

  return <CodePreview code={code} />
}
