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
          className={`absolute flex items-center right-0 mx-8 gap-x-2 font-semibold z-30 bg-[#2B283B] px-3 py-2 rounded-md text-[#8F8CA8] ${hasCopiedToClipboard ? "ring-2 ring-[#065F46]" : ""}`}
        >
          {hasCopiedToClipboard ? (
            <>
              <CheckIcon size={16} color="#065F46" />
              Copied to Clipboard!
            </>
          ): (
            <>
              <CopyIcon size={16} />
              Copy to Clipboard
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
