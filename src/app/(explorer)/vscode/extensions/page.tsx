import { GistContent } from '@/components/GistContent'

export const metadata = {
  title: 'VSCode Extensions',
}

export default async function Extensions() {
  {/* @ts-expect-error Server Component */}
  return <GistContent gistUrl="https://gist.githubusercontent.com/diego3g/6886b0928e422ba674cc67d6dac5f3e7/raw/bd30aa71c9e58bee6da786b90b8e44d6fce0dffd/extensions.json" />
}