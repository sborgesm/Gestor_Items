import { Taula } from "./classes/taula.js";
import { Input } from "./classes/input.js";
import { Boto } from "./classes/boto.js";
import { Titol } from "./classes/titol.js";

// Crear una instancia de Titol 
let titolEntrada = new Titol('h1');  
titolEntrada.canviarContingut("Taula d'items"); 

// Crear una instància de Boto 
let botoAfegir = new Boto("Afegir Item", './views/creacioItem.html');
let botoCerca = new Boto("Cerca");

// Crear una instància de Input 
let inputCerca = new Input('text', '', 'Introdueix el nom d\'item');

//Crear una instància de Taula
let capcaleres = ['Nom item', 'Data creacio', 'Data modificacio', 'Imatge relacionada', 'Esborrar item'];
let taula = new Taula(capcaleres, []);

// Esperar que el DOM estigui llest i renderitzar
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("dades");
    botoAfegir.append(contenedor);
    inputCerca.append(contenedor);
    botoCerca.append(contenedor);
    titolEntrada.append(contenedor);
    taula.append(contenedor);
});
