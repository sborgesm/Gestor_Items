import { Taula } from "./modules/taula.js";
import { Input } from "./modules/input.js";
import { Boto } from "./modules/boto.js";
import { Titol } from "./modules/Titol.js";

    // Crear una instancia de Titol 
    const titolEntrada = new Titol('Taula d\'items', 'h1');  

    // Crear instàncies de Boto 
    const botoAfegir = new Boto("Afegir Item", "boto-afegir");
    const botoCerca = new Boto("Cerca", "boto-cerca");

    // Crear una instància de Input 
    const inputCerca = new Input('InputCerca','text', '', "Introdueix el nom d'item");

// Crear una instància de Taula
let capcaleres = ['Nom item', 'Descripció','Data creacio', 'Data modificacio', 'Imatge relacionada', 'Esborrar item'];
let taula = new Taula(capcaleres, []);
taula.carregarDades(taula);

// Esperar que el DOM estigui llest i renderitzar
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("dades");
    titolEntrada.append(contenedor);
    botoAfegir.append(contenedor);
    inputCerca.append(contenedor);
    botoCerca.append(contenedor);
    taula.append(contenedor);

    contenedor.addEventListener("click", (event) => { 
      if (event.target.id && event.target.id.startsWith("boto-eliminar")) {
        let fila = event.target.closest("tr"); // Encuentra la fila del botón 
        let itemNom = fila.cells[0].innerText; // Obtén el texto de la primera celda 
        taula.eliminarItem(itemNom); // Llama al método para eliminar el ítem
        alert(itemNom + " esborrat"); // Añade esta línea para depurar
        fila.remove(); // Elimina la fila de la tabla
      }
    });

    contenedor.addEventListener("click", (event) => {
      if (event.target.tagName === "TD") {
          let fila = event.target.closest("tr");
          let itemDades = Array.from(fila.cells).map((cell, index) => {
              // Si és la columna de la imatge (index 4), agafem el `src` de l'element img
              if (index === 4) {
                  let img = cell.querySelector("img"); // Busca l'element <img> dins la cel·la
                  return img ? img.src : ""; // Retorna el `src` o una cadena buida si no hi ha img
              }
              return cell.innerText; // Retorna el text per a altres cel·les
          });
  
          // Construir l'URL amb les dades
          window.location.href = `./views/dadesItem.html?nom=${encodeURIComponent(itemDades[0])}&descripcio=${encodeURIComponent(itemDades[1])}&imatge=${encodeURIComponent(itemDades[4])}`;
      }
  });
  

    botoAfegir.addEventListener("click", () => {
        window.location.href = "./views/creacioItem.html";
    });
    botoCerca.addEventListener("click", () => {
        window.location.href = "https://www.google.com";
    });
    
});

