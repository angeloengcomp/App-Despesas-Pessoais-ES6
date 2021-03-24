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

    console.log(despesa)
}



