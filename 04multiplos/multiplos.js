// 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

const numero = 250
multiplos3 = [];
multiplos5 = [];

for (let index = 1; index <= numero; index++) {
    if (index % 3 == 0) {
        multiplos3.push(index);
    }
    if (index % 5 == 0) {
        multiplos5.push(index);
    }
}

console.log(`Multiplos de 3 ${multiplos3}.`);
console.log(`Multiplos de 5 ${multiplos5}.`);