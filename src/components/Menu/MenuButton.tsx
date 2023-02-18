'use client'

import type { Icon } from 'lucide-react'
import { HTMLAttributes } from 'react'

interface MenuButtonProps extends HTMLAttributes<HTMLDivElement> {
  icon: Icon
  isActive?: boolean
  isMenuOpen?: boolean
}

export function MenuButton({
  icon: Icon,
  isActive = false,
  isMenuOpen = true,
  ...rest
}: MenuButtonProps) {
  return (
    <div
      {...rest}
      data-active={isActive}
      className="h-12 flex justify-center items-center border-l-2 border-transparent min-[868px]:data-[active=true]:border-[#E0DEF2] data-[active=true]:text-[#E0DEF2] text-[#8F8CA8] cursor-pointer"
    >
      <Icon strokeWidth={1.5} size={28} />
    </div>
  )
}