export type Row = {
    name: {
        id: string,
        title: {
            text: {
                content: string
            }
        }[]
    }
    description: {
        id: string,
        rich_text: {
            text: {
                content: string
            }
        }[]
    }
    url: {
        id: string
        url: string
    }
}

export type RowsStructure = {
    id: string;
    name: string;
    description: string;
    url: string;
}[]