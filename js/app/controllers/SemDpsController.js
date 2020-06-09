import { SemDps } from "../models/SemDps";
import { ListaSemDps } from "../models/ListaSemDps";
import { SemDpsView } from "../view/SemDpsView";
import { DateHelper } from "../helpers/DateHelper";
import { ConnectionFactory } from "../service/ConnectionFactory";
import { SemDpsDao } from "../dao/SemDpsDao";

export class SemDpsController{

    constructor(){

        this.prefixo = 'sem-dps'

        this._listaSemDps = new ListaSemDps()

        this._view = new SemDpsView(document.querySelector('.view'), this.prefixo)
        this._view.update(this._listaSemDps)

        /*Teste de adição passou
        this._listaSemDps.adiciona(new SemDps('renato_brandao_marti', '5678912345', DateHelper.textoParaData('2020-06-07'), 'SLN123456789', 'Cliente fazendo backup', 'No boot'))
        console.log(this._listaSemDps.registrosSemDps)*/

        this._inputLogin = document.querySelector(`#${this.prefixo}-citrix`)
        /*Teste de pegar input passou
        this._inputLogin.value = "Teste"*/
        this._inputCaso = document.querySelector(`#${this.prefixo}-caso`)
        this._inputData = document.querySelector(`#${this.prefixo}-data-data`)
        this._inputArtigo = document.querySelector(`#${this.prefixo}-artigo`)
        this._inputProblema = document.querySelector(`#${this.prefixo}-problema`)
        this._inputMotivo = document.querySelector(`#${this.prefixo}-motivo`)

        /*Teste de todos os inputs passou
        console.log(this._inputLogin)
        console.log(this._inputCaso)
        console.log(this._inputData)
        console.log(this._inputArtigo)
        console.log(this._inputProblema)
        console.log(this._inputMotivo)*/

        this._limpaFormulario()

        document.querySelector("form").addEventListener("submit", event => {
            this.adiciona(event)
        })
    }

    adiciona(event){

        event.preventDefault()

        alert("ok")

        ConnectionFactory.getConnection().then(connection => {
            let semDps = this._criaRegistro()

            console.log(semDps)
            
            new SemDpsDao(connection).adiciona(semDps).then(() => {

                this._listaSemDps.adiciona(semDps)
                console.log("Adicionado ao banco")
        
                this._view.update(this._listaSemDps)
                
                localStorage.setItem('login', this._inputLogin.value)
                localStorage.setItem('caso', this._inputCaso.value)
                localStorage.setItem('problema', this._inputProblema.value)
        
                this._limpaFormulario()
            }).catch(erro => console.log(erro))
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
        this._inputCaso.value = ''
        this._inputData.value = DateHelper.dataParaString(new Date())
        this._inputArtigo.value = localStorage.getItem('artigo');
        this._inputMotivo.value = '';
        this._inputProblema.value = localStorage.getItem('problema');
    }
}



/*import { SemDps } from "../models/SemDps";
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
        
        console.log(this._inputLogin)

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
        })*//*
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
        this._inputCaso.value = ''
        this._inputData.value = localStorage.getItem('hoje')
        this._inputArtigo.value = localStorage.getItem('artigo');
        this._inputMotivo.value = '';
        this._inputProblema.value = localStorage.getItem('problema');
    }
}*/