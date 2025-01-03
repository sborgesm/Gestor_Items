import { ComponentHTML } from "./ComponentHTML.js";

class Boto extends ComponentHTML {
  constructor(html, id) {
    super(html); // Cridem al constructor de la classe pare
    this.id = id; // Afegim un atribut id per identificar el botó
  }

  // Mètode render: retorna el botó HTML com a string
  render() {
    return `<button id="${this.id}">${this.html}</button>`;
  }

  // Mètode afegir event listener al botó
  addEventListener(event, callback) {// event: tipus d'event, callback: funció a cridar
    let boto = document.getElementById(this.id);// Obtenim el botó pel seu id
    boto.addEventListener(event, callback);// Afegim l'event listener al botó
  }
}

export { Boto };

