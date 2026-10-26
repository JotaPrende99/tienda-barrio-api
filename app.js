import pc from "picocolors";
import { formatearPrecio, formatearNombre } from "./util/formato.js";
import { productos } from "./data/productos.js";
import { buscarPorId, listarAgotados, valorInventario } from "./services/inventario.js";

// Mensajes de bienvenida y estado con picocolors
console.log(pc.green("API Mi Tienda de Barrio"));
console.log(pc.yellow("En construcción"));
console.log(pc.blue("Bienvenido/a"));

// Pruebas del módulo de formato
console.log(formatearPrecio(8400));
console.log(formatearNombre("leche 1 l"));

// Pruebas del módulo de inventario y datos
console.log("Producto 3:", buscarPorId(3).nombre);
console.log("Agotados:", listarAgotados().length);
console.log("Valor del inventario:", formatearPrecio(valorInventario()));

// Recorrer los productos usando formato de precio
console.log("--- Lista de Productos ---");
for (const prod of productos) {
  console.log(`${prod.nombre} - ${formatearPrecio(prod.precio)}`);
}