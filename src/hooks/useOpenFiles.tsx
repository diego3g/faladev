"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { explorerFiles, FileType } from "@/components/Explorer";

type OpenFilesContextProps = {
  openFiles: string[];
  markFileAsOpen: (tab: string) => void;
  closeFile: (tabIndex: number) => void;
  currentOpenFile: () => FileType | null;
};

const OpenFilesContext = createContext({} as OpenFilesContextProps);

export function OpenFilesProvider({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const [openFiles, setOpenFiles] = useState<string[]>(() => {
    if (pathName) {
      const openTab = explorerFiles[pathName];
      if (openTab) {
        return [pathName];
      }
    }

    return [];
  });
  
  const markFileAsOpen = (file: string) => {
    if (openFiles.includes(file)) {
      return;
    }

    setOpenFiles([...openFiles, file]);
  };

  const closeFile = (fileIndex: number) => {
    const newOpenFiles = openFiles.filter((_, index) => index !== fileIndex);
    setOpenFiles(newOpenFiles);
  };

  const currentOpenFile = () => {
    const openFileHref = openFiles.find((openFile) => pathName === openFile);
    if (openFileHref) {
      return explorerFiles[openFileHref];
    }
    return null;
  };

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
