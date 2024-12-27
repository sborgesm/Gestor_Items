import { Imatge } from "./modules/Imatge.js";
class GuardarDades {
  /**
   * Constructor de la classe.
   * Inicialitza un array buit per a guardar els items.
   */
  constructor() {
    this.items = JSON.parse(localStorage.getItem('items')) || [];
  }

  formatejarData(data) {
    let dia = data.getDate();
    let mes = data.getMonth() + 1; // Els mesos van de 0 a 11
    let any = data.getFullYear();
    return `${dia}/${mes}/${any}`; // Formata la data
  }

  guardarItem(nom, descripcio, url) {
    const dataActual = new Date();
    const item = {
      nom,
      descripcio,
      dataCreacio: this.formatejarData(dataActual),
      dataModificacio: this.formatejarData(dataActual),
      imatge: url
    };

    this.afegirItem(item);
  }

  afegirItem(item) {
    this.items.push(item);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  eliminarItem(nom) {
    this.items = this.items.filter(item => item.nom !== nom);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  modificarItem(nom, novesDades) {
    const dades = JSON.parse(localStorage.getItem("items")) || [];
    const index = dades.findIndex((item) => item.nom === nom);

    if (dades.dataCreacio != null) {
      dades.dataCreacio = dades.dataCreacio;
    }

    if (index !== -1) {
      // Actualitza l'ítem
      dades[index] = { ...dades[index], ...novesDades };
      localStorage.setItem("items", JSON.stringify(dades));
    }
  }

}

export { GuardarDades };
