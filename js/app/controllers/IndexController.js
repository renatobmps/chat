import { IndexMenuView } from "../view/IndexMenuView";
import { BateriaController } from "./BateriaController";

class IndexController{

    constructor(){

        let $ = document.querySelector.bind(document)

        this._indexMenuView = new IndexMenuView($("body"))
        this._indexMenuView.update()

        document.querySelectorAll("header li").forEach(link => {
            link.classList.remove("active")
        })

        this.link = (document.URL).split("#")
        
        this.verificaLink()

        $(".ativo-bateria").addEventListener("click", () => {

            this.bateriaController()
        })
    }

    bateriaController(){

        new BateriaController()
    }

    verificaLink(){

        if (document.URL == `${this.link[0]}#bateria`) {

            this.bateriaController()
        }
    }
}

let indexController = new IndexController()

export function currentInstance() {
    
    return indexController
}