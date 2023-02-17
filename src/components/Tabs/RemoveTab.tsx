'use client';
import Link from 'next/link';
import { X } from 'lucide-react';
import { useTabs } from '@/hooks/useTabs';

type RemoveTabProps = {
  isActive: boolean;
  index: number;
};

export function RemoveTab({ isActive, index }: RemoveTabProps) {
  const { tabs, removeTab } = useTabs();

  if (isActive) {
    return (
      <Link
        onClick={() => removeTab(index)}
        href={index - 1 >= 0 ? tabs[index - 1].href.toString() : "/"}
        className="w-[20px] h-[20px] flex justify-center items-center rounded hover:bg-[#817c9c26]"
      >
        <X
          data-active={isActive}
          className="data-[active=true]:text-white"
          size={16}
        />
      </Link>
    );
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        removeTab(index);
      }}
      className="w-[20px] h-[20px] flex justify-center items-center rounded hover:bg-[#817c9c26]"
    >
      <X
        data-active={isActive}
        className="data-[active=true]:text-white"
        size={16}
      />
    </button>
  );
}
