import { CodePreview } from '@/components/CodePreview'
import { getCodeBlockFromNotion } from '@/lib/notion-client'
import { getNotionPagesId } from '@/lib/vercel-edge-config'
import shiki from 'shiki'

export const metadata = {
  title: 'Dev Setup',
}

// const markdown = `
// # Dev Setup

// - MacBook M1 Max (64gb Memory)
// - LG 25" UltraWide Display

// That's it, nothing more.
// `.trim()

export default async function DevSetup() {
  const { devSetup } = await getNotionPagesId()
  const { content } = await getCodeBlockFromNotion(devSetup)

  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(content, { lang: 'md' })

  return <CodePreview code={code} />
}
