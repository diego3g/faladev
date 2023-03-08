'use client'

import { ExplorerFiles, explorerFolderStructure } from '@/components/Explorer'
import { getCurrentFile } from '@/utils/getCurrentFile'
import { isObjectEmpty } from '@/utils/isObjectEmpty'
import { usePathname } from 'next/navigation'
import { createContext, useContext, useState } from 'react'

type OpenFilesContextProps = {
  openFiles: string[]
  markFileAsOpen: (tab: string) => void
  closeFile: (tabIndex: number) => void
  currentOpenFile: () => ExplorerFiles | null
}

const OpenFilesContext = createContext({} as OpenFilesContextProps)

export function OpenFilesProvider({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()

  const [openFiles, setOpenFiles] = useState<string[]>(() => {
    if (pathName) {
      const openTab = getCurrentFile({
        explorerFolderStructure,
        openFile: pathName,
      })

      if (openTab) {
        return [pathName]
      }
    }

    return []
  })

  const markFileAsOpen = (file: string) => {
    if (openFiles.includes(file)) {
      return
    }

    setOpenFiles([...openFiles, file])
  }

  const closeFile = (fileIndex: number) => {
    const newOpenFiles = openFiles.filter((_, index) => index !== fileIndex)
    setOpenFiles(newOpenFiles)
  }

  const currentOpenFile = () => {
    const openFileHref = openFiles.find((openFile) => pathName === openFile)

    if (openFileHref) {
      const file = getCurrentFile({
        explorerFolderStructure,
        openFile: openFileHref,
      })

      if (isObjectEmpty(file)) {
        return null
      }

      return file
    }

    return null
  }

  return (
    <OpenFilesContext.Provider
      value={{ openFiles, markFileAsOpen, closeFile, currentOpenFile }}
    >
      {children}
    </OpenFilesContext.Provider>
  )
}

export function useOpenFiles(): OpenFilesContextProps {
  return useContext(OpenFilesContext)
}
