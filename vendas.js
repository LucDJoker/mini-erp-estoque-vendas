function registroVenda (identificacaoProduto, quantidadeVendida, listaEstoque, listaVendas) {
    if (identificacaoProduto || isNaN(quantidadeVendida) || (quantidadeVendida <= 0)) {
        return "Dados incorretos!.";
    }
    const produto = listaEstoque.find (p => p.id === identificacaoProduto);
    if (!produto){
        return " Produto nao encontrado!"
    }
if (produto.quantidade < quantidadeVendida) {
    return "Estoque Insuficiente!";
}
produto.quantidade -= quantidadeVendida;
const novaVenda ={
    id: listaVendas.length + 1,
    produtoId: identificacaoProduto,
    quantidade: quantidadeVendida,
    valorTotal: quantidadeVendida * produto.preco,
};
lista.Vendas.push(novaVenda);
return "Venda concluida com sucesso!";
}

function historicoVendas(listaVendas) {
if(listaVendas.length === 0) {
    console.log ("Não existem vendas registradas!");
return;
}
console.log ("Histórico de Vendas");
listaVendas.forEach(venda => {
    console.log("Identificacao da Venda: ${venda.idenfificacaoProduto}");
    console.log("Data: ${venda.data}");
    console.log("Identificacao do Produto: ${venda.identificacaoProduto}");
    console.log("Quantidade: ${venda.quantidadeVendida}");
    console.log("Valor Total: R$ ${venda.valorTotal}")
});
}

function buscarVendaPorId(listaVendas, IdBuscar){
if (idBuscar || isNan(idBuscar)){
    return "Vanda não encontrada!";
}
const vendaEncontrada = listaVendas.find(venda => venda.identificacaoProduto === Number(idBuscar));
if (!vendaEncontrada){
    return "Venda não Encontrada!";
}
return vendaEncontrada;
}