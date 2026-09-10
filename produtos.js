function cadastrarProduto(estoque, nome, categoria, preco, quantidade) {
    if (!nome || nome.trim() === "" || !categoria || categoria.trim() === "" || isNaN(preco) || preco <= 0 || isNaN(quantidade) || quantidade < 0) {
        console.log("Dados incorretos! Produto nao cadastrado.");
        return;
    }
    const produtoExistente = estoque.find(produto => produto.nome.toLowerCase() === nome.trim().toLowerCase());
    if (produtoExistente) {
        console.log("Erro: Produto ja Existente!");
        return;
    }
    estoque.push({ 
        nome: nome.trim(), 
        categoria: categoria.trim(), 
        preco: Number(preco), 
        quantidade: Number(quantidade) 
    });
    console.log("Produto cadastrado com sucesso!");
}

function listarProdutos(estoque) {
    if (estoque.length === 0){
        console.log("Não há produtos em estoque")
        return;
    }

    console.log("\n--- LISTA DE PRODUTOS ---");
    for (let i = 0; i < estoque.length; i++) {
        console.log("Nome: " + estoque[i].nome);
        console.log("Categoria: " + estoque[i].categoria);
        console.log("Preco: R$" + estoque[i].preco.toFixed(2));
        console.log("Quantidade em estoque: " + estoque[i].quantidade);
        console.log("------------------------");
    }

}
function buscarProduto(estoque, nome) {
    if (!nome || nome.trim() === "") {
        console.log ("Produto não encontrado")
        return null;
    }
    const produtoEncontrado = estoque.find(produto => produto.nome.toLowerCase() === nome.toString().toLowerCase());       
    if (!produtoEncontrado) {
        console.log("Produto não encontrado!");
        return null;
    }
    console.log("Produto encontrado!");
    return produtoEncontrado;   
}
function atualizarProduto(estoque, nome, novoNome, novaCategoria, novoPreco, novaQuantidade) {
    if (!nome || nome.trim() === "" || !novoNome || novoNome.trim() === "" || !novaCategoria || novaCategoria.trim() === "" || isNaN(novoPreco) || novoPreco <= 0 || isNaN(novaQuantidade) || novaQuantidade < 0) {
        console.log("Dados incorretos! Produto nao atualizado.");
        return;
    }
    const produtoEncontrado = estoque.find(produto => produto.nome.toLowerCase() === nome.trim().toLowerCase());
    if (!produtoEncontrado) {
        console.log("Produto não encontrado!");
        return;
    }   

    produtoEncontrado.nome = novoNome.trim();
    produtoEncontrado.categoria = novaCategoria.trim();
    produtoEncontrado.preco = Number(novoPreco);
    produtoEncontrado.quantidade = Number(novaQuantidade);
    console.log("Produto atualizado com sucesso!");
}
function removerProduto(estoque, nome) {
    const index = estoque.findIndex(produto => produto.nome.toLowerCase() === nome.toLowerCase());
    if (index === -1) {
        console.log("Produto não encontrado!");
        return;
    }       
    estoque.splice(index, 1);
    console.log("Produto removido com sucesso!");
}
module.exports = { cadastrarProduto, listarProdutos, buscarProduto, atualizarProduto, removerProduto };
