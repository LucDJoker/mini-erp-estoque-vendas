function buscarPorCategoria(estoque, categoriaBuscada) {
  let encontrados = [];

  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].categoria.toLowerCase() === categoriaBuscada.toLowerCase()) {
      encontrados.push(estoque[i]);
    }
  }

  if (encontrados.length === 0) {
    console.log("\nNenhum produto encontrado nessa categoria.");
  } else {
    console.log("\n--- PRODUTOS ENCONTRADOS ---");
    for (let i = 0; i < encontrados.length; i++) {
      console.log("Nome: " + encontrados[i].nome);
      console.log("Preço: R$" + encontrados[i].preco);
      console.log("Quantidade: " + encontrados[i].quantidade);
      console.log("------------------------");
    }
  }
}

function relatorioGeral(estoque, vendas) {
  let valorTotalEstoque = 0;
  let totalItensEstoque = 0;
  let totalFaturadoVendas = 0;

  for (let i = 0; i < estoque.length; i++) {
    valorTotalEstoque =
      valorTotalEstoque + estoque[i].preco * estoque[i].quantidade;
    totalItensEstoque = totalItensEstoque + estoque[i].quantidade;
  }

  for (let i = 0; i < vendas.length; i++) {
    totalFaturadoVendas = totalFaturadoVendas + vendas[i].valorTotal;
  }

  console.log("\n===== RELATÓRIO GERAL =====");
  console.log("Total de produtos cadastrados: " + estoque.length);
  console.log("Total de itens no estoque: " + totalItensEstoque);
  console.log("Valor total investido em estoque: R$" + valorTotalEstoque);
  console.log("Total de vendas realizadas: " + vendas.length);
  console.log("Faturamento total das vendas: R$" + totalFaturadoVendas);
  console.log("===========================");
}
