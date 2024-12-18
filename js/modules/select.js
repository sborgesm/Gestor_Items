
import { ComponentHTML } from './ComponentHTML.js';
/**
 * Classe per representar un component HTML de tipus select.
 * La classe permet crear un select amb unes opcions determinades.
 * @class
 * @extends ComponentHTML
 */
class SelectComponent extends ComponentHTML {
    /**
     * Constructor de la classe SelectComponent.
     * @param {string} html - Text que es mostra per defecte al select.
     * @param {string} name - Nom del select.
     * @param {string} idNom - Id del select.
     */
    constructor(html = 'Selecciona una opcion', name, idNom = '') {
        super(html);
        this.name = name;
        this.idNom = idNom; // Guarda els id
        this.options = []; // Guarda els options
    }

   
    /**
     * Retorna l'element HTML del select com a string.
     * @return {string} L'element HTML del select com a string.
     */
    render() {
        let optionsHTML = this.options.map(option => `<option value="${option}">${option}</option>`).join('');
        return `<select name="${this.name}" id="${this.idNom}">
            <option value="">${this.html}</option>
            ${optionsHTML}
        </select>`;
    }

    
    /**
     * Afegeix una o mes opcions al select.
     * @param {...string} optionComponent - Les opcions que es volen afegir al select.
     */
    afegirFill(...optionComponent) {
        this.options.push(...optionComponent);
    }

    obtenirSeleccio() {
        const selectElement = document.getElementById(this.idNom);
        return selectElement.value; 
    }
    
}

export { SelectComponent };

