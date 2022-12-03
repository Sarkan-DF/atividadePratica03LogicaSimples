// 3. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.

let saldo = 300;
let taxaSaque = 4.50;

const saque = Number.parseFloat(prompt("Digite o valor que desaja sacar, tem que ser um valor positivo: "));


if (saque < 0) {
    document.write("Valor tem que ser positivo!");
}else if (saque % 5 != 0) {
    document.write("Valor tem que ser Multiplo de 5 por exemplo 5, 10, 15 etc...!");
}else if (saque + taxaSaque > saldo) {
    document.write("Voçe não tem saldo suficiente para fazer o saque!")
}else {
    saldo = saldo - (saque + taxaSaque)
document.write(`Saque efetuado com sucesso!<br/>Seu saldo apos o saque é ${saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
}