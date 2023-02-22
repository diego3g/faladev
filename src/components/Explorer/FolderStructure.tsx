import type { LucideIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { File } from "./File"
import { Folder } from "./Folder"

interface FolderStructureProps {
  title: string
  files: {
    url: string
    name: string
    icon: LucideIcon
  }[]
}

export function FolderStructure({ title, files }: FolderStructureProps) {
  const pathName = usePathname()

  const filesURL = files.map(({ url }) => url)

  return (
    <Folder title={title} defaultOpen={filesURL.includes(pathName as string)}>
      {files.map((file) => {
        return (
          <File key={file.url} href={file.url}>
            <file.icon size={16} />
            {file.name}
          </File>
        )
      })}
    </Folder>
  )
}
