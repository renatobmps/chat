import { SemDps } from "../models/SemDps";
import { ListaSemDps } from "../models/ListaSemDps";
import { SemDpsView } from "../view/SemDpsView";
import { ConnectionFactory } from "../service/ConnectionFactory";
import { SemDpsDao } from "../dao/SemDpsDao";
import { DateHelper } from "../helpers/DateHelper";

export class SemDpsController{
    
    constructor(){
        
        this.prefixo = localStorage.getItem('page-sem-dps') || "sem-dps"
        
        this._listaSemDps = new ListaSemDps()
        
        this._semDpsView = new SemDpsView(document.querySelector(".view"), this.prefixo)
        this._semDpsView.update(this._listaSemDps)
        
        this._inputLogin    = document.querySelector(`#${this.prefixo}-citrix`);
        this._inputCaso     = document.querySelector(`#${this.prefixo}-caso`);
        this._inputData     = document.querySelector(`#${this.prefixo}-data-data`)
        this._inputArtigo   = document.querySelector(`#${this.prefixo}-artigo`)
        this._inputMotivo   = document.querySelector(`#${this.prefixo}-motivo`)
        this._inputProblema = document.querySelector(`#${this.prefixo}-problema`)
                
        this._limpaFormulario()
        
        ConnectionFactory.getConnection()
        .then(connection => new SemDpsDao(connection))
        .then(dao => dao.listaTodos())
        .then(registros => {
            registros.forEach(r => this._listaSemDps.adiciona(r))
            this._semDpsView.update(this._listaSemDps)
        })
        .catch(erro => console.log(erro))

        setTimeout(() => {

            console.log(document.querySelector("#sem-dps-form"))
            document.querySelector("#sem-dps-form").addEventListener("submit", event => {

                event.preventDefault()
                alert("ok")
            })
        }, 100)
    }
    
    adiciona(event){
        event.preventDefault()
        
        console.log(this._listaSemDps)
        /*

        
        ConnectionFactory.getConnection().then(connection => {
            let semDps = this._criaRegistro()
            
            new SemDpsDao(connection).adiciona(semDps).then(() => {

                this._listaSemDps.adiciona(semDps)
                console.log("Adicionado ao banco")
        
                this._semDpsView.update(this._listaSemDps)
                
                localStorage.setItem('login', this._inputLogin.value)
                localStorage.setItem('caso', this._inputCaso.value)
                localStorage.setItem('hoje', this._inputData.value)
                localStorage.setItem('problema', this._inputProblema.value)
        
                this._limpaFormulario()
            }).catch(erro => console.log(erro))
        })*/
    }
    limpa(){

        ConnectionFactory.getConnection().then(connection => {
            new SemDpsDao(connection).apagaTodos()
            .then(mensagem => {
                console.log(mensagem)
                this._listaSemDps.esvazia()        
                this._semDpsView.update(this._listaSemDps)
            })
            .catch(mensagem => console.log(mensagem))
        })
    }
    _criaRegistro(){
        
        return new SemDps(
            this._inputLogin.value,
            parseInt(this._inputCaso.value),
            DateHelper.textoParaData(this._inputData.value),
            this._inputArtigo.value,
            this._inputMotivo.value,
            this._inputProblema.value
        )
    }
    _limpaFormulario() {
        
        this._inputLogin.focus();
        this._inputLogin.value = localStorage.getItem('login')
        this._inputCaso.value = localStorage.getItem('caso')
        this._inputData.value = localStorage.getItem('hoje') //new Date();
        this._inputArtigo.value = '';
        this._inputMotivo.value = '';
        this._inputProblema.value = localStorage.getItem('problema');
    }
}