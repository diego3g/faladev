"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { explorerFiles, FileType } from "@/components/Explorer";

type OpenFilesContextProps = {
  openFiles: string[];
  markFileAsOpen: (tab: string) => void;
  closeFile: (tabIndex: number) => void;
  currentOpenFile: FileType | null;
};

const OpenFilesContext = createContext({} as OpenFilesContextProps);

export function OpenFilesProvider({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const [openFiles, setOpenFiles] = useState<Array<keyof typeof explorerFiles>>(() => {
    if (pathName && pathName !== '/') {
      return [pathName];
    }

    return [];
  });

  const markFileAsOpen = (file: string) => {
    if (openFiles.includes(file)) {
      return;
    }

    setOpenFiles(state => [...state, file]);
  };

  const closeFile = (fileIndex: number) => {
    const newOpenFiles = openFiles.filter((_, index) => index !== fileIndex);
    setOpenFiles(newOpenFiles);
  };

  const currentOpenFile = useMemo(() => {
    const openFileHref = openFiles.find((openFile) => pathName === openFile);
  
    if (openFileHref) {
      return explorerFiles[openFileHref];
    }
    
    return null;
  }, [openFiles, pathName])

  return (
    <OpenFilesContext.Provider
      value={{ openFiles, markFileAsOpen, closeFile, currentOpenFile }}
    >
      {children}
    </OpenFilesContext.Provider>
  );
}

export function useOpenFiles(): OpenFilesContextProps {
  return useContext(OpenFilesContext);
}