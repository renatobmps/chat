import { ChatView } from "../view/ChatView";
import { Chat } from "../models/Chat";
import { ListaChat } from "../models/ListaChat";
import { Scripts } from "../dados/scripts";

export class ChatController{

    constructor(){

        this._listaChat = new ListaChat()

        this.prefixo = 'chat'

        this.scripts = new Scripts()

        this.scripts.scripts.forEach(script => {
            this._listaChat.adiciona(script)
        });

        let $ = document.querySelector.bind(document)

        this.chatView = new ChatView($(".view"), this.prefixo)
        this.chatView.update(this._listaChat)

        document.querySelector(`#form-analista`).onsubmit = () => this.atualizar()
        document.querySelector(`#form-cliente`).onsubmit = () => this.atualizar()
        document.querySelector(`#form-atendimento`).onsubmit = () => this.atualizar()

        document.querySelectorAll(".script-texto").forEach(e => {
            e.addEventListener("dblclick", event => {
                console.log(event.target.textContent)
                this.copiar(event.target.textContent)
            })
        })

        this.personalTitulo = ''
        this.personalTexto = ''
    }

    atualizar(){

        new ChatController()
    }
    copiar(texto){

        let antigo = document.querySelector(".texto-para-copiar") || ''
    
        if (antigo == '') {
            
            this._montaCopiar(texto)
        } else {

            antigo.hidden = true
            this._montaCopiar(texto)
        }
    }
    _montaCopiar(texto){

        let script = document.createElement('textarea')
        
            script.classList.add("texto-para-copiar")
            script.style = 'position: absolute; z-index: -100'
            script.value = texto
            console.log(script.value)
            document.body.prepend(script)
            document.querySelector(".texto-para-copiar").select()
            document.execCommand('copy')
    }
}