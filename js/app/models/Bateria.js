export class Bateria{

    constructor(total, atual){

        this.total = total;
        this.atual = atual;
        this.porcentagem;
    }

    obtemPorcentagem(){

        return parseFloat((100 * this.atual) / this.total).toFixed(2)
    }
}