export class DateHelper {
    
    constructor() {
        
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    
    static textoParaData(texto) {
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');
             
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataParaString(data){
        return `${data.getFullYear()}-${('00'+(data.getMonth()+1)).slice(-2)}-${('00'+data.getDate()).slice(-2)}`
    }
}