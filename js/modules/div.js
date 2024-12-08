import { ComponentHTML } from "./ComponentHTML.js";
import { Titol } from "./titol.js";
import { Boto } from "./boto.js";

class DivComponent extends ComponentHTML {
    constructor(content = '', nomClass = '') {
        let divHtml = `<div class="${nomClass}">${content}</div>`;
        super(divHtml);
        this.Titol = new Titol();
        this.Boto = new Boto();
    }

    // Métode per establir el contingut de text del div
    afegirContingut(content, nomClass = '') {
        this.html = `<div class="${nomClass}">${content}</div>`;
    }

    // Métode per afegir un div intern
    afegirDivIntern(content = '', nomClassIntern = '') {
        // Tancar el div extern abans d'afegir un intern
        this.html = this.html.replace('</div>', ''); // Eliminar tancament temporal
        this.html += `<div class="${nomClassIntern}">${content}</div></div>`; // Afegir div intern i tancar div extern
    }

    // Métode per afegir un títol dintre del div intern
    afegirTitolADivIntern(contingut, tipus = '', nomClassIntern = '') {
        this.Titol.canviarTipus(tipus);
        // Actualitzar el contingut del títol
        this.Titol.canviarContingut(contingut);
        // Insertar el títol dintre del div intern
        this.html = this.html.replace(`<div class="${nomClassIntern}">`, `<div class="${nomClassIntern}">${this.Titol.html}`);
    }

    // Métode per afegir un botó dintre del div intern
    afegirBotoADivIntern(contingut, url, nomClassIntern = '') {
        this.Boto.canviarContingut(contingut);
        this.Boto.canviarUrl(url);
        // Inserir el botó dintre del div intern
        this.html = this.html.replace(`<div class="${nomClassIntern}">`, `<div class="${nomClassIntern}">${this.Boto.html}`);
    }
}

export { DivComponent };
