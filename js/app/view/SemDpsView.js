import { View } from "./View";
import { InputsView } from "./InputsView";

export class SemDpsView extends View{
    
    constructor(elemento, prefixo){
        
        super(elemento)
        this.prefixo = prefixo
    }
    
    template(model){
        return `
        <form class="container" id="${this.prefixo}-form">
            <div class="form-row">
                ${InputsView.citrix(this.prefixo)}
                ${InputsView.caso(this.prefixo)}
                ${InputsView.data(this.prefixo, 'data', 'Data')}
                ${InputsView.artigo(this.prefixo)}
            </div>
            <div class="form-row">
                ${InputsView.problema(this.prefixo)}
            </div>
            <div class="form-row">
                ${InputsView.motivo(this.prefixo)}
            </div>
            <div class="form-row">
                ${InputsView.submit(this.prefixo)}
            </div>
        </form>
        <div class="dropdown-divider"></div>
        <div class="table-responsive container">
            <table class="table table-sm table-hover user-select-all">
                <thead>
                    <tr>
                        <th scope="col">Owner</th>
                        <th scope="col">Case</th>
                        <th scope="col">Data</th>
                        <th scope="col">OKB</th>
                        <th scope="col">Motivo</th>
                        <th scope="col">Problema</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.registrosSemDps.map(registro => `
                        <tr>
                            <td>${registro.login}</td>
                            <td>${registro.caso}</td>
                            <td>${DateHelper.dataParaTexto(registro.data)}</td>
                            <td>${registro.artigo}</td>
                            <td>${registro.motivo}</td>
                            <td>${registro.problema}</td>
                        </tr>`).join("")
                    }
                </tbody>
            </table>
            <div class="form-row">
                ${InputsView.buttonSecondary(this.prefixo, "Limpar tabela")}
            </div>
        </div>
        `
    }
}