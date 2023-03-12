"use client";

import { useOpenFiles } from "@/hooks/useOpenFiles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { explorerFiles } from "../Explorer";
import { CloseFileButton } from "./CloseFileButton";

export function OpenFilesTabs() {
  const { openFiles } = useOpenFiles();
  const pathName = usePathname();

  return (
    <div className="h-9 text-transparent text-sm flex flex-row">
      {openFiles?.map((openFile, index) => {
        const isActive = pathName === openFile;

        const file = explorerFiles[openFile];
        
        if (!file) {
          return <></>;
        }
        
        return (
          <div
            key={index}
            data-active={isActive}
            className="h-full flex items-center gap-[6px] pl-[10px] hover:bg-[#817c9c26] hover:text-[#908caa] data-[active=true]:bg-[#817c9c14] data-[active=true]:text-white"
          >
            <Link href={openFile} className="flex gap-[6px] items-center ">
              <span className="text-white">{file.icon}</span>
              <span
                data-active={isActive}
                className="text-[#908caa] data-[active=true]:text-[#e0def4] "
              >
                {file.title}
              </span>
            </Link>
            <span className="w-7 flex items-center">
              <CloseFileButton isActive={isActive} index={index} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
