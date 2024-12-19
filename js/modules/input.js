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
  constructor(id = "", tipus = "text", valor = "", placeholder = "") {
    super();
    this.id = id;
    this.tipus = tipus;
    this.valor = valor;
    this.placeholder = placeholder;
    this.html = `<input id="${id}" type="${tipus}" value="${valor}" placeholder="${placeholder}">`;
  }

  /**
   * Metode per canviar el tipus de l'input
   * @param {string} nouTipus - Nou tipus de l'input
   */
  canviarTipus(nouTipus) {
    this.tipus = nouTipus;
    this.html = `<input id="${this.id}" type="${this.tipus}" value="${this.valor}" placeholder="${this.placeholder}">`;
  }

  /**
   * Metode per canviar el valor de l'input
   * @param {string} nouValor - Nou valor de l'input
   */
  canviarValor(nouValor) {
    this.valor = nouValor;
    this.html = `<input id="${this.id}" type="${this.tipus}" value="${this.valor}" placeholder="${this.placeholder}">`;
  }

  /**
   * Metode per canviar el placeholder de l'input
   * @param {string} nouPlaceholder - Nou placeholder de l'input
   */
  canviarPlaceholder(nouPlaceholder) {
    this.placeholder = nouPlaceholder;
    this.html = `<input type="${this.tipus}" value="${this.valor}" placeholder="${this.placeholder}">`;
  }

  /**
   * Funcio per obtenir el valor de l'input
   * @returns {string} Retorna el valor de l'input
   */
  obtenirValor()  {
    return document.getElementById(this.id).value;
  }
}

export { Input };

