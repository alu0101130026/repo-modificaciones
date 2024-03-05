import { Box } from "./box";
import { BoxManager } from "./boxmanager";
import { Enser } from "./enser";

/**
 * Main con ejemplos de uso del programa
 */

// Instanciamos una caja
const caja: Box<Enser> = new BoxManager<Enser>();

// Agregamos enseres en la caja
caja.addEnser({ nombre: "Libros" });
caja.addEnser({ nombre: "Ropa" });
caja.addEnser({ nombre: "Vajilla" });

// Listamos los enseres
caja.listEnseres();

// Buscamos un enser en concreto en la caja
const search = caja.searchEnser("Ropa");
if (search) {
  console.log(`Encontrado: ${search.nombre}`);
} else {
  console.log("Enser no encontrado.");
}

// Eliminamos un enser de la caja
caja.removeEnser("Libros");

// Volvemos a listar los enseres ahora sin 'Libros'
console.log("Contenido de la caja después de eliminar 'Libros'.");
caja.listEnseres();
