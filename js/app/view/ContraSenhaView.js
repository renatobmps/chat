class ContraSenhaView extends View{
    constructor(elemento){
        super(elemento)
    }
    template(model){
        return `
        <form>
            <div class="form-row">
                <div class="form-group col">
                    <label for="contra-login">Citrix</label>
                    <input type="text" id="contra-login" class="form-control form-control-sm" value="${localStorage.getItem('login') || ''}" placeholder="seu_login_de_citrix" title="Entre com o seu login de Citrix" required>
                </div>
                <div class="form-group col">
                    <label for="contra-badge">Badge</label>
                    <input type="number" id="contra-badge" class="form-control form-control-sm" value="${localStorage.getItem('badge') || ''}" placeholder="" title="Entre com o seu número de badge" required>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col">
                    <label for="contra-tag">TAG</label>
                    <input type="text" id="contra-tag" class="form-control form-control-sm" value="${localStorage.getItem('tag') || ''}" placeholder="XXXXXX2" title="Entre com a TAG da máquina" required>
                </div>
                <div class="form-group col">
                    <label for="contra-account">Account TAG</label>
                    <input type="text" id="contra-account" class="form-control form-control-sm" value="" placeholder="VIA VAREJO" title="Entre com o nome de Account vinculado com  a TAG da máquina" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="contra-cliente">Nome do cliente</label>
                    <input type="text" id="contra-cliente" class="form-control form-control-sm" value="${localStorage.getItem('cliente') || ''}" placeholder="Fulano da Silva" title="Entre com o nome completo do cliente" required>
                </div>
                <div class="form-group col">
                    <label for="contra-email">E-mail do cliente</label>
                    <input type="email" id="contra-email" class="form-control form-control-sm" value="${localStorage.getItem('email') || ''}" placeholder="cliente@email.com" title="Entre com o endereço de e-mail do cliente" required>
                </div>
                <div class="form-group col">
                    <label for="contra-telefone">Telefone do cliente</label>
                    <input type="tel" id="contra-telefone" class="form-control form-control-sm" value="${localStorage.getItem('telefone') || ''}" placeholder="11988776655" title="Entre com o nome de Account vinculado com  a TAG da máquina" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col input-group-sm">
                    <label for="contra-tipo">Tipo de solicitação</label>
                    <select id="contra-tipo" class="custom-select">
                        <option value="BIOS">BIOS</option>
                        <option value="ADMIN">Admin</option>
                        <option value="HDD">HD</option>
                    </select>
                </div>
                <div class="form-group col">
                    <label for="contra-codigo">Código</label>
                    <input type="text" id="contra-codigo" class="form-control form-control-sm" value="" placeholder="#HQWHSL2-6FF1" title="Entre com o código gerado pelo cliente" required>
                </div>
            </div>
            <div class="dropdown-divider"></div>
            <button type="submit" class="btn btn-outline-primary btn-block">Gerar template e copiar</button>
            <div class="dropdown-divider"></div>
            //Aqui tem que aparecer o resultado
        </form>
        `
    }
}