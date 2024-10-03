// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando número de mesa
const numeroMesa = readline.questionInt('Digite o número de mesa:');

// Capturando o número de pessoas na mesa
let numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
let valorTotal = readline.questionFloat('Digite o valor total da conta: ');


// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');



//Fação sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO
if (metodoPagamento.toLowerCase() === 'pix' || metodoPagamento.toLowerCase() === 'dinheiro') {
    let valorComDesconto = valorTotal * 0.10;
    valorTotal = valorComDesconto;
    
}

else {
    console.log ('Cartão de crédito não tem desconto');
}

//Calculando o valor por pessoa
const valorPorPessoa = valorTotal / numeroPessoas;


// Exibindo os resultados
console.log (`numero da mesa: ${numeroMesa}`);
console.log(`Valor de cada pessoa é:${valorPorPessoa.toFixed(2)}`);
console.log (`valor com desconto é:${valorTotal}`)
console.log(`Metodo de pagamento: ${metodoPagamento}`)
console.log(`numero de pessoas: ${numeroPessoas}`)

const permanecer = readline.question ("Calcular outra conta? (sim/não");
if (permanecer !=="sim") {
    novaMesa = false;
}


