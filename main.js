const readline = require( 'readline-sync');
const moduloProdutos = require('./produtos.js');
const moduloVendas = require('./vendas.js');
const moduloRelatorios = require('./relatorios.js');

let estoque = [];
let vendas = [];

let sistemaRodando = true;

while (sistemaRodando) {
    console.log("\n ===== Mini Erp ===== \n");
    console.log("1 - Cadastrar Produto");
    console.log("2 - Listar Produtos");
    console.log("3 - Buscar Produto(Simples)");
    console.log("4 - Atualizar Produto");
    console.log("5 - Remover Produto");
    console.log("6 - Registrar Venda");
    console.log("7 - Histórico de Vendas");
    console.log("8 - Buscar Venda");
    console.log("9 - Relatório Avançado(Nome + Categoria)");
    console.log("10 - Relatório Geral");
    console.log("0 - Sair do Sistema");

    
    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {
        case "1":
            console.log("\n-- Cadastrando produto --");
            let nome = readline.question("Digite o nome do produto: ");               
            let categoria = readline.question("Digite a categoria do produto: ");
            let preco = parseFloat(readline.question("Digite o preco do produto: "));
            let quantidade = parseInt(readline.question("Digite a quantidade em estoque: "));
            moduloProdutos.cadastrarProduto(estoque, nome, categoria, preco, quantidade);
            break;
        case "2":
            moduloProdutos.listarProdutos(estoque);
            break;  
        case "3":
            console.log("\n-- Buscando Produto --");
            let nomeBusca = readline.question("Digite o nome do produto a ser buscado: ");
            moduloProdutos.buscarProduto(estoque, nomeBusca);
            break;
        case "4":
            console.log("\n-- Atualizar produto --");
            let nomeProdutoAtualizar = readline.question("Digite o nome do produto a ser atualizado: ");
            let novoNome = readline.question("Digite o novo nome do produto: ");
            let novaCategoria = readline.question("Digite a nova categoria do produto: ");
            let novoPreco = parseFloat(readline.question("Digite o novo preço do produto: "));
            let novaQuantidade = parseInt(readline.question("Digite a nova quantidade em estoque: "));
            moduloProdutos.atualizarProduto(estoque, nomeProdutoAtualizar, novoNome, novaCategoria, novoPreco, novaQuantidade);
            break;
        case "5":
            let nomeProdutoRemover = readline.question("Digite o nome do produto a ser removido: ");
            moduloProdutos.removerProduto(estoque, nomeProdutoRemover);
            break;  
        case "6":
            console.log("\n-- Registrando venda --");
            let nomeProdutoVenda = readline.question("Digite o nome do produto vendido: ");
            let quantidadeVendidaVenda = parseInt(readline.question("Digite a quantidade vendida: "));
            let resultadoVendaVenda = moduloVendas.registroVenda(estoque, vendas, nomeProdutoVenda, quantidadeVendidaVenda);
            console.log(resultadoVendaVenda);
            break;
            
        case "7":
            moduloVendas.historicoVendas(vendas);
            break;
        case "8":
            let idvenda = parseInt(readline.question("Digite o ID da venda a ser buscada: "));
            let vendaEncontrada = moduloVendas.buscarVenda(vendas, idvenda);
            console.log(vendaEncontrada);
            break;
        case "9":
            console.log("\n-- Busca Avancada --");
            console.log("(deixe em branco para buscar todos os produtos)");
            let busNome = readline.question("Nome contem:").trim();
            let busCategoria = readline.question("Categoria contem:").trim();
            moduloRelatorios.buscaAvancada(estoque, busNome, busCategoria);
            break;
        case "10":
            moduloRelatorios.relatorioGeral(estoque, vendas);
            break;
        case "0":
            console.log("Saindo do sistema... Ate logo!");
            sistemaRodando = false;
            break;
        default:
            console.log("Opcao invalida. Tente novamente.");
    }       

}
