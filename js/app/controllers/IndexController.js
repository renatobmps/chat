import { IndexMenuView } from "../view/IndexMenuView";
import { BateriaController } from "./BateriaController";
import { SemDpsController } from "./SemDpsController";
import { EscalacaoController } from "./EscalacaoController";
import { GoodLinesController } from "./GoodLinesController";
import { ChatController } from "./ChatController";
import { TesteController } from "./TesteController";

class IndexController{
    
    constructor(){
        
        //Atribui $ ao querySelector
        let $ = document.querySelector.bind(document)
        
        //Desenha menu e page inicial
        this._indexMenuView = new IndexMenuView($("body"))
        this._indexMenuView.update()
        
        /** DOM */
        //Lista DOM do menu
        this.itensMenu = document.querySelectorAll("header li")
        
        //Remove active de todas as opções do menu
        this.limpaActivies()
        
        //Separa itens do menu para a classe
        this.pageChat = this.itensMenu[0]
        this.pageGoodLines = this.itensMenu[1]
        this.pageEscalacao = this.itensMenu[2]
        this.pageSemDps = this.itensMenu[3]
        this.pageBateria = this.itensMenu[4]
        
        //Atribui click aos itens do menu
        this.pageChat.addEventListener("click", () => {
            
            this.chatController()
        })
        this.pageGoodLines.addEventListener("click", () => {
            
            this.goodLinesController()
        })
        this.pageEscalacao.addEventListener("click", () => {
            
            this.escalacaoController()
        })
        this.pageSemDps.addEventListener("click", () => {
            
            this.semDpsController()
        })
        this.pageBateria.addEventListener("click", () => {
            
            this.bateriaController()
        })
        
        /** Link */
        //Separa o link para trabalhar com atualização de páginas separadas
        this.link = (document.URL).split("#")
        
        //Verifica qual é o link para chamar o Controller
        this.verificaLink()
    }
    
    chatController(){
        
        new ChatController()
        this.limpaActivies()
        this.pageChat.classList.add("active")
    }
    goodLinesController(){
        
        new GoodLinesController()
        this.limpaActivies()
        this.pageGoodLines.classList.add("active")
    }
    escalacaoController(){
        
        new EscalacaoController()
        this.limpaActivies()
        this.pageEscalacao.classList.add("active")
    }
    semDpsController(){
        
        new SemDpsController()
        this.limpaActivies()
        this.pageSemDps.classList.add("active")
    }
    bateriaController(){
        
        new BateriaController()
        this.limpaActivies()
        this.pageBateria.classList.add("active")
    }
    testeController(){

        new TesteController()
        this.limpaActivies()
    }
    
    verificaLink(){
        
        if (document.URL == `${this.link[0]}#chat`) {
            
            this.chatController()
        }
        if (document.URL == `${this.link[0]}#good-lines`) {
            
            this.goodLinesController()
        }
        if (document.URL == `${this.link[0]}#escalacao`) {
            
            this.escalacaoController()
        }
        if (document.URL == `${this.link[0]}#sem-dps`) {
            
            this.semDpsController()
        }
        if (document.URL == `${this.link[0]}#bateria`) {
            
            this.bateriaController()
        }
        if (document.URL == `${this.link[0]}#teste`) {
            
            this.testeController()
        }
    }
    limpaActivies(){
        
        this.itensMenu.forEach(link => {
            link.classList.remove("active")
        })
    }
}

let indexController = new IndexController()

export function currentInstance() {
    
    return indexController
}