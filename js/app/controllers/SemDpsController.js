/*let registro1 = new SemDps('Renato_brandao_marti', '56789123', '2020-05-08', 'SLN123456', 'Cliente realizando backup e formatação', 'No Boot')

document.body.innerHTML = `
<table>
    <thead>
        <tr>
            <th>Owner</th>
            <th>Case</th>
            <th>Data</th>
            <th>OKB</th>
            <th>Motivo</th>
            <th>Problema</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${registro1.login}</td>
            <td>${registro1.caso}</td>
            <td>${DateHelper.dataParaTexto(registro1.data)}</td>
            <td>${registro1.artigo}</td>
            <td>${registro1.motivo}</td>
            <td>${registro1.problema}</td>
        </tr>
    </tbody>
</table>
`*/

class SemDpsController{

    constructor(){

        let $ = document.querySelector.bind(document)
        
        this._inputLogin = $("#login");
        this._inputCaso = $("#caso");
        this._inputData = $("#data")
        this._inputArtigo = $("#artigo")
        this._inputMotivo = $("#motivo")
        this._inputProblema = $("#problema")

        this._listaSemDps = new ListaSemDps()

        this._semDpsView = new semDpsView($("#semDpsView"))
        this._semDpsView.update(this._listaSemDps)

        this._limpaFormulario()
    }

    adiciona(event){
        event.preventDefault()

        this._listaSemDps.adiciona(new SemDps(
            this._inputLogin.value,
            this._inputCaso.value,
            DateHelper.textoParaData(this._inputData.value),
            this._inputArtigo.value,
            this._inputMotivo.value,
            this._inputProblema.value
        ))

        this._semDpsView.update(this._listaSemDps)

        this._addLocalStorage('login', this._inputLogin.value)
        this._addLocalStorage('hoje', this._inputData.value)
        this._addLocalStorage('tabela', document.querySelector('tbody').innerHTML)

        this._limpaFormulario()
    }
    _limpaFormulario() {
     
        this._inputLogin.focus();
        this._inputLogin.value = localStorage.getItem('login')
        this._inputCaso.value = '';
        this._inputData.value = localStorage.getItem('hoje') //new Date();
        this._inputArtigo.value = '';
        this._inputMotivo.value = '';
    }
    _addLocalStorage(id, valor){

        localStorage.setItem(id, valor)
    }
}