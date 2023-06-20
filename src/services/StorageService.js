const StorageService = {
    save:(key, value) => {
        try{
            localStorage.setItem(key, JSON.stringify(value))
        } catch(e){
            console.log("Erro ao salvar dado.", e)
        }
    },
    get:(key) => {
        try {
            const data = localStorage.getItem(key)
            return JSON.parse(data)
        } catch(e){
            console.log("Erro ao ler dado.", e)
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key)
        } catch(e){
            console.log("Erro ao remover dado.", e)
        }
    }
}

export default StorageService