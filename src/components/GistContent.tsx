import shiki from "shiki"
import { CodePreview } from "./CodePreview"

interface GistContentProps {
  gistUrl: string
}

export async function GistContent({ gistUrl }: GistContentProps) {
  const settingsResponse = await fetch(gistUrl)
  const settings = await settingsResponse.text()

  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(settings, { lang: 'json' })

  return <CodePreview code={code} raw={settings} />
}
