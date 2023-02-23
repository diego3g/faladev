"use client"

import {
  Cog,
  Cpu,
  FileJson,
  Joystick,
  MoreHorizontal,
  Terminal,
} from "lucide-react"
import { FolderStructure } from "./FolderStructure"

const folderStructure = [
  {
    title: "Visual Studio Code",
    files: [
      {
        name: "settings.json",
        url: "/vscode/settings",
        icon: FileJson,
      },
      {
        name: "extensions.json",
        url: "/vscode/extensions",
        icon: FileJson,
      },
    ],
  },
  {
    title: "Terminal",
    files: [
      {
        name: "General",
        url: "/terminal/general",
        icon: Terminal,
      },
      {
        name: "config.fish",
        url: "/terminal/fish",
        icon: Cog,
      },
    ],
  },
  {
    title: "Others",
    files: [
      {
        name: "dev.setup",
        url: "/others/dev-setup",
        icon: Cpu,
      },
      {
        name: "gaming.setup",
        url: "/others/gaming-setup",
        icon: Joystick,
      },
    ],
  },
]

export function Explorer() {
  return (
    <div className="py-2 px-4 text-[#8F8CA8]">
      <strong className="font-medium text-xs pl-2 flex items-center justify-between uppercase">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className="mt-4 flex flex-col">
        {folderStructure.map((folder) => {
          return (
            <FolderStructure
              key={folder.title}
              title={folder.title}
              files={folder.files}
            />
          )
        })}
      </nav>
    </div>
  )
}
