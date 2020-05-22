class TemplateGuidance{
    constructor(
        motivo,
        artigo,
        descricao,
        testes,
        sugestao,
        intervencao,
        ...dps
    ){
        this.motivo = motivo;
        this.artigo = artigo;
        this.descricao = descricao;
        this.testes = testes;
        this.sugestao = sugestao;
        this.intervencao = intervencao;
        this.dps = dps;
    }
}