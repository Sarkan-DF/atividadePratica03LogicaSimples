// 12. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let numeros = 0;
let numeroMedia = 0;
let media = 0;
let positivos = 0;
let negativos = 0;
let porcentagemPositivos = 0;
let porcentagemNegativos = 0;
let contadorPorcentagem = 0;

for (let index = 1; index <= 6; index++) {
    numeros = Number.parseInt(prompt(`Digite o ${index}º numero: `))
    numeroMedia += numeros
    media = numeroMedia / index

    contadorPorcentagem++

    if (numeros > 0 != 0) {
        positivos++
    }else{
        negativos++
    }
}

porcentagemPositivos = (positivos / contadorPorcentagem) * 100
porcentagemNegativos = (negativos / contadorPorcentagem) * 100

console.log(`A media dos numeros é ${media.toFixed(2)}.`)
console.log(`A quantidade de numeros positivos é ${positivos}.`)
console.log(`A quantidade de numeros negativos é ${negativos}.`)
console.log(`A porcetagens de numeros positivos é ${porcentagemPositivos.toFixed(2)}%`)
console.log(`A porcetagens de numeros negativo é ${porcentagemNegativos.toFixed(2)}%.`)