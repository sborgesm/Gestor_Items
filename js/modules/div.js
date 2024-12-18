import { ComponentHTML } from './ComponentHTML.js';

class DivComponent extends ComponentHTML {
    constructor(html, classNom = '', id = '') {
        super(html);
        this.classNom = classNom;
        this.id = id;
        this.fills = []; // Guarda els divs fills i altres components
    }

    // Mètode render: retorna l'element HTML de tipus div com a string
    render() {
        let fillsHTML = this.fills.map(fill => fill.render()).join('');
        return `<div id="${this.id}" class="${this.classNom}">${this.html}${fillsHTML}</div>`;
    }

    // Mètode canviaClass: canvia la classe del div
    canviaClass(novaClass) {
        this.classNom = novaClass;
    }

    // Mètode afegirFill: afegeix un component fill
    afegirFill(...fillComponent) {
        this.fills.push(...fillComponent);
    }
}

export { DivComponent };
