class ListaGoodLines{

    constructor(){

        this._linhasGoodLines = []
    }

    get linhasGoodLines(){

        return [].concat(this._linhasGoodLines)
    }

    adiciona(linhas){

        this._linhasGoodLines.push(linhas)
    }
}