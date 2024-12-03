class ComponentHTML {
  constructor() {
    this.html = "";
  }

  render() {
    return this.html;
  }

  update(element, contenido) {
    if (element.innerHTML !== undefined) {
      element.innerHTML = contenido;
    }
  }

  append(element, contenido) {
    if (element.innerHTML !== undefined) {
      element.innerHTML += contenido;
    }
  }
}

/* export { ComponentHTML }; */
