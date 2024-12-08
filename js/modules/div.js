import { ComponentHTML } from './ComponentHTML.js';
import { Titol } from './titol.js';
import { FormComponent } from './form.js';

class DivComponent extends ComponentHTML {
    constructor(html, className = '') {
        super(html);
        this.className = className;
        this.children = []; // Almacena los divs hijos y otros componentes
    }

    // Mètode render: retorna l'element HTML de tipus div com a string
    render() {
        const childrenHTML = this.children.map(child => child.render()).join('');
        return `<div class="${this.className}">${this.html}${childrenHTML}</div>`;
    }

    // Mètode update: assigna l'innerHTML de l'element donat a l'HTML generat
    update(element) {
        element.innerHTML = this.render();
    }

    // Mètode append: afegeix l'HTML generat a l'innerHTML de l'element donat
    append(element) {
        element.innerHTML += this.render();
    }

    // Mètode setClass: canvia la classe del div
    setClass(newClass) {
        this.className = newClass;
    }

    // Mètode addChild: afegeix un component fill
    addChild(childComponent) {
        this.children.push(childComponent);
    }

    // Mètode addTitol: afegeix un títol com a fill
    addTitol(contingut, tipus) {
        const titol = new Titol(contingut, tipus);
        this.addChild(titol);
    }

    // Mètode addForm: afegeix un formulari com a fill
    addForm(action, method) {
        const form = new FormComponent(action, method);
        this.addChild(form);
        return form; // Retorna el formulari per afegir camps i botons
    }
}

export { DivComponent };
