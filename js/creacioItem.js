document.getElementById('eleccio').addEventListener('click', function () { 
    // Obtenir l'opció seleccionada
    let elementSeleccionat = document.querySelector('input[name="eleccio"]:checked'); 
    // Obtenir el text associat
    let nomdeSeleccio = document.querySelector(`label[for="${elementSeleccionat.id}"]`);
    
    if (nomdeSeleccio.innerText == 'Simple') {
        let simple = new Simple();
        simple.afegirNom();
        simple.afegirDescripcio();
    }else{
        
    }

});
