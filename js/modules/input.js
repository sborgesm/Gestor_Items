import { ComponentHTML } from "./ComponentHTML.js";
/**
 * Classe Input que representa un input HTML amb tipus, valor i placeholder
 * @module
 * @extends ComponentHTML
 */
class Input extends ComponentHTML {
  /**
   * Constructor de la classe Input
   * @param {string} id - Id de l'input 
   * @param {string} tipus - Tipus de l'input (text, password, ...)
   * @param {string} valor - Valor de l'input
   * @param {string} placeholder - Placeholder de l'input
   */
  constructor(id = "", tipus = "text", valor = "", placeholder = "") {// Constructor amb els atributs de l'input
    super();// Cridem al constructor de la classe pare
    this.id = id;// Atribut que conté l'id de l'input
    this.tipus = tipus;// Atribut que conté el tipus de l'input
    this.valor = valor;// Atribut que conté el valor de l'input
    this.placeholder = placeholder;// Atribut que conté el text introductori de l'input
    this.html = `<input id="${id}" type="${tipus}" value="${valor}" placeholder="${placeholder}">`;
    // Generem l'HTML de l'input amb els atributs passats
  }

  /**
   * Funcio per obtenir el valor de l'input
   * @returns {string} Retorna el valor de l'input
   */
  obtenirValor()  {
    return document.getElementById(this.id).value;
    // Obtenim el valor de l'input pel seu id amb el mètode value
  }


  // Funcio per buidar el valor de l'input
  buidarInput() {
    document.getElementById(this.id).value = "";
    // Esborrem el valor de l'input pel seu id assignant-li un string buit
  }
}

export { Input };

