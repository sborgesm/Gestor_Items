import { Taula } from "./modules/taula.js";
import { Input } from "./modules/input.js";
import { Boto } from "./modules/boto.js";
import { Titol } from "./modules/Titol.js";
import { DivComponent } from "./modules/div.js";

let nouDiv = new DivComponent('', 'gran', 'botons_inserir');
let divTaula = new DivComponent('', 'gran', 'dades');
// Crear una instancia de Titol 
const titolEntrada = new Titol('Taula d\'items', 'h1');

// Crear instàncies de Boto 
const botoAfegir = new Boto("Afegir Item", "boto-afegir");
const botoCerca = new Boto("Cerca", "boto-cerca");

// Crear una instància de Input 
const inputCerca = new Input('InputCerca', 'text', '', "Introdueix el nom d'item");

// Crear una instància de Taula
let capcaleres = ['Nom item', 'Descripció', 'Data creacio', 'Data modificacio', 'Imatge relacionada', 'Esborrar item'];
let taula = new Taula(capcaleres, []);
taula.carregarDades();

nouDiv.afegirFill(botoAfegir, inputCerca, botoCerca);
divTaula.afegirFill(taula);

// Esperar que el DOM estigui llest i renderitzar
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("divs");
    titolEntrada.append(contenedor);
    nouDiv.append(contenedor);
    divTaula.append(contenedor);

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
        const text = document.getElementById("InputCerca").value.toLowerCase();
    
        const dades = JSON.parse(localStorage.getItem("items")) || [];
    
        const itemsExactMatch = [];
        const itemsStartsWith = [];
        const itemsContains = new Set(); // Using a Set to avoid duplicates
    
        dades.forEach(item => {
            const nom = item.nom ? item.nom.toLowerCase() : "";
            const descripcio = item.descripcio ? item.descripcio.toLowerCase() : "";
    
            if (nom === text) {
                itemsExactMatch.push(item);
                alert("S'ha trobat l'item");
            } else if (nom.startsWith(text)) {
                itemsStartsWith.push(item);
                alert("S'ha trobat item que té un nom comença amb el text");
            } else if (nom.includes(text) || descripcio.includes(text)) {
                itemsContains.add(item);
                alert("S'ha trobat item que té el text a dins del nom o la descripció");
            }
        });
    
        const itemsFiltrats = [...itemsExactMatch, ...itemsStartsWith, ...itemsContains];
    
        taula.carregarDades(itemsFiltrats); // Actualitzar la taula amb els items filtrats
        taula.update(document.getElementById("dades")); // Actualitzar la taula a la vista
    });
    
    
});

