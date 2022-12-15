
import { getImage, getSVG } from './image'
import './style.css'


const img = getImage()
document.body.append(img)

const svg = getSVG()
document.body.append(svg)