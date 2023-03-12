'use client'
import { ExtensionType } from "@/types/extensionsTypes";
import { Verified } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ExtensionItem({ extension }: { extension: ExtensionType }) {
  const pathname = usePathname();

  return (
    <Link
      href={`/extensions/${extension.extensionId}`}
      data-active={pathname?.endsWith(extension.extensionId)}
      className="flex w-full gap-4 py-2 pl-4 data-[active=true]:bg-[#2a273f] "
    >
      <div className="flex items-center w-[42px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            extension.versions[0].files.find(
              (file) =>
                file.assetType ===
                "Microsoft.VisualStudio.Services.Icons.Default"
            )?.source ?? ""
          }
          alt={extension.extensionName}
          className="min-w-[42px] h-[42px]"
        />
      </div>
      <div className="flex flex-col leading-5 text-sm text-[#908caa] max-w-full w-[calc(256px-42px-16px-24px)]"> {/* calc = 100% parent width (256) - img width (42) - parent padding left (16) - padding from scroll (24) */}
        <span className="font-bold truncate">{extension.displayName}</span>
        <span className="truncate">{extension.shortDescription}</span>
        <div className="flex text-xs items-center">
          {extension.publisher.isDomainVerified && (
            <Verified fill="#c4a7e7" color="#232135" size={16} />
          )}
          {extension.publisher.displayName}
        </div>
      </div>
    </Link>
  );
}
