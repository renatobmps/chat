import { TesteView } from "../view/TesteView";

export class TesteController{
    
    constructor(){

        this.view = new TesteView(document.querySelector(".view"))
        this.view.update()
    }
}