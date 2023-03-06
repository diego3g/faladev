import { getNotionTableTools } from "@/lib/notion-client"
import { getNotionPagesId } from "@/lib/vercel-edge-config"

export const revalidate = 1800

export const metadata = {
    title: 'Tools',
}

export default async function Tools() {
    const { others_tools } = await getNotionPagesId()
    const { content } = await getNotionTableTools(others_tools)

    return (
        <div className="flex text-center justify-around">
            {content.map((tool) => (
                <div key={tool.id} className="bg-[#4b4670] w-60 p-3 rounded-lg hover:bg-opacity-80 border">
                    <div className="font-bold mb-1 underline underline-offset-2 text-white text-xl">
                        <a href={tool.url} target="_blank" rel="noreferrer">
                            {tool.name}
                        </a>
                    </div>

                    <div className="text-[#e3e3e3]">
                        {tool.description}
                    </div>
                </div>
            ))}
        </div>
    )
}