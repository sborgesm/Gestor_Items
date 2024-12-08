import { ComponentHTML } from "./ComponentHTML.js";
// Definició de la classe Input 
class Input extends ComponentHTML { 
    constructor(tipus = 'text', valor = '', placeholder = '') { 
        super(); 
        this.tipus = tipus; 
        this.valor = valor; 
        this.placeholder = placeholder; 
        this.html = `<input type="${tipus}" value="${valor}" placeholder="${placeholder}">`; 
    } 
    
    // Mètode per canviar el tipus de l'input 
    canviarTipus(nouTipus) { 
        this.tipus = nouTipus; 
        this.html = `<input type="${this.tipus}" value="${this.valor}" placeholder="${this.placeholder}">`; 
    }
    // Mètode per canviar el valor de l'input 
    canviarValor(nouValor) { 
        this.valor = nouValor; 
        this.html = `<input type="${this.tipus}" value="${this.valor}" placeholder="${this.placeholder}">`; 
    } 
    
    // Mètode per canviar el placeholder de l'input 
    canviarPlaceholder(nouPlaceholder) { 
        this.placeholder = nouPlaceholder; 
        this.html = `<input type="${this.tipus}" value="${this.valor}" placeholder="${this.placeholder}">`;
        }
    }

    export { Input };