import { IndexMenuView } from "../view/IndexMenuView";
import { BateriaController } from "./BateriaController";

class IndexController{

    constructor(){

        let $ = document.querySelector.bind(document)

        this._indexMenuView = new IndexMenuView($("body"))
        this._indexMenuView.update()

        $("#btn-bateria").addEventListener("click", () => {

            this.bateriaController()
        })
    }

    bateriaController(){

        new BateriaController()
    }
}

let indexController = new IndexController()

export function currentInstance() {
    
    return indexController
}