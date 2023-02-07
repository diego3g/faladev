import { Bug, Cog, Files, FlaskConical, GitFork, Monitor, Puzzle, Search, User } from 'lucide-react'

export function Menu() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <button type="button" className="h-12 flex justify-center items-center border-l-2 border-[#E0DEF2]">
          <Files strokeWidth={1.5} size={28} color="#E0DEF2" />
        </button>
        <button type="button" className="h-12 flex justify-center items-center border-l-2 border-transparent">
          <Search strokeWidth={1.5} size={28} color="#8F8CA8" />
        </button>
        <button type="button" className="h-12 flex justify-center items-center border-l-2 border-transparent">
          <GitFork strokeWidth={1.5} size={28} color="#8F8CA8" />
        </button>
        <button type="button" className="h-12 flex justify-center items-center border-l-2 border-transparent">
          <Bug strokeWidth={1.5} size={28} color="#8F8CA8" />
        </button>
        <button type="button" className="h-12 flex justify-center items-center border-l-2 border-transparent">
          <Puzzle strokeWidth={1.5} size={28} color="#8F8CA8" />
        </button>
        <button type="button" className="h-12 flex justify-center items-center border-l-2 border-transparent">
          <Monitor strokeWidth={1.5} size={28} color="#8F8CA8" />
        </button>
        <button type="button" className="h-12 flex justify-center items-center border-l-2 border-transparent">
          <FlaskConical strokeWidth={1.5} size={28} color="#8F8CA8" />  
        </button>
      </div>
      <div className="flex flex-col items-center">
        <button type="button" className="h-12 flex justify-center items-center border-l-2 border-transparent">
          <User strokeWidth={1.5} size={28} color="#8F8CA8" />
        </button>
        <button type="button" className="h-12 flex justify-center items-center border-l-2 border-transparent">
          <Cog strokeWidth={1.5} size={28} color="#8F8CA8" />
        </button>
      </div>
    </div>
  )
}