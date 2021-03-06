class MenuPaginas extends View {

    constructor(elemento, id, titulo){

        super(elemento)
        this._id = id;
        this._titulo = titulo

        this.nomePagina = "Nananico"

        setTimeout(() => {
            this._ativo(this._id)
        },100)
    }

    template(model){

        return `
        <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="index.html">
                <p style="border-radius: 50px; background-color: red; color: white; width: 1.5em; text-align: center; margin: 0;">${this.nomePagina.substr(0,1)}</p>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0 nav-menu">
                    <li class="nav-item ativo-chat"> <!--active-->
                        <a class="nav-link disabled" tabindex="-1" aria-disabled="true" href="chat.html">Chat</a>
                    </li>
                    <li class="nav-item ativo-good-lines"> <!--active-->
                        <a class="nav-link disabled" tabindex="-1" aria-disabled="true" href="good-lines.html">5 Good Lines</a>
                    </li>
                    <li class="nav-item ativo-escalacao"> <!--active-->
                        <a class="nav-link" tabindex="-1" aria-disabled="true" href="escalacao.html">Escalação</a>
                    </li>
                    <li class="nav-item ativo-sem-dps"> <!--active-->
                        <a class="nav-link" tabindex="-1" aria-disabled="true" href="sem-dps.html">Sem DPS</a>
                    </li>
                    <li class="nav-item ativo-bateria"> <!--active-->
                        <a class="nav-link" tabindex="-1" aria-disabled="true" href="bateria.html">Bateria</a>
                    </li>
                </ul>
            </div>
        </nav>
        `
    }

    _ativo(classe){

        if (this._id != null || this._titulo != null) {
            
            document.querySelector("."+this._id+"").classList.add("active")
            document.querySelector("title").innerText = `${this.nomePagina} | ${this._titulo}`
        }else{
            document.querySelector("title").innerText = `${this.nomePagina}`
        }
    }
}