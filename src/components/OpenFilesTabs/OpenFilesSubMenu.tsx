'use client'
import { useOpenFiles } from '@/hooks/useOpenFiles'
import { CloseFileButton } from './CloseFileButton'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { explorerFiles } from '../Explorer'

export function OpenFilesSubMenu() {
  const { openFiles } = useOpenFiles();
  const pathName = usePathname();
  return (
    <>
      {openFiles.map((openFile, index) => {
        const isCurrentActive = pathName === openFile;

        const file = explorerFiles[openFile];

        if (!file) {
          return <></>;
        }

        return (
          <div
            key={index}
            data-active={isCurrentActive}
            className="flex text-sm items-center gap-2 py-1 px-4 text-transparent hover:bg-[#2a273f] hover:text-[#E0DEF2] data-[active=true]:bg-[#2a273f] data-[active=true]:text-[#E0DEF2]"
          >
            <div className="data-[active=true]:text-white">
              <CloseFileButton isActive={isCurrentActive} index={index} />
            </div>
            <Link href={openFile}>
              <div
                data-active={isCurrentActive}
                className={`flex text-sm items-center gap-2 text-[#908caa] data-[active=true]:text-[#E0DEF2]`}
              >
                {file.icon}
                {file.title}
              </div>
            </Link>
          </div>
        )
      })}
    </>
  )
}
