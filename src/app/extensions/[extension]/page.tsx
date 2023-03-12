import "src/styles/extensions-markdown.css";
import { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { DownloadCloud, Verified } from "lucide-react";
import { ExtensionStars } from "@/components/Extensions/ExtensionStars";
import { ExtensionsAPIResponseType } from "@/types/extensionsTypes";

const MARKETPLACE_FILTERTYPE_GET_EXTENSION_BY_UUID = 4;
const MARKETPLACE_FLAGS_GET_EXTENSION = 950;

async function getExtension(extensionId: string) {
  const extensionDetailsResponse = await fetch(
    "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery",
    {
      headers: {
        accept: "application/json;api-version=3.0-preview.1",
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        filters: [
          {
            criteria: [
              {
                filterType: MARKETPLACE_FILTERTYPE_GET_EXTENSION_BY_UUID,
                value: extensionId,
              },
            ],
          },
        ],
        assetTypes: [],
        flags: MARKETPLACE_FLAGS_GET_EXTENSION,
      }),
    }
  );

  const extensionData: ExtensionsAPIResponseType =
    await extensionDetailsResponse.json();

  return extensionData?.results?.[0]?.extensions?.[0];
}

type ExtensionDetailsProps = {
  params: { extension: string };
};

export async function generateMetadata({
  params,
}: ExtensionDetailsProps): Promise<Metadata> {
  const extension = await getExtension(params.extension);
  return { title: extension?.displayName };
}

export default async function ExtensionDetails({
  params,
}: ExtensionDetailsProps) {
  const extension = await getExtension(params.extension);

  if (!extension) {
    return <div></div>;
  }

  const extensionDetailsURL = extension.versions[0].files.find(
    (file) =>
      file.assetType === "Microsoft.VisualStudio.Services.Content.Details"
  )?.source;

  if (!extensionDetailsURL) {
    throw new Error("Extension details not found.");
  }
  const detailFetch = await fetch(extensionDetailsURL);

  const detailsText = await detailFetch.text();

  return (
    <div className="absolute inset-0 overflow-auto leading-relaxed scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent flex flex-col pl-16 pr-10">
      <div className="flex gap-5">
        <div className="flex items-center w-[128px]">
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
            className="min-w-[128px] h-[128px]"
          />
        </div>
        <div className="flex flex-col text-[#e0def4] max-w-full ">
          <div className="flex items-center text-3xl font-semibold gap-2">
            {extension.displayName}
            <div className="text-xs p-1 rounded bg-[#8080802b]">
              v{extension.versions[0].version}
            </div>
          </div>
          <div className="flex text-sm items-center mt-1 gap-2">
            <div className="flex items-center">
              {extension.publisher.isDomainVerified && (
                <Verified fill="#c4a7e7" color="#232135" size={20} />
              )}
              {extension.publisher.displayName}
            </div>
            <span className="text-[#808080b3]">|</span>
            <div className="flex items-center gap-1">
              <DownloadCloud color="#908caa" size={20} />
              {new Intl.NumberFormat().format(
                extension.statistics.find(
                  (statistic) => statistic.statisticName === "install"
                )?.value ?? 0
              )}
            </div>
            <span className="text-[#808080b3]">|</span>
            <div className="flex items-center">
              <ExtensionStars
                rating={
                  extension.statistics.find(
                    (statistic) => statistic.statisticName === "averagerating"
                  )?.value ?? 0
                }
              />
              (
              {
                extension.statistics.find(
                  (statistic) => statistic.statisticName === "ratingcount"
                )?.value
              }
              )
            </div>
          </div>
          <div className="text-sm mt-2 truncate">
            {extension.shortDescription}
          </div>
          <div className="mt-2">
            <Link
              target="_blank"
              href={`vscode:extension/${extension.publisher.publisherName}.${extension.extensionName}`}
              className="text-sm py-1 px-2 bg-[#ea9a97] text-[#232136] rounded"
            >
              Install
            </Link>
          </div>
        </div>
      </div>
      <div className="max-h-full text-sm mt-8 extensions-markdown">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{detailsText}</ReactMarkdown>
      </div>
    </div>
  );
}
