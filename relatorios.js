function buscaAvancada(estoque, termoNome, TermoCategoria) {
  console.log("\n-- Resultado Busca Avançada --");
  let encontrados = estoque.filter(produto => {
  let bateNome = termoNome === "" ? true : produto.nome.toLowerCase().includes(termoNome.toLowerCase());
  let bateCategoria = TermoCategoria === "" ? true : produto.categoria.toLowerCase().includes(TermoCategoria.toLowerCase());
  return bateNome && bateCategoria;
  });
  

  if (encontrados.length === 0) {
    console.log("\nNenhum produto encontrado com esse nome.");
  } else {
    console.log("\n--- PRODUTOS ENCONTRADOS ---");
    for (let i = 0; i < encontrados.length; i++) {
      console.log("Nome: " + encontrados[i].nome);
      console.log("Categoria: " + encontrados[i].categoria);
      console.log("Preço: R$" + encontrados[i].preco.toFixed(2));
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
  console.log("Valor total investido em estoque: R$" + valorTotalEstoque.toFixed(2));
  console.log("Total de vendas realizadas: " + vendas.length);
  console.log("Faturamento total das vendas: R$" + totalFaturadoVendas.toFixed(2));
  console.log("===========================");
}

module.exports = { buscaAvancada, relatorioGeral };