class Inputs{
    constructor(){

        throw new Error("classe não pode ser instanciada")
    }

    static login(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-login">Login</label>
            <input type="text" class="form-control form-control-sm" id="${prefixo}-login" required="" placeholder="seu_login_de_citrix" pattern="[&quot;A-Za-z0-9_&quot;]{5,20}" title="login de Citrix">
        </div>
        `
    }

    static tag(prefixo){
        return `
        <div class="form-group col">
            <label for="${prefixo}-artigo">Oracle</label>
            <input type="text" class="form-control form-control-sm" id="${prefixo}-artigo" required="" placeholder="SLNXXXXXX" pattern="[&quot;A-Z0-9&quot;]{9}" title="SLN, PNP, HOW, LNK... usado" maxlength="9">
        </div>
        `
    }
}