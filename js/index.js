import { Taula } from "./modules/taula.js";
import { Input } from "./modules/input.js";
import { Boto } from "./modules/boto.js";
import { Titol } from "./modules/Titol.js";

    // Crear una instancia de Titol 
    const titolEntrada = new Titol('h1');  
    titolEntrada.canviarContingut("Taula d'items"); 

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
    let boto = document.getElementById("boto-eliminar");
      boto.addEventListener("click", () => {
        alert("Item eliminat");
      });
    botoAfegir.addEventListener("click", () => {
        window.location.href = "./views/creacioItem.html";
    });
    botoCerca.addEventListener("click", () => {
        window.location.href = "https://www.google.com";
    });
});

