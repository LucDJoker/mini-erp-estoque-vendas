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