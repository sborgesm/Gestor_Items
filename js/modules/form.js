
import { ComponentHTML } from './ComponentHTML.js';

class FormComponent extends ComponentHTML {
  constructor(action = "#", method = "GET") {
    // Crida al constructor pare amb l'HTML inicial d'un formulari buit
    super(`<form action="${action}" method="${method}"></form>`);
    this.camps = []; // Array per guardar els camps del formulari
  }

  // Afegeix un nou camp al formulari
  afegirCamp(type, name, placeholder = "", value = "", options = {}) {
    let campHTML = '';
    if (type === 'select') {
      // Generar select amb opcions
      campHTML = `<select name="${name}">`;
      for (let option of options) {
        campHTML += `<option value="${option.value}" ${
          option.selected ? "selected" : ""
        }>${option.label}</option>`;
      }
      campHTML += `</select>`;
    } else {
      // Generar altres tipus d'inputs
      campHTML = `<input type="${type}" name="${name}" placeholder="${placeholder}" value="${value}" />`;
    }
    this.camps.push(campHTML); // Afegir el camp a l'array de camps
    this.updateHTML(); // Actualitzar l'HTML del formulari
  }

  // Afegeix un botó al formulari
  afegirBoto(label, type = "submit") {
    let botoHTML = `<button type="${type}">${label}</button>`;
    this.camps.push(botoHTML);
    this.updateHTML(); // Actualitzar l'HTML del formulari
  }

  // Actualitzar l'HTML del formulari amb tots els camps
  updateHTML() {
    this.html = `<form action="${this.getAction()}" method="${this.getMethod()}">
        ${this.camps.join("\n")}
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
