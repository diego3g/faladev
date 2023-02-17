'use client';
import { useTabs } from '@/hooks/useTabs';
import { RemoveTab } from '../Tabs/RemoveTab';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function OpenEditorsSubMenu() {
  const { tabs } = useTabs();
  const pathName = usePathname();
  return (
    <>
      {tabs.map((tab, index) => {
        const isCurrentActive = pathName === tab.href;

        return (
          <Link
            key={index}
            {...tab}
            data-active={isCurrentActive}
            className="flex text-sm items-center gap-2 py-1 px-4 text-transparent hover:bg-[#2a273f] hover:text-[#E0DEF2] data-[active=true]:bg-[#2a273f] data-[active=true]:text-[#E0DEF2]"
          >
            <div className="data-[active=true]:text-white">
              <RemoveTab isActive={isCurrentActive} index={index} />
            </div>
            <div
              data-active={isCurrentActive}
              className={`flex text-sm items-center gap-2 text-[#908caa] data-[active=true]:text-[#E0DEF2]`}
            >
              {tab.children}
            </div>
          </Link>
        );
      })}
    </>
  );
}
