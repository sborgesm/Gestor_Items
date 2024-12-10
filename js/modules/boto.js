import { ComponentHTML } from "./ComponentHTML.js";
class Boto extends ComponentHTML {
  constructor(html, url) {
    super(html);
    this.url = url;
  }

  // Mètode render: retorna el botó HTML com a string, incloent l'event onclick per redirigir a una altra pàgina
  render() {
    return `<button onclick="window.location.href='${this.url}'">${this.html}</button>`;
  }
}

export { Boto };
