
let vendas = []; 

function registroVenda (nomeProduto, quantidadeVendida) {
    if (!nomeProduto || isNaN(quantidadeVendida) || Number(quantidadeVendida) <= 0) {
        return "Dados incorretos!.";
    }
    const produto = estoque.find  (p => p.nome.toLowerCase() === nomeProduto.toLowerCase());
    if (!produto){
        return " Produto nao encontrado!"
    }
    if (produto.quantidade < quantidadeVendida) {
        return "Estoque Insuficiente!";
    }
    const baixaSucesso = baixaEstoque(nomeProduto, quantidadeVendida);
    if (baixaSucesso){
        const novaVenda ={
            id: vendas.length + 1,
            produtoId: produto.nome,
            quantidade: Number(quantidadeVendida),
            valorTotal: quantidadeVendida * produto.preco,
            data: new Date().toLocaleDateString()
    };
    vendas.push(novaVenda);
    return "Venda concluida com sucesso!";
    }
return "Erro ao finalizar venda!";
}

function historicoVendas() {
    if(vendas.length === 0) {
    console.log ("Não existem vendas registradas!");
    return;
}

console.log ("Histórico de Vendas");
vendas.forEach(venda => {
    console.log(`Identificacao da Venda: ${venda.id}`);
    console.log(`Data: ${venda.data}`);
    console.log(`Identificacao do Produto: ${venda.produtoNome}`);
    console.log(`Quantidade: ${venda.quantidade}`);
    console.log(`Valor Total: R$ ${venda.valorTotal.toFixed(2)}`)
    });
}

function buscarVenda(nomeBuscar){
    if (!nomeBuscar || isNaN(nomeBuscar)){
        return "Venda não encontrada!";
}
    const vendaEncontrada = vendas.find(venda => venda.id === Number(nomeBuscar));
    if (!vendaEncontrada){
            return "Venda não Encontrada!";
}
    return vendaEncontrada;
}

function baixaEstoque(nomeProduto, quantidadeVendida){
    if (!nomeProduto || isNaN(quantidadeVendida) || Number(quantidadeVendida) <= 0) {
        console.log("Nome incorreto ou quantidade incorreta!");
        return false;
}
    const produto = estoque.find (p => p.nome.toLowerCase() === nomeProduto.toLowerCase());
    if (!produto) {
        console.log("Produto não encontrado")
        return false;
}
    if (produto.quantidade < Number(quantidadeVendida)) {
        console.log ("Quantidade insuficiente em estoque");
        return false;
}
    produto.quantidade -= Number(quantidadeVendida);
        return true
}