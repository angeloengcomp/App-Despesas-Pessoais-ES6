class Despesa {
    constructor(dia, mes, ano, tipo, descricao, valor) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
    validarDados(){
        // retorna o valor de um determinado objeto
        for (let i in this) {
           //acessa cada um dos valores dos atributos como "this.ano"
           if(this[i]==undefined ||this[i]==''||this[i]==null){
               return false//caso alguma informação n exista, avisara a função validar dados
           }
           return true // informações completas> segue para incerssão no banco de dados
        }

    }
}

class Bd {

    constructor() {
        let id = localStorage.getItem('id')//id recebe o valor de id no banco de dados
        if (id === null) {
            localStorage.setItem('id', 0)//veriica e caso n exista nenhum id no banco de dados, ele vai setar o primeiro id com 0
        }
    }

    getProximoId() {
        let proximoID = localStorage.getItem('id')
        return parseInt(proximoID) + 1 //coloca os dados das despesas dentro do BD
    }

    gravar(d) {
      
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))//despesa recebe um valor convertido para JSON
        localStorage.setItem('id', id)
    }
}

let bd = new Bd()

function cadastrarDespesa() {

    let dia = document.getElementById('dia')
    let mes = document.getElementById('mes')
    let ano = document.getElementById('ano')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        dia.value,
        mes.value,
        ano.value,
        tipo.value,
        descricao.value,
        valor.value
    )
    if(despesa.validarDados()){
       // bd.gravar(despesa)//aloca os dados da despesa dentro do banco de dados do navegador
        //msg de sucesso
        $('#successGravacao').modal('show')
    }else{
        $('#erroGravacao').modal('show')//jquery para ativar o modal
        //msg de erro
    }
  
}

