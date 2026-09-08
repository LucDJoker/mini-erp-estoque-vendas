const readline = require( 'readline-sync')

let sistemaRodando = true

while (sistemaRodando) {
    console.log("\n ===== Mini Erp ===== \n");
    console.log("1 - Cadastrar Produto");
    console.log("2 - Listar Produtos");
    console.log("3 - Registrar Venda");
    console.log("4 - Busca por Categoria");
    console.log("5 - Relatório Geral");
    console.log("0 - Sair do Sistema");

    
    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {
        case "1":
            const nome = readline.question("Digite o nome do produto: ");               
            const categoria = readline.question("Digite a categoria do produto: ");     
            const preco = parseFloat(readline.question("Digite o preco do produto: "));             
            const quantidade = parseInt(readline.question("Digite a quantidade do produto: "));

            
            console.log(`Dados informados: ${nome}, Categoria: ${categoria}, Preço: ${preco}, Quantidade: ${quantidade}`);
            break;
        case "0":
            console.log("Saindo do sistema...");
            sistemaRodando = false;
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }       

}