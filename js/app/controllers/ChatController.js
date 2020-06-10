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
    }

    atualizar(){

        alert("pl")
    }
}