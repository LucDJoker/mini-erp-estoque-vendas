function cadastrarProduto(nome, categoria, preco, quantidade) {
    estoque.push({ 
        nome: nome, 
        categoria: categoria, 
        preco: preco, 
        quantidade: quantidade 
    });
    console.log("Produto cadastrado com sucesso!");
}

function listarProdutos() {
    console.log("\n--- LISTA DE PRODUTOS ---");
    for (let i = 0; i < estoque.length; i++) {
        console.log("Nome: " + estoque[i].nome);
        console.log("Categoria: " + estoque[i].categoria);
        console.log("Preco: R$" + estoque[i].preco);
        console.log("Quantidade em estoque: " + estoque[i].quantidade);
        console.log("------------------------");
    }

}
function buscarProduto(nome) {
    const produtoEncontrado = estoque.find(produto => produto.nome.toLowerCase() === nome.toLowerCase());       
    if (!produtoEncontrado) {
        console.log("Produto não encontrado!");
        return null;
    }
    console.log("Produto encontrado!");
    return produtoEncontrado;   
}
function atualizarProduto(nome, novoNome, novaCategoria, novoPreco, novaQuantidade) {
    const produtoEncontrado = estoque.find(produto => produto.nome.toLowerCase() === nome.toLowerCase());   
    if (!produtoEncontrado) {
        console.log("Produto não encontrado!");
        return;
    }
    produtoEncontrado.nome = novoNome;
    produtoEncontrado.categoria = novaCategoria;
    produtoEncontrado.preco = novoPreco;
    produtoEncontrado.quantidade = novaQuantidade;
    console.log("Produto atualizado com sucesso!");
}
function removerProduto(nome) {
    const index = estoque.findIndex(produto => produto.nome.toLowerCase() === nome.toLowerCase());
    if (index === -1) {
        console.log("Produto não encontrado!");
        return;
    }       
    estoque.splice(index, 1);
    console.log("Produto removido com sucesso!");
}

