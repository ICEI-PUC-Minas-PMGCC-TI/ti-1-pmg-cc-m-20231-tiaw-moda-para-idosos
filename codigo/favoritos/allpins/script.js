if (localStorage.getItem('userLogado')) {
  var userValid = JSON.parse(localStorage.getItem('userLogado'));

  // Criar o ícone do perfil
  var novoLink = document.createElement("a");
  novoLink.setAttribute("href", "/meuperfil/perfil.html");
  var perfilIcon = document.createElement("img");
  const url = localStorage.getItem('image');
  const img = new Image();
  img.classList.add("fotodperfil");
  img.src = url;
  novoLink.appendChild(img);

  // Adicionar o ícone do perfil ao elemento HTML desejado
  var perfilIconContainer = document.getElementById("rightsidemenu");
  perfilIconContainer.appendChild(novoLink);


}

const ITEMS = [
    {
        id: 1,
        name: 'Sapato Cano Baixo Bege',
        price: 150.00,
        off: 179.99,
        description:'Tênis bege e branco, justo e confortável. Excelente para sair de dia e em encontros casuais.',
        image1: '/busca_de_produto/images//image-product-1-thumbnail.jpg',
        thumb1:'/busca_de_produto/images//image-product-1.jpg',
        thumb2:'/busca_de_produto/images//image-product-2.jpg',
        thumb3:'/busca_de_produto/images//image-product-3.jpg',
        thumb4:'/busca_de_produto/images//image-product-4.jpg',
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
        image1: '/busca_de_produto/images//prod-calca-0.png',
        thumb1:'/busca_de_produto/images//prod-calca-0.png',
        thumb2:'/busca_de_produto/images//prod-calca-1.png',
        thumb3:'/busca_de_produto/images//prod-calca-2.png',
        thumb4:'/busca_de_produto/images//prod-calca-3.png',
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
        image1: '/busca_de_produto/images//prod-vestido-0.png',
        thumb1:'/busca_de_produto/images//prod-vestido-0.png',
        thumb2:'/busca_de_produto/images//prod-vestido-1.png',
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
        image1: '/busca_de_produto/images//prod-macacao2-0.png',
        thumb1:'/busca_de_produto/images//prod-macacao2-0.png',
        thumb2:'/busca_de_produto/images//prod-macacao2-1.png',
        thumb3:'/busca_de_produto/images//prod-macacao2-2.png',
        thumb4:'/busca_de_produto/images//prod-macacao2-3.png',
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
        image1: "/busca_de_produto/images//prod-macacao-0.png",
        thumb1:'/busca_de_produto/images//prod-macacao-0.png',
        thumb2:'/busca_de_produto/images//prod-macacao-1.png',
        thumb3:'/busca_de_produto/images//prod-macacao-2.png',
        thumb4:'/busca_de_produto/images//prod-macacao-3.png',
        type: 'macacao',
        category: ['macacao','casual', 'calor', 'colorido', 'feminino'],
        color: ['azul'],
        gender: 'feminino',
        qty: 1
    }
  ];
  const favoritos = JSON.parse(localStorage.getItem('favorito')) || [];

  let data = "";
  for (let i = 0; i < ITEMS.length; i++) {
    const item = ITEMS[i];
    if (favoritos.includes(item.id)) {
      data += `
        <div class="item">
          <img src="${item.image1}" alt="">
          <div class="produto">
          
            <p>${item.name}</p>
            
          </div>
        </div>
      `;
    }
  }
  
  document.getElementById('items').innerHTML = data;



    
    



