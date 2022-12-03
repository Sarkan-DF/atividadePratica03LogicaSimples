// Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

// Idade Peso Categoria
// Até 12 anos - Infantil
// 13 a 16 anos Até 40kg Juvenil leve
// Acima de 40kg Juvenil pesado
// 17 a 24 anos Até 45kg Sênior leve
// Acima de 45kg até 60kg Sênior médio
// Acima de 60kg Sênior pesado
// Acima de 24 anos - Veterano

const idade = Number.parseInt(prompt("Digite sua idade: "));
const peso = Number.parseInt(prompt("Digite seu peso: "));

if (idade <= 12) {
    mensagem = "Infantil";
}
if (idade >= 13 && idade <= 16){
    if (peso <= 40){
        mensagem = "Juvenil leve";
    }else {
        mensagem = "Juvenil pesado";
    }
}
if (idade >= 17 && idade <= 24) {
    if (peso <= 45) {
        mensagem = "Sênior leve";
    }else if (peso >= 46 && peso <= 60) {
        mensagem = "Sênior médio";
    }else {
        mensagem = "Sênior pesado";
    }
}
if (idade > 24) {
    mensagem = "Veterano";
}

document.write(mensagem)