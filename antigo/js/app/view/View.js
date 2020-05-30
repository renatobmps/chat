class View{
    
    constructor(elemento){

        this._elemento = elemento
    }

    template(){

        throw new Error("O método TEMPLATE precisa ser implementado")
    }
    update(model){

        this._elemento.innerHTML = this.template(model);
    }
}