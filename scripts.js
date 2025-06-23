// Alterar tema
function alterarTema() {
    const select = document.getElementById('tema');
    const temaSelecionado = select.value;
    document.body.classList.toggle('tema-escuro', temaSelecionado === 'escuro');
}

// Buscar por texto os cards
const inputBusca = document.getElementById('textBusca');
const banner = document.querySelector('.banner');
const h1s = document.querySelectorAll('h1');

inputBusca.addEventListener('keyup', function () {
const termo = inputBusca.value.toLowerCase();
const cards = document.querySelectorAll('.card');

    if (termo.length > 0) {
        if (banner) banner.style.display = 'none';
        h1s.forEach(h => h.style.display = 'none');
    } else {
        if (banner) banner.style.display = 'block';
        h1s.forEach(h => h.style.display = 'block');
    }

    cards.forEach(function (card) {
        const texto = card.innerText.toLowerCase();

        if (texto.includes(termo)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Mostrar ou ocultar os cards dos veículos
function toggleDetalhes(botao) {
    const detalhes = botao.nextElementSibling;
    const visivel = !detalhes.classList.contains('hidden');

    if (visivel) {
        detalhes.classList.add('hidden');
        botao.textContent = 'Ver detalhes';
    } else {
        detalhes.classList.remove('hidden');
        botao.textContent = 'Ocultar detalhes';
    }
}

// Exibir formulários
const formCompra = document.getElementById('form-compra');
const formVenda = document.getElementById('form-venda');

document.querySelectorAll('.dropdown-content a').forEach(link => {
    if (link.textContent.includes('Anunciar')) {
        link.addEventListener('click', () => {
            formVenda.style.display = 'block';
            formCompra.style.display = 'none';
            window.scrollTo({ top: formVenda.offsetTop, behavior: 'smooth' });
        });
    }
});

document.querySelectorAll('.btn-contato').forEach(botao => {
    botao.addEventListener('click', () => {
        formCompra.style.display = 'block';
        formVenda.style.display = 'none';
        window.scrollTo({ top: formCompra.offsetTop, behavior: 'smooth' });
    });
});

// 
const links = document.querySelectorAll('.dropdown-content a');
const cards = document.querySelectorAll('.card');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const marca = this.dataset.marca;

        cards.forEach(card => {
            if (card.classList.contains(marca)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        if (banner) banner.style.display = 'none';
        h1s.forEach(h => h.style.display = 'none'); 
    });
});