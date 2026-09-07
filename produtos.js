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