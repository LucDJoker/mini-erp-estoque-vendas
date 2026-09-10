let estoque = [];

function cadastrarProduto(nome, categoria, preco, quantidade) {
    if (!nome || !categoria || isNaN(preco) || isNaN(quantidade) || preco <= 0 || quantidade < 0) {
        console.log("Dados inválidos!");
        return;
    }
    const produtoExistente = estoque.find(produto => produto.nome.toLowerCase() === nome.toString().toLowerCase());
    if (produtoExistente) {
        console.log("Produto Existente!");
        return;
    }
    estoque.push({ 
        nome: nome.toString(), 
        categoria: categoria.toString(), 
        preco: preco.toString(), 
        quantidade: quantidade.toString() 
    });
    console.log("Produto cadastrado com sucesso!");
}

function listarProdutos() {
    if (estoque.length ===0){
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
function buscarProduto(nome) {
    if (!nome){
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

