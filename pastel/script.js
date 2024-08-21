document.addEventListener('DOMContentLoaded', () => {
    const quantidade = document.getElementById('quantidade');
    const total = document.getElementById('total');
    const finalizarCompra = document.getElementById('finalizar-compra');
    const mensagem = document.getElementById('mensagem');

    let quantidadePastel = 1;
    const precoUnitario = 4.00;

    document.getElementById('incrementar').addEventListener('click', () => {
        quantidadePastel++;
        atualizarCarrinho();
    });

    document.getElementById('decrementar').addEventListener('click', () => {
        if (quantidadePastel > 1) {
            quantidadePastel--;
            atualizarCarrinho();
        }
    });

    document.getElementById('adicionar-carrinho').addEventListener('click', () => {
        alert('Pastéis adicionados ao carrinho!');
        atualizarCarrinho();
    });

    finalizarCompra.addEventListener('click', () => {
        mensagem.classList.remove('hidden');
        finalizarCompra.classList.add('hidden');
    });

    function atualizarCarrinho() {
        quantidade.textContent = quantidadePastel;
        total.textContent = `Total: R$ ${(quantidadePastel * precoUnitario).toFixed(2)}`;
    }
});
