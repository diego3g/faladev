import { ExplorerFiles, ExplorerFolder } from '@/components/Explorer'

type GetCurrentFileParams = {
  explorerFolderStructure: ExplorerFolder[]
  openFile: string
}

export function getCurrentFile({
  explorerFolderStructure,
  openFile,
}: GetCurrentFileParams) {
  return explorerFolderStructure.reduce((items, folder) => {
    return { ...items, ...folder.files.find((file) => file.path === openFile) }
  }, {} as ExplorerFiles)
}
