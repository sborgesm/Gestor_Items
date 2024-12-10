import { ComponentHTML } from "./ComponentHTML.js";
/**
 * Classe Input que representa un input HTML amb tipus, valor i placeholder
 * @module
 * @extends ComponentHTML
 */
class Input extends ComponentHTML {
  /**
   * Constructor de la classe Input
   * @param {string} tipus - Tipus de l'input (text, password, ...)
   * @param {string} valor - Valor de l'input
   * @param {string} placeholder - Placeholder de l'input
   */
  constructor(tipus = "text", valor = "", placeholder = "") {
    super();
    this.tipus = tipus;
    this.valor = valor;
    this.placeholder = placeholder;
    this.html = `<input type="${tipus}" value="${valor}" placeholder="${placeholder}">`;
  }

  /**
   * Metode per canviar el tipus de l'input
   * @param {string} nouTipus - Nou tipus de l'input
   */
  canviarTipus(nouTipus) {
    this.tipus = nouTipus;
    this.html = `<input type="${this.tipus}" value="${this.valor}" placeholder="${this.placeholder}">`;
  }

  /**
   * Metode per canviar el valor de l'input
   * @param {string} nouValor - Nou valor de l'input
   */
  canviarValor(nouValor) {
    this.valor = nouValor;
    this.html = `<input type="${this.tipus}" value="${this.valor}" placeholder="${this.placeholder}">`;
  }

  /**
   * Metode per canviar el placeholder de l'input
   * @param {string} nouPlaceholder - Nou placeholder de l'input
   */
  canviarPlaceholder(nouPlaceholder) {
    this.placeholder = nouPlaceholder;
    this.html = `<input type="${this.tipus}" value="${this.valor}" placeholder="${this.placeholder}">`;
  }
}

export { Input };

