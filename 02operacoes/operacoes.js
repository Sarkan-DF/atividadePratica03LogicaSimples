// 2. Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

const operacao = prompt("Digite [+] para somar \nDigite [-] para subitrair \nDigite [*] para multiplicar \nDigite [/] para dividir \n");
const nun1 = Number.parseInt(prompt("Digite o primeiro numero: "));
const nun2 = Number.parseInt(prompt("Digite o segundo numero: "));
let resultado = 0;

switch (operacao) {
    case "+":
        resultado = nun1 + nun2;
        break;
    
    case "-":
        resultado = nun1 - nun2;
        break;

    case "*":
        resultado = nun1 * nun2;
        break;

    case "/":
        resultado = nun1 / nun2;
        break;
}

document.write(`O resultado da operação solicitada é ${resultado}.`)
console.log(`O resultado da operação solicitada é ${resultado}`)