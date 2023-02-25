'use client'

import _ from 'lodash'
import {
  Cog,
  Cpu,
  FileJson,
  Joystick,
  MoreHorizontal,
  Terminal,
  type LucideIcon,
} from 'lucide-react'
import { OpenFilesSubMenu } from '../OpenFilesTabs/OpenFilesSubMenu'
import { FolderStructure } from './FolderStructure'
import { SubMenu } from './SubMenu'

export type FileType = {
  folder: string
  title: string
  icon: LucideIcon
}

export const explorerFiles: Record<string, FileType> = {
  '/vscode/settings': {
    folder: 'Visual Studio Code',
    title: 'settings.json',
    icon: FileJson,
  },
  '/vscode/extensions': {
    folder: 'Visual Studio Code',
    title: 'extensions.json',
    icon: FileJson,
  },
  '/terminal/general': {
    folder: 'Terminal',
    title: 'General',
    icon: Terminal,
  },
  '/terminal/fish': {
    folder: 'Terminal',
    title: 'config.fish',
    icon: Cog,
  },
  '/others/dev-setup': {
    folder: 'Others',
    title: 'dev.setup',
    icon: Cpu,
  },
  '/others/gaming-setup': {
    folder: 'Others',
    title: 'gaming.setup',
    icon: Joystick,
  },
}

// NOTE: We're using it to pass the file path into files array
const newFolderStructure = Object.entries(explorerFiles).map(([path, file]) => {
  return {
    title: file.folder,
    files: [
      {
        path,
        name: file.title,
        icon: file.icon,
      },
    ],
  }
})

export function Explorer() {
  const folderStructureGrouped = _.groupBy(newFolderStructure, 'title')
  const folderStructure = Object.entries(folderStructureGrouped).map(
    ([title, files]) => {
      return {
        title,
        files: files.map(({ files }) => files[0]),
      }
    },
  )

  return (
    <div className="py-2 px-4 text-[#8F8CA8]">
      <strong className="font-medium text-xs pl-2 flex items-center justify-between uppercase">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className="mt-4 flex flex-col">
        <SubMenu title="OPEN EDITORS">
          <OpenFilesSubMenu />
        </SubMenu>

        <SubMenu defaultOpen title="FALA-DEV">
          {folderStructure.map((folder) => {
            return (
              <FolderStructure
                key={folder.title}
                title={folder.title}
                files={folder.files}
              />
            )
          })}
        </SubMenu>
      </nav>
    </div>
  )
}
