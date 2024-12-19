import { ComponentHTML } from "./ComponentHTML.js";

/**
 * Classe que representa una taula amb dades.
 * La taula està composta per capçaleres i dades.
 * El constructor rep les capçaleres i les dades com a paràmetres i
 * es crea l'HTML de la taula.
 * @class
 * @extends ComponentHTML
 */
class Taula extends ComponentHTML {
  /**
   * El constructor rep les capçaleres i les dades com a paràmetres i
   * es crea l'HTML de la taula.
   * La taula es pot actualitzar amb noves dades amb el mètode update.
   * @param {Array} capcaleres - les capçaleres de la taula
   * @param {Array} dades - les dades de la taula
   */
  constructor(capcaleres, dades) {
    const html = Taula.createTableHTML(capcaleres, dades);
    super(html);
    this.headers = capcaleres;
    this.data = dades;
  }

  /**
   * Mètode estàtic per crear l'HTML de la taula.
   * Rep les capçaleres i les dades com a paràmetres i
   * es crea l'HTML de la taula.
   * @param {Array} capcaleres - les capçaleres de la taula
   * @param {Array} dades - les dades de la taula
   * @returns {string} l'HTML de la taula
   */
  static createTableHTML(capcaleres, dades) {
    let taulaHTML = "<table><thead><tr>";

    // Afegir capçaleres
    capcaleres.forEach((capcalera) => {
      taulaHTML += `<th>${capcalera}</th>`;
    });
    taulaHTML += "</tr></thead><tbody>";

    // Afegir dades
    dades.forEach((row) => {
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
   * Mètode per carregar les dades de l'objecte localStorage i mostrar-les a la taula.
   */
  carregarDades() {
    const dades = JSON.parse(localStorage.getItem("dades") || "[]");

    const files = dades.map((dada) => [
      dada.nom,
      dada.data_creacio || "-",
      dada.data_modificacio || "-",
      dada.url || "-",
      `<button onclick="this.closest('.taula').eliminarItem('${dada.id}')">Eliminar</button>`,
    ]);

    this.posarDades(files);
  }

  /**
   * Mètode per eliminar un item de la taula.
   * @param {string} id - l'id de l'item a eliminar
   */
  eliminarItem(id) {
    let items = JSON.parse(localStorage.getItem("dades") || "[]");
    items = items.filter((item) => item.id !== id);
    localStorage.setItem("dades", JSON.stringify(items));
    this.carregarDades();
  }

  /**
   * Mètode per canviar les capçaleres.
   * Rep les noves capçaleres com a paràmetre i
   * es crea l'HTML de la taula amb les noves capçaleres.
   * @param {Array} novesCapcaleres - les noves capçaleres de la taula
   */
  posarCapcaleres(novesCapcaleres) {
    this.headers = novesCapcaleres;
    this.html = Taula.createTableHTML(this.headers, this.data);
  }

  /**
   * Mètode per canviar les dades.
   * Rep les noves dades com a paràmetre i
   * es crea l'HTML de la taula amb les noves dades.
   * @param {Array} novesDades - les noves dades de la taula
   */
  posarDades(novesDades) {
    this.data = novesDades;
    this.html = Taula.createTableHTML(this.headers, this.data);
  }
}

export { Taula };
