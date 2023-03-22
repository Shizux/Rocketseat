/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let familia = {                  /*  Objeto criado    */
    receitas: [1000, 2000],
    despesas: [1000, 3000]
}

function soma(array) {    /* função para calcular os valores dentro do array */
    let total = 0;

    for(let valor of array){
        total += valor
    }
        return total
    }


function balanco() {    /* função para calcular e mostrar o resultado */
    const calcularReceitas = soma(familia.receitas)
    const calcularDespesas = soma(familia.despesas)

    const total = calcularReceitas - calcularDespesas
    
    const ok = total >= 0 

    let texto = "Negativo"

    if (ok) {
        texto = "Positivo"
    }
    console.log (`Seu saldo é ${texto}: ${total}`)        
}

balanco()
