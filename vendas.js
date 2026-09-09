function registroVenda (identificacaoProduto, quantidadeVendida, listaEstoque, listaVendas) {
    if (!identificacaoProduto || isNaN(quantidadeVendida) || Number(quantidadeVendida) <= 0) {
        return "Dados incorretos!.";
    }
    const produto = listaEstoque.find  (p => Number(p.id) === Number(identificacaoProduto));
    if (!produto){
        return " Produto nao encontrado!"
    }
if (produto.quantidade < quantidadeVendida) {
    return "Estoque Insuficiente!";
}
const novaVenda ={
    id: listaVendas.length + 1,
    produtoId: identificacaoProduto,
    quantidade: quantidadeVendida,
    valorTotal: quantidadeVendida * produto.preco,
    data: new Date().toLocaleDateString()
};
listaVendas.push(novaVenda);
return "Venda concluida com sucesso!";
}

function historicoVendas(listaVendas) {
if(listaVendas.length === 0) {
    console.log ("Não existem vendas registradas!");
return;
}

console.log ("Histórico de Vendas");
listaVendas.forEach(venda => {
    console.log(`Identificacao da Venda: ${venda.id}`);
    console.log(`Data: ${venda.data}`);
    console.log(`Identificacao do Produto: ${venda.produtoId}`);
    console.log(`Quantidade: ${venda.quantidade}`);
    console.log(`Valor Total: R$ ${venda.valorTotal}`)
});
}

function buscarVenda(listaVendas, idBuscar){
if (!idBuscar || isNaN(idBuscar)){
    return "Venda não encontrada!";
}
const vendaEncontrada = listaVendas.find(venda => venda.id === Number(idBuscar));
if (!vendaEncontrada){
    return "Venda não Encontrada!";
}
return vendaEncontrada;
}

function baixaEstoque(identificacaoProduto, quantidadeVendida, listaEstoque){
if (!identificacaoProduto || isNaN(quantidadeVendida) || Number(quantidadeVendida) <= 0) {
        console.log("ID incorreto ou quantidade incorreta!");
        return false;
}
const produto = listaEstoque.find (produto => produto.id === Number(identificacaoProduto));
if (!produto) {
    console.log("Produto não encontrado")
    return false;
}
if (produto.quantidade < Number(quantidadeVendida)) {
    console.log ("Quantidade insuficiente em estoque");
    return false;
}
produto.quantidade -= Number(quantidadeVendida);
    console.log("Estoque atualizado com sucesso")
    return true
}