/**
 * Classe que s'encarrega de gestionar la persistencia de les dades en el
 * LocalStorage del navegador.
 */
class LocalStorage {
  /**
   * Constructor de la classe.
   * Inicialitza un array buit per a guardar els items.
   */
  constructor() {
    this.items = [];
  }

  /**
   * Afegeix un item a l'array d'items i despres el guarda en el
   * LocalStorage del navegador.
   * @param {Object} item - item que es vol afegir.
   */
  afegirItem(item) {
    this.items.push(item);
    localStorage.setItem("items", JSON.stringify(this.items));
  }

  /**
   * Mostra els items guardats en el LocalStorage del navegador.
   */
  mostrarItems() {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      this.items = items;
    }
    return this.items;
  }
}
