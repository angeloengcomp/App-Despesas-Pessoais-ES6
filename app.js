class Despesa {
    constructor(dia,mes,ano,tipo,descricao,valor){
        this.dia = dia
        this.mes = mes
        this.ano = ano
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
}

class Bd {

    constructor(){
        let id = localStorage.getItem('id')
        if(id === null){
            localStorage.setItem('id',0)
        }
    }

    getProximoId(){
        let proximoID = localStorage.getItem('id')
    }

    gravar (d){
        localStorage.setItem('despesa', JSON.stringify(d))
    }
}

function cadastrarDespesa(){

    let dia = document.getElementById('dia')
    let mes = document.getElementById('mes')
    let ano =   document.getElementById('ano')
    let tipo =  document.getElementById('tipo')
    let descricao =  document.getElementById('descricao')
    let valor =  document.getElementById('valor')

    let despesa = new Despesa (
        dia.value, 
        mes.value, 
        ano.value, 
        tipo.value, 
        descricao.value, 
        valor.value
        )

    bg.gravar(despesa)
}

