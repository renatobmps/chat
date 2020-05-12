/*let ConnectionFactory = (function(){
    
    const dbName = 'renatobmps';
    const versao = 1;
    const stores = ['sem-dps']
    
    let connection = null;
    let close = null
    
    return class ConnectionFactory{
        
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
})()

/*let banco = {
    name: 'renatobmps',
    version: 1,
    objectStories: [
        'sem-dps',
    ]
}

var connection;

var openRequest = window.indexedDB.open(banco.name, banco.version) //Faz requisição de abertura do banco

/*Eventos do indexed DB
* on upgrade needed: Usado para criar e alterar um banco existente
* on success: Usado para acesso a um banco
* on error: Usado para tratativa de erros
* 
* Cada evento recebe uma função que tem o próprio evento como parâmetro
*//*
openRequest.onupgradeneeded = e => {
    console.log(`Banco '${e.target.result.name}' criado`)
    
    //Cria a Object Store que é como uma tabela do BD Relacional
    let minhaConnection = e.target.result;
    
    if (minhaConnection.objectStoreNames.contains(banco.objectStories[0])) {
        minhaConnection.deleteObjectStore(banco.objectStories[0])
    }
    minhaConnection.createObjectStore(banco.objectStories[0], { autoIncrement: true})
    console.log(`Criado object store '${e.target.result.objectStoreNames[0]}'`)
}

openRequest.onsuccess = e => {
    console.log(`Conexão com '${e.target.result.name}' obtida com sucesso!`)
    
    //Coloca a conexão dentro da var connection
    connection = e.target.result;
    
    listaTodos()
}

openRequest.onerror = e => {
    alert(`Erro: ${e.target.error}`)
}

function adiciona(login, caso, data, artigo, motivo, problema) {
    let transaction = connection.transaction([banco.objectStories[0]], 'readwrite')
    let store = transaction.objectStore(banco.objectStories[0])
    let registro = new SemDps(login, caso, data, artigo, motivo, problema)
    let request = store.add(registro)
    request.onsuccess = e => {
        
        listaTodos()
    }
    request.onerror = e => {
        alert(`Erro ao tentar adicionar registro`)
    }
}

function listaTodos() {
    let transaction = connection.transaction([banco.objectStories[0]], 'readwrite')
    let store = transaction.objectStore(banco.objectStories[0]);
    let cursor = store.openCursor()
    let osSemDps = []
    
    cursor.onsuccess = e => {
        let atual = e.target.result;
        if (atual) {
            let dado = atual.value;
            osSemDps.push(new SemDps(dado._login, dado._caso, dado._data, dado._artigo, dado._motivo, dado._problema))
            atual.continue();
        }else{
            console.log(osSemDps)
            
            //view                    
            update(osSemDps)
        }
    }
}

function update(lista) {
    
    this._bdsemDpsView = new semDpsView($("#semDpsView"))
    this._bdsemDpsView.update(lista)
}

function zeraLista() {
    
    window.indexedDB.deleteDatabase(banco.name)
    negociacoes = []
    update(negociacoes)
    
    alert("Zerado")
    
    location.reload()
}

function enviaForm(e) {
    e.preventDefault()
    
    let $ = document.querySelector.bind(document)
    
    adiciona(new Date($("#data").value), $("#quantidade").value, $("#valor").value)
}*/