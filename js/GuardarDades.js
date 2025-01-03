class GuardarDades {
  /**
   * Constructor de la classe.
   * Inicialitza un array buit per a guardar els items.
   */
  constructor() {
    this.items = JSON.parse(localStorage.getItem('items')) || [];
    // Obtenim els items del LocalStorage
  }

  /**
   * Formateja la data en format dd/mm/yyyy.
   * @param {Date} data Instància de la classe Date.
   * @returns {string} La data formatejada en format dd/mm/yyyy.
   */
  formatejarData(data) {
    let dia = data.getDate();
    let mes = data.getMonth() + 1; // Els mesos van de 0 a 11
    let any = data.getFullYear();
    return `${dia}/${mes}/${any}`; 
  }

  /**
   * Guarda un nou item a la llista.
   * @param {string} nom String amb el nom de l'item.
   * @param {string} descripcio String amb la descripció de l'item.
   * @param {string} url String amb la URL de la imatge de l'item.
   */
  guardarItem(nom, descripcio, url) {
    let dataActual = new Date(); // Obtenim la data actual
    let item = {// Creem un objecte amb les dades de l'item
      nom,
      descripcio,
      dataCreacio: this.formatejarData(dataActual),
      dataModificacio: this.formatejarData(dataActual),
      // Afegim la data de creació i de modificació en format dd/mm/yyyy
      imatge: url
    };

    this.afegirItem(item);
  }

  /**
   * Afegeix un item a la llista d'items.
   * @param {Object} item Objecte amb les dades de l'item.
   */
  afegirItem(item) {
    this.items.push(item); // Afegim l'item a la llista amb el mètode push
    localStorage.setItem('items', JSON.stringify(this.items));// Guardem la llista d'items al LocalStorage
  };

  /**
   * Elimina un item de la llista d'items.
   * @param {string} nom String amb el nom de l'item a eliminar.
   */

  eliminarItem(nom) {
    this.items = this.items.filter(item => item.nom !== nom);
    // Filtrem els items per a eliminar l'ítem amb el nom passat per paràmetre
    localStorage.setItem('items', JSON.stringify(this.items));
    // Guardem la llista d'items al LocalStorage
  };

  /**
   * Modifica les dades d'un ítem de la llista.
   * @param {string} nom String amb el nom de l'ítem a modificar.
   * @param {Object} novesDades Objecte amb les noves dades de l'ítem.
   */

  modificarItem(nom, novesDades) {
    let dades = JSON.parse(localStorage.getItem("items")) || [];// Obtenim les dades del LocalStorage
    let index = dades.findIndex((item) => item.nom === nom);// Busquem l'ítem amb el nom passat per paràmetre

    if (index !== -1) {// Si l'ítem existeix
        dades[index] = { ...dades[index], ...novesDades };// Actualitzem les dades de l'ítem

        localStorage.setItem("items", JSON.stringify(dades));// Guardem les dades al LocalStorage
    } else {// Si no s'ha trobat cap ítem amb el nom passat per paràmetre
        alert(`No s'ha trobat cap ítem amb el nom "${nom}".`);// Mostrem un missatge d'error
    }
  }

}

export { GuardarDades };
