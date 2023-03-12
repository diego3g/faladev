"use client";
import type { Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuButtonProps {
  icon: Icon;
  defaultActive?: boolean;
  href?: string;
}

export function MenuButton({
  icon: Icon,
  href,
  defaultActive = false,
}: MenuButtonProps) {
  const pathname = usePathname();
  const isActive =
    href && pathname && !defaultActive ? pathname.startsWith(href) : false;

  if (href) {
    return (
      <Link
        href={href}
        data-active={isActive}
        className={
          "h-12 flex justify-center items-center border-l-2 border-transparent text-[#8F8CA8] data-[active=true]:text-[#E0DEF2] data-[active=true]:border-[#E0DEF2]" +
          (defaultActive ? " default-active" : "")
        }
      >
        <Icon strokeWidth={1.5} size={28} />
      </Link>
    );
  }

  return (
    <div
      data-active={isActive}
      className={
        "h-12 flex justify-center items-center border-l-2 border-transparent text-[#8F8CA8] data-[active=true]:text-[#E0DEF2] data-[active=true]:border-[#E0DEF2]" +
        (defaultActive ? " default-active" : "")
      }
    >
      <Icon strokeWidth={1.5} size={28} />
    </div>
  );
}
