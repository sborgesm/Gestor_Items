import { ComponentHTML } from "./ComponentHTML.js";
import { Imatge } from "./Imatge.js";
/**
 * Classe que representa una taula amb dades.
 * La taula esta composta per capcaleres i dades.
 * El constructor rep les capcaleres i les dades com a par metres i
 * es crea l'HTML de la taula.
 * @class
 * @extends ComponentHTML
 */
class Taula extends ComponentHTML {
  /**
   * El constructor rep les capcaleres i les dades com a par metres i
   * es crea l'HTML de la taula.
   * La taula es pot actualitzar amb noves dades amb el metode update.
   */
  constructor(capcaleres, dada) {
    let html = Taula.crearTaulaHTML(capcaleres, dada); // Crear l'HTML de la taula
    super(html); // Cridem al constructor de la classe pare
    this.capcaleres = capcaleres; // Atribut per guardar les capcaleres
    this.dada = dada; // Atribut per guardar les dades
  }

  /**
   * Mètode estàtic per crear l'HTML de la taula.
   * Rep les capcaleres i les dades com a parametres i
   * es crea l'HTML de la taula.
   * @param {Array} capcaleres - les capcaleres de la taula
   * @param {Array} dada - les dades de la taula
   * @returns {String} l'HTML de la taula
   */
  static crearTaulaHTML(capcaleres, dada) {
    let taulaHTML = "<table><thead><tr>"; // Inicialitzar l'HTML de la taula

    // Afegir capçaleres
    capcaleres.forEach((capcalera) => {
      // Recorrer les capcaleres
      taulaHTML += `<th>${capcalera}</th>`; // Afegim cada capçalera a l'HTML
    });
    taulaHTML += "</tr></thead><tbody>"; // Tancar la fila de capçaleres i obrir el cos de la taula

    // Afegir dades
    dada.forEach((fila) => {
      // Recorrem les dades
      taulaHTML += "<tr>"; // Obrim una fila
      fila.forEach((cell) => {
        // Recorrem les cel·les de la fila
        taulaHTML += `<td>${cell}</td>`; // Afegim cada cel·la a l'HTML
      });
      taulaHTML += "</tr>"; // Tanquem la fila
    });

    taulaHTML += "</tbody></table>"; // Afegim el tanquament del cos de la taula
    return taulaHTML; // Retornem l'HTML de la taula
  }

  //Metode per carregar les dades de l'objecte localStorage i mostrar-les a la taula.

  carregarDades(dadesFiltrades = null) {
    // Carregar les dades amb les dades filtrades per defecte a null
    let dades =
      dadesFiltrades || JSON.parse(localStorage.getItem("items") || "[]");
    // Obtenir les dades filtrades o de l'objecte localStorage o un array buit si no hi ha dades
    let imatgeEliminar = new Imatge(
      "./img/brossa.png",
      " ",
      "50",
      "50",
      "boto-eliminar"
    );
    // Crear una instància de la classe Imatge amb la imatge de la paperera
    if (dades.length > 10) {
      // Si hi ha més de 10 items a les dades
      dades = dades.slice(0, 10);
      // Mostrem només els 10 primers items amb el mètode slice on el primer paràmetre és l'índex inicial i el segon l'índex final
    }

    // Cream les files amb les dades
    let files = dades.map((dada) => [
      // Recorrem les dades i retornem un array amb les dades de cada item
      dada.nom,
      dada.descripcio,
      dada.dataCreacio || "-",
      dada.dataModificacio || "-",
      dada.imatge || "-",
      imatgeEliminar.html,
    ]);

    this.posarDada(files); // Actualitzar la taula amb les dades (ordenades)
  }

  /**
   * Metode per eliminar un item de la taula.
   * @param {string} nom - l'id de l'item a eliminar
   */
  eliminarItem(nom) {
    let dades = JSON.parse(localStorage.getItem("items") || "[]");
    dades = dades.filter((item) => item.nom !== nom); // Filtrar els items per eliminar l'item amb l'id donat

    localStorage.setItem("items", JSON.stringify(dades)); // Actualitzar l'objecte localStorage

    this.carregarDades(); // Actualitzar la taula
    this.update(document.getElementById("dades")); // Actualiza el DOM
  }

  /**
   * Mètode per canviar les capcaleres.
   * Rep les noves capcaleres com a parametre i
   * es crea l'HTML de la taula amb les noves capcaleres.
   * @param {Array} novesCapcaleres - les noves capcaleres de la taula
   */
  posarCapcaleres(novesCapcaleres) {
    this.capcaleres = novesCapcaleres; // Actualitzar les capçaleres
    this.html = Taula.crearTaulaHTML(this.capcaleres, this.dada);
    // Actualitzar l'HTML de la taula amb les noves capçaleres
  }

  /**
   * Mètode per canviar les dades.
   * Rep les noves dades com a parametre i
   * es crea l'HTML de la taula amb les noves dades.
   * @param {Array} novaDada - les noves dades de la taula
   */
  posarDada(novaDada) {
    this.dada = novaDada;
    this.html = Taula.crearTaulaHTML(this.capcaleres, this.dada);
  }
}

export { Taula };
