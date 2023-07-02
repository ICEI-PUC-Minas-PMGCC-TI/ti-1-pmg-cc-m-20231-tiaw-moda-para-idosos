ITEMS = [
    {
        id: 1,
        name: 'Sapato Cano Baixo Bege',
        price: 150.00,
        off: 179.99,
        description:'Tênis bege e branco, justo e confortável. Excelente para sair de dia e em encontros casuais.',
        image1: 'busca_de_produto/images/image-product-1.jpg',
        thumb1:'busca_de_produto/images/image-product-1.jpg',
        thumb2:'busca_de_produto/images/image-product-2.jpg',
        thumb3:'busca_de_produto/images/image-product-3.jpg',
        thumb4:'busca_de_produto/images/image-product-4.jpg',
        type: 'sapato',
        category: ['sapato', 'casual', 'calor', 'colorido', 'branco', 'feminino', 'masculino'],
        color: ['bege', 'branco'],
        gender: 'feminino',
        qty: 1
    },
    {
        id: 2,
        name: 'Calca Preta - Pernas Largas',
        price: 105.00,
        off: 200.99,
        description:'Calça preta para pernas largas, solta e de tecido leve com um cinto minimalista e monocromático. Ótima escolha para encontros formais.',
        image1: 'busca_de_produto/images/prod-calca-0.png',
        thumb1:'busca_de_produto/images/prod-calca-0.png',
        thumb2:'busca_de_produto/images/prod-calca-1.png',
        thumb3:'busca_de_produto/images/prod-calca-2.png',
        thumb4:'busca_de_produto/images/prod-calca-3.png',
        type: 'calca',
        category: ['calca', 'casual', 'frio', 'preto', 'feminino'],
        color: ['preto'],
        gender: 'feminino',
        qty: 1
    },
    {
        id: 3,
        name: 'Vestido Largo Preto com Detalhes',
        price: 65.99,
        off: 100.99,
        description:'Vestido largo preto com detalhes em branco, leve, solto e confortável. Excelente para encontros formais.',
        image1: 'busca_de_produto/images/prod-vestido-0.png',
        thumb1:'busca_de_produto/images/prod-vestido-0.png',
        thumb2:'busca_de_produto/images/prod-vestido-1.png',
        type: 'vestido',
        category: ['vestido', 'formal', 'calor', 'casamento','preto', 'feminino'],
        color: ['preto'],
        gender: 'feminino',
        qty: 1
    },
    {
        id: 4,
        name: 'Macacão Preto Sólido Chique',
        price: 109.99,
        off: 150.99,
        description:'Macacão preto, justo, simples e chique. Excelente para encontros e parques.',
        image1: 'busca_de_produto/images/prod-macacao2-0.png',
        thumb1:'busca_de_produto/images/prod-macacao2-0.png',
        thumb2:'busca_de_produto/images/prod-macacao2-1.png',
        thumb3:'busca_de_produto/images/prod-macacao2-2.png',
        thumb4:'busca_de_produto/images/prod-macacao2-3.png',
        type: 'macacao',
        category: ['macacao','formal', 'calor', 'casamento', 'preto', 'feminino'],
        color: ['preto'],
        gender: 'feminino',
        qty: 1
    },
    {
        id: 5,
        name: "Macacão Azul Marinho com Bolinhas Casual",
        price: 99.99,
        off: 120.99,
        description:'Macacão azul marinho com bolinhas brancas, leve, solto e confortável. Excelente para sair de dia e em encontros casuais.',
        image1: "busca_de_produto/images/prod-macacao-0.png",
        thumb1:'busca_de_produto/images/prod-macacao-0.png',
        thumb2:'busca_de_produto/images/prod-macacao-1.png',
        thumb3:'busca_de_produto/images/prod-macacao-2.png',
        thumb4:'busca_de_produto/images/prod-macacao-3.png',
        type: 'macacao',
        category: ['macacao','casual', 'calor', 'colorido', 'feminino'],
        color: ['azul'],
        gender: 'feminino',
        qty: 1
    }
  ];

// Função para obter o ID da pasta a partir dos parâmetros da URL
function obterIdPastaDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '';
  }
  
  // Obtém o ID da pasta da URL
  const pastaId = obterIdPastaDaURL();
      // Recupera os IDs dos produtos favoritos do armazenamento local
      const favoritos = JSON.parse(localStorage.getItem('favorito')) || [];

      // Obtém a referência ao elemento onde os produtos favoritos serão exibidos
      const favoriteProductsContainer = document.getElementById('favoriteProducts');
  
      // Filtra os produtos com base nos IDs favoritos
      const produtosFavoritos = ITEMS.filter(item => favoritos.includes(item.id));
  
      // Exibe os produtos favoritos na página
      for (let produto of produtosFavoritos) {
        let card = document.createElement('div');
        card.classList.add('favorite-product-card');
  
        // Imagem do produto
        let image = document.createElement('img');
        image.src = produto.image1;
        card.appendChild(image);
  
        // Nome do produto
        let name = document.createElement('h3');
        name.innerText = produto.name;
        card.appendChild(name);
  
        // Preço do produto
        let price = document.createElement('p');
        price.innerText = 'R$ ' + produto.price.toFixed(2);
        card.appendChild(price);
  
        // Descrição do produto
        let description = document.createElement('p');
        description.innerText = produto.description;
        card.appendChild(description);
  
        favoriteProductsContainer.appendChild(card);
      }
