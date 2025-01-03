
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
    constructor(html = 'Selecciona una opció', name, idNom = '') {
        // Constructor de la classe SelectComponent passant-li el text que es mostrarà per defecte al select, el nom i l'id del select.
        super(html);
        this.name = name;//Atribut que conté el nom del select
        this.idNom = idNom; // Atribut que conté l'id del select
        this.options = []; // Atribut que conté les opcions del select a un array
    }

   
    /**
     * Retorna l'element HTML del select com a string.
     * @return {string} L'element HTML del select com a string.
     */
    render() {
        let optionsHTML = this.options.map(option => `<option value="${option}">${option}</option>`).join('');
        // Generem l'HTML de les opcions del select amb les opcions passades com a paràmetre i les convertim en un string
        return `<select name="${this.name}" id="${this.idNom}">
            <option value="">${this.html}</option>
            ${optionsHTML}
        </select>`;// Retornem l'element select amb l'atribut name, id i el contingut de les opcions
    }

    
    /**
     * Afegeix una o mes opcions al select.
     * @param {...string} optionComponent - Les opcions que es volen afegir al select.
     */
    afegirFill(...optionComponent) {
        this.options.push(...optionComponent);// Afegim les opcions passades com a paràmetre a l'array d'opcions
    }

    /**
     * Retorna l'opcio seleccionada.
     * @return {string} L'opcio seleccionada.
     */
    obtenirSeleccio() {
        const selectElement = document.getElementById(this.idNom);// Obtenim l'element select a partir de l'id
        return selectElement.value; // Retornem el valor de l'element select
    }
    
}

export { SelectComponent };

