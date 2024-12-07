
class Taula extends ComponentHTML {
    constructor(capcaleres, dada) {
        let html = Taula.createTableHTML(capcaleres, dada);
        super(html);
        this.headers = capcaleres;
        this.data = dada;
    }

    // Mètode estàtic per crear l'HTML de la taula
    static createTableHTML(capcaleres, dada) {
        let taulaHTML = '<table><thead><tr>';

        // Afegir capçaleres
        capcaleres.forEach(capcalera => {
            taulaHTML += `<th>${capcalera}</th>`;
        });
        taulaHTML += '</tr></thead><tbody>';

        // Afegir dades
        dada.forEach(row => {
            taulaHTML += '<tr>';
            row.forEach(cell => {
                taulaHTML += `<td>${cell}</td>`;
            });
            taulaHTML += '</tr>';
        });

        taulaHTML += '</tbody></table>';
        return taulaHTML;
    }

    // Mètode per canviar les capçaleres
    posarCapcaleres(novesCapcaleres) {
        this.headers = novesCapcaleres;
        this.html = Taula.createTableHTML(this.headers, this.data);
    }

    // Mètode per canviar les dades
    posarDada(novaDada) {
        this.data = novaDada;
        this.html = Taula.createTableHTML(this.headers, this.data);
    }
}