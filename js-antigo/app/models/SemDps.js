class SemDps{

    constructor(login, caso, data, artigo, motivo, problema){
        
        this._login = login;
        this._caso = caso;
        this._data = data;
        this._artigo = artigo;
        this._motivo = motivo;
        this._problema = problema;
    }

    get login(){

        return this._login;
    }
    get caso(){

        return this._caso;
    }
    get data(){

        return new Date(this._data.getTime())
    }
    get artigo(){

        return this._artigo;
    }
    get motivo(){

        return this._motivo;
    }
    get problema(){

        return this._problema;
    }
}