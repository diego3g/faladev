import { CodePreview } from '@/components/CodePreview'
import { getCodeBlockFromNotion } from '@/lib/notion-client'
import shiki from 'shiki'


export const metadata = {
  title: 'Terminal',
}

// const markdown = `
// # General

// Currently I'm using the combo Fish + Starship in my terminal.

// Fish Shell: https://fishshell.com/
// Starship: https://starship.rs/

// ---

// I'm also using Warp as my terminal emulator.

// Warp: https://www.warp.dev/

// ---

// For the theme, I chose Rosé Pine Moon variant:

// Theme: https://github.com/austintraver/warp-theme/blob/main/base16_rose_pine_moon.yaml
// `.trim()

export default async function General() {
  const { content } = await getCodeBlockFromNotion("19308817500d4b3ca1f48b4b928911be")
  
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(content, { lang: 'md' })

  return <CodePreview code={code} />
}
