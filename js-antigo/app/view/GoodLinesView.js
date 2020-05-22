class GoodLinesView{
    
    constructor(elemento){
        
        this._elemento = elemento
    }
    
    template(model){

        console.log(model.linhasGoodLines[0])
        
        return `        
        <textarea class="lead form-control form-control-sm jumbotron" readonly id="resultado-good-lines" style="padding: .5em; min-height: 15em;">
            ${`
            CPF:42473366810-BDATE:16/11/1993-

            Diag: ${model.linhasGoodLines[0].ferramenta}
            Code: ${model.linhasGoodLines[0].resultado}
            DPS: ${model.linhasGoodLines[0].quantidade}º
            Sintoma: ${model.linhasGoodLines[0].sintoma}
            Instrução: ${model.linhasGoodLines[0].instrucao}
            `}
        </textarea>
        `
    }
    
    update(model){
        
        this._elemento.innerHTML = this.template(model)
    }
}