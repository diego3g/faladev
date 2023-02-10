import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
  title: 'Gaming Setup',
}

const markdown = `
# Gaming Setup

- Intel Core i5-9600KF 3.7Ghz
- 2x HyperX Fury 16GB 3000Mhz
- Gigabyte Z390M Gaming
- Cooler Master ATX 500W 80 Plus
- 2x Corsair SSD MP510 480GB NVMe
- Gigabyte NVIDIA GeForce RTX 2060 6G


## Peripherals

- Logitech G PRO Wireless Mouse
- Keychron K2 Keyboard (Brown Switch)
- Samsung 23.5" Curved 144hz 1ms Display

That's it, nothing more.
`.trim()
 
export default async function GamingSetup() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(markdown, { lang: 'md' })

  return <CodePreview code={code} />
}
