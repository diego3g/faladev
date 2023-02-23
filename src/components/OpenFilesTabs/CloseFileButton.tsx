'use client'
import Link from 'next/link'
import { X } from 'lucide-react'
import { useOpenFiles } from '@/hooks/useOpenFiles'

type CloseFileButtonProps = {
  isActive: boolean
  index: number
};

export function CloseFileButton({ isActive, index }: CloseFileButtonProps) {
  const { openFiles, closeFile } = useOpenFiles();

  if (isActive) {
    return (
      <Link
        onClick={() => {
          closeFile(index);
        }}
        href={index - 1 >= 0 ? openFiles[index - 1] : "/"}
        className="w-[20px] h-[20px] flex justify-center items-center rounded hover:bg-[#817c9c26]"
      >
        <X
          data-active={isActive}
          className="data-[active=true]:text-white"
          size={16}
        />
      </Link>
    )
  }

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        closeFile(index);
      }}
      className="w-[20px] h-[20px] flex justify-center items-center rounded hover:bg-[#817c9c26] cursor-pointer"
    >
      <X
        data-active={isActive}
        className="data-[active=true]:text-white"
        size={16}
      />
    </a>
  )
}
