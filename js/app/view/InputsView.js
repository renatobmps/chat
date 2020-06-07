export class InputsView{
    
    constructor(){
        
        throw new Error("Não é possível instanciar esta classe")
    }
    
    static citrix(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-citrix">Login</label>
            <input type="text" class="form-control form-control-sm" id="${prefixo}-citrix" required="" placeholder="seu_login_de_citrix" pattern="[&quot;A-Za-z0-9_&quot;]{5,20}" title="login de Citrix">
        </div>`
    }
    static badge(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-badge">Badge</label>
            <input type="number" id="${prefixo}-badge" class="form-control form-control-sm" required placeholder="" pattern="" title="Número de badge">
        </div>`
    }
    static horario(prefixo, identificador){
        return `
        <div class="form-group col">
            <label for="${prefixo}-"></label>
            
        </div>`
    }
    static cliente(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-cliente">Nome do cliente</label>
            <input type="text" id="${prefixo}-cliente" class="form-control form-control-sm" required placeholder="Fulano de tal" pattern="[az-AZ]" title="Entre com o nome do cliente">
        </div>`
    }
    static telefonePrincipal(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-telefone">Telefone principal</label>
            <input type="tel" id="${prefixo}-telefone" class="form-control form-control-sm">
        </div>`
    }
    static telefoneAdicional(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-"></label>
            
        </div>`
    }
    static email(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-email">E-mail</label>
            <input type="email" id="${prefixo}-email" class="form-control form-control-sm" required placeholder="cliente@email.com" title="Endereço  de e-mail do cliente">
        </div>`
    }
    static caso(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-caso">Case</label>
            <input type="number" class="form-control form-control-sm" id="${prefixo}-caso" required="" placeholder="XXXXXXXX" pattern="[&quot;0-9&quot;]{8}" title="8 dígitos" maxlength="8">
        </div>`
    }
    static srAge(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-"></label>
            
        </div>`
    }
    static data(prefixo, identificador, view){
        return `
        <div class="form-group col">
            <label for="${prefixo}-data-${identificador}">${view}</label>
            <input type="date" class="form-control form-control-sm" id="${prefixo}-data-${identificador}" required>
        </div>`
    }
    static motivo(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-motivo">Motivo do NoDPS</label>
            <textarea class="form-control form-control-sm" id="${prefixo}-motivo" required="" placeholder="Cliente fazendo as atualizações pendentes do windows update"></textarea>
        </div>`
    }
    static ordem(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-"></label>
            
        </div>`
    }
    static valor(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-valor">Valor do reembolso</label>
            <div class="input-group input-group-sm">
                <div class="input-group-prepend">
                    <span class="input-group-text">R$</span>
                </div>
                <input type="number" id="${prefixo}-valor" class="form-control">
                <div class="input-group-append">
                    <span class="input-group-text">,00</span>
                </div>
            </div>
        </div>`
    }
    
    /**Prontos */
    static dpsCompleto(prefixo){
        return `
        <div class="form-group col">
            ${this.dps(prefixo)}
            ${this.dpsType(prefixo)}
            ${this.problema(prefixo)}
            ${this.peca(prefixo)}
            ${this.data(prefixo, "dps-inicio", "Aberto em")}
            ${this.data(prefixo, "dps-fim", "Concluído em")}
            ${this.reporte(prefixo)}
        </div>`
    }
    
    /**Input */
    static analiseL2(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-analise">Analise do L2</label>
            <textarea id="${prefixo}-analise" cols="30" rows="5" class="form-control" placeholder="Recomendo..." title="Oportunidades identificadas pelo L2, OKBs seguidos, versões de BIOS e drivers relevantes ao problema, além de toda e qualquer outra informação relevante. É necessário que o L2 faça uma recomendação ao final de qual seria sua recomendação."></textarea>
        </div>`
    }
    static artigo(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-artigo">Oracle</label>
            <input type="text" class="form-control form-control-sm" id="${prefixo}-artigo" required placeholder="SLNXXXXXX" pattern="[&quot;A-Z0-9&quot;]{9}" title="SLN, PNP, HOW, LNK... usado" maxlength="9">
        </div>`
    }
    static bateriaAtual(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-atual">Último carregamento total</label>
            <input type="number" id="${prefixo}-atual" class="form-control form-control-sm" placeholder="32889" required min="9999" title="Projeto do último carregamento total">
        </div>`
    }
    static bateriaProjeto(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-projeto">Projeto total</label>
            <input type="number" id="${prefixo}-projeto" class="form-control form-control-sm" placeholder="41998" required min="9999" title="Projeto total da bateria">
        </div>`
    }
    static cnpj(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-cnpj">CNPJ</label>
            <input type="number" id="${prefixo}-cnpj" class="form-control form-control-sm" required placeholder="Somente numeros" title="Entre com o número do CNPJ">
        </div>`
    }
    static contraSenhaCodigo(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-codigo-contra-senha">Código gerado</label>
            <input type="text" id="${prefixo}-codigo-contra-senha" class="form-control form-control-sm" placeholder="#HQWHSL2-6FF1" title="Código gerado pela máquina para contra-senha">
        </div>`
    }
    static cpf(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-cpf">CPF</label>
            <input type="number" id="${prefixo}-cpf" class="form-control form-control-sm" required placeholder="00011122233" title="Entre com o CPF do cliente">
        </div>`
    }
    static diag(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-diag">Diag</label>
            <select id="${prefixo}-diag" class="custom-select" size="2" required title="Ferramenta de diagnóstico">
                <option value="ePSA">Epsa</option>
                <option value="32 Bits Diagnostics">32 Bits Diagnostics</option>
                <option value="Alien Autopsy">Alien Autopsy</option>
                <option value="Dell Online Diagnostics">Dell Online Diagnostics</option>
                <option value="FPD Bist">FPD Bist</option>
                <option value="LCD Bist">LCD Bist</option>
                <option value="Led Indicators">Led Indicators</option>
                <option value="MemRX">MemRX</option>
                <option value="MpMemory">MpMemory</option>
                <option value="PC Doctor">PC Doctor</option>
                <option value="PSA">PSA</option>
                <option value="PSU Bist">PSU Bist</option>
                <option value="Quad-Pack Leds">Quad-Pack Leds</option>
                <option value="Tools not Needed">Tools not Needed</option>
            </select>
        </div>`
    }
    static dps(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-dps">Nº DPS</label>
            <input type="number" id="${prefixo}-dps" class="form-control form-control-sm" required placeholder="0000000000" title="Entre com o número de DPS">
        </div>`
    }
    static guidance(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-guidance">Motivo da solicitação</label>
            <input type="text" id="${prefixo}-guidance" class="form-control form-control-sm" required placeholder="Solução desconhecida" title="Descreva o motivo da solicitação" value="Solução desconhecida">
        </div>`
    }
    static inscricaoEstadual(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-inscricao-estadual">Inscrição estadual</label>
            <input type="number" id="${prefixo}-inscricao-estadual" class="form-control form-control-sm" placeholder="Não preencher se isento" title="Entre com a numeração da inscrição estadual">
        </div>`
    }
    static microsoft(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-microsoft">SR Microsoft</label>
            <input type="number" id="${prefixo}-microsoft" class="form-control form-control-sm" required placeholder="SRX123456789 (Só números)" title="Protocolo fornecido pela Microsoft durante o atendiento no chat">
        </div>`
    }
    static modelo(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-modelo">Modelo</label>
            <input type="text" id="${prefixo}-modelo" class="form-control form-control-sm" required placeholder="INSPIRON 3583" title="Entre com o nome do modelo do equipamento">
        </div>`
    }
    static optSimNao(prefixo, identificacao, view){
        return `
        <div class="form-group col">
            <label for="${prefixo}-opcao-${identificacao}">${view}</label>
            <select id="${prefixo}-opcao-${identificacao}" class="custom-select" size="2" required>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select>
        </div>`
    }
    static peca(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-peca">Peças enviadas</label>
            <input type="text" id="${prefixo}-peca" class="form-control form-control-sm" required placeholder="LCD P4NFX..." title="Entre com as peças que foram enviadas neste chamado">
        </div>`
    }
    static reporte(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-report">Reporte</label>
            <input type="text" id="${prefixo}-report" class="form-control form-control-sm" required placeholder="Negativo / Positivo" title="Resultado do atendimento do chamado">
        </div>`
    }
    static resumo(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-resumo">Resumo</label>
            <textarea id="${prefixo}-resumo" cols="30" rows="5" class="form-control" required placeholder="O atendimento inicou com..." title="O resumo do caso deverá ser descrito com todos os detalhes técnicos e histórico de DPSs, para que seja feita uma análise do que deve ser feito a seguir"></textarea>
        </div>`
    }
    static tag(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-tag">TAG</label>
            <input type="text" id="${prefixo}-tag" class="form-control form-control-sm" required placeholder="XXXXXX2" title="Entre com a TAG do equipamento" pattern="{8}">
        </div>`
    }
    static tagAccount(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-account">Account</label>
            <input type="text" id="${prefixo}-account" class="form-control form-control-sm" required placeholder="Via Varejo" title="Entre com account TAG">
        </div>`
    }
    static tagAge(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-tag-age">Idade da máquina</label>
            <input type="number" id="${prefixo}-tag-age" class="form-control form-control-sm" required placeholder="0 Days(s)" title="Entre com a idade da máquina (apenas números)" min="1">
        </div>`
    }
    static temperatura(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-temperatura">Temperatura do cliente</label>
            <input type="text" id="${prefixo}-temperatura" class="form-control form-control-sm" required placeholder="Impactado / Neutro" title="Descreva o humor do cliente">
        </div>`
    }
    
    /**Select */
    static arquiteturaHd(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-arquitetura"></label>
            <select id="${prefixo}-arquitetura" class="custom-select" size="2" required title="Selecione a arquitetura do sistema">
                <option value="64 bits">64</option>
                <option value="32 bits">32</option>
            </select>
        </div>`
    }
    static code(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-code">Code</label>
            <select id="${prefixo}-code" class="custom-select" size="2" required>
                <option value="Pass">Pass</option>
                <option value="Failed">Failed</option>
                <option value="Did not complete">Did not complete</option>
            </select>
        </div>`
    }
    static contraSenhaTipo(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-tipo-contra-senha">Senha de</label>
            <select id="${prefixo}-tipo-contra-senha" class="custom-select" required title="De qual serviço o cliente precisa de auxílio?" size="2">
                <option value="BIOS">BIOS</option>
                <option value="HD">HD</option>
                <option value="Admin">Admin</option>
            </select>
        </div>`
    }
    static dpsType(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-dps-tipo">Tido de DPS</label>
            <select id="${prefixo}-dps-tipo" class="custom-select" size="2" required title="Selecione qual é o tipo de serviço do chamado">
                <option value="Parts and Labor">P&L</option>
                <option value="Parts only">Parts only</option>
                <option value="Mail in">MIS</option>
                <option value="Carry in service">CIS</option>
                <option value="10 business day">P10</option>
            </select>
        </div>`
    }
    static dpsQuantidade(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-dps-quantidade">Qtde</label>
            <select id="${prefixo}-dps-quantidade" class="custom-select" size="2" required title="Selecione a quantidade de DPSs da SR">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>`
    }
    static garantia(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-garantia">Garantia</label>
            <select id="${prefixo}-garantia" class="custom-select" size="2">
                <option value="IW">Em garantia</option>
                <option value="OOW">Sem garantia</option>
            </select>
        </div>`
    }
    static idioma(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-idioma">Idioma</label>
            <select id="${prefixo}-idioma" class="custom-select" size="2" required title="Seleciona o idioma do sistema">
                <option value="Brazilian Portuguese">Português</option>
                <option value="English">English</option>
                <option value="Spanish">Español</option>
            </select>
        </div>`
    }
    static officeCategoria(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-office"></label>
            <select id="${prefixo}-office" class="custom-select" size="2" title="Office2016/Office2019/Office365">
                <option value="Office2016">Office 2016</option>
                <option value="Office2019">Office 2019</option>
                <option value="Office365">Office 365</option>
            </select>
        </div>`
    }
    static officeVersao(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-versao-office">Detalhes da versão</label>
            <select id="${prefixo}-versao-office" class="custom-select" size="2" title="H&amp;S/H&amp;B/365P/365H/PRO">
                <option value="Office Home and Student">H&amp;S</option>
                <option value="Office Home and Business">H&amp;B</option>
                <option value="Office 365 Personal">365P</option>
                <option value="Office 365 Home">365H</option>
                <option value="Office Professional">PRO</option>
            </select>
        </div>`
    }
    static problema(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-problema">Problema da máquina</label>
            <select class="custom-select" size="2" id="${prefixo}-problema" required>
                <option value="3rd Party Hardware">3rd Party Hardware</option>
                <option value="3rd Party Software">3rd Party Software</option>
                <option value="Audio Issues">Audio Issues</option>
                <option value="Battery Related">Battery Related</option>
                <option value="BIOS Issues">BIOS Issues</option>
                <option value="BIOS or HDD Passwords">BIOS or HDD Passwords</option>
                <option value="Bluetooth">Bluetooth</option>
                <option value="BSOD &amp; Random Shutdown">BSOD &amp; Random Shutdown</option>
                <option value="Dell Applications">Dell Applications</option>
                <option value="Dell Mobile Connect">Dell Mobile Connect</option>
                <option value="Dell SupportAssist">Dell SupportAssist</option>
                <option value="Dell SupportAssist / AWCC">Dell SupportAssist / AWCC</option>
                <option value="Docking Stations">Docking Stations</option>
                <option value="Driver Issues">Driver Issues</option>
                <option value="Exception Request (TM &amp; Above)">Exception Request (TM &amp; Above)</option>
                <option value="Gaming Related">Gaming Related</option>
                <option value="HDD Issues">HDD Issues</option>
                <option value="Input Devices">Input Devices</option>
                <option value="Keyboard">Keyboard</option>
                <option value="Monitor Issues">Monitor Issues</option>
                <option value="MS Office Issues">MS Office Issues</option>
                <option value="Networking Issues">Networking Issues</option>
                <option value="No Boot">No Boot</option>
                <option value="No Post">No Post</option>
                <option value="No Power">No Power</option>
                <option value="No Video">No Video</option>
                <option value="Noise Issues">Noise Issues</option>
                <option value="ODD Issues">ODD Issues</option>
                <option value="OS Issues">OS Issues</option>
                <option value="Other - General">Other - General</option>
                <option value="Other - Dell Hardware">Other - Dell Hardware</option>
                <option value="Other Dell Applications">Other Dell Applications</option>
                <option value="Performance Issues">Performance Issues</option>
                <option value="Sleep/Hibernation Issues">Sleep/Hibernation Issues</option>
                <option value="Thermal Issues">Thermal Issues</option>
                <option value="Touchpad">Touchpad</option>
                <option value="Video Issues">Video Issues</option>
                <option value="Webcam Related">Webcam Related</option>
                <option value="Windows Hello">Windows Hello</option>
                <option value="Windows Update">Windows Update</option>
            </select>
        </div>`
    }
    static trigger(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-trigger">Problema da máquina</label>
            <select class="custom-select" size="2" id="${prefixo}-trigger" required>
                <option value="+ 3 DPS dentro de 30 dias">3 DPSs ou mais em 30 dias</option>
                <option value="+ 4 DPS dentro de 1 ano">4 DPSs ou mais em um ano</option>
                <option value="Captura de qualidade">Captura de qualidade</option>
                <option value="Dano acidental">Dano acidental</option>
                <option value="Exceção">Exceção</option>
                <option value="Extravio">Extravio</option>
                <option value="PNC">PNC</option>
                <option value="Problema não solucionado em 30 dias">Problema não solucionado em 30 dias</option>
                <option value="Problema técnico dentro dos 7 primeiros dias">Problema técnico dentro dos 7 primeiros dias</option>
                <option value="Reembolso de Serviço de Reparo">Reembolso de Serviço de Reparo</option>
            </select>
        </div>`
    }
    static windows(prefixo){
        return `
        <div class="form-group col">            
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="${prefixo}-windows">Sistema</label>
                </div>
                <select id="${prefixo}-windows" class="custom-select" size="3" required title="Versão do Windows">
                    <option value="Windows 10 Home">Win 10 Home</option>
                    <option value="Windows 10 Home Single Language">Win 10 SingLang</option>
                    <option value="Windows 10 Professional">Win 10 Pro</option>
                    <option value="Windows 8 Home">Win 8 Home</option>
                    <option value="Windows 8 Professional">Win 8 Pro</option>
                    <option value="Windows 8.1 Home">Win 8.1 Home</option>
                    <option value="Windows 8.1 Single Language">Win 8.1 SingLang</option>
                    <option value="Windows 8.1 Professional">Win 8.1 Pro</option>
                    <option value="Windows 7 Home">Win 7 Home</option>
                    <option value="Windows 7 Professional">Win 7 Pro</option>
                    <option value="Windows 7 Ultimate">Win 7 Ultimate</option>
                </select>
            </div>
        </div>`
    }
    
    /**Botões */
    static submit(prefixo){
        return `
        <button type="submit" id="${prefixo}-submit" class="btn btn-outline-primary btn-block btn-sm">Submit</button>`
    }
    static buttonPrimary(prefixo, texto){
        return `
        <button class="btn btn-sm btn-outline-primary" id="${prefixo}-primary-button">${texto}</button>`
    }
    static buttonSecondary(prefixo, texto){
        return `<button class="btn btn-sm btn-outline-secondary" id="${prefixo}-secondary-button">${texto}</button>`
    }
    
    /**Resultado */
    static resultado(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-resultado">Resultado</label>
            <textarea id="${prefixo}-resultado" cols="30" rows="5" class="form-control" readonly>Resultado...</textarea>
        </div>`
    }
    
    /**Style */
    static estiloBorda(campo, cor){
        campo.style = `border: 1px solid ${cor}; color: ${cor}; font-weight: bold;`
    }
}