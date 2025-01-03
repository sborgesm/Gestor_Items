import { Input } from "./modules/input.js";
import { Titol } from "./modules/titol.js";
import { DivComponent } from "./modules/div.js";
import { Imatge } from "./modules/Imatge.js";
import { Targeta } from "./modules/targeta.js";
import { GuardarDades } from "./GuardarDades.js";
 

// Crear instància del DivComponent "nouDiv"
let nouDiv = new DivComponent('', 'gran', 'dadesaOmplir');
// Creem una instancia de DivComponent amb els parametres: contingut, classe i id
let urlParams = new URLSearchParams(window.location.search); 
// Obtenim els paràmetres de la URL amb la funció URLSearchParams
let nom = urlParams.get('nom');// Obtenim el valor de la clau "nom"
let descripcio = urlParams.get('descripcio');// Obtenim el valor de la clau "descripcio"
let imatge = urlParams.get('imatge');// Obtenim el valor de la clau "imatge"
let titolEntrada = new Titol('Dades de '+nom, 'h1');// Creem una instancia de Titol amb els parametres: text i tipus
let titolDescripcio = new Titol("Descripcio de l'item: ", 'h4');
// Creem una instancia del titol de la descripcio
let inputDescripcio = new Input('descripcio','text', descripcio, ' ');
// Creem una instancia de Input de la descripcio i posem el valor de descripcio com a valor per defecte
let titolImatge = new Titol("Url de la imatge: ", 'h4');
let inputUrl = new Input('url','text', imatge, ' ');
// Creem una instancia de Input de la url de la imatge i posem la URL de imatge com a valor per defecte

let targeta1 = new Targeta('opcions', 'Guarda els canvis', '', "botoTriarItem");
// Creem una nova instancia de Targeta
targeta1.afegirFill(titolDescripcio, inputDescripcio, titolImatge, inputUrl); // Afegim fills a la targeta
nouDiv.afegirFill(targeta1);// Afegim la targeta com a fill del div

document.addEventListener("DOMContentLoaded", () => {// Esperem a que el document estigui carregat per afegir els elements al DOM
    let contenedor = document.getElementById("dades");// Guardem a la variable contenedor l'element amb id "dades"
    titolEntrada.append(contenedor);// Renderitza el titol amb el contingut de la variable contenedor
    nouDiv.append(contenedor); // Renderitza el div amb el contingut de la variable contenedor

    targeta1.boto.addEventListener('click', () => {
        let imatgeAfegida = new Imatge(inputUrl.obtenirValor(), " ", "50", "50", " ");
        // Creem una instancia de la classe Imatge que afegim
        let dadesRecollides = new GuardarDades(); // Creem una instancia de la classe GuardarDades
        let dataActual = new Date(); // Creem una instancia de la classe Date per obtenir la data actual
        let comprovarImatge = document.getElementById('url').value;// Guardem el valor de la imatge
        if (comprovarImatge === "") {// Si no s'ha afegit cap imatge
            dadesRecollides.modificarItem(nom, {// Modifiquem l'item 
                descripcio: document.getElementById('descripcio').value,// Amb el contingut del input descripcio
                dataModificacio: dadesRecollides.formatejarData(dataActual)// I amb la data actual
            });
            alert("S'ha modificat l'item correctament");// Avisem que s'ha modificat l'item
        } else {
            dadesRecollides.modificarItem(nom, {
                descripcio: document.getElementById('descripcio').value,
                dataModificacio: dadesRecollides.formatejarData(dataActual),
                imatge:imatgeAfegida.html// Afegim la imatge a les dades a modificar
            });
            alert("S'ha modificat l'item correctament");
        }  
    });

    document.getElementById("descripcio").addEventListener("focus", function() {//Afegim un event listener al input descripcio
        this.value = "";// Quan es clica al input, el valor es posa a buit
    });

    document.getElementById("url").addEventListener("focus", function() {//Fem el mateix amb el input url
        this.value = "";
    });
    

});


