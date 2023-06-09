// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto.

// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.

//     Saída esperada:

//     `{ nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}`

// 2. A segunda deve retornar os valores do objeto como texto corrido.

//     Saída esperada:

//     `O valor da propriedade ${propriedade} é ${valor}.`

// 3. Agora, crie uma funcão que recebe um objeto e uma callback como parâmetros. A funcão principal deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

//     Chame a funcão 3, passando como argumentos o **objeto disponibilizado** no arquivo `script.js`, e a função 1.
//     Repita o processo para a funcão 2.


const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//Part1

const part1 = (objeto) => {
    let novoObjeto = {}
for (let i in objeto){
    novoObjeto[i] = objeto[i].toUpperCase()
}
return novoObjeto

}
console.log(part1(infosPessoa))

//Part2

const part2 = (objeto) => {
    let objeto2 = ``
    
    for(let i in objeto){

        let valor = objeto[i]
        let propriedade = [i]

        objeto2 += `O valor da propriedade ${propriedade} é ${valor}.`
    }
return objeto2

}

console.log(part2(infosPessoa))

//Part3

const part3 = () => {
    let familia = {
        nome1 : "Ben",
        nome2 : "Carol",
        nome3 : "Nero",
        nome4 : "Cenoura",
        nome5 : "Abobora"

    }
    return familia
}

//console.log(part3(novoObjeto))

const exercicio3 = (novoObjeto, falsiane) => {

    const gavetaVazia = falsiane(novoObjeto)
    return gavetaVazia
}

console.log(exercicio3(infosPessoa, part3))
console.log(exercicio3(infosPessoa, part1))
console.log(exercicio3(infosPessoa, part2))