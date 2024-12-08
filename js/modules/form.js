
import { ComponentHTML } from './ComponentHTML.js';

class FormComponent extends ComponentHTML {
  constructor(action = "#", method = "GET") {
    // Crida al constructor pare amb l'HTML inicial d'un formulari buit
    super(`<form action="${action}" method="${method}"></form>`);
    this.fields = []; // Array per guardar els camps del formulari
  }

  // Afegeix un nou camp al formulari
  addField(type, name, placeholder = "", value = "", options = {}) {
    let fieldHTML = '';
    if (type === 'select') {
      // Generar select amb opcions
      fieldHTML = `<select name="${name}">`;
      for (const option of options) {
        fieldHTML += `<option value="${option.value}" ${
          option.selected ? "selected" : ""
        }>${option.label}</option>`;
      }
      fieldHTML += `</select>`;
    } else {
      // Generar altres tipus d'inputs
      fieldHTML = `<input type="${type}" name="${name}" placeholder="${placeholder}" value="${value}" />`;
    }
    this.fields.push(fieldHTML); // Afegir el camp a l'array de camps
    this.updateHTML(); // Actualitzar l'HTML del formulari
  }

  // Afegeix un botó al formulari
  addButton(label, type = "submit") {
    const buttonHTML = `<button type="${type}">${label}</button>`;
    this.fields.push(buttonHTML);
    this.updateHTML(); // Actualitzar l'HTML del formulari
  }

  // Actualitzar l'HTML del formulari amb tots els camps
  updateHTML() {
    this.html = `<form action="${this.getAction()}" method="${this.getMethod()}">
        ${this.fields.join("\n")}
    </form>`;
  }

  // Establir acció del formulari
  setAction(action) {
    this.html = this.html.replace(/action="[^"]*"/, `action="${action}"`);
  }

  getAction() {
    const match = this.html.match(/action="([^"]*)"/);
    return match ? match[1] : "#";
  }

  // Establir mètode del formulari
  setMethod(method) {
    this.html = this.html.replace(/method="[^"]*"/, `method="${method}"`);
  }

  getMethod() {
    const match = this.html.match(/method="([^"]*)"/);
    return match ? match[1] : "GET";
  }

  // Assignar una funció per gestionar l'esdeveniment de submissió
  onSubmit(handler) {
    document.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      handler(event);
    });
  }
}

export { FormComponent };
