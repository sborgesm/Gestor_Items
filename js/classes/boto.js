
// Definició de la classe Botó 
class Boto extends ComponentHTML { 
    constructor(text, estil = '', onClickFunc=null) {
        super();
        this.text = text; this.estil = estil; 
        this.onClickFunc = onClickFunc; 
        this.html = `<button class="${estil}">${text}</button>`;
    }  

    // Mètode per canviar el text del botó 
    canviarText(nouText) { 
        this.text = nouText; 
        this.html = `<button class="${this.estil}">${this.text}</button>`; 
    } 
    // Mètode per canviar l'estil del botó 
    canviarEstil(nouEstil) { 
        this.estil = nouEstil; 
        this.html = `<button class="${this.estil}">${this.text}</button>`; 
    }
    
    // Mètode per renderitzar el botó amb funcionalitat 
    render() { 
        const div = document.createElement('div'); 
        div.innerHTML = this.html; 
        const button = div.firstChild; 
        
        if (this.onClickFunc) { 
            button.addEventListener('click', this.onClickFunc); 
        } 
        return div.innerHTML; 
    }
}