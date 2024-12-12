import { ComponentHTML } from "./ComponentHTML.js";
import { DivComponent } from "./div.js";
import { Boto } from "./boto.js";
import { Titol } from "./Titol.js";

class Targeta extends ComponentHTML {
  constructor(classFill = "", nomBoto = "", nomTitol = "", element = null) {
    super("");
    this.div = new DivComponent("", classFill);
    this.boto = new Boto(nomBoto);
    this.titol = new Titol(nomTitol, "h2");
    this.element = element;
  }

  render() {
    const elementHTML = this.element ? this.element.render() : "";
    return `
      <div class="${this.div.classNom}">
        ${this.titol.render()}
        ${elementHTML}
        ${this.boto.render()}
      </div>`;
  }
}

export { Targeta };
