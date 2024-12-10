import { ComponentHTML } from './ComponentHTML.js';

class SelectComponent extends ComponentHTML {
    constructor(html, name, idNom = '') {
        super(html);
        this.name = name;
        this.idNom = idNom;
    }

    // Mètode render: retorna l'element HTML de tipus select com a string
    render() {
        return `<select name="${this.name}" id="${this.name}">${this.html}</select>`;
    }
}