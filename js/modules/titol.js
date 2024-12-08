import { ComponentHTML } from './ComponentHTML.js';
class Titol extends ComponentHTML {
    constructor(contingut, tipus = 'h1') {
        // Crea l'element HTML del títol 
        let html = `<${tipus}>${contingut}</${tipus}>`;
        super(html); this.tipus = tipus; this.contingut = contingut;
    } 
    // Mètode per canviar el contingut del títol
    canviarContingut(noucontingut) {
        this.contingut = noucontingut;
        this.html = `<${this.tipus}>${this.contingut}</${this.tipus}>`;
    }

    // Mètode per canviar el tipus de títol 
    canviarTipus(nouTipus) {
        this.tipus = nouTipus;
        this.html = `<${this.tipus}>${this.contingut}</${this.tipus}>`;
    }
}

export { Titol };