import { Explorer } from "@/components/Explorer";

export default async function ExtensionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Explorer />
      <div className="h-full relative">{children}</div>
    </>
  );
}
