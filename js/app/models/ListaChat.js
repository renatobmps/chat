export class ListaChat{

    constructor(){

        this._scriptsChat = []
    }

    adiciona(registro){
        
        this._scriptsChat.push(registro)
    }
    get scriptsChat(){

        return [].concat(this._scriptsChat)
    }
    esvazia(){

        this._scriptsChat = []
    }
    ordena(criterio){
        this._scriptsChat.sort(criterio)
    }

    inverteOrdem(){
        this._scriptsChat.reverse();
    }
}