import { JetBrains_Mono } from "@next/font/google"

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

interface CodePreviewProps {
  code: string
}

export function CodePreview({ code }: CodePreviewProps) {
  return (
    <div 
      id="shiki-code"
      style={jetBrainsMono.style}
      className="absolute inset-0 overflow-auto leading-relaxed scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent" 
      dangerouslySetInnerHTML={{ __html: code }}
    />
  )
}