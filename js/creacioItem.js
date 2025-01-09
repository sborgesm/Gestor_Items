import { Input } from "./modules/input.js";
import { Titol } from "./modules/titol.js";
import { DivComponent } from "./modules/div.js";
import { Imatge } from "./modules/Imatge.js";
import { Targeta } from "./modules/targeta.js";
import { SelectComponent } from "./modules/select.js";
import { GuardarDades } from "./GuardarDades.js";

// Crear una instancia de Titol 
let titolEntrada = new Titol('Creacio d\'items', 'h1');

let botoTornar = new Imatge('../img/fletxa.png'," ", "50", "50", "boto-tornar");

let divHeader = new DivComponent('', 'header-container','header');
divHeader.afegirFill(titolEntrada, botoTornar);

// Crear instancia del DivComponent "nouDiv"
let nouDiv = new DivComponent('', 'gran', 'dadesaOmplir');// Parametres: contingut, classe i id

// Crear instancia de SelectComponent
let select1 = new SelectComponent("Seleciona una opcio ", "nomSelect", "idSelect");// Parametres: opcio per defecte, nom i id
select1.afegirFill("Simple", "Visual");// Afegir opcions al select

// Crear instancia de Targeta
let targeta1 = new Targeta('opcions', 'Tria', 'Quin tipus d\'item vols crear?', "botoTriarItem");
// Parametres: classe del div on es fica el div, text del boto, text del titol de la targeta i id del boto
targeta1.afegirFill(select1);// Afegim el select com a fill de la targeta


// Afegim la targeta com a fill del div
nouDiv.afegirFill(targeta1);

// Esperem a que el document estigui carregat per afegir els elements al DOM
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("dades");
    divHeader.append(contenedor);
    nouDiv.append(contenedor);

    // Event per tornar enrere amb la fletxa
    document.getElementById("boto-tornar").addEventListener("click", () => {
        window.history.back(); // Quan es clica, torna enrere
    });

    targeta1.boto.addEventListener('click', () => { // Quan es clica el boto
        let nomSeleccionat = select1.obtenirSeleccio(); // Obtenim l'opcio seleccionada
        let dadesRecollides = new GuardarDades(); // Creem una instancia de la classe GuardarDades

        if (nomSeleccionat === "Simple") { // Si l'opcio seleccionada es "Simple"
            let inputNom = new Input('InputNomSimple', 'text', '', 'Introdueix el nom de l\'item'); // Creem un input on guardem el nom
            let inputDescripcio = new Input('InputDescripcioSimple', 'text', '', 'Introdueix la descripcio de l\'item'); // Creem un input on guardem la descripció
            let targeta2 = new Targeta('opcions', 'Crea', 'Dades de l\'item simple', "botoCrearItem"); // Creem una targeta

            targeta2.afegirFill(inputNom, inputDescripcio); // Afegim els fills a la targeta
            targeta2.update(document.getElementById("dadesaOmplir")); // Actualitzem la targeta

            document.getElementById("botoCrearItem").addEventListener('click', () => { // Event per crear l'item
                let nom = document.getElementById('InputNomSimple').value; // Obtenim el nom
                let dades = JSON.parse(localStorage.getItem("items")) || []; // Obtenim els items
                let nomJaExisteix = dades.some(item => item.nom === nom); // Comprovem si el nom ja existeix
                if (nomJaExisteix) { // Si ja existeix
                    alert(`Ja existeix un item amb el nom "${nom}".`); // Mostrem un missatge
                    inputNom.buidarInput(); // Buidem l'input
                    return;
                } else { // Si no existeix
                    dadesRecollides.guardarItem(inputNom.obtenirValor(), inputDescripcio.obtenirValor()); // Guardem l'item
                    alert(`L'item simple ${inputNom.obtenirValor()} creat correctament`); // Mostrem un missatge
                    inputNom.buidarInput(); // Buidem l'input
                    inputDescripcio.buidarInput(); // Buidem l'input
                }
            });
        } else { // Si l'opcio seleccionada es "Visual"
            let inputNom = new Input('inputNomVisual', 'text', '', 'Introdueix el nom de l\'item'); // Creem un input on guardem el nom
            let inputDescripcio = new Input('InputDescripcioVisual', 'text', '', 'Introdueix la descripcio de l\'item'); // Creem un input on guardem la descripció
            let inputUrl = new Input('InputUrlVisual', 'text', '', 'Introdueix la url de la imatge'); // Creem un input on guardem la url
            let targeta2 = new Targeta('opcions', 'Crea', 'Dades de l\'item visual', "botoCrearItem"); // Creem una targeta

            targeta2.afegirFill(inputNom, inputDescripcio, inputUrl); // Afegim els fills a la targeta
            targeta2.update(document.getElementById("dadesaOmplir")); // Actualitzem la targeta

            document.getElementById("botoCrearItem").addEventListener('click', () => { // Event per crear l'item
                let nom = document.getElementById('inputNomVisual').value; // Obtenim el nom
                let dades = JSON.parse(localStorage.getItem("items")) || []; // Obtenim els items
                let nomJaExisteix = dades.some(item => item.nom === nom); // Comprovem si el nom ja existeix
                if (nomJaExisteix) { // Si ja existeix
                    alert(`Ja existeix un item amb el nom "${nom}".`); // Mostrem un missatge
                    inputNom.buidarInput(); // Buidem l'input
                    return;
                } else { // Si no existeix
                    let inserirImatge = new Imatge(inputUrl.obtenirValor(), 'imatge', '50', '50'); // Creem una imatge
                    dadesRecollides.guardarItem(inputNom.obtenirValor(), inputDescripcio.obtenirValor(), inserirImatge.html); // Guardem l'item
                    alert(`L'item visual ${inputNom.obtenirValor()} creat correctament`); // Mostrem un missatge
                    inputNom.buidarInput(); // Buidem l'input
                    inputDescripcio.buidarInput(); // Buidem l'input
                    inputUrl.buidarInput(); // Buidem l'input
                }
            });
        }
    });
});


