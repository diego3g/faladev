'use client'

import { useState } from "react"
import { JetBrains_Mono } from "@next/font/google"

import { Copy as CopyIcon, CheckCircle2 as CheckIcon } from "lucide-react"
import { useAtomValue } from "jotai"
import { isExplorerOpenAtom } from "@/store/explorerStore"

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

interface CodePreviewProps {
  code: string
  raw?: string
}

export function CodePreview({ code, raw }: CodePreviewProps) {
  const [hasCopiedToClipboard, setCopiedToClipboard] = useState(false)
  const isExplorerOpen = useAtomValue(isExplorerOpenAtom)

  const showButtonCopyToCliboard = raw && !isExplorerOpen

  const handleCopyToClipboard = () => {
    if (!raw) return
    navigator.clipboard.writeText(raw)
    setCopiedToClipboard(true)
    setTimeout(() => setCopiedToClipboard(false), 2000)
  }

  return (
    <>
      {showButtonCopyToCliboard && (
        <button
          onClick={handleCopyToClipboard}
          data-copied={hasCopiedToClipboard}
          className="w-fit absolute flex items-center md:top-3 max-md:bottom-2 right-8 max-md:right-2 gap-x-2 text-sm font-medium z-30 bg-[#2a273f] px-3 py-2 rounded-md text-[#E0DEF2] ring-2 ring-[#2b283b] data-[copied=true]:ring-emerald-600"
        >
          {!hasCopiedToClipboard && (
            <>
              <CopyIcon size={16} />
              <span className="w-full max-w-32 max-md:hidden">Copy to Clipboard</span>
            </>
          )}

          {hasCopiedToClipboard && (
            <>
              <CheckIcon size={16} className="text-emerald-400" />
              <span className="w-full max-w-32 max-md:hidden">Copied!</span>
            </>
          )}
        </button>
      )}
      <div
        id="shiki-code"
        style={jetBrainsMono.style}
        className="w-full absolute inset-0 overflow-auto leading-relaxed scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent pb-4"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </>
  )
}
