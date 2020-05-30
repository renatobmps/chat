class GoodLines{

    constructor(ferramenta, resultado, quantidade, sintoma, instrucao){

        this._ferramenta = ferramenta;
        this._resultado = resultado;
        this._quantidade = quantidade;
        this._sintoma = sintoma;
        this._instrucao = instrucao;
    }

    get ferramenta(){

        return this._ferramenta;
    }

    get resultado(){

        return this._resultado;
    }

    get quantidade(){

        return this._quantidade;
    }

    get sintoma(){

        return this._sintoma;
    }

    get instrucao(){

        return this._instrucao;
    }
}