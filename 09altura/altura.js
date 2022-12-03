// 9. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let altura = 0;
let maiorAltura = 0;
let menorAltura = 99;

for (let index = 0; index < 15 ; index++) {
    altura = Number.parseFloat(prompt("Digite sua altura: "))
    if (maiorAltura < altura){
        maiorAltura = altura
    }
    if (menorAltura > altura) {
        menorAltura = altura
    }
}

document.write(`Maior altura é: ${maiorAltura} <br>`)  
document.write(`Menor altura é: ${menorAltura}`)  

console.log(maiorAltura)
console.log(menorAltura)