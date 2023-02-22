import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
  title: 'Dev Setup',
}

const markdown = `
# Dev Setup

- MacBook M1 Max (64gb Memory)
- LG 25" UltraWide Display

That's it, nothing more.
`.trim()
 
export default async function DevSetup() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(markdown, { lang: 'md' })

  return <CodePreview code={code} />
}