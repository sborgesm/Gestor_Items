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
    // Obtenir dades del LocalStorage
    const dades = JSON.parse(localStorage.getItem("items")) || [];
    console.log("Dades actuals al LocalStorage:", dades);

    // Buscar l'ítem a actualitzar
    const index = dades.findIndex((item) => item.nom === nom);
    console.log("Índex trobat:", index);

    if (index !== -1) {
        // Actualitzar les dades de l'ítem
        dades[index] = { ...dades[index], ...novesDades };
        console.log("Noves dades de l'ítem:", dades[index]);

        // Guardar les dades actualitzades al LocalStorage
        localStorage.setItem("items", JSON.stringify(dades));
        alert(`Item "${nom}" actualitzat correctament!`);
    } else {
        alert(`No s'ha trobat cap ítem amb el nom "${nom}".`);
    }
  }

}

export { GuardarDades };
