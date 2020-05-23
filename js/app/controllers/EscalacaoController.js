class EscalacaoController{

    constructor(){

        let $ = document.querySelector.bind(document)

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
    }
}