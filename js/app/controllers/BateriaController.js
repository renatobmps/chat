import { BateriaView } from "../view/BateriaView";
import { Bateria } from "../models/Bateria";
import { InputsView } from "../view/InputsView";

export class BateriaController{

    constructor(){

        this.prefixo = localStorage.getItem('page-bateria') || "bateria"

        let $ = document.querySelector.bind(document)

        this._bateriaView = new BateriaView($(".view"), this.prefixo)
        this._bateriaView.update()

        this.inputProjeto = $(`#${this.prefixo}-projeto`)
        this.inputAtual = $(`#${this.prefixo}-atual`)
        this.outputResultado = $(`#${this.prefixo}-resultado`)

        this.inputProjeto.value = localStorage.getItem(`bateria-projeto`) || ''
        this.inputAtual.value = localStorage.getItem(`bateria-atual`) || ''

        this.calcula()

        this.inputs = [this.inputProjeto, this.inputAtual]
        this.inputs.forEach(i => {
            i.addEventListener('input', () => {
                this.calcula()
            })
        });
    }

    calcula(){

        let bateria = new Bateria(this.inputProjeto.value, this.inputAtual.value)

        localStorage.setItem(`bateria-projeto`, bateria.total)
        localStorage.setItem(`bateria-atual`, bateria.atual)
        
        InputsView.estiloBorda(this.outputResultado, "red")
        
        if (bateria.porcentagem  == "Erro") {
            this.outputResultado.value = "Tem algo errado com os valores"
        }else{
            this.outputResultado.value = `Saúde: ${bateria.obtemPorcentagem()}%\nDegradado: ${(100 - bateria.obtemPorcentagem()).toFixed(2)}%\n\nResutado: Trocar a bateria se age menor do que 1 ano`
            if (bateria.porcentagem > 75) {
                this.outputResultado.value = `Saúde: ${bateria.obtemPorcentagem()}%\nDegradado: ${(100 - bateria.obtemPorcentagem()).toFixed(2)}%\n\nResutado: Dentro do esperado`
                InputsView.estiloBorda(this.outputResultado, "green")
            }
        }
    }
}