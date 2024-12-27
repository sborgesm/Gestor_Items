import { Taula } from "./modules/taula.js";
import { Input } from "./modules/input.js";
import { Boto } from "./modules/boto.js";
import { Titol } from "./modules/Titol.js";
import { DivComponent } from "./modules/div.js";
import { Imatge } from "./modules/Imatge.js";
import { Targeta } from "./modules/targeta.js";
import { SelectComponent } from "./modules/select.js";
import { GuardarDades } from "./GuardarDades.js";

// Crear una instancia de Titol 
let titolEntrada = new Titol('Dades de l\'item', 'h1');  

// Crear instancia del DivComponent "nouDiv"
let nouDiv = new DivComponent('', 'gran', 'dadesaOmplir');
const urlParams = new URLSearchParams(window.location.search); 
const nom = urlParams.get('nom');
const descripcio = urlParams.get('descripcio');
const imatge = urlParams.get('imatge'); 
let titolNom = new Titol("Nom de l'item: ", 'h4');
let inputNom = new Input('inputNomVisual','text', '', nom);
let titolDescripcio = new Titol("Descripcio de l'item: ", 'h4');
let inputDescripcio = new Input('inputNomVisual','text', '', descripcio);
let titolImatge = new Titol("Url de la imatge: ", 'h4');
let inputUrl = new Input('InputUrlVisual','text', '', imatge);

// Crear instancia de Targeta
let targeta1 = new Targeta('opcions', 'Guarda els canvis', '', "botoTriarItem");
targeta1.afegirFill(titolNom);
targeta1.afegirFill(inputNom);
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
        let nomAntic = inputNom.obtenirValor();
        let dadesRecollides = new GuardarDades();
        dadesRecollides.modificarItem(nomAntic, {
            nom:inputNom.obtenirValor(),
            descripcio: inputDescripcio.obtenirValor(), 
            imatge:imatgeAfegida.html
        });
        alert(`L'item ${nomAntic} modificat correctament`);
        inputNom.buidarInput();
        inputDescripcio.buidarInput();
        inputUrl.buidarInput();
        
    });

});


