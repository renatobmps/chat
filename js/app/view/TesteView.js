import { View } from "./View";
import { InputsView } from "./InputsView";

export class TesteView extends View{

    constructor(elemento){

        super(elemento)

        this.prefixo = "teste"
    }

    template(){

        return `
        <form class="container">
            <div class='card'>
                <div class='card-header'>
                    Analista
                </div>
                <div class='card-body'>
                    citrix${InputsView.citrix(this.prefixo)}
                    badge${InputsView.badge(this.prefixo)}
                    horario, entrada${InputsView.horario(this.prefixo, 'entrada')}
                    horario, saida${InputsView.horario(this.prefixo, 'saida')}
                </div>
            </div>
            <br>
            <div class='card'>
                <div class='card-header'>
                    Cliente
                </div>
                <div class='card-body'>
                    cliente${InputsView.cliente(this.prefixo)}
                    telefonePrincipal${InputsView.telefonePrincipal(this.prefixo)}
                    telefoneAdicional${InputsView.telefoneAdicional(this.prefixo)}
                    email${InputsView.email(this.prefixo)}
                    cpf${InputsView.cpf(this.prefixo)}
                    data, nascimento, Data de nascimento${InputsView.data(this.prefixo, 'nascimento', 'Data de nascimento')}
                    cnpj${InputsView.cnpj(this.prefixo)}
                    inscricaoEstatual${InputsView.inscricaoEstadual(this.prefixo)}
                </div>
            </div>
            <br>
            <div class='card'>
                <div class='card-header'>
                    Atendimento
                </div>
                <div class='card-body'>
                    caso${InputsView.caso(this.prefixo)}
                    srAge${InputsView.srAge(this.prefixo)}
                    data, atendimento, Inicio do atendimento${InputsView.data(this.prefixo, "atendimento", 'Inicio do atendimento')}
                    motivo${InputsView.motivo(this.prefixo)}
                    ordem${InputsView.ordem(this.prefixo)}
                    valor${InputsView.valor(this.prefixo)}
                    temperatura${InputsView.temperatura(this.prefixo)}
                    aceitaIntervencao${InputsView.aceitaIntervencao(this.prefixo)}
                    guidance${InputsView.guidance(this.prefixo)}
                </div>
            </div>
            <br>
            <div class='card'>
                <div class='card-header'>
                    5 Good Lines
                </div>
                <div class='card-body'>
                    diag${InputsView.diag(this.prefixo)}
                    code${InputsView.code(this.prefixo)}
                    dpsQuantidade${InputsView.dpsQuantidade(this.prefixo)}
                    cpf${InputsView.cpf(this.prefixo)}
                    data, nascimento, Data de nascimento${InputsView.data(this.prefixo, "nascimento", "Data de nascimento")}
                    cnpj${InputsView.cnpj(this.prefixo)}
                    inscricaoEstadual${InputsView.inscricaoEstadual(this.prefixo)}
                    arquiteturaHd${InputsView.arquiteturaHd(this.prefixo)}
                    idioma${InputsView.idioma(this.prefixo)}
                    windows${InputsView.windows(this.prefixo)}
                </div>
            </div>
            <br>
            <div class='card'>
                <div class='card-header'>
                    DPS
                </div>
                <div class='card-body'>
                    dps${InputsView.dps(this.prefixo)}
                    dpsType${InputsView.dpsType(this.prefixo)}
                    peca${InputsView.peca(this.prefixo)}
                    data, inicio, Inicio do atendimento${InputsView.data(this.prefixo, 'inicio', 'Inicio do atendimento')}
                    data, termino, Termino do atendimento${InputsView.data(this.prefixo, 'termino', 'Termino do atendimento')}
                    reporte${InputsView.reporte(this.prefixo)}
                    dpsCompleto${InputsView.dpsCompleto(this.prefixo)}
                </div>
            </div>
            <br>
            <div class='card'>
                <div class='card-header'>
                    Máquina
                </div>
                <div class='card-body'>
                    tag${InputsView.tag(this.prefixo)}
                    tagAccount${InputsView.tagAccount(this.prefixo)}
                    tagAge${InputsView.tagAge(this.prefixo)}
                    modelo${InputsView.modelo(this.prefixo)}
                    microsoft${InputsView.microsoft(this.prefixo)}
                    officeCategoria${InputsView.officeCategoria(this.prefixo)}
                    officeVersao${InputsView.officeVersao(this.prefixo)}
                    officeFixit${InputsView.officeFixit(this.prefixo)}
                    officeOspp${InputsView.officeOspp(this.prefixo)}
                    officeMsa ${InputsView.officeMsa(this.prefixo)}
                </div>
            </div>
            <br>
            <div class='card'>
                <div class='card-header'>
                    Problema
                </div>
                <div class='card-body'>
                    artigo ${InputsView.artigo(this.prefixo)}
                    contraSenhaCodigo ${InputsView.contraSenhaCodigo(this.prefixo)}
                    resumo ${InputsView.resumo(this.prefixo)}
                    trigger ${InputsView.trigger(this.prefixo)}
                    analiseL2 ${InputsView.analiseL2(this.prefixo)}
                    contraSenhaTipo ${InputsView.contraSenhaTipo(this.prefixo)}
                    bateriaProjeto ${InputsView.bateriaProjeto(this.prefixo)}
                    bateriaAtual ${InputsView.bateriaAtual(this.prefixo)}
                    garantia ${InputsView.garantia(this.prefixo)}
                    problema ${InputsView.problema(this.prefixo)}
                </div>
            </div>
            <br>
            <div class='card'>
                <div class='card-header'>
                    Botões
                </div>
                <div class='card-body'>
                    submit ${InputsView.submit(this.prefixo)}
                    buttonPrimary ${InputsView.buttonPrimary(this.prefixo, "Teste")}
                    buttonSecondary ${InputsView.buttonSecondary(this.prefixo, "Teste")}
                </div>
            </div>
            <br>
            <div class='card'>
                <div class='card-header'>
                    Resultado
                </div>
                <div class='card-body'>
                    resultado ${InputsView.resultado(this.prefixo)}
                </div>
            </div>
        </form>
        `
    }
}