import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
  title: 'Terminal',
}

const markdown = `
# General

Currently I'm using the combo Fish + Starship in my terminal.

Fish Shell: https://fishshell.com/
Starship: https://starship.rs/

---

I'm also using Warp as my terminal emulator.

Warp: https://www.warp.dev/

---

For the theme, I chose Rosé Pine Moon variant: 

Theme: https://github.com/austintraver/warp-theme/blob/main/base16_rose_pine_moon.yaml
`.trim()

export default async function General() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(markdown, { lang: 'md' })

  return <CodePreview code={code} />
}
