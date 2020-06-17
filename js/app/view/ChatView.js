import { View } from "./View";
import { InputsView } from "./InputsView";

export class ChatView extends View{
    
    constructor(elemento, prefixo){
        
        super(elemento)
        this.prefixo = prefixo
    }
    
    template(model){
        
        return `
        <div class="accordion" id="accordionChat">
            <div class="card">
                <div class="card-header" id="headingOne">
                    ${this.titulo("collapseOne", "Anotações")}
                </div>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionChat" style="">
                    ${this.notas()}
                </div>
            </div>
            
            <div class="card">
                <div class="card-header" id="headingTwo">
                    ${this.titulo("collapseTwo", "Scripts padrão")}
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionChat" style="">
                    ${this.script(model)}
                </div>
            </div>
            
            <div class="card">
                <div class="card-header" id="headingThree">
                    ${this.titulo("collapseThree", "Scripts personalizado")}
                </div>
                <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordionChat" style="">
                    ${this.adicionais()}
                </div>
            </div>
        </div>
        <button style="position: fixed; bottom: 1em; right: 1em; border-radius: 50px; background: transparent; border: 0" onclick="window.scrollTo(0, 0)">
            <svg class="bi bi-arrow-up-circle" width="2em" height="2em" viewBox="0 0 16 16" fill="brown" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M4.646 8.354a.5.5 0 0 0 .708 0L8 5.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"/>
                <path fill-rule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5z"/>
            </svg>
        </button>
        `
    }
    
    notas(){
        
        return `
        
        ${InputsView.nota(this.prefixo)}
        `
    }
    script(model){
        
        return `
        
        <div class="accordion container custom-collapse" id="accordionScripts">
            <div class="card">
                <div class="card-header" id="headingFour">
                    ${this.titulo("collapseFour", "Analista")}
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingOne" data-parent="#accordionScripts" style="">
                    <form id="form-analista">
                        ${InputsView.analista(this.prefixo)}
                        ${InputsView.horario(this.prefixo, 'entrada', "Horário de entrada")}
                        ${InputsView.horario(this.prefixo, 'saida', "Horário de saída")}
                        ${InputsView.submit(this.prefixo+"analista")}
                    </form>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header" id="headingFive">
                    ${this.titulo("collapseFive", "Cliente")}
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionScripts" style="">
                    <form id="form-cliente">
                        ${InputsView.cliente(this.prefixo)}
                        ${InputsView.telefonePrincipal(this.prefixo, 'entrada', "Horário de entrada")}
                        ${InputsView.email(this.prefixo, 'saida', "Horário de saída")}
                        ${InputsView.tag(this.prefixo)}
                        ${InputsView.submit(this.prefixo+"cliente")}
                    </form>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header" id="headingSix">
                    ${this.titulo("collapseSix", "Atendimento")}
                </div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingThree" data-parent="#accordionScripts" style="">
                <form id="form-atendimento">
                    ${InputsView.dps(this.prefixo)}
                    ${InputsView.eticket(this.prefixo)}
                    ${InputsView.cis(this.prefixo)}
                    ${InputsView.submit(this.prefixo+"atendimento")}
            </form>
                </div>
            </div>
        </div>
        
        <ul class="container list-scripts">
            ${model.scriptsChat.map(periodo => {
                
                return `
                <fieldset class="list-scripts-item">
                    <legend>${periodo.periodo}</legend>
                    <ul>${periodo.categoria.map(categoria => {
                        return `
                        <li>${categoria.nome}</li>
                        <ul>${categoria.scripts.map(script => {
                            
                            return `
                            <li>
                                <div class="card">
                                    <div class="card-header">${script.titulo}</div>
                                    <div class="card-body script-texto">${script.texto}</div>
                                </div>
                            </li>
                            <br>
                            `
                        }).join("")}</ul>
                        `
                    }).join("")}</ul>
                </fieldset>
                `
            }).join("")}
        </ul>
        `
    }
    adicionais(){
        
        return `
        <div class="container">
            <form>
                ${InputsView.input(this.prefixo, "titulo-personalizado", "Título", "text", "required", "placeholder='Título do script'")}
                ${InputsView.textarea(this.prefixo, "texto-personalizado", "Texto", "required", "title='Descreva aqui o texto para um novo script'")}
                ${InputsView.submit(this.prefixo)}
            </form>
            <div id="scripts-personalizados">
                
            </div>
        </div>
        `
    }
    
    titulo(colapse, texto){
        
        return `
        <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#${colapse}" aria-expanded="false" aria-controls="${colapse}">
                ${texto}
                <svg class="bi bi-arrow-down-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    <path fill-rule="evenodd" d="M10.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L11 3.707 8.354 6.354a.5.5 0 1 1-.708-.708l3-3zm-9 7a.5.5 0 0 1 .708 0L5 12.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M5 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </button>
        </h2>`
    }
}