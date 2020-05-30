import { View } from "./View";

export class InputsView{

    constructor(){

        throw new Error("Não é possível instanciar esta classe")
    }

    static projeto(prefixo){

        return `
        <div class="form-group col">
            <label for="${prefixo}-projeto">Projeto total</label>
            <input oninput="" type="number" id="${prefixo}-projeto" class="form-control form-control-sm" placeholder="41998" required min="1" value="${localStorage.getItem(`${prefixo}-projeto`) || 1}">
        </div>
        `
    }
    static atual(prefixo){

        return `
        <div class="form-group col">
            <label for="${prefixo}-atual">Último carregamento total</label>
            <input oninput="" type="number" id="${prefixo}-atual" class="form-control form-control-sm" placeholder="32889" required min="1" value="${localStorage.getItem(`${prefixo}-atual`) || 1}">
        </div>
        `
    }
    static resultado(prefixo){

        return `
        <div class="form-group col">
            <textarea id="${prefixo}-resultado" cols="30" rows="5" class="form-control" readonly>Resultado...</textarea>
        </div>
        `
    }

    static estilo(campo, cor){

        campo.style = `border: 1px solid ${cor}; color: ${cor}; font-weight: bold;`
    }
}