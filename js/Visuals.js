class Visuals extends Items {
    #url_imatge;

    constructor(nom, descripció, data_creació, data_modificació, url_imatge) {
        super(nom, descripció, data_creació, data_modificació);
        this.url_imatge = url_imatge;
    }

    setUrlImatge(url_imatge) {
        this.url_imatge = url_imatge;
    }

    getUrlImatge() {
        return this.url_imatge;
    }
}