'use client';

import { ReactNode, useEffect } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { useTabs } from '@/hooks/useTabs';

interface FileProps extends LinkProps {
  children: ReactNode[];
}

export function File(props: FileProps) {
  const { addTab } = useTabs();
  const pathName = usePathname();

  const isCurrentActive = pathName === props.href;

  useEffect(() => {
    if (isCurrentActive) {
      addTab(props);
    }
  }, [addTab, isCurrentActive, props]);

  return (
    <Link
      data-active={isCurrentActive}
      onClick={() => addTab(props)}
      className="flex text-sm items-center gap-2 py-1 px-4 pl-10 hover:bg-[#2a273f] hover:text-[#E0DEF2] data-[active=true]:bg-[#2a273f] data-[active=true]:text-[#E0DEF2]"
      {...props}
    />
  );
}
