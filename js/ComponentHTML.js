class ComponentHTML {
    constructor() {}

    render() {
        return "";
    }

    update(element, contenido) {
        if (element.innerHTML !== undefined) {
            element.innerHTML = contenido;
        }
    }

    append(element, contenido) {
        if (element.innerHTML !== undefined) {
            element.innerHTML += contenido;
        }
    }
}

/* export { ComponentHTML }; */