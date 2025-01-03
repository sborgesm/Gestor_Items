import { ComponentHTML } from './ComponentHTML.js';

class DivComponent extends ComponentHTML {
    constructor(html, classNom = '', id = '') {
        super(html);// Cridem al constructor de la classe pare
        this.classNom = classNom;// Atribut que conté la classe del div
        this.id = id;// Atribut que conté l'id del div
        this.fills = []; // Guarda els divs fills i altres components
    }

    // Mètode render: retorna l'element HTML de tipus div com a string
    render() {
        let fillsHTML = this.fills.map(fill => fill.render()).join('');
        // Generem l'HTML dels fills renderitzant-los i ajuntant-los amb join
        return `<div id="${this.id}" class="${this.classNom}">${this.html}${fillsHTML}</div>`;
        //Retornem l'element div amb l'atribut id i classe i el contingut dels fills
    }

    // Mètode canviaClass: canvia la classe del div
    canviaClass(novaClass) {
        this.classNom = novaClass;// Assignem la nova classe
    }

    // Mètode afegirFill: afegeix un component fill
    afegirFill(...fillComponent) {
        this.fills.push(...fillComponent);
        /* ...fillComponent: Utilitza l'operador spread (...), 
        que permet passar un nombre arbitrari d'arguments al mètode. 
        Cada argument representa un component fill que es vol afegir.*/
    }

    // Mètode per eliminar els fills
    buidarFills() {
        this.fills = [];// Buidem l'array de fills
    }
}

export { DivComponent };
