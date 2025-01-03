import { Input } from "./modules/input.js";
import { Titol } from "./modules/titol.js";
import { DivComponent } from "./modules/div.js";
import { Imatge } from "./modules/Imatge.js";
import { Targeta } from "./modules/targeta.js";
import { SelectComponent } from "./modules/select.js";
import { GuardarDades } from "./GuardarDades.js";

// Crear una instancia de Titol 
let titolEntrada = new Titol('Creacio d\'items', 'h1');

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
    let contenedor = document.getElementById("dades");// Fiquem a la variable contenedor l'element amb id "dades"
    titolEntrada.append(contenedor);// Renderitzem el titol
    nouDiv.append(contenedor); // Renderitzem el div

    targeta1.boto.addEventListener('click', () => {// Afegim la funcionalitat al boto de la targeta
        let nomSeleccionat = select1.obtenirSeleccio(); // Afegim a la variable el valor seleccionat del select
        let dadesRecollides = new GuardarDades();// Creem una instancia de la classe GuardarDades

        if (nomSeleccionat === "Simple") {// Si el valor seleccionat es "Simple"
            let inputNom = new Input('InputNomSimple', 'text', '', 'Introdueix el nom de l\'item');
            // Creem una instancia de Input amb els parametres: id, tipus, valor i placeholder
            let inputDescripcio = new Input('InputDescripcioSimple', 'text', '', 'Introdueix la descripcio de l\'item');
            // Input per la descripcio
            let targeta2 = new Targeta('opcions', 'Crea', 'Dades de l\'item simple', "botoCrearItem");
            // Creem una instancia de Targeta amb els parametres: classe del div, text del boto, text del titol i id del boto

            targeta2.afegirFill(inputNom, inputDescripcio);// Afegim els inputs com a fills de la targeta
            targeta2.update(document.getElementById("dadesaOmplir"));// Tornem a renderitzar la targeta amb els fills

            document.getElementById("botoCrearItem").addEventListener('click', () => {
                // Afegim la funcionalitat al boto de la targeta simple
                let nom = document.getElementById('InputNomSimple').value;// Guardem el valor del input amb id "InputNomSimple"
                let dades = JSON.parse(localStorage.getItem("items")) || []; // Guardem les dades del local storage a la variable dades
                let nomJaExisteix = dades.some(item => item.nom === nom);// Comprovem si ja existeix un item amb el mateix nom amb la funcio some
                if (nomJaExisteix) {// Si ja existeix un item amb el mateix nom
                    alert(`Ja existeix un item amb el nom "${nom}".`);// Mostrem un alert
                    inputNom.buidarInput();// Buidem el input
                    return;
                } else {
                    dadesRecollides.guardarItem(inputNom.obtenirValor(), inputDescripcio.obtenirValor());
                    // Guardem les dades amb la funcio guardarItem de la instancia de GuardarDades
                    alert(`L'item simple ${inputNom.obtenirValor()} creat correctament`);
                    // Mostrem un alert amb el nom de l'item creat
                    inputNom.buidarInput();
                    inputDescripcio.buidarInput();// Buidem els inputs
                }
            });

        } else {// Si el valor seleccionat es "Visual"
            let inputNom = new Input('inputNomVisual', 'text', '', 'Introdueix el nom de l\'item');
            let inputDescripcio = new Input('InputDescripcioVisual', 'text', '', 'Introdueix la descripcio de l\'item');
            let inputUrl = new Input('InputUrlVisual', 'text', '', 'Introdueix la url de la imatge');
            // Creem els inputs mateixos però afegim un per la url de la imatge
            let targeta2 = new Targeta('opcions', 'Crea', 'Dades de l\'item visual', "botoCrearItem");

            targeta2.afegirFill(inputNom, inputDescripcio, inputUrl);
            targeta2.update(document.getElementById("dadesaOmplir"));

            document.getElementById("botoCrearItem").addEventListener('click', () => {
                // Afegim la funcionalitat al boto de la targeta visual
                let nom = document.getElementById('inputNomVisual').value;
                let dades = JSON.parse(localStorage.getItem("items")) || [];
                let nomJaExisteix = dades.some(item => item.nom === nom);
                if (nomJaExisteix) {
                    alert(`Ja existeix un item amb el nom "${nom}".`);
                    inputNom.buidarInput();
                    return;
                } else {
                    let inserirImatge = new Imatge(inputUrl.obtenirValor(), 'imatge', '50', '50');
                    // Creem una instancia de la classe Imatge amb els parametres: url, text alternatiu, amplada i alcada
                    dadesRecollides.guardarItem(inputNom.obtenirValor(), inputDescripcio.obtenirValor(), inserirImatge.html);
                    // Guardem les dades contingut dels inputs i la url de la imatge
                    alert(`L'item visual ${inputNom.obtenirValor()} creat correctament`); // Mostrem un alert amb el nom de l'item creat
                    inputNom.buidarInput();
                    inputDescripcio.buidarInput();
                    inputUrl.buidarInput();// Buidem els inputs
                }

            });
        }

    });

});


