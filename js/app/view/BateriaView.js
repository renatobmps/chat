import { View } from "./View";
import { InputsView } from "./InputsView";

export class BateriaView extends View {

    constructor(elemento, prefixo){

        super(elemento)
        
        this.prefixo = prefixo
    }

    template(model){

        return `
        <div class="dropdown-divider"></div>
        <div class="container">
            <div class="form-group col">
                <small class="form-text text-muted">Para consultar o relatório, rode o comando <code>powercfg -energy</code> no <em>CMD</em> como administrador. Após carregar, basta abir o link <code>c:/Windows/System32/energy-report.html</code></small>
                <small class="form-text text-muted"><a href="https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-8.1-and-8/hh824902(v=win.10)?redirectedfrom=MSDN" target="_blank" rel="noopener noreferrer">Mais informações</a></small>
            </div>
        </div>
        <div class="dropdown-divider"></div>
        <form class="container">
            <div class="form-row">
                ${InputsView.projeto(this.prefixo)}
                ${InputsView.atual(this.prefixo)}
            </div>
            <div class="form-row">
                ${InputsView.resultado(this.prefixo)}
            </div>
        </form>
        `
    }
}