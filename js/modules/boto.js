import { ComponentHTML } from "./ComponentHTML.js";

class Boto extends ComponentHTML {
  constructor(html, id) {
    super(html);
    this.id = id; // Add an id property
  }

  // Mètode render: retorna el botó HTML com a string, incloent l'event onclick per redirigir a una altra pàgina
  render() {
    return `<button id="${this.id}">${this.html}</button>`; // Include id in button element
  }

  addEventListener(event, callback) {
    document.addEventListener("DOMContentLoaded", () => {
      let boto = document.getElementById(this.id); // Use getElementById with the specific id
      boto.addEventListener(event, callback);
    });
  }
}

export { Boto };

