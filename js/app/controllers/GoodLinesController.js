import { GoodLinesView } from "../view/GoodLinesView";

export class GoodLinesController{

    constructor(){

        let $ = document.querySelector.bind(document)

        this.goodLinesView = new GoodLinesView($(".view"))
        this.goodLinesView.update()
    }
}