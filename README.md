# Mini ERP — Estoque e Vendas

Sistema de **controle de estoque e vendas** desenvolvido em **JavaScript com Node.js**, executado pelo terminal.

O projeto foi organizado de forma modular para separar as responsabilidades de produtos, vendas, relatórios e integração do sistema.

## Funcionalidades

O Mini ERP permite:

- Cadastrar produtos
- Listar produtos cadastrados
- Buscar produto pelo nome
- Atualizar dados de um produto
- Remover produtos
- Registrar vendas
- Dar baixa automática na quantidade em estoque após uma venda
- Exibir o histórico de vendas
- Buscar uma venda pelo ID
- Fazer busca avançada de produtos por nome e categoria
- Gerar relatório geral do estoque e das vendas
- Validar dados incorretos, vazios ou inválidos em operações importantes

## Estrutura do projeto

```text
mini-erp-estoque-vendas/
├── main.js
├── produtos.js
├── vendas.js
├── relatorios.js
├── package.json
├── package-lock.json
└── README.md
```

### `main.js`

É o arquivo principal do sistema.

Responsável por:

- iniciar o programa;
- criar os arrays de estoque e vendas;
- exibir o menu;
- receber a opção escolhida pelo usuário;
- integrar os demais módulos;
- manter o sistema em execução até a opção de saída.

### `produtos.js`

Responsável pelas operações relacionadas aos produtos e ao estoque:

- cadastro;
- listagem;
- busca;
- atualização;
- remoção;
- validação dos dados dos produtos.

### `vendas.js`

Responsável pelas operações de vendas:

- registro de venda;
- verificação da existência do produto;
- validação da quantidade disponível;
- baixa automática no estoque;
- histórico de vendas;
- busca de venda pelo ID.

### `relatorios.js`

Responsável por buscas e análises do sistema:

- busca avançada por nome e categoria;
- quantidade total de itens em estoque;
- valor total armazenado em estoque;
- quantidade de vendas realizadas;
- faturamento total das vendas.

## Tecnologias utilizadas

- JavaScript
- Node.js
- `readline-sync`
- Git
- GitHub

## Pré-requisitos

Para executar o projeto, é necessário ter o **Node.js** instalado.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/LucDJoker/mini-erp-estoque-vendas.git
```

Entre na pasta do projeto:

```bash
cd mini-erp-estoque-vendas
```

Instale as dependências:

```bash
npm install
```

## Como executar

No terminal, dentro da pasta do projeto, execute:

```bash
node main.js
```

O menu será exibido no terminal:

```text
===== Mini ERP =====

1 - Cadastrar Produto
2 - Listar Produtos
3 - Buscar Produto (Simples)
4 - Atualizar Produto
5 - Remover Produto
6 - Registrar Venda
7 - Histórico de Vendas
8 - Buscar Venda
9 - Relatório Avançado (Nome + Categoria)
10 - Relatório Geral
0 - Sair do Sistema
```

Digite o número correspondente à operação desejada e siga as instruções exibidas no terminal.

## Exemplo de funcionamento

Um produto pode ser cadastrado com:

```text
Nome: Carrinho
Categoria: Brinquedo
Preço: R$120.00
Quantidade: 4
```

Se forem vendidas 2 unidades, o sistema:

1. verifica se o produto existe;
2. verifica se há quantidade suficiente;
3. registra a venda;
4. reduz o estoque de 4 para 2 unidades;
5. registra o valor total da venda como R$240.00.

Depois disso, o histórico e o relatório geral passam a considerar essa venda.

## Busca avançada

A busca avançada permite utilizar dois critérios:

- nome do produto;
- categoria.

É possível preencher os dois campos ou deixar um deles em branco.

Exemplo:

```text
Nome: carrinho
Categoria: brinquedo
```

Se os dois campos forem deixados em branco, o sistema pode listar todos os produtos disponíveis para a busca.

## Validações

O sistema possui verificações para evitar operações inválidas, como:

- nome vazio;
- categoria vazia;
- preço inválido ou menor/igual a zero;
- quantidade inválida ou negativa;
- cadastro duplicado de produto;
- produto inexistente;
- venda com quantidade inválida;
- venda acima da quantidade disponível em estoque;
- atualização com dados inválidos.

## Armazenamento dos dados

Os dados são armazenados **em memória**, utilizando arrays de objetos.

```text
estoque = []
vendas = []
```

Isso significa que os dados permanecem disponíveis enquanto o programa está em execução.

Ao encerrar o programa e executar novamente `node main.js`, os arrays são recriados vazios e os dados da execução anterior não são preservados.

## Organização modular

Os módulos utilizam os mesmos arrays criados no arquivo principal.

O `main.js` envia os dados necessários para as funções de cada módulo, evitando a criação de estoques ou históricos independentes.

```text
main.js
│
├── produtos.js
│   └── cadastro / listagem / busca / atualização / remoção
│
├── vendas.js
│   └── vendas / baixa no estoque / histórico / busca
│
└── relatorios.js
    └── busca avançada / relatórios
```

## Controle de versão

O projeto utiliza Git e GitHub para controle de versão e colaboração.

Antes de começar uma nova alteração:

```bash
git pull origin main
```

Depois de finalizar uma alteração:

```bash
git add .
git commit -m "tipo: descricao da alteracao"
git pull --rebase origin main
git push origin main
```

## Observação

Este projeto foi desenvolvido com finalidade acadêmica para praticar lógica de programação, arrays de objetos, funções, condicionais, estruturas de repetição, modularização, validação de dados e integração entre arquivos em JavaScript.
