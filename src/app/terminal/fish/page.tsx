import { CodePreview } from '@/components/CodePreview'
import { getCodeBlockFromNotion } from '@/lib/notion-client'
import { getNotionPagesId } from '@/lib/vercel-edge-config'
import shiki from 'shiki'

export const metadata = {
  title: 'Fish',
}

// const fishConfig = `if status is-interactive
// # Commands to run in interactive sessions can go here
// end

// set SPACEFISH_PROMPT_ADD_NEWLINE false

// starship init fish | source

// # Aliases
// # alias cat="bat --theme=\$(defaults read -globalDomain AppleInterfaceStyle &> /dev/null && echo default || echo GitHub)"`

export default async function FishConfig() {
  const { fish } = await getNotionPagesId()
  const { content } = await getCodeBlockFromNotion(fish)

  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(content, { lang: 'fish' })

  return <CodePreview code={code} raw={content} />
}
