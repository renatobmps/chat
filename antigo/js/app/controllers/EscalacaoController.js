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
        
        this.officeView = new OfficeView($("#office"))
        this.officeView.update()
        
        this.contaSenhaView = new ContraSenhaView($("#contra-senha"))
        this.contaSenhaView.update()

        this._inputOfficeVersao = $("#office-versao")
        this._inputOfficeDetalhe = $("#office-detalhe")
        this._inputOfficeArtigo = $("#office-artigo")
        this._inputOfficeFixit = $("#office-fixit")
        this._inputOfficeOspp = $("#office-ospp")
        this._inputOfficeCliente = $("#office-cliente")
        this._inputOfficeTag = $("#office-tag")
        this._inputOfficeOrdem = $("#office-ordem")
        this._inputOfficeMsa = $("#office-msa")
        this._inputOfficeMsaTestada = $("#office-msa-testada")
        this._inputOfficeSr = $("#office-sr")
        this._outputOfficeResultado = $("#office-resultado")

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

        this._limpaFormGuidance()
        this._limpaFormRepeatDps()
        this._limpaFormExchange()
        this._limpaFormReembolso()
        this._limpaFormOffice()
        this._limpaFormContraSenha()
    }

    adicionaGuidance(event){
        event.preventDefault()

        _limpaFormGuidance()
    }
    _limpaFormGuidance(){}

    adicionaRepeatDps(event){
        event.preventDefault()
        
        _limpaFormRepeatDps()
    }
    _limpaFormRepeatDps(){}

    adicionaExchange(event){
        event.preventDefault()
        
        _limpaFormExchange()
    }
    _limpaFormExchange(){}

    adicionaReembolso(event){
        event.preventDefault()
        
        _limpaFormReembolso()
    }
    _limpaFormReembolso(){}

    adicionaOffice(event){

        event.preventDefault()

        localStorage.setItem('cliente', this._inputOfficeCliente.value)
        localStorage.setItem('tag', this._inputOfficeTag.value)
        localStorage.setItem('email', this._inputOfficeMsa.value)

        let office = new TemplateOffice(this._inputOfficeVersao.value, this._inputOfficeDetalhe.value, this._inputOfficeArtigo.value, this._inputOfficeFixit.value, this._inputOfficeOspp.value, this._inputOfficeCliente.value, this._inputOfficeOrdem.value, this._inputOfficeTag.value, this._inputOfficeMsa.value, this._inputOfficeMsaTestada.value, this._inputOfficeSr.value)

        this._outputOfficeResultado.value = `VersãodoOffice: ${office.categoria}\nDetalhesdaversão: ${office.versao}\nOKButilizado: ${office.artigo}\nFixitMicrosoftExecutado: ${office.fixit}\nOSPP.loganexonaSR(SLN306817): ${office.ospp}\nNomecompletodocliente: ${office.cliente}\nORDEM: ${office.ordem}\nTAG: ${office.tag}\nMSA: ${office.msa}\nMSAtestadacomcliente: ${office.msaTestada}\nSRMicrosoft: SRXc${office.microsoft}`

        this._outputOfficeResultado.select()
        document.execCommand('copy')

        this._limpaFormOffice()
    }

    _limpaFormOffice(){

        this._inputOfficeVersao.value = ''
        this._inputOfficeDetalhe.value = ''
        this._inputOfficeArtigo.value = ''
        this._inputOfficeFixit.value = 'Sim'
        this._inputOfficeOspp.value = 'Sim'
        this._inputOfficeCliente.value = localStorage.getItem('cliente') || ''
        this._inputOfficeTag.value = localStorage.getItem('tag') || ''
        this._inputOfficeOrdem.value = ''
        this._inputOfficeMsa.value = localStorage.getItem('email') || ''
        this._inputOfficeMsaTestada.value = 'Sim'
        this._inputOfficeSr.value = ''

        this._inputOfficeVersao.focus()
    }

    adicionaContraSenha(event){

        event.preventDefault()

        localStorage.setItem('login', this._inputContraLogin.value)
        localStorage.setItem('badge', this._inputContraBadge.value)
        localStorage.setItem('tag', this._inputContraTag.value)
        localStorage.setItem('cliente', this._inputContraCliente.value)
        localStorage.setItem('email', this._inputContraEmail.value)
        localStorage.setItem('telefone', this._inputContraTelefone.value)

        let contraSenha = new TemplateContraSenha(
            this._inputContraLogin.value,
            this._inputContraBadge.value,
            this._inputContraTag.value,
            this._inputContraAccount.value,
            this._inputContraCliente.value,
            this._inputContraEmail.value,
            this._inputContraTelefone.value,
            this._inputContraTipo.value,
            this._inputContraCodigo.value,
        )

        console.log(contraSenha)

        this._outputContraResultado.value = `Citrix: ${contraSenha.citrix}\nBadge: ${contraSenha.badge}\nTipo de solicitacao: ${contraSenha.tipo}\nAccount TAG: ${contraSenha.account}\nNome do cliente: ${contraSenha.cliente}\nE-mail do cliente: ${contraSenha.email}\nTelefone do cliente: ${contraSenha.telefone}\nTAG: ${contraSenha.tag}\nCodigo: ${contraSenha.codigo}`

        this._outputContraResultado.select()
        document.execCommand('copy')

        this._limpaFormContraSenha()
    }

    _limpaFormContraSenha(){
        
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