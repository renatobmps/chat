class OfficeView extends View{
    constructor(elemento){
        super(elemento)
    }
    
    template(modelo){
        return `
        <form onsubmit="escalacao.adicionaOffice(event)">
            <div class="form-row">
                <div class="form-group col input-group-sm">
                    <label for="office-versao">Versão do Office</label>
                    <select id="office-versao" class="custom-select" size="3" required>
                        <option value="Office2016">Office 2016</option>
                        <option value="Office2019">Office 2019</option>
                        <option value="Office365">Office 365</option>
                    </select>
                </div>
                <div class="form-group col input-group-sm">
                    <label for="office-detalhe">Detalhes da versão</label>
                    <select id="office-detalhe" class="custom-select" size="3" required>
                        <option value="Office Home and Student">H&S</option>
                        <option value="Office Home and Business">H&B</option>
                        <option value="Office 365 Personal">365P</option>
                        <option value="Office 365 Home">365H</option>
                        <option value="Office Professional">PRO</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="office-artigo">OKB utilizado</label>
                    <input type="text" id="office-artigo" class="form-control form-control-sm" required>
                </div>
                <div class="form-group col input-group-sm">
                    <label for="office-fixit">Fix it Microsoft Executado</label>
                    <select id="office-fixit" class="custom-select" required>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                </div>
                <div class="form-group col input-group-sm">
                    <label for="office-ospp">OSPP.log anexo na SR</label>
                    <select id="office-ospp" class="custom-select" required>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="office-cliente">Nome completo do cliente</label>
                    <input type="text" id="office-cliente" class="form-control form-control-sm" value="${localStorage.getItem('cliente') || ''}" required>
                </div>
                <div class="form-group col">
                    <label for="office-tag">TAG</label>
                    <input type="text" id="office-tag" class="form-control form-control-sm" value="${localStorage.getItem('tag') || ''}" required>
                </div>
                <div class="form-group col">
                    <label for="office-ordem">Ordem de compra</label>
                    <input type="number" id="office-ordem" class="form-control form-control-sm" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="office-msa">MSA</label>
                    <input type="email" id="office-msa" class="form-control form-control-sm" value="${localStorage.getItem('email') || ''}" required>
                </div>
                <div class="form-group col input-group-sm">
                    <label for="office-msa-testada">MSA testada com o cliente?</label>
                    <select id="office-msa-testada" class="custom-select" required>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                </div>
                <div class="form-group col">
                    <label for="office-sr">SR Microsoft</label>
                    <input type="number" id="office-sr" class="form-control form-control-sm" required>
                </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="form-row">
                <button type="submit" class="btn btn-outline-primary btn-block">Gerar template e copiar</button>
            </div>
            <div class="dropdown-divider"></div>
            <div class="form-row">
                <textarea id="office-resultado" class="form-control form-control-sm" cols="30" rows="10" readonly></textarea>
            </div>
        </form>
        `
    }
}