import { Taula } from "./modules/taula.js";
import { Input } from "./modules/input.js";
import { Boto } from "./modules/boto.js";
import { Titol } from "./modules/Titol.js";
import { DivComponent } from "./modules/div.js";
import { Imatge } from "./modules/Imatge.js";
import { Targeta } from "./modules/targeta.js";
import { SelectComponent } from "./modules/select.js";
import { GuardarDades } from "./GuardarDades.js";
 

// Crear instancia del DivComponent "nouDiv"
let nouDiv = new DivComponent('', 'gran', 'dadesaOmplir');
const urlParams = new URLSearchParams(window.location.search); 
const nom = urlParams.get('nom');
const descripcio = urlParams.get('descripcio');
const imatge = urlParams.get('imatge');
let titolEntrada = new Titol('Dades de '+nom, 'h1'); 
let titolDescripcio = new Titol("Descripcio de l'item: ", 'h4');
let inputDescripcio = new Input('descripcio','text', descripcio, ' ');
let titolImatge = new Titol("Url de la imatge: ", 'h4');
let inputUrl = new Input('url','text', imatge, ' ');

// Crear instancia de Targeta
let targeta1 = new Targeta('opcions', 'Guarda els canvis', '', "botoTriarItem");
targeta1.afegirFill(titolDescripcio);
targeta1.afegirFill(inputDescripcio);
targeta1.afegirFill(titolImatge);
targeta1.afegirFill(inputUrl);

// Añadir la targeta como hijo del div principal
nouDiv.afegirFill(targeta1);

// Esperar que el DOM esté listo y renderizar
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("dades");
    titolEntrada.append(contenedor);
    nouDiv.append(contenedor); // Renderiza el div principal junto con la targeta

    targeta1.boto.addEventListener('click', () => {
        let imatgeAfegida = new Imatge(inputUrl.obtenirValor(), " ", "50", "50", " ");
        let dadesRecollides = new GuardarDades();
        const dataActual = new Date();
        let comprovarImatge = document.getElementById('url').value;
        if (comprovarImatge === "") {
            dadesRecollides.modificarItem(nom, {
                descripcio: document.getElementById('descripcio').value,
                dataModificacio: dadesRecollides.formatejarData(dataActual),
            });
            alert("S'ha modificat l'item correctament");
        } else {
            dadesRecollides.modificarItem(nom, {
                descripcio: document.getElementById('descripcio').value,
                dataModificacio: dadesRecollides.formatejarData(dataActual),
                imatge:imatgeAfegida.html
            });
            alert("S'ha modificat l'item correctament");
        }  
    });

    document.getElementById("descripcio").addEventListener("focus", function() {
        this.value = "";
    });

    document.getElementById("url").addEventListener("focus", function() {
        this.value = "";
    });
    

});


