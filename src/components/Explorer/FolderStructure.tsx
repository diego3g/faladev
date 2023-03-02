'use client'
import { usePathname } from 'next/navigation'
import { type ReactNode } from 'react'
import { File } from './File'
import { Folder } from './Folder'

interface FolderStructureProps {
  title: string
  files: {
    name: string
    path: string
    icon: ReactNode
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
            {file.icon}
            {file.name}
          </File>
        )
      })}
    </Folder>
  )
}
