// The rest of your code
import { Taula } from "./modules/taula.js";
import { Input } from "./modules/input.js";
import { Boto } from "./modules/boto.js";
import { Titol } from "./modules/titol.js";

// Crear una instancia de Titol 
let titolEntrada = new Titol('h1');  
titolEntrada.canviarContingut("Taula d'items"); 

// Crear una instància de Boto 
let botoAfegir = new Boto("Afegir Item", "boto-afegir");
let botoCerca = new Boto("Cerca", "boto-cerca");

// Crear una instància de Input 
let inputCerca = new Input('text', '', 'Introdueix el nom d\'item');

// Crear una instància de Taula
let capcaleres = ['Nom item', 'Descripció', 'Data creacio', 'Data modificacio', 'Imatge relacionada', 'Esborrar item'];
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
    botoAfegir.addEventListener("click", () => {
        window.location.href = "./views/creacioItem.html";
    });
    botoCerca.addEventListener("click", () => {
        window.location.href = "https://www.google.com";
    });
});

