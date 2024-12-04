class ComponentHTML {
  constructor() {
    this.html = "";
  }
  /**
   * Funcio per renderitzar el html
   * @returns {string} Retorna el html
   */
  render() {
    return this.html;
  }

  /**
   * Funcio per assignar l'element html
   * @param {string} element
   */
  update(element) {
    element.innerHTML = this.render();
  }

  /**
   * Funcio per afegir l'element html
   * @param {string} element
   */
  append(element) {
    element.innerHTML += this.render();
  }
}
