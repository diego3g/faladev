'use client'

import { Bug, Cog, Files, FlaskConical, GitFork, Monitor, Puzzle, Search } from 'lucide-react'

import { MenuButton } from './MenuButton'
import { SocialLinksMenuButton } from './SocialLinksMenuButton'
import { isExplorerOpenAtom } from '@/store/explorerStore'
import { useAtom } from 'jotai'

export function Menu() {
  const [_, setIsExplorerOpen] = useAtom(isExplorerOpenAtom)

  function changeVisibilityExplorer() {
    setIsExplorerOpen((state) => !state)
  }

  return (
    <div className="min-w-[3.5rem] bg-[#232135] flex flex-col justify-between z-20">
      <div className="flex flex-col">
        <MenuButton icon={Files} isActive onClick={changeVisibilityExplorer} />
        <MenuButton icon={Search} />
        <MenuButton icon={GitFork} />
        <MenuButton icon={Bug} />
        <MenuButton icon={Puzzle} />
        <MenuButton icon={Monitor} />
        <MenuButton icon={FlaskConical} />
      </div>
      <div className="flex flex-col items-center">
        <SocialLinksMenuButton />
        <MenuButton icon={Cog} />
      </div>
    </div>
  )
}