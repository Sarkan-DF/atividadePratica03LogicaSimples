// 7. Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

const velocidade = Number.parseInt(prompt("Digite a velocidade atual do carro: "));
let mensagem = ""

if (velocidade > 80) {
   const multa = (velocidade - 80) * 5;
   mensagem = `Sua velocidade é ${velocidade}Km você foi multado em ${multa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.`;
}else{
    mensagem = "Sua velocidade está dentro da permitida.";
}

document.write(mensagem)