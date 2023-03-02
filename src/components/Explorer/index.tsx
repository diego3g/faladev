import {
  Cog,
  Cpu,
  FileJson,
  Joystick,
  MoreHorizontal,
  Terminal,
} from 'lucide-react'
import { type ReactNode } from 'react'
import { OpenFilesSubMenu } from '../OpenFilesTabs/OpenFilesSubMenu'
import { FolderStructure } from './FolderStructure'
import { SubMenu } from './SubMenu'

export type ExplorerFiles = {
  name: string
  path: string
  icon: ReactNode
}

export type ExplorerFolder = {
  title: string
  files: ExplorerFiles[]
}

export const explorerFolderStructure: ExplorerFolder[] = [
  {
    title: 'Visual Studio Code',
    files: [
      {
        name: 'settings.json',
        path: '/vscode/settings',
        icon: <FileJson size={16} />,
      },
      {
        name: 'extensions.json',
        path: '/vscode/extensions',
        icon: <FileJson size={16} />,
      },
    ],
  },
  {
    title: 'Terminal',
    files: [
      {
        name: 'General',
        path: '/terminal/general',
        icon: <Terminal size={16} />,
      },
      {
        name: 'config.fish',
        path: '/terminal/fish',
        icon: <Cog size={16} />,
      },
    ],
  },
  {
    title: 'Others',
    files: [
      {
        name: 'dev.setup',
        path: '/others/dev-setup',
        icon: <Cpu size={16} />,
      },
      {
        name: 'gaming.setup',
        path: '/others/gaming-setup',
        icon: <Joystick size={16} />,
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
        <SubMenu title="OPEN EDITORS">
          <OpenFilesSubMenu />
        </SubMenu>

        <SubMenu defaultOpen title="FALA-DEV">
          {explorerFolderStructure.map((explorerFolder) => {
            return (
              <FolderStructure
                key={explorerFolder.title}
                title={explorerFolder.title}
                files={explorerFolder.files}
              />
            )
          })}
        </SubMenu>
      </nav>
    </div>
  )
}
