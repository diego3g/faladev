import { ExtensionItem } from "@/components/Extensions/ExtensionItem";
import { ExtensionsAPIResponseType } from "@/types/extensionsTypes";

type GistType = {
  identifier: Identifier;
  preRelease: boolean;
  version: string;
  installed?: boolean;
  disabled?: boolean;
  state?: State;
};

type Identifier = {
  id: string;
  uuid?: string;
};

type State = {
  "liveServer.setup.version"?: string;
  "gitlens:views:welcome:visible"?: boolean;
  "gitlens:synced:version"?: string;
};

export default async function ExtensionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gistFetch = await fetch(
    "https://gist.githubusercontent.com/diego3g/6886b0928e422ba674cc67d6dac5f3e7/raw/bd30aa71c9e58bee6da786b90b8e44d6fce0dffd/extensions.json"
  );
  const gistContent: GistType[] = await gistFetch.json();

  const criteria = gistContent
    .filter((gist) => gist.identifier.uuid && gist.installed !== false && gist.disabled !== true)
    .map((gist) => ({ filterType: 4, value: gist.identifier.uuid }));

  const filter = {
    filters: [
      {
        criteria,
      },
    ],
    assetTypes: [],
    flags: 950,
  };

  const data = await fetch(
    "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery",
    {
      headers: {
        accept: "application/json;api-version=3.0-preview.1",
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(filter),
    }
  );

  const response: ExtensionsAPIResponseType = await data.json();

  return (
    <>
      <div className="overflow-auto scrollbar-thin scrollbar-thumb-[#2B283B] scrollbar-track-transparent">
        {response.results.map((result) =>
          result.extensions.map((extension) => (
            <ExtensionItem key={extension.extensionId} extension={extension} />
          ))
        )}
      </div>
      <div className="h-full relative">{children}</div>
    </>
  );
}
