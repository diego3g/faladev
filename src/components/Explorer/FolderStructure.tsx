import type { LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { File } from './File'
import { Folder } from './Folder'

interface FolderStructureProps {
  title: string
  files: {
		name: string
    path: string
    icon: LucideIcon
  }[]
}

export function FolderStructure({ title, files }: FolderStructureProps) {
  const pathName = usePathname()

  const filesPath = files.map(({ path }) => path)

  return (
    <Folder title={title} defaultOpen={filesPath.includes(pathName as string)}>
      {files.map((file) => {
        return (
          <File key={file.path} href={file.path}>
            <file.icon size={16} />
            {file.name}
          </File>
        )
      })}
    </Folder>
  )
}
