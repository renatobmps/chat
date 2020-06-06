import { ChatView } from "../view/ChatView";

export class ChatController{

    constructor(){

        let $ = document.querySelector.bind(document)

        this.chatView = new ChatView($(".view"))
        this.chatView.update()
    }
}