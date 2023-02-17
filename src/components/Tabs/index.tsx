'use client';

import { useTabs } from '@/hooks/useTabs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RemoveTab } from './RemoveTab';

export function Tabs() {
  const { tabs } = useTabs();
  const pathName = usePathname();

  return (
    <div className="h-9 text-transparent text-sm flex flex-row">
      {tabs?.map((tab, index) => {
        const isActive = pathName === tab.href;

        return (
          <Link
            key={index}
            {...tab}
            data-active={isActive}
            className="h-full flex items-center gap-[6px] pl-[10px] hover:bg-[#817c9c26] hover:text-[#908caa] data-[active=true]:bg-[#817c9c14] data-[active=true]:text-white"
          >
            <span className="text-white">{tab.children[0]}</span>
            <span
              data-active={isActive}
              className="text-[#908caa] data-[active=true]:text-[#e0def4] "
            >
              {tab.children[1]}
            </span>
            <span className="w-7 flex items-center">
              <RemoveTab isActive={isActive} index={index} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
