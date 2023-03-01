'use client';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { ArrowUp as Shift, Command } from 'lucide-react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'u' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        window.open('https://github.com/diego3g/faladev', '_blank');
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const isMac = /(Mac)/i.test(navigator.userAgent);

  const ctrl = isMounted && isMac ? <Command size={11} /> : 'Ctrl';

  return (
    <div className='flex flex-col items-center mt-8'>
      <Image
        priority
        width={300}
        height={300}
        src='/vscode-icon.png'
        alt=''
        className='w-2/6 opacity-40'
      />

      <table className='border-separate border-spacing-3 mt-2 text-[#7e7c94] text-sm'>
        <tbody>
          <tr>
            <td className='text-end'>Ver código fonte</td>

            <td className='flex flex-row text-[#766591]'>
              <Shortcut>{ctrl}</Shortcut>+<Shortcut>U</Shortcut>
            </td>
          </tr>

          <tr>
            <td className='text-end'>Inspecionar elemento</td>

            <td className='flex flex-row text-[#766591]'>
              <Shortcut>{ctrl}</Shortcut>+
              <Shortcut>
                <Shift size={11} strokeWidth={3} />
              </Shortcut>
              +<Shortcut>C</Shortcut>
            </td>
          </tr>

          <tr>
            <td className='text-end'>Tela cheia</td>

            <td className='flex flex-row text-[#766591]'>
              <Shortcut>F11</Shortcut>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

interface ShortcutProps {
  children: ReactNode;
}

const Shortcut = (props: ShortcutProps) => {
  return (
    <code className='bg-[#35314c] text-[#8673a3] px-[6px] text-[11px] rounded-sm mx-0.5 flex items-center justify-center'>
      {props.children}
    </code>
  );
};
