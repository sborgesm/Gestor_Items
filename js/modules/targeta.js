import { ComponentHTML } from "./ComponentHTML.js";
import { DivComponent } from "./div.js";
import { Boto } from "./boto.js";
import { Titol } from "./Titol.js";

class Targeta extends ComponentHTML {
    constructor(classFill = '', nomBoto = '', nomTitol = '') {
        super('');
        this.div = new DivComponent('', classFill);
        this.boto = new Boto(nomBoto);
        this.titol = new Titol(nomTitol, 'h2');
    }    
    render() {
        this.div.afegirFill(this.titol);
        this.div.afegirFill(this.boto);
        return this.div.render();
    }
}

export { Targeta };
