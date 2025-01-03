import { ComponentHTML } from "./ComponentHTML.js";
import { DivComponent } from "./div.js";
import { Boto } from "./boto.js";
import { Titol } from "./titol.js";// Importem els mòduls necessaris per a la classe Targeta

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
   * @param {string} id - L'id del boto de la targeta.
   */
  constructor(classFill = "", nomBoto = "", nomTitol = "", id = "") {
    // Constructor de la classe Targeta passant-li la classe CSS del div que envolta la targeta, el nom del boto, el nom del titol i l'id del boto
    super("");// Cridem al constructor de la classe pare
    this.div = new DivComponent("", classFill);// Creem un div amb la classe passada com a paràmetre
    this.boto = new Boto(nomBoto, id);// Creem un botó amb el nom i l'id passats com a paràmetre
    this.titol = new Titol(nomTitol, "h2");// Creem un títol amb el nom passat com a paràmetre i el tipus de tamany
    this.fills = []; //Array que contindrà els fills de la targeta
  }

  // Mètode afegirFill: afegeix un component fill
  afegirFill(...fillComponent) {
    this.fills.push(...fillComponent);// Afegim els fills passats com a paràmetre a l'array de fills
  }

  

  /**
   * Retorna l'element HTML de la targeta.
   * @return {string} L'element HTML de la targeta.
   */
  render() {
    let fillsHTML = this.fills.map(fill => fill.render()).join('');
    // Generem l'HTML dels fills de la targeta amb els fills passats com a paràmetre i els convertim en un string
    return ` 
      <div class="${this.div.classNom}">
        ${this.titol.render()}
        ${fillsHTML}
        ${this.boto.render()}
      </div>`; // Retornem l'element div amb la classe, el títol, els fills i el botó
  }
}

export { Targeta };
