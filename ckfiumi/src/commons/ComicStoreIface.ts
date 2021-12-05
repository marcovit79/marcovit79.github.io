export interface FileTreeNode {
    fullPath: string
    isFolder: boolean
    name: string
    children?: FileTreeNode[]
}

export interface HtmlFile {
    name: string,
    content: string
}

export interface ComicStoreIface {
    listFiles(): Promise<FileTreeNode[]>
    loadFile( fullPath: string): Promise<HtmlFile>
}
