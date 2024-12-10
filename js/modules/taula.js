import { ComponentHTML } from "./ComponentHTML.js";
/**
 * Classe que representa una taula amb dades.
 * La taula esta composta per capcaleres i dades.
 * El constructor rep les capcaleres i les dades com a par metres i
 * es crea l'HTML de la taula.
 * @class
 * @extends ComponentHTML
 */
class Taula extends ComponentHTML {
  /**
   * El constructor rep les capcaleres i les dades com a par metres i
   * es crea l'HTML de la taula.
   * La taula es pot actualitzar amb noves dades amb el metode update.
   */
  constructor(capcaleres, dada) {
    let html = Taula.createTableHTML(capcaleres, dada);
    super(html);
    this.headers = capcaleres;
    this.data = dada;
  }

  /**
   * Mètode estàtic per crear l'HTML de la taula.
   * Rep les capcaleres i les dades com a parametres i
   * es crea l'HTML de la taula.
   * @param {Array} capcaleres - les capcaleres de la taula
   * @param {Array} dada - les dades de la taula
   * @returns {String} l'HTML de la taula
   */
  static createTableHTML(capcaleres, dada) {
    let taulaHTML = "<table><thead><tr>";

    // Afegir capçaleres
    capcaleres.forEach((capcalera) => {
      taulaHTML += `<th>${capcalera}</th>`;
    });
    taulaHTML += "</tr></thead><tbody>";

    // Afegir dades
    dada.forEach((row) => {
      taulaHTML += "<tr>";
      row.forEach((cell) => {
        taulaHTML += `<td>${cell}</td>`;
      });
      taulaHTML += "</tr>";
    });

    taulaHTML += "</tbody></table>";
    return taulaHTML;
  }

  /**
   * Mètode per canviar les capcaleres.
   * Rep les noves capcaleres com a parametre i
   * es crea l'HTML de la taula amb les noves capcaleres.
   * @param {Array} novesCapcaleres - les noves capcaleres de la taula
   */
  posarCapcaleres(novesCapcaleres) {
    this.headers = novesCapcaleres;
    this.html = Taula.createTableHTML(this.headers, this.data);
  }

  /**
   * Mètode per canviar les dades.
   * Rep les noves dades com a parametre i
   * es crea l'HTML de la taula amb les noves dades.
   * @param {Array} novaDada - les noves dades de la taula
   */
  posarDada(novaDada) {
    this.data = novaDada;
    this.html = Taula.createTableHTML(this.headers, this.data);
  }
}

export { Taula };
