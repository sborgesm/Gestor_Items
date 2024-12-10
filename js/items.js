/**
 * Classe Items que representa un item
 * @class
 */
class Items {
  #nom;
  #descripció;
  #data_creació;
  #data_modificació;

  /**
   * Constructor de la classe
   * @param {string} nom - Nom de l'item
   * @param {string} descripció - Descripció de l'item
   * @param {Date} data_creació - Data de creacio  de l'item
   * @param {Date} data_modificació - Data de modificacio  de l'item
   */
  constructor(nom, descripció, data_creació, data_modificació) {
    this.nom = nom;
    this.descripció = descripció;
    this.data_creació = data_creació;
    this.data_modificació = data_modificació;
  }

  /**
   * Metode que permet canviar el nom de l'item
   * @param {string} nom - Nou nom de l'item
   */
  setNom(nom) {
    this.nom = nom;
  }

  /**
   * Metode que permet obtenir el nom de l'item
   * @returns {string} Nom de l'item
   */
  getNom() {
    return this.nom;
  }

  /**
   * Metode que permet canviar la descripcio de l'item
   * @param {string} descripció - Nova descripcio de l'item
   */
  setDescripció(descripció) {
    this.descripció = descripció;
  }

  /**
   * Metode que permet obtenir la descripcio de l'item
   * @returns {string} Descripcio de l'item
   */
  getDescripció() {
    return this.descripció;
  }

  /**
   * Metode que permet canviar la data de creacio de l'item
   * @param {Date} data_creació - Nova data de creacio de l'item
   */
  setDataCreació(data_creació) {
    this.data_creació = data_creació;
  }

  /**
   * Metode que permet obtenir la data de creacio de l'item
   * @returns {Date} Data de creacio de l'item
   */
  getDataCreació() {
    return this.data_creació;
  }

  /**
   * Metode que permet canviar la data de modificacio de l'item
   * @param {Date} data_modificació - Nova data de modificacio de l'item
   */
  setDataModificació(data_modificació) {
    this.data_modificació = data_modificació;
  }

  /**
   * Metode que permet obtenir la data de modificacio de l'item
   * @returns {Date} Data de modificacio de l'item
   */
  getDataModificació() {
    return this.data_modificació;
  }
}
