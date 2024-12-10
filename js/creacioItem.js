import { Taula } from "./modules/taula.js";
import { Input } from "./modules/input.js";
import { Boto } from "./modules/boto.js";
import { Titol } from "./modules/titol.js";
import { DivComponent } from "./modules/div.js";
import { ComponentHTML } from "./modules/ComponentHTML.js";
import { Targeta } from "./modules/targeta.js";

// Crear una instancia de Titol 
let titolEntrada = new Titol('h1');  
titolEntrada.canviarContingut("Creacio d'items");

// Crear instancia del DivComponent "nouDiv"
let nouDiv = new DivComponent('', 'gran');

// Crear instancia de Targeta
let targeta1 = new Targeta('opcions');
let targeta2 = new Targeta('opcions');

// Añadir la targeta como hijo del div principal
nouDiv.afegirFill(targeta1);
nouDiv.afegirFill(targeta2);

// Esperar que el DOM esté listo y renderizar
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("dades");
    titolEntrada.append(contenedor);
    nouDiv.append(contenedor); // Renderiza el div principal junto con la targeta
});

document.getElementById('eleccio').addEventListener('click', function () { 
    // Obtener la opción seleccionada
    let elementSeleccionat = document.querySelector('input[name="eleccio"]:checked'); 
    // Obtener el texto asociado
    let nomdeSeleccio = document.querySelector(`label[for="${elementSeleccionat.id}"]`);
    
    if (nomdeSeleccio.innerText == 'Simple') {
        let simple = new Simple();
        simple.afegirNom();
        simple.afegirDescripcio();
    } else {
        // Lógica para otras opciones
    }
});
