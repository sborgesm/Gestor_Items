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
let titolEntrada = new Titol('h1');  
titolEntrada.canviarContingut("Creacio d'items");

// Crear instancia del DivComponent "nouDiv"
let nouDiv = new DivComponent('', 'gran', 'dadesaOmplir');

// Crear instancia de SelectComponent
const select1 = new SelectComponent("Seleciona una opcio ", "nomSelect", "idSelect");
select1.afegirFill("Simple", "Visual");

// Crear instancia de Targeta
let targeta1 = new Targeta('opcions', 'Tria', 'Quin tipus d\'item vols crear?', "botoTriarItem");
targeta1.afegirFill(select1);


// Añadir la targeta como hijo del div principal
nouDiv.afegirFill(targeta1);

// Esperar que el DOM esté listo y renderizar
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("dades");
    titolEntrada.append(contenedor);
    nouDiv.append(contenedor); // Renderiza el div principal junto con la targeta

    targeta1.boto.addEventListener('click', () => {
        const nomSeleccionat = select1.obtenirSeleccio(); 
        let dadesRecollides = new GuardarDades();

        if(nomSeleccionat === "Simple") {
            let inputNom = new Input('InputNomSimple','text', '', 'Introdueix el nom de l\'item');
            let inputDescripcio = new Input('InputDescripcioSimple','text', '', 'Introdueix la descripcio de l\'item');
            let targeta2 = new Targeta('opcions', 'Crea', 'Dades de l\'item simple', "botoCrearItem");

            targeta2.afegirFill(inputNom, inputDescripcio);
            targeta2.update(document.getElementById("dadesaOmplir"));
            
            document.getElementById("botoCrearItem").addEventListener('click', () =>  {

                dadesRecollides.guardarItem(inputNom.obtenirValor(), inputDescripcio.obtenirValor());
                alert(`L'item simple ${ inputNom.obtenirValor() } creat correctament`);
                inputNom.buidarInput();
                inputDescripcio.buidarInput();
            });

        } else {
            let inputNom = new Input('inputNomVisual','text', '', 'Introdueix el nom de l\'item');
            let inputDescripcio = new Input('InputDescripcioVisual','text', '', 'Introdueix la descripcio de l\'item');
            let inputUrl = new Input('InputUrlVisual','text', '', 'Introdueix la url de la imatge');
            let targeta2 = new Targeta('opcions', 'Crea', 'Dades de l\'item visual', "botoCrearItem");

            targeta2.afegirFill(inputNom, inputDescripcio, inputUrl);
            targeta2.update(document.getElementById("dadesaOmplir"));

            document.getElementById("botoCrearItem").addEventListener('click', () =>  {
                let inserirImatge = new Imatge(inputUrl.obtenirValor(), 'imatge', '50', '50');
                dadesRecollides.guardarItem(inputNom.obtenirValor(), inputDescripcio.obtenirValor(), inserirImatge.html);
                alert(`L'item visual ${inputNom.obtenirValor()} creat correctament`);
                inputNom.buidarInput();
                inputDescripcio.buidarInput();
                inputUrl.buidarInput();
            });
        }
        
    });

});


