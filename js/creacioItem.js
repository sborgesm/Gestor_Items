import { Taula } from "./classes/taula.js";
import { Input } from "./classes/input.js";
import { Boto } from "./classes/boto.js";
import { Titol } from "./classes/titol.js";
import { DivComponent } from "./classes/div.js";
// Crear una instancia de Titol 
let titolEntrada = new Titol('h1');  
titolEntrada.canviarContingut("Creacio d'items");

//Crear una instància de div
let divGran = new DivComponent();
divGran.afegirContingut("", "gran");
let contingutIntern = new Titol('h2');
contingutIntern.canviarContingut("Quin tipus d'item vols crear?", "h2");
divGran.afegirDivIntern(contingutIntern, "opcions");
// Esperar que el DOM estigui llest i renderitzar
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("dades");
    titolEntrada.append(contenedor);
    divGran.append(contenedor);
    contingutIntern.append(contenedor);
});
document.getElementById('eleccio').addEventListener('click', function () { 
    // Obtenir l'opció seleccionada
    let elementSeleccionat = document.querySelector('input[name="eleccio"]:checked'); 
    // Obtenir el text associat
    let nomdeSeleccio = document.querySelector(`label[for="${elementSeleccionat.id}"]`);
    
    if (nomdeSeleccio.innerText == 'Simple') {
        let simple = new Simple();
        simple.afegirNom();
        simple.afegirDescripcio();
    }else{
        
    }

});
