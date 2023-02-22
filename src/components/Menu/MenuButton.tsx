'use client'
import type { Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuButtonProps {
  icon: Icon;
  href?: string;
}

export function MenuButton({ icon: Icon, href }: MenuButtonProps) {
  const pathname = usePathname();
  const isActive = href && pathname ? pathname.startsWith(href) : false;

  if (href) {
    return (
      <Link href={href}>
        <div
          data-active={isActive}
          className="h-12 flex justify-center items-center border-l-2 border-transparent data-[active=true]:border-[#E0DEF2]"
        >
          <Icon
            strokeWidth={1.5}
            size={28}
            className="text-[#8F8CA8] data-[active=true]:text-[#E0DEF2]"
          />
        </div>
      </Link>
    );
  }

  return (
    <div
      data-active={isActive}
      className="h-12 flex justify-center items-center border-l-2 border-transparent data-[active=true]:border-[#E0DEF2]"
    >
      <Icon
        strokeWidth={1.5}
        size={28}
        className="text-[#8F8CA8] data-[active=true]:text-[#E0DEF2]"
      />
    </div>
  );
}
