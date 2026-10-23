import pc from "picocolors"
import { formatearPrecio } from "./util/formato.js"

console.log("hola mundo desde NODE JS")
console.log("este es un cambio")
console.log(pc.green("este es el color verde"))
console.log(formatearPrecio(10400))

