class GoodLinesController{
    
    constructor(){
        
        let $ = document.querySelector.bind(document)
        
        this._inputFerramenta = $("#diag");
        this._inputResultado = "Alterar com click"
        this._inputQuantidade = $("#quantidade");
        this._inputSintoma = $("#sintoma");
        this._inputSpecialLine = "Implementar"
        this._inputInstrucao = $("#instrucao");

        this._goodLinesview = new GoodLinesView($("#goodLinesView"))

        this._limpaFormulario()
    }
    
    adiciona(event){
        
        event.preventDefault()
        
        this._listaGoodLines = new ListaGoodLines();
        this._listaGoodLines.adiciona(new GoodLines(this._inputFerramenta.value, this._inputResultado, parseInt(this._inputQuantidade.value), this._inputSintoma.value, this._inputInstrucao.value))

        this._goodLinesview.update(this._listaGoodLines)

        document.querySelector('#resultado-good-lines').select()
        document.execCommand('copy')

        this._limpaFormulario()
    }

    _validacoes(){

        //Realizar todas as validações, como special line, por exemplo
    }

    _limpaFormulario(){
        
        this._inputFerramenta.value = '';
        //this._inputResultado.value = 'Failed';
        this._inputQuantidade.value = '';
        this._inputSintoma.value = '';
        //this._inputSpecialLine.value = '';
        this._inputInstrucao.value = 'Senhor técnico, por favor trocar ...';
        this._inputFerramenta.focus();
    }
}