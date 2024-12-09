/**
 * Classe ComponentHTML que representa un component HTML
 * @class
 */
class ComponentHTML {
  /**
   * Constructor
   * @param {string} html - El contingut HTML del component
   */
  constructor(html) {
    this.html = html;
  }

  /**
   * Mètode render: retorna l'element HTML com a string
   * @return {string} l'element HTML com a string
   */
  render() {
    return this.html;
  }

  /**
   * Mètode update: assigna l'innerHTML de l'element donat a l'HTML generat
   * @param {HTMLElement} element - L'element HTML on es vol assignar el contingut
   */
  update(element) {
    element.innerHTML = this.render();
  }

  /**
   * Mètode append: afegeix l'HTML generat a l'innerHTML de l'element donat
   * @param {HTMLElement} element - L'element HTML on es vol afegir el contingut
   */
  append(element) {
    element.innerHTML += this.render();
  }
}

export { ComponentHTML };

