class Items {
    #nom;
    #descripció;
    #data_creació;
    #data_modificació;

    constructor(nom, descripció, data_creació, data_modificació) {
        this.nom = nom;
        this.descripció = descripció;
        this.data_creació = data_creació;
        this.data_modificació = data_modificació;
    }

    setNom(nom) {
        this.nom = nom;
    }

    getNom() {
        return this.nom;
    }

    setDescripció(descripció) {
        this.descripció = descripció;
    }

    getDescripció() {
        return this.descripció;
    }

    setDataCreació(data_creació) {
        this.data_creació = data_creació;
    }

    getDataCreació() {
        return this.data_creació;
    }

    setDataModificació(data_modificació) {
        this.data_modificació = data_modificació;
    }

    getDataModificació() {
        return this.data_modificació;
    }       
}