'use client'

import { useState } from "react"
import { JetBrains_Mono } from "@next/font/google"

import { Copy as CopyIcon, CheckCircle2 as CheckIcon } from "lucide-react"

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

interface CodePreviewProps {
  code: string
  raw?: string
}

export function CodePreview({ code, raw }: CodePreviewProps) {
  const [hasCopiedToClipboard, setCopiedToClipboard] = useState(false)

  const handleCopyToClipboard = () => {
    if (!raw) return
    navigator.clipboard.writeText(raw)
    setCopiedToClipboard(true)
    setTimeout(() => setCopiedToClipboard(false), 2000)
  }

  return (
    <>
      {raw && (
        <button
          onClick={handleCopyToClipboard}
          data-copied={hasCopiedToClipboard}
          className="absolute flex items-center right-0 mx-8 gap-x-2 text-sm font-medium z-30 bg-[#2a273f] px-3 py-2 rounded-md text-[#E0DEF2] ring-2 ring-[#2b283b] data-[copied=true]:ring-emerald-600"
        >
          {hasCopiedToClipboard ? (
            <>
              <CheckIcon size={16} className="text-emerald-400" />
              <span className="w-32">Copied!</span>
            </>
          ): (
            <>
              <CopyIcon size={16} />
              <span className="w-32">Copy to Clipboard</span>
            </>
          )}
        </button>
      )}
      <div
        id="shiki-code"
        style={jetBrainsMono.style}
        className="absolute inset-0 overflow-auto leading-relaxed scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </>
  )
}
