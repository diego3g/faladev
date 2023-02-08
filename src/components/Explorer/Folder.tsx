"use client"

import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight, Folder as FolderIcon } from "lucide-react";
import { ReactNode, useState } from "react";

interface FolderProps {
  title: string;
  children: ReactNode
  defaultOpen?: boolean
}

export function Folder({ title, children, defaultOpen = false }: FolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger className="flex items-center gap-2 px-2 py-1 w-full border border-transparent hover:bg-[#2a273f] hover:text-[#E0DEF2] focus:bg-[#2a273f] focus:border-[#363247] focus:text-[#E0DEF2]">
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}

        <FolderIcon size={16} />

        <span className="text-sm">{title}</span>
      </Collapsible.Trigger>

      <Collapsible.Content>
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}