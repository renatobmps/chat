import { EscalacaoView } from "../view/EscalacaoView";

export class EscalacaoController{

    constructor(){

        let $ = document.querySelector.bind(document)

        this.escalacaoView = new EscalacaoView($(".view"))
        this.escalacaoView.update()
    }
}