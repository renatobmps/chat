export class Chat{

    constructor(titulo, script, ...inputs){

        this._titulo = titulo
        this._script = script
        this._inputs = inputs
    }

    get titulo(){

        return this._titulo
    }
    get script(){

        return this._script
    }
    get inputs(){

        return this._inputs
    }
}