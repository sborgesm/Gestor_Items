import { ComponentHTML } from "./ComponentHTML.js";
import { Titol } from "./titol.js";
class DivComponent extends ComponentHTML {
    constructor(content = '', nomClass = '') {
        let divHtml = `<div class="${nomClass}">${content}</div>`;
        super(divHtml);
    }

    // Método para establecer el contenido de texto del div
    afegirContingut(content, nomClass = '') {
        this.html = `<div class="${nomClass}">${content}</div>`;
    }

    // Método para añadir un div interno
    afegirDivIntern(content = '', nomClassIntern = '') {
        this.html = this.html.replace('</div>', `<div class="${nomClassIntern}">${content}</div></div>`);
    }

    // Método para establecer el contenido de texto de un div interno
    afegirContingutIntern(content, nomClassIntern = '') {
        this.html = this.html.replace(`</div>`, `<div class="${nomClassIntern}">${content}</div></div>`);
    }
}

export { DivComponent };
