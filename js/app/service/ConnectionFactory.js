const dbName = 'chat';
const versao = 1;
const stores = ['sem-dps']

let connection = null;
let close = null

export class ConnectionFactory{
    
    constructor(){
        
        throw new Error("A classe ConnectionFactory não pode ser instanciada!")
    }
    
    static getConnection(){
        
        return new Promise((resolve, reject) => {
            
            let openRequest = window.indexedDB.open(dbName, versao);
            
            openRequest.onupgradeneeded = e => {
                
                ConnectionFactory._createStores(e.target.result)
            }
            
            openRequest.onsuccess = e => {
                
                if (!connection) {
                    connection = e.target.result
                    close = connection.close.bind(connection)
                    connection.close = function(){
                        throw new Error("Não é possível fechar a conexão diretamente")
                    }
                }
                resolve(connection)
            }
            
            openRequest.onerror = e => {
                
                console.log(e.target.error)
                reject(e.target.error.name)
            }
        })
    }
    
    static _createStores(connection){
        
        stores.forEach(store => {
            
            if (connection.objectStoreNames.contains(store)) {
                connection.objectStoreNames.deleteObjectStore(store)
            }
            
            connection.createObjectStore(store, { autoIncrement: true})
        })
    }
    
    static closeConnection(){
        
        if(connection){
            
            close()
            connection = null
        }
    }
}