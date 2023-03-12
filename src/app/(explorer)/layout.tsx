import { Explorer } from "@/components/Explorer";
import { OpenFilesTabs } from "@/components/OpenFilesTabs";

export default async function ExtensionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Explorer />

      <div className="h-full relative flex flex-col">
        <OpenFilesTabs />
        <div className="h-full relative">{children}</div>
      </div>
    </>
  );
}
