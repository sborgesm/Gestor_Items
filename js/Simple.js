/**
 * Classe per representar un item simple
 * @extends Items
 */
class Simple extends Items {
  /**
   * Constructor de la classe
   * @param {string} nom - Nom de l'item
   * @param {string} descripcio - Descripcio de l'item
   * @param {Date} data_creacio - Data de creacio de l'item
   * @param {Date} data_modificacio - Data de modificacio de l'item
   */
  constructor(nom, descripcio, data_creacio = new Date(), data_modificacio) {
    super(nom, descripcio, data_creacio, data_modificacio);
    this.data_creacio = this.formatejarData(this.data_creacio);
  }

  /**
   * Metode per formatejar una data
   * @param {Date} date - Data a formatejar
   * @return {string} Data formatejada en format DD-MM-YYYY
   */
  formatejarData(date) {
    let dia = String(date.getDate()).padStart(2, "0");
    let mes = String(date.getMonth() + 1).padStart(2, "0"); // Els mesos comencen per 0
    let any = date.getFullYear();
    return `${dia}-${mes}-${any}`; // Format DD-MM-YYYY
  }

  /**
   * Metode que permet afegir un camp de text per introduir el nom de l'item
   */
  afegirNom() {
    document.getElementById("dadesaOmplir").innerHTML = `
            <label for="nom">Nom:</label>
            <input type="text" id="nom" name="nom"><br>
        `;
  }

  /**
   * Metode que permet afegir un camp de text per introduir la descripcio de l'item
   */
  afegirDescripcio() {
    document.getElementById("dadesaOmplir").innerHTML += `
            <label for="descripcio">Descripcio:</label>
            <input type="text" id="descripcio" name="descripcio">
        `;
  }

  /**
   * Metode que permet afegir un camp de data per introduir la data de modificacio de l'item
   */
  afegirDataModificacio() {
    document.getElementById("dadesaOmplir").innerHTML += `
            <label for="data_modificacio">Data modificacio:</label>
            <input type="date" id="data_modificacio" name="data_modificacio">
        `;
  }
}
