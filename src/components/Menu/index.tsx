import { Bug, Cog, Files, FlaskConical, GitFork, Monitor, Puzzle, Search } from 'lucide-react'
import { MenuButton } from './MenuButton'
import { SocialLinksMenuButton } from './SocialLinksMenuButton'

export function Menu() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <MenuButton icon={Files} isActive />
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