"use client";

import { Code2, Cog, Cpu, FileJson, Film, Joystick, MoreHorizontal, Terminal } from "lucide-react";

import { isExplorerOpenAtom } from "@/store/explorerStore";
import classNames from "classnames";
import { useAtom } from "jotai";


import { File } from "./File";
import { Folder } from "./Folder";

export function Explorer() {
  const [isExplorerOpen] = useAtom(isExplorerOpenAtom)

  return (
    <div
      className={classNames(
        "min-w-[16rem] py-2 px-4 text-[#8F8CA8] translate-x-0 block",
        {
          "-translate-x-full hidden": !isExplorerOpen,
        }
      )}
    >
      <strong className="font-medium text-xs pl-2 flex items-center justify-between">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className="mt-4 flex flex-col">
        <Folder defaultOpen title="Visual Studio Code">
          {/* <File href="/vscode/general">
             <Code2 size={16} />
             General
           </File> */}
          <File href="/vscode/settings">
            <FileJson size={16} />
            settings.json
          </File>
          <File href="/vscode/extensions">
            <FileJson size={16} />
            extensions.json
          </File>
        </Folder>

        <Folder title="Terminal">
          <File href="/terminal/general">
            <Terminal size={16} />
            General
          </File>
          <File href="/terminal/fish">
            <Cog size={16} />
            config.fish
          </File>
        </Folder>

        <Folder title="Others">
          <File href="/others/dev-setup">
            <Cpu size={16} />
            dev.setup
          </File>
          <File href="/others/gaming-setup">
            <Joystick size={16} />
            gaming.setup
          </File>
          {/* <File href="/others/recording-setup">
             <Film size={16} />
             recording.setup
           </File> */}
        </Folder>
      </nav>
    </div>
  )
}