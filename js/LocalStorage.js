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
        localStorage.setItem('items', JSON.stringify(this.items));
    }

    /**
     * Carrega els items guardats en el LocalStorage del navegador i els
     * guarda en l'array d'items.
     */
    carregarItems() {
        const itemsJSON = localStorage.getItem('items');
        if (itemsJSON) {
            this.items = JSON.parse(itemsJSON);
        }
    }
}
