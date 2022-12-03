// 8. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6

let numeroTabuada = Number.parseInt(prompt("Digite o numero que deseja ver a tabuada: "));

for (let index = 1; index <= 10; index++) {
    document.write(`${numeroTabuada} X ${index} = ${index * numeroTabuada} <br>`)   
}