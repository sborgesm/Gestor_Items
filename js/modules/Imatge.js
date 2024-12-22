import { ComponentHTML } from './ComponentHTML.js';

class Imatge extends ComponentHTML {
    constructor(src, alt = '', width = 'auto', height = 'auto') {
        let html = `<img src="${src}" alt="${alt}" width="${width}" height="${height}">`;
        super(html);
        this.src = src;
        this.alt = alt;
        this.width = width;
        this.height = height;
    }

    // Mètode per canviar l'atribut src de la imatge
    canviarRecurs(nouRecurs) {
        this.src = nouRecurs;
        this.html = `<img src="${this.src}" alt="${this.alt}" width="${this.width}" height="${this.height}">`;
    }

    // Mètode per canviar l'atribut alt de la imatge
    canviarAlt(nouAlt) {
        this.alt = nouAlt;
        this.html = `<img src="${this.src}" alt="${this.alt}" width="${this.width}" height="${this.height}">`;
    }

    // Mètode per canviar l'amplada de la imatge
    canviarAmplada(novaAmplada) {
        this.width = novaAmplada;
        this.html = `<img src="${this.src}" alt="${this.alt}" width="${this.width}" height="${this.height}">`;
    }

    // Mètode per canviar l'alçada de la imatge
    canviarAlcada(novaAlcada) {
        this.height = novaAlcada;
        this.html = `<img src="${this.src}" alt="${this.alt}" width="${this.width}" height="${this.height}">`;
    }
}

export { Imatge };