class ComponentHTML {
  constructor(html) {
      this.html = html;
  }

  // Mètode render: retorna l'element HTML com a string
  render() {
      return this.html;
  }

  // Mètode update: assigna l'innerHTML de l'element donat a l'HTML generat
  update(element) {
      element.innerHTML = this.render();
  }

  // Mètode append: afegeix l'HTML generat a l'innerHTML de l'element donat
  append(element) {
      element.innerHTML += this.render();
  }
}

export { ComponentHTML };
