class TemplateRepeatDps{
    constructor(
            problema,
            temperatura,
            sr,
            dias,
            owner,
            tag,
            modelo,
            garantia,
            idade,
            resumo,
            analise,
            ...dps
        ){
        this._problema = problema;
        this._temperatura = temperatura;
        this._sr = sr;
        this._dias = dias;
        this._owner = owner;
        this._tag = tag;
        this._modelo = modelo;
        this._garantia = garantia;
        this._idade = idade;
        this._resumo = resumo;
        this._analise = analise;
        this._dps = dps;
    }
    get problema(){return this._problema}
    get temperatura(){return this._temperatura}
    get sr(){return this._sr}
    get dias(){return this._dias}
    get owner(){return this._owner}
    get tag(){return this._tag}
    get modelo(){return this._modelo}
    get garantia(){return this._garantia}
    get idade(){return this._idade}
    get resumo(){return this._resumo}
    get analise(){return this._analise}
    get dps(){return this._dps}
}