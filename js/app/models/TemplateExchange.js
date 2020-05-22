class TemplateExchange{
    constructor(
        trigger,
        tag,
        modelo,
        ordem,
        sr,
        caso,
        cliente,
        tel1,
        tel2,
        email,
        resumo,
        ...dps
    ){
        this.trigger = trigger;
        this.tag = tag;
        this.modelo = modelo;
        this.ordem = ordem
        this.sr = sr;
        this.caso = caso;
        this.cliente = cliente;
        this.tel1 = tel1;
        this.tel2 = tel2;
        this.email = email;
        this.resumo = resumo;
        this.dps = dps;
    }
}