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
    recuperarTodosRegistros(){
        //array de despesas
        let despesas= Array()

        let id = localStorage.getItem('id')
        // recuperar todas as despesas cadastradas em localStorage
        for(let i = 1; i <= id; i++){
            //recuperar a despesa e em seguida converte-la atraves do metodo JSON.parseInt()
            let despesa = JSON.parseInt(localStorage.getItem(i))
            console.log(i, despesa)
            

            //verificar se existe a possibilidade de haver indices que foram pulados/removidos nestes casos, nos vamos pular esses indices
            if(despesa===null){
                continue            
            }  
            
            //o metodo push pega cada informação recebida e adiciona em um local do array despesas
            despesas.push(despesa)
          
        }

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
        $('#modalRegistraDespesa').modal('show')
        //as trocas de valores abaixo servem para dar uma dinamica na troca de informações do modal
        document.getElementById('text-description').innerHTML='Despesa cadastrada'
        document.getElementById('modal-titulo-div').className='modal-header text-success'
        document.getElementById('modal-conteudo').innerHTML='Despesa registrada com sucesso.'
        document.getElementById('modal-botao').className='btn btn-success'
        document.getElementById('modal-botao').innerHTML='Voltar'

    }else{
        $('#modalRegistraDespesa').modal('show')//jquery para ativar o modal
        //msg de erro
        //as trocas de valores abaixo servem para dar uma dinamica na troca de informações do modal
        document.getElementById('text-description').innerHTML='Erro na inclusão'
        document.getElementById('modal-titulo-div').className='modal-header text-danger'
        document.getElementById('modal-conteudo').innerHTML='Preencha todos os campos'
        document.getElementById('modal-botao').className='btn btn-danger'
        document.getElementById('modal-botao').innerHTML='Voltar e Tentar novamente'
    }
  
}

function carregaListaDespesas(){
    bd.recuperarTodosRegistros()


}

