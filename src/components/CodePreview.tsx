"use client";

import { useState } from "react";
import { JetBrains_Mono } from "@next/font/google";

import { Copy as CopyIcon } from "lucide-react";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

interface CodePreviewProps {
  code: string;
  raw: string;
}

export function CodePreview({ code, raw }: CodePreviewProps) {
  const [copy, setCopy] = useState("Copy to Clipboard");

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(raw);
    setCopy("Copied to Clipboard!");
    setTimeout(() => setCopy("Copy to Clipboard"), 2000);
  };

  return (
    <>
      {/*  TODO: Conditionally render Clipboard button to a selected group of files */}
      <button
        onClick={handleCopyToClipboard}
        className="absolute flex items-center right-0 mx-8 gap-x-2 font-semibold z-30 bg-[#2B283B] px-3 py-2 rounded-md text-[#8F8CA8]"
      >
        <CopyIcon size={16} />
        {copy}
      </button>
      <div
        id="shiki-code"
        style={jetBrainsMono.style}
        className="absolute inset-0 overflow-auto leading-relaxed scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </>
  );
}
