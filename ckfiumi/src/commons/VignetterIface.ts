export interface Vignette {
    leftX: number
    topY: number
    rightX: number
    bottomY: number
    quality: string
    order: number
}

export interface PageData {

    width: number,
    height: number,
    vignettes: Vignette[]
    debugImagesDataUrls: string[]
}

export interface VignetterIface {

    readonly name: string;

    analyze( imgDataUrl: string): Promise<PageData>

}