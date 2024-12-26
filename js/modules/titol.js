import { ComponentHTML } from "./ComponentHTML.js";
/**
 * Classe per representar un títol. El títol es un ComponentHTML especialitzat
 * que permet canviar el contingut i el tipus de títol.
 * @class
 * @extends ComponentHTML
 */
class Titol extends ComponentHTML {
  /**
   * Constructor de la classe Titol. Crea l'element HTML del títol
   * amb el contingut i tipus donats.
   * @param {string} contingut - El contingut del títol.
   * @param {string} [tipus=h1] - El tipus de títol (h1, h2, ...).
   */
  constructor(contingut, tipus = "") {
    // Crea l'element HTML del títol
    let html = `<${tipus}>${contingut}</${tipus}>`;
    super(html);
    this.tipus = tipus;
    this.contingut = contingut;
  }
  /**
   * Mètode per canviar el contingut del títol.
   * @param {string} noucontingut - El nou contingut del títol.
   */
  canviarContingut(noucontingut) {
    this.contingut = noucontingut;
    this.html = `<${this.tipus}>${this.contingut}</${this.tipus}>`;
  }

  /**
   * Mètode per canviar el tipus de títol
   * @param {string} nouTipus - El nou tipus de títol (h1, h2, ...).
   */
  canviarTipus(nouTipus) {
    this.tipus = nouTipus;
    this.html = `<${this.tipus}>${this.contingut}</${this.tipus}>`;
  }
}

/**
 * Exporta la classe Titol per poder ser utilitzada des d'altres mòduls.
 */
export { Titol };
