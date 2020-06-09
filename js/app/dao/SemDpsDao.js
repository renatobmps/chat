export class SemDpsDao{
    
    constructor(connection){
        
        this._connection = connection;
        this._store = 'sem-dps'
    }
    
    adiciona(registro) {
        
        return new Promise((resolve, reject) => {
            
            let request = this._connection
            .transaction ([this._store], 'readwrite')
            .objectStore(this._store)
            .add(registro);
            
            request.onsuccess = e => {
                
                resolve();
            }
            
            request.onerror = e => {
                
                console.log(e.target.onerror);
                reject('Não foi possível adicionar a registro')
            }
        })
    }
    listaTodos(){

        return new Promise((resolve, reject) => {

            let cursor = this._connection
            .transaction ([this._store], 'readwrite')
            .objectStore(this._store)
            .openCursor()
            
            let semDps = []

            cursor.onsuccess = e => {

                let atual = e.target.result

                if (atual) {
                    let dado = atual.value

                    semDps.push(new SemDps(dado._login, dado._caso, dado._data, dado._artigo, dado._motivo, dado._problema, dado._data, dado._quantidade, dado._valor))

                    atual.continue()
                }else{

                    resolve(semDps)
                }
            }

            cursor.onerror = e => {

                reject("Não foi possível listar os registros")
            }
        })
    }
    apagaTodos(){

        return new Promise((resolve, reject) => {

            let request = this._connection
            .transaction([this._store],'readwrite')
            .objectStore(this._store)
            .clear();

            request.onsuccess = e => {

                resolve('Registros apagados com sucesso')
            }
            
            request.onerror = e => {

                console.log(e.target.error)
                reject('Não foi possível apagar registros')
            }
        })
    }
}