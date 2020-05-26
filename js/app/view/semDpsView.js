class semDpsView{
    
    constructor(elemento){
        
        this._elemento = elemento
    }
    
    template(model){
        
        return `
        <div class="table-responsive">
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
                </tr>
                `).join("")}
            </tbody>
        </table>
        </div>
        `
    }
    
    update(model){
        
        this._elemento.innerHTML = this.template(model)
    }
}