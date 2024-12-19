import { Taula } from "./modules/taula.js";
import { Input } from "./modules/input.js";
import { Boto } from "./modules/boto.js";
import { Titol } from "./modules/Titol.js";

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("dades");
    if (!contenedor) {
        console.error("Element amb id 'dades' no trobat");
        return;
    }

    // Crear una instancia de Titol 
    const titolEntrada = new Titol('h1');  
    titolEntrada.canviarContingut("Taula d'items"); 

    // Crear instàncies de Boto 
    const botoAfegir = new Boto("Afegir Item", "boto-afegir");
    const botoCerca = new Boto("Cerca", "boto-cerca");

    // Crear una instància de Input 
    const inputCerca = new Input('InputCerca','text', '', "Introdueix el nom d'item");

    // Crear una instància de Taula
    const capcaleres = ['Nom item', 'Data creacio', 'Data modificacio', 'Imatge relacionada', 'Esborrar item'];
    const taula = new Taula(capcaleres, []);

    // Renderitzar elements
    titolEntrada.append(contenedor);
    botoAfegir.append(contenedor);
    inputCerca.append(contenedor);
    botoCerca.append(contenedor);
    taula.append(contenedor);

    // Carregar dades a la taula
    taula.carregarDades();

    // Afegir event listeners
    botoAfegir.addEventListener("click", () => {
        window.location.href = "./views/creacioItem.html";
    });

    botoCerca.addEventListener("click", () => {
        const searchTerm = inputCerca.obtenirValor();
        if (searchTerm) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        } else {
            alert("Si us plau, introdueix un terme de cerca.");
        }
    });
});
