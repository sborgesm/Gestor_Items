/**
 * Classe que representa un item visual
 * @class
 * @extends Items
 */
class Visuals extends Items {
  /**
   * Propietat que emmagatzema la URL de l'imatge
   * @private
   * @type {string}
   */
  #url_imatge;

  /**
   * Constructor de la classe
   * @param {string} nom - Nom de l'item
   * @param {string} descripció - Descripció de l'item
   * @param {Date} data_creació - Data de creació de l'item
   * @param {Date} data_modificació - Data de modificació de l'item
   * @param {string} url_imatge - URL de l'imatge
   */
  constructor(nom, descripció, data_creació, data_modificació, url_imatge) {
    super(nom, descripció, data_creació, data_modificació);
    this.url_imatge = url_imatge;
  }

  /**
   * Metode que permet canviar la URL de l'imatge
   * @param {string} url_imatge - Nova URL de l'imatge
   */
  setUrlImatge(url_imatge) {
    this.url_imatge = url_imatge;
  }

  /**
   * Metode que permet obtenir la URL de l'imatge
   * @returns {string} URL de l'imatge
   */
  getUrlImatge() {
    return this.url_imatge;
  }
}
