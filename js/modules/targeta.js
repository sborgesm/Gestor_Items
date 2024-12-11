import { ComponentHTML } from "./ComponentHTML.js";
import { DivComponent } from "./div.js";
import { Boto } from "./boto.js";
import { Titol } from "./Titol.js";
import { SelectComponent } from "./select.js";

class Targeta extends ComponentHTML {
  constructor(classFill = "", nomBoto = "", nomTitol = "", element = "") {
    super("");
    this.div = new DivComponent("", classFill);
    this.boto = new Boto(nomBoto);
    this.titol = new Titol(nomTitol, "h2");

    if (element === "select") {
      this.element = new SelectComponent("Seleciona una opcio", "select1", "select1");
      this.element.afegirFill("Simple", "Visual");
    } else if (element === "titol") {
      this.element = new Titol("");
    } else {
      this.element = null;
    }
  }
  render() {
    this.div.afegirFill(this.titol);

    if (this.element) {
      this.div.afegirFill(this.element);
    }
    this.div.afegirFill(this.boto);
    return this.div.render();
  }

  afegirElement() {}
}

export { Targeta };
