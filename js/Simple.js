class Simple extends Items {
    constructor(nom, descripcio, data_creacio=new Date(), data_modificacio) {
        super(nom, descripcio, data_creacio, data_modificacio);
        this.data_creacio = this.formatejarData(this.data_creacio);
    }

    formatejarData(date) { 
        let dia = String(date.getDate()).padStart(2, '0'); 
        let mes = String(date.getMonth() + 1).padStart(2, '0'); // Els mesos comencen per 0
        let any = date.getFullYear(); 
        return `${dia}-${mes}-${any}`; // Format DD-MM-YYYY 
    }
    
    afegirNom() {
        document.getElementById('dadesaOmplir').innerHTML = `
            <label for="nom">Nom:</label>
            <input type="text" id="nom" name="nom"><br>
        `;
    }

    afegirDescripcio() {
        document.getElementById('dadesaOmplir').innerHTML += `
            <label for="descripcio">Descripcio:</label>
            <input type="text" id="descripcio" name="descripcio">
        `;
    }

    afegirDataModificacio() {
        document.getElementById('dadesaOmplir').innerHTML += `
            <label for="data_modificacio">Data modificacio:</label>
            <input type="date" id="data_modificacio" name="data_modificacio">
        `;
    }
}
