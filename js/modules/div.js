import { ComponentHTML } from "./ComponentHTML.js";
import { Titol } from "./titol.js";
import { FormComponent } from "./form.js";

/**
 * Classe que representa un element HTML de tipus div.
 * @class
 * @extends ComponentHTML
 */
class DivComponent extends ComponentHTML {
  /**
   * Constructor de la classe DivComponent que hereta de ComponentHTML
   * @param {string} html
   * @param {string} classNom
   */
  constructor(html, classNom = "") {
    super(html);
    this.classNom = classNom;
    this.fills = []; // Guarda els divs fills i altres components
  }

  // Mètode render: retorna l'element HTML de tipus div com a string
  render() {
    let fillsHTML = this.fills.map((fill) => fill.render()).join("");
    return `<div class="${this.classNom}">${this.html}${fillsHTML}</div>`;
  }

  // Mètode canviaClass: canvia la classe del div
  canviaClass(novaClass) {
    this.classNom = novaClass;
  }

  // Mètode afegirFill: afegeix un component fill
  afegirFill(fillComponent) {
    this.fills.push(fillComponent);
  }

  // Mètode afegirTitol: afegeix un títol com a fill
  afegirTitol(contingut, tipus) {
    let titol = new Titol(contingut, tipus);
    this.afegirFill(titol);
  }

  // Mètode afegirForm: afegeix un formulari com a fill
  afegirForm(action, method) {
    let form = new FormComponent(action, method);
    this.afegirFill(form);
    return form; // Retorna el formulari per afegir camps i botons
  }
}

export { DivComponent };
