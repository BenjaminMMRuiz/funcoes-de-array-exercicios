// # Exercício 2
// Crie um array de números que contenha 8 números.
// Com este array e utilizando o `map()`, retorne os arrays abaixo:

// 1. Retorne um novo array contendo os números multiplicados por 5. Guarde esse array dentro de uma variável `const quintuplos`.


const numeros = [07, 15, 24, 98, 52, 87, 74, 39]

function mult (numero){
    return numero * 5
}

const numerosNovos = numeros.map(mult)

console.log(`Os numeros ${numeros} foram multiplicados e os valores são: ${numerosNovos}`)

// 2. Retorne um novo array contendo os números divididos por 2. Guarde esse array dentro de uma variável `const metades`.

function div (numero){
    return numero / 2
}

const metades = numerosNovos.map(div)
console.log(` Os numeros ${numeros} foram divididos e seus valores são: ${metades}`)