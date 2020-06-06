import { View } from "./View";

export class EscalacaoView extends View{

    constructor(elemento){

        super(elemento)
    }

    template(model){

        return `
        <p>Página de Escalação sendo desenvolvida</p>
        `
    }
}