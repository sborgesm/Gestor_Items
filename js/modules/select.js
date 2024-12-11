import { ComponentHTML } from './ComponentHTML.js';

class SelectComponent extends ComponentHTML {
    constructor(html = 'Selecciona una opcion', name, idNom = '') {
        super(html);
        this.name = name;
        this.idNom = idNom; // Guarda els id
        this.options = []; // Guarda els options
    }

    // Mètode render: retorna l'element HTML de tipus select com a string
    render() {
        let optionsHTML = this.options.map(option => `<option value="${option}">${option}</option>`).join('');
        return `<select name="${this.name}" id="${this.idNom}">
            <option value="">${this.html}</option>
            ${optionsHTML}
        </select>`;
    }

    // Mètode afegirFill: afegeix un component fill
    afegirFill(...optionComponent) {
        this.options.push(...optionComponent);
    }
}

export { SelectComponent };