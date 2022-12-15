
import exampleImage from './assets/example.png';
import exampleSVG from './assets/example.svg'


function getAsset(data: string): HTMLImageElement {
    const asset = new Image()
    asset.width = 200
    asset.src = data
    return asset
}

export function getImage(): HTMLImageElement {
    return getAsset(exampleImage)
}

export function getSVG(): HTMLImageElement {
    return getAsset(exampleSVG)
}