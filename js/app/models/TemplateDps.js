class TemplateDps{

    constructor(numero, tipo, problema, peca, inicio, fim, resultado){

        this._numero = numero;
        this._tipo = tipo;
        this._problema = problema;
        this._peca = peca;
        this._inicio = inicio;
        this._fim = fim;
        this._resultado = resultado;
    }

    get numero(){
        return this._numero;
    }
    get tipo(){
        return this._tipo;
    }
    get problema(){
        return this._problema;
    }
    get peca(){
        return this._peca;
    }
    get inicio(){
        return this._inicio;
    }
    get fim(){
        return this._fim;
    }
    get resultado(){
        return this._resultado
    }
}