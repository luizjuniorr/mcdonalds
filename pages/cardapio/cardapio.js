fetch('../../json/cardapio.json')
    .then(response => response.json())
    .then(data => {
        const main = document.querySelector('main');

        const lanches = data.cardapio_mcdonalds.lanches;

        lanches.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');

            itemElement.innerHTML = `
                <div class="imagem">
                    <p>${item.preco}</p>
                    <img src="${item.imagem}" alt="${item.nome}">
                </div>

                <h2>${item.nome}</h2>
                <p>${item.descricao}</p>
                <button>+ Adicionar</button>
            `;

            main.appendChild(itemElement);
        });

        const combos = data.cardapio_mcdonalds.combos;

        combos.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');

            itemElement.innerHTML = `
                <div class="imagem">
                    <p>${item.preco}</p>
                    <img src="${item.imagem}" alt="${item.nome}">
                </div>

                <h2>${item.nome}</h2>
                <p>${item.descricao}</p>
                <button>+ Adicionar</button>
            `;

            main.appendChild(itemElement);
        });

        const acompanhamentos = data.cardapio_mcdonalds.acompanhamentos;

        acompanhamentos.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');

            itemElement.innerHTML = `
                <div class="imagem">
                    <p>${item.preco}</p>
                    <img src="${item.imagem}" alt="${item.nome}">
                </div>

                <h2>${item.nome}</h2>
                <p>${item.descricao}</p>
                <button>+ Adicionar</button>
            `;

            main.appendChild(itemElement);
        });

        const bebidas = data.cardapio_mcdonalds.bebidas;

        bebidas.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');

            itemElement.innerHTML = `
                <div class="imagem">
                    <p>${item.preco}</p>
                    <img src="${item.imagem}" alt="${item.nome}">
                </div>

                <h2>${item.nome}</h2>
                <p>${item.descricao}</p>
                <button>+ Adicionar</button>
            `;

            main.appendChild(itemElement);
        });

        const milk_shake = data.cardapio_mcdonalds.milk_shake;

        milk_shake.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');

            itemElement.innerHTML = `
                <div class="imagem">
                    <p>${item.preco}</p>
                    <img src="${item.imagem}" alt="${item.nome}">
                </div>

                <h2>${item.nome}</h2>
                <p>${item.descricao}</p>
                <button>+ Adicionar</button>
            `;

            main.appendChild(itemElement);
        });

        const ofertas_do_dia = data.cardapio_mcdonalds.ofertas_do_dia;

        ofertas_do_dia.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');

            itemElement.innerHTML = `
                <div class="imagem">
                    <p>${item.preco}</p>
                    <img src="${item.imagem}" alt="${item.nome}">
                </div>

                <h2>${item.nome}</h2>
                <p>${item.descricao}</p>
                <button>+ Adicionar</button>
            `;

            main.appendChild(itemElement);
        });
    })
    .catch(error => console.error('Erro ao carregar o cardápio:', error));