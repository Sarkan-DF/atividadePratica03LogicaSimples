// 11. Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

const isPrime = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
};

const numero = 30
let mensagem = ""

for (let index = numero; index > 0; index--) {
    if (!isPrime(index)){
        mensagem += `${index} `
    }else{
        mensagem += `[${index}] `
    }
}

document.write(mensagem)