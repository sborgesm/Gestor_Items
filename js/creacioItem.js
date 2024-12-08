import { Taula } from "./modules/taula.js";
import { Input } from "./modules/input.js";
import { Boto } from "./modules/boto.js";
import { Titol } from "./modules/titol.js";
import { DivComponent } from "./modules/div.js";
// Crear una instancia de Titol 
let titolEntrada = new Titol('h1');  
titolEntrada.canviarContingut("Creacio d'items");

//Crear una instància de div
let divGran = new DivComponent("", "gran");
let divOpcions = new DivComponent("", "opcions");
let divOpcions2 = new DivComponent("", "opcions");
let formulari = divOpcions.addForm('#', '');
divGran.addChild(divOpcions);
divGran.addChild(divOpcions2);
divOpcions.addTitol("Quin tipus d'item vols crear?", "h2");
formulari.addField('radio', 'simple', 'Introdueix el nom d\'item');
formulari.addButton('Tria');
divOpcions2.addTitol("Omple les dades", "h2");
// Esperar que el DOM estigui llest i renderitzar
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("dades");
    titolEntrada.append(contenedor);
    divGran.append(contenedor);
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
