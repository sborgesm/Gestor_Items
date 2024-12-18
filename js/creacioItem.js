import { Taula } from "./modules/taula.js";
import { Input } from "./modules/input.js";
import { Boto } from "./modules/boto.js";
import { Titol } from "./modules/Titol.js";
import { DivComponent } from "./modules/div.js";
import { ComponentHTML } from "./modules/ComponentHTML.js";
import { Targeta } from "./modules/targeta.js";
import { SelectComponent } from "./modules/select.js";

// Crear una instancia de Titol 
let titolEntrada = new Titol('h1');  
titolEntrada.canviarContingut("Creacio d'items");

// Crear instancia del DivComponent "nouDiv"
let nouDiv = new DivComponent('', 'gran');

// Crear instancia de SelectComponent
const select1 = new SelectComponent("Seleciona una opcio ", "nomSelect", "idSelect");
select1.afegirFill("Simple", "Visual");

// Crear instancia de Targeta
let targeta1 = new Targeta('opcions', 'Tria', 'Quin tipus d\'item vols crear?', select1, "boto_targeta");
let targeta2 = new Targeta('opcions', 'Crea', 'Omple les dades');

// Añadir la targeta como hijo del div principal
nouDiv.afegirFill(targeta1, targeta2);

// Esperar que el DOM esté listo y renderizar
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("dades");
    titolEntrada.append(contenedor);
    nouDiv.append(contenedor); // Renderiza el div principal junto con la targeta
    targeta1.boto.addEventListener('click', () => {
        const nomSeleccionat = select1.obtenirSeleccio(); // Obtener selección al hacer clic
        if (nomSeleccionat) {
            alert("Has triat: " + nomSeleccionat);
        } else {
            alert("No has seleccionat cap opció.");
        }
    });
});


