const valorDoProduto = 100000;
const totalParcelas = 10;
const valorPago = 300;


const valorDaParcela = (valorDoProduto / 100) / totalParcelas


const parcelasPagas = valorPago / valorDaParcela




console.log(`Das ${totalParcelas} parcelas totais, você pagou ${parcelasPagas} parcelas. Somando um valor de R$ ${valorPago}, restando o valor de R$  ${(valorDoProduto / 100) - valorPago}`)

