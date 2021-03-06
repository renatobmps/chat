class SemDpsController{
    
    constructor(){
        
        let $ = document.querySelector.bind(document)

        this._menuView = new MenuPaginas($(".menu-view"), "ativo-sem-dps", "Sem DPS")
        this._menuView.update()
        
        this._inputLogin = $("#login");
        this._inputCaso = $("#caso");
        this._inputData = $("#data")
        this._inputArtigo = $("#artigo")
        this._inputMotivo = $("#motivo")
        this._inputProblema = $("#problema")
        
        this._listaSemDps = new ListaSemDps()
        
        this._semDpsView = new SemDpsView($("#semDpsView"))
        this._semDpsView.update(this._listaSemDps)
        
        this._limpaFormulario()
        
        ConnectionFactory.getConnection()
        .then(connection => new SemDpsDao(connection))
        .then(dao => dao.listaTodos())
        .then(registros => {
            registros.forEach(r => this._listaSemDps.adiciona(r))
            this._semDpsView.update(this._listaSemDps)
        })
        .catch(erro => console.log(erro))
    }
    
    adiciona(event){
        event.preventDefault()
        
        ConnectionFactory.getConnection().then(connection => {
            let semDps = this._criaRegistro()
            
            new SemDpsDao(connection).adiciona(semDps).then(() => {

                this._listaSemDps.adiciona(semDps)
                console.log("Adicionado ao banco")
        
                this._semDpsView.update(this._listaSemDps)
                
                localStorage.setItem('login', this._inputLogin.value)
                localStorage.setItem('caso', this._inputCaso.value)
                localStorage.setItem('hoje', this._inputData.value)
                localStorage.setItem('problema', this._inputProblema.value)
        
                this._limpaFormulario()
            }).catch(erro => console.log(erro))
        })
    }
    limpa(){

        ConnectionFactory.getConnection().then(connection => {
            new SemDpsDao(connection).apagaTodos()
            .then(mensagem => {
                console.log(mensagem)
                this._listaSemDps.esvazia()        
                this._semDpsView.update(this._listaSemDps)
            })
            .catch(mensagem => console.log(mensagem))
        })
    }
    _criaRegistro(){
        
        return new SemDps(
            this._inputLogin.value,
            parseInt(this._inputCaso.value),
            DateHelper.textoParaData(this._inputData.value),
            this._inputArtigo.value,
            this._inputMotivo.value,
            this._inputProblema.value
        )
    }
    _limpaFormulario() {
        
        this._inputLogin.focus();
        this._inputLogin.value = localStorage.getItem('login')
        this._inputCaso.value = localStorage.getItem('caso')
        this._inputData.value = localStorage.getItem('hoje') //new Date();
        this._inputArtigo.value = '';
        this._inputMotivo.value = '';
        this._inputProblema.value = localStorage.getItem('problema');
    }
    _addLocalStorage(id, valor){
        
        localStorage.setItem(id, valor)
    }
    _removeLocalStorage(id){
        
        localStorage.removeItem(id)
    }
}