class myNavegacion extends HTMLElement {
    constructor() {
        super()
        //this.innerHTML = `<h1>josg</h1>`
        this.nav = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">The new World</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#header">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#testimonial">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#info-one">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#contact">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`
    }
    connectedCallback() {//Se lanza cuando se conecta un componente

    }



    disconnectedCallback() {//SE lanza cuando se desconecta

    }
}
//lugar en donde se registran los elementos
window.customElements.define("my-nav", myNavegacion)