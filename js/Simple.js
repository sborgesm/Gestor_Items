class Simple extends Items {
    constructor(nom, descripció, data_creació, data_modificació) {
        super(nom, descripció, data_creació, data_modificació);
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

    afegirDataCreacio() {
        document.getElementById('dadesaOmplir').innerHTML += `
            <label for="data_creacio">Data creacio:</label>
            <input type="date" id="data_creacio" name="data_creacio">
        `;
    }

    afegirDataModificacio() {
        document.getElementById('dadesaOmplir').innerHTML += `
            <label for="data_modificacio">Data modificacio:</label>
            <input type="date" id="data_modificacio" name="data_modificacio">
        `;
    }
}
