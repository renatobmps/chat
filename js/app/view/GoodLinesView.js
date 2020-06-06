import { View } from "./View";

export class GoodLinesView extends View{

    constructor(elemento){

        super(elemento)
    }

    template(model){

        return `
        <p>Página de 5 Good Lines em desenvolvimento</p>
        `
    }
}