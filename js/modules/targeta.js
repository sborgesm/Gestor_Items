import { ComponentHTML } from "./ComponentHTML.js";
import { DivComponent } from "./div.js";
import { Boto } from "./boto.js";

class Targeta extends ComponentHTML {
    constructor(classFill = '') {
        super('');
        this.div = new DivComponent('', classFill);
        this.boto = new Boto('', '');
    }

    render() {
        this.div.afegirFill(new DivComponent('', ''));
        this.div.afegirFill(new Boto('', ''));
        return this.div.render();
    }
}

export { Targeta };
