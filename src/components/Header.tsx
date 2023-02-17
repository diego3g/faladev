"use client";
import { useTabs } from "@/hooks/useTabs";

export function Header() {
  const { getActiveTabName } = useTabs();

  return (
    <div className="flex items-center justify-between px-3">
      <div className="flex items-center gap-2">
        <button type="button" className="w-3 h-3 bg-[#ED6A5E] rounded-full" />
        <button type="button" className="w-3 h-3 bg-[#F4BF4F] rounded-full" />
        <button type="button" className="w-3 h-3 bg-[#61C554] rounded-full" />
      </div>
      <span className="text-[#908caa] text-sm">
        {getActiveTabName()} — fala-Dev
      </span>
      <div className="w-14">&nbsp;</div>
    </div>
  );
}
