export class Bateria{

    constructor(total, atual){

        this.total = total;
        this.atual = atual;
        this.porcentagem;

        this.obtemPorcentagem()
    }

    obtemPorcentagem(){

        this.porcentagem = parseFloat((100 * this.atual) / this.total).toFixed(2)
        if (this.porcentagem < 0 || this.porcentagem > 100) {
            this.porcentagem = "Erro"
        }
        return this.porcentagem
    }
}