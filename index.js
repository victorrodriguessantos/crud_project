const express = require('express');

const server = express();

server.use(express.json());

const produtos = [];

// Retorno dos Produtos
server.get('/produtos', (req, res) =>{
    return res.json(produtos)
});

// Criar um novo Produto
server.post('/criarProduto', (req, res) => {
    const { name, descricao } = req.body;
    const novoProduto = { name, descricao };
    produtos.push(novoProduto);

    return res.json(produtos)
});

// Excluir Produto
server.delete('/excluirProduto/:index', (req, res) => {
    const { index } = req.params;

    if (index >= 0 && index < produtos.length) {
        produtos.splice(index, 1); // Remove o elemento do array no índice especificado
        return res.json(produtos);
    } else {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
});




server.listen(1500);