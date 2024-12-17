import { ComponentHTML } from "./ComponentHTML.js";
import { DivComponent } from "./div.js";
import { Boto } from "./boto.js";
import { Titol } from "./Titol.js";

/**
 * Classe que representa una targeta amb un titol, un element i un boto .
 * La targeta es un component HTML que es pot renderitzar.
 * @class
 * @extends ComponentHTML
 */
class Targeta extends ComponentHTML {
  /**
   * Constructor de la classe Targeta.
   * @param {string} classFill - La classe CSS del div que envolta la targeta.
   * @param {string} nomBoto - El nom del boto de la targeta.
   * @param {string} nomTitol - El nom del titol de la targeta.
   * @param {ComponentHTML} element - L'element que es vol renderitzar dins de la targeta.
   */
  constructor(classFill = "", nomBoto = "", nomTitol = "", element = null, id = "") {
    super("");
    this.div = new DivComponent("", classFill);
    this.boto = new Boto(nomBoto, id);
    this.titol = new Titol(nomTitol, "h2");
    this.element = element;
  }

  /**
   * Retorna l'element HTML de la targeta.
   * @return {string} L'element HTML de la targeta.
   */
  render() {
    const elementHTML = this.element ? this.element.render() : ""; // Si no hi ha element, retorna una string buit
    return ` 
      <div class="${this.div.classNom}">
        ${this.titol.render()}
        ${elementHTML}
        ${this.boto.render()}
      </div>`;
  }
}

export { Targeta };
