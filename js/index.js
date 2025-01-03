import { Taula } from "./modules/taula.js";
import { Input } from "./modules/input.js";
import { Boto } from "./modules/boto.js";
import { Titol } from "./modules/Titol.js";
import { DivComponent } from "./modules/div.js";

let nouDiv = new DivComponent('', 'gran', 'botons_inserir');
let divTaula = new DivComponent('', 'gran', 'dades');
let titolEntrada = new Titol('Taula d\'items', 'h1');// Creem instàncies dels divs i del títol

let botoAfegir = new Boto("Clica per afegir Item", "boto-afegir");
let botoCerca = new Boto("Cerca l'item", "boto-cerca");
let boto10mes = new Boto("Clica per mostrar 10 resultats més", "boto-10mes");
let botoMostrarItems = new Boto("Torna a mostrar els primers items", "boto-mostrar-items");// Creem instàncies dels botons necessaris

let inputCerca = new Input('InputCerca', 'text', '', "Introdueix el nom d'item");// Creem instància de l'input de cerca

let capcaleres = ['Nom item', 'Descripció', 'Data creacio', 'Data modificacio', 'Imatge relacionada', 'Esborrar item'];
// Creem l'array amb les capçaleres de la taula
let taula = new Taula(capcaleres, []);// Creem la instància de la taula
taula.carregarDades();// Carreguem les dades a la taula

nouDiv.afegirFill(botoAfegir, inputCerca, botoCerca, boto10mes, botoMostrarItems);
// Afegim els fills al nouDiv
divTaula.afegirFill(taula);// Afegim la taula al divTaula

document.addEventListener("DOMContentLoaded", () => {// Esperem que el DOM estigui llest i renderitzar
    let contenedor = document.getElementById("divs");// Obtenim el div amb id "divs"
    titolEntrada.append(contenedor);
    nouDiv.append(contenedor);
    divTaula.append(contenedor);// Afegim els fills al div amb id "divs"

    contenedor.addEventListener("click", (event) => {// Afegim funcio al div amb id "divs"
        if (event.target.id && event.target.id.startsWith("boto-eliminar")) {// Si l'element té id i comença per "boto-eliminar"
            let fila = event.target.closest("tr"); // Troba la fila més propera 
            let itemNom = fila.cells[0].innerText; // Obté el nom de l'ítem de la primera cel·la
            taula.eliminarItem(itemNom); // Elimina l'ítem de la taula
            alert(itemNom + " esborrat"); // Mostra un missatge d'alerta
            fila.remove(); // Elimina la fila de la taula
        }else if (event.target.tagName === "TD") {// Si l'element és una cel·la
            let fila = event.target.closest("tr");
            let itemDades = Array.from(fila.cells).map((cell, index) => {
                // Si és la columna de la imatge (index 4), agafem el `src` de l'element img
                if (index === 4) {
                    let img = cell.querySelector("img"); // Busca l'element <img> dins la cel·la
                    return img ? img.src : ""; // Retorna el `src` o una cadena buida si no hi ha img
                }
                return cell.innerText; // Retorna el text per a altres cel·les
            });

        window.location.href = `./views/dadesItem.html?nom=${itemDades[0]}&descripcio=${itemDades[1]}&imatge=${encodeURIComponent(itemDades[4])}`;
        // Construim l'URL amb les dades de l'ítem i redirigim a la pàgina de dades de l'ítem
        }
    });

    botoAfegir.addEventListener("click", () => {// Afegim funcio al botoAfegir
        window.location.href = "./views/creacioItem.html";// Redirigim a la pàgina de creació d'ítems
    });

    botoCerca.addEventListener("click", () => { // Afegim funció al botoCerca
        let text = document.getElementById("InputCerca").value.toLowerCase();
        // Obtenim el text de l'input de cerca en minúscules
        inputCerca.buidarInput(); // Buidem l'input de cerca
    
        let dades = JSON.parse(localStorage.getItem("items")) || []; // Obtenim les dades de l'objecte localStorage
    
        let itemsExactes = []; // Creem array per a guardar els items exactes
        let itemsComencaAmb = []; // Creem array per a guardar els items que comencen amb el text
        let itemsConte = new Set(); // Creem un Set per a guardar els items que contenen el text
    
        dades.forEach(item => {
            let nom = item.nom ? item.nom.toLowerCase() : ""; // Obtenim el nom de l'item en minúscules
            let descripcio = item.descripcio ? item.descripcio.toLowerCase() : ""; // Obtenim la descripció de l'item en minúscules
    
            if (nom === text) {
                itemsExactes.push(item);// Afegim l'item a l'array d'items exactes
                alert("S'ha trobat l'item");
            } else if (nom.startsWith(text)) {// Si el nom comença amb el text
                itemsComencaAmb.push(item);
                alert("S'ha trobat item que té un nom comença amb el text");
            } else if (nom.includes(text) || descripcio.includes(text)) {// Si el nom o la descripció contenen el text
                itemsConte.add(item);// Afegim l'item al Set d'items que contenen el text
                alert("S'ha trobat item que té el text a dins del nom o la descripció");
            }
        });
    
        let itemsFiltrats = [...itemsExactes, ...itemsComencaAmb, ...itemsConte];// Creem un array amb tots els items filtrats
    
        if (itemsFiltrats.length > 0) {
            taula.carregarDades(itemsFiltrats); // Actualitzar la taula amb els items filtrats
            taula.update(document.getElementById("dades")); // Actualitzar la taula a la vista
        } else {
            alert("No s'han trobat coincidències.");
            taula.carregarDades([]); // Assegurar que la taula es buida
        }
    });
    

    let vegadesClicat = 0; // Definim fora del manejador per mantenir el valor de les vegades que s'ha clicat

    boto10mes.addEventListener("click", () => {
        let dades = JSON.parse(localStorage.getItem("items")) || [];
        vegadesClicat++; // Incrementem el comptador de clics

        if (dades.length === 0) {// Si no hi ha dades per mostrar
            alert("No hi ha més items per carregar");
            return;
        }

        let inici = vegadesClicat * 10;
        // Calculem l'inici de les dades a mostrar multiplicant per 10 el nombre de clics
        let fi = inici + 10;// Calculem el final de les dades a mostrar sumant 10 a l'inici
        let dadesPerMostrar = dades.slice(inici, fi);
        // Obtenim les dades a mostrar amb el mètode slice amb els paràmetres inici i fi

        if (dadesPerMostrar.length === 0) {// Si no hi ha més dades per mostrar
            alert("No hi ha més items per carregar");// Mostrem un missatge d'alerta
            return;
        }

        taula.carregarDades(dadesPerMostrar); // Actualitzar la taula amb els nous items
        taula.update(document.getElementById("dades")); // Actualitzar la taula a la vista

        alert(`S'han carregat ${dadesPerMostrar.length} items més`);
        // Mostrem un missatge amb el nombre d'items carregats
    });

    botoMostrarItems.addEventListener("click", () => {// Afegim funcionalitat al botoMostrarItems
        let dades = JSON.parse(localStorage.getItem("items")) || [];
        taula.carregarDades(dades); // Carregar els 10 primers items
        taula.update(document.getElementById("dades")); // Actualitzar la taula a la vista
        alert("S'han tornat a mostrar els primers 10 items");
    });
});

