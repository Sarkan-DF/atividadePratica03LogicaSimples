// 10. Faça um programa usando a estrutura “for” que leia um número
// inteiro positivo e mostre na tela uma contagem de 0 até o valor
// digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

const numero = Number.parseInt(prompt("Digite um numero: "))
let mensagem = ""

for (let index = 0; index <= numero ; index++) {
    mensagem = mensagem + `${index}, `
}

document.write(`Contagem: ${mensagem} FIM!`)