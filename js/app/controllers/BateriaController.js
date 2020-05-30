import { BateriaView } from "../view/BateriaView";

export class BateriaController{

    constructor(){

        let $ = document.querySelector.bind(document)

        this._bateriaView = new BateriaView($(".view"))
        this._bateriaView.update()
    }
}