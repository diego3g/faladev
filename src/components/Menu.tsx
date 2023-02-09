import { Bug, Cog, Files, FlaskConical, GitFork, Monitor, Puzzle, Search, User } from 'lucide-react'
import type { Icon } from 'lucide-react'

export function Menu() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <Button Icon={Files} isActive />
        <Button Icon={Search} />
        <Button Icon={GitFork} />
        <Button Icon={Bug} />
        <Button Icon={Puzzle} />
        <Button Icon={Monitor} />
        <Button Icon={FlaskConical} />
      </div>
      <div className="flex flex-col items-center">
        <Button Icon={User} />
        <Button Icon={Cog} />
      </div>
    </div>
  )
}

interface ButtonProps {
  Icon: Icon
  isActive?: boolean
}

function Button({ Icon, isActive = false }: ButtonProps) {
  return (
    <button type="button" className={"h-12 flex justify-center items-center border-l-2" + " " + (isActive ? "border-[#E0DEF2]" : "border-transparent")}>
      <Icon strokeWidth={1.5} size={28} color={isActive ? "#E0DEF2" : "#8F8CA8"} />
    </button>
  )
}