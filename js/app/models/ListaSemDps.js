export class ListaSemDps{

    constructor(armadilha){

        this._registrosSemDps = []
    }

    adiciona(registro){
        
        this._registrosSemDps.push(registro)
    }
    get registrosSemDps(){

        return [].concat(this._registrosSemDps)
    }
    esvazia(){

        this._registrosSemDps = []
    }
    ordena(criterio){
        this._registrosSemDps.sort(criterio)
    }

    inverteOrdem(){
        this._registrosSemDps.reverse();
    }

    get registrosSemDps(){

        return [].concat(this._registrosSemDps)
    }
}