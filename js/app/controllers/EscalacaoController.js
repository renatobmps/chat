class EscalacaoController{
    
    constructor(){
        
        let $ = document.querySelector.bind(document)
        
        this._menuView = new MenuPaginas($(".menu-view"), "ativo-escalacao", "Escalação")
        this._menuView.update()
        
        //this.guidanceView = new GuidanceView($("#guidance"))
        //this.guidanceView.update()
        
        this.repeatDpsView = new RepeatDpsView($("#dps-repeat"))
        this.repeatDpsView.update()
        
        //this.exchangeView = new ExchangeView($("#exchange"))
        //this.exchangeView.update()
        
        //this.reembolsoView = new ReembolsoView($("#reembolso"))
        //this.repeatreembolsoViewDpsView.update()
        
        //this.officeView = new OfficeView($("#office"))
        //this.officeView.update()
        
        this.contaSenhaView = new ContraSenhaView($("#contra-senha"))
        this.contaSenhaView.update()

        this._inputContraLogin = $("#contra-login")
        this._inputContraBadge = $("#contra-badge")
        this._inputContraTag = $("#contra-tag")
        this._inputContraAccount = $("#contra-account")
        this._inputContraCliente = $("#contra-cliente")
        this._inputContraEmail = $("#contra-email")
        this._inputContraTelefone = $("#contra-telefone")
        this._inputContraTipo = $("#contra-tipo")
        this._inputContraCodigo = $("#contra-codigo")
        this._outputContraResultado = $("#contra-senha-resultado")

        this._limpaForm()
    }

    adicionaContraSenha(event){

        event.preventDefault()

        localStorage.setItem('login', this._inputContraLogin.value)
        localStorage.setItem('badge', this._inputContraBadge.value)
        localStorage.setItem('tag', this._inputContraTag.value)
        localStorage.setItem('cliente', this._inputContraCliente.value)
        localStorage.setItem('email', this._inputContraEmail.value)
        localStorage.setItem('telefone', this._inputContraTelefone.value)

        this._outputContraResultado.value = `Citrix: ${this._inputContraLogin.value}\nBadge: ${this._inputContraBadge.value}\nTipo de solicitacao: ${this._inputContraTipo.value}\nAccount TAG: ${this._inputContraAccount.value}\nNome do cliente: ${this._inputContraCliente.value}\nE-mail do cliente: ${this._inputContraEmail.value}\nTelefone do cliente: ${this._inputContraTelefone.value}\nTAG: ${this._inputContraTag.value}\nCodigo: ${this._inputContraCodigo.value}`

        this._outputContraResultado.select()
        document.execCommand('copy')

        this._limpaForm()
    }

    _limpaForm(){
        
        this._inputContraLogin.value = localStorage.getItem('login') || ''
        this._inputContraBadge.value = localStorage.getItem('badge') || ''
        this._inputContraTag.value = localStorage.getItem('tag') || ''
        this._inputContraAccount.value = ''
        this._inputContraCliente.value = localStorage.getItem('cliente') || ''
        this._inputContraEmail.value = localStorage.getItem('email') || ''
        this._inputContraTelefone.value = localStorage.getItem('telefone') || ''
        this._inputContraTipo.value = ''
        this._inputContraCodigo.value = ''

        this._inputContraLogin.focus()
    }
}