// Crear una instancia de Titol 
let titolEntrada = new Titol('h1');  
titolEntrada.canviarContingut("Taula d'items"); 

// Crear una instància de Boto 
let botoAfegir = new Boto("Afegir Item", 'boton', function() { window.location.href = '../views/creacioItem.html'; });
let botoCerca = new Boto("Cerca");

// Crear una instància de Input 
let inputCerca = new Input('text', '', 'Introdueix el nom d\'item');

//Crear una instància de Taula
let capcaleres = ['Nom item', 'Data creacio', 'Data modificacio', 'Imatge relacionada', 'Esborrar item'];
let taula = new Taula(capcaleres, []);

// Esperar que el DOM estigui llest i renderitzar
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("dades");
    contenedor.innerHTML = botoAfegir.render();
    contenedor.innerHTML += inputCerca.render();
    contenedor.innerHTML += botoCerca.render();
    contenedor.innerHTML += titolEntrada.render();
    contenedor.innerHTML += taula.render();
});
