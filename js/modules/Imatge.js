import { ComponentHTML } from './ComponentHTML.js';

class Imatge extends ComponentHTML {
    constructor(src, alt = '', width = 'auto', height = 'auto', id = '') {// Constructor amb els atributs de la imatge
        let html = `<img id="${id}" src="${src}" alt="${alt}" width="${width}" height="${height}">`;
        // Generem l'HTML de la imatge amb els atributs passats
        super(html);// Cridem al constructor de la classe pare
        this.id = id;// Atribut que conté l'id de la imatge
        this.src = src;// Atribut que conté la ruta de la imatge
        this.alt = alt;// Atribut que conté el text alternatiu de la imatge
        this.width = width;// Atribut que conté l'amplada de la imatge
        this.height = height;// Atribut que conté l'alçada de la imatge
    }

}

export { Imatge };