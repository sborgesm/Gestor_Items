import { ComponentHTML } from "./ComponentHTML.js";

class Boto extends ComponentHTML {
  constructor(html, id) {
    super(html);
    this.id = id; // Add an id property
  }

  // Mètode render: retorna el botó HTML com a string, incloent l'event onclick per redirigir a una altra pàgina
  render() {
    return `<button id="${this.id}">${this.html}</button>`;
  }

  addEventListener(event, callback) {
    let boto = document.getElementById(this.id);
    boto.addEventListener(event, callback);
  }
}

export { Boto };

