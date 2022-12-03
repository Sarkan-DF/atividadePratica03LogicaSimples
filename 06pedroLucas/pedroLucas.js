// 6. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let pedro = 1.50;
let lucas = 1.10;
let anos = 0;

while(lucas <= pedro){
    anos++;
    pedro += 0.02;
    lucas += 0.03;
    console.log(anos, lucas, pedro)
}

document.write(`Anos para lucas iguala pedro ${anos - 1} anos.<br>`)
document.write(`Anos para lucas passar pedro ${anos} anos.`)