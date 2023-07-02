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

ITEMS = [
    {
        id: 1,
        name: 'Sapato Cano Baixo Bege',
        price: 150.00,
        off: 179.99,
        description:'Tênis bege e branco, justo e confortável. Excelente para sair de dia e em encontros casuais.',
        image1: 'images/image-product-1.jpg',
        thumb1:'images/image-product-1.jpg',
        thumb2:'images/image-product-2.jpg',
        thumb3:'images/image-product-3.jpg',
        thumb4:'images/image-product-4.jpg',
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
        image1: 'images/prod-calca-0.png',
        thumb1:'images/prod-calca-0.png',
        thumb2:'images/prod-calca-1.png',
        thumb3:'images/prod-calca-2.png',
        thumb4:'images/prod-calca-3.png',
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
        image1: 'images/prod-vestido-0.png',
        thumb1:'images/prod-vestido-0.png',
        thumb2:'images/prod-vestido-1.png',
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
        image1: 'images/prod-macacao2-0.png',
        thumb1:'images/prod-macacao2-0.png',
        thumb2:'images/prod-macacao2-1.png',
        thumb3:'images/prod-macacao2-2.png',
        thumb4:'images/prod-macacao2-3.png',
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
        image1: "images/prod-macacao-0.png",
        thumb1:'images/prod-macacao-0.png',
        thumb2:'images/prod-macacao-1.png',
        thumb3:'images/prod-macacao-2.png',
        thumb4:'images/prod-macacao-3.png',
        type: 'macacao',
        category: ['macacao','casual', 'calor', 'colorido', 'feminino'],
        color: ['azul'],
        gender: 'feminino',
        qty: 1
    }
  ];


const button1 = document.querySelector('.buttonmulher');
const button2 = document.querySelector('.buttonhomem');
const button3 = document.querySelector('.buttonsapato');
const popup = document.querySelector('.popup-wrapper');
const content1 = document.querySelector('.popup-content1');
const content2 = document.querySelector('.popup-content2');
const content3 = document.querySelector('.popup-content3');
const closeButton = document.querySelector('.popup-close');

button1.addEventListener('click', () => {
    event.preventDefault();
    popup.style.display = 'block';
    content1.style.display = 'block';
})
button2.addEventListener('click', () => {
    event.preventDefault();
    popup.style.display = 'block';
    content2.style.display = 'block';
})
button3.addEventListener('click', () => {
    event.preventDefault();
    popup.style.display = 'block';
    content3.style.display = 'block';
})

closeButton.addEventListener('click', () => {
    event.preventDefault();
    popup.style.display = 'none';
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
    
})

let itemsEL = document.querySelector('.items');
let cartItems = document.querySelector('.cart_items');
let itemsNumber = document.getElementById('items_num');
let subtotalPrice = document.getElementById('subtotal_price');
let addtocart = document.querySelector('.button');


let favorito = []



//Salvar nos favoritos
document.addEventListener('DOMContentLoaded', () => {
    let idParameter = new URLSearchParams(window.location.search);
    let itemId = parseInt(idParameter.get('id'));
    const favoritos = JSON.parse(localStorage.getItem('favorito')) || [];
    const button1 = document.querySelector('.heart_button');
    const button2 = document.querySelector('.heart_button2');
  
    if (favoritos.includes(itemId)) {
      button1.style.display = 'none';
      button2.style.display = 'flex';
    } else {
      button1.style.display = 'flex';
      button2.style.display = 'none';
    }
  
    button1.onclick = function() {
      if (favoritos.includes(itemId)) {
        alert('Este item já está nos favoritos!');
      } else {
        favoritos.push(itemId);
        localStorage.setItem('favorito', JSON.stringify(favoritos));
        button1.style.display = 'none';
        button2.style.display = 'flex';
        alert('Produto salvo nos favoritos!');
      }
    };
  
    button2.onclick = function() {
      const index = favoritos.indexOf(itemId);
      if (index > -1) {
        favoritos.splice(index, 1);
        localStorage.setItem('favorito', JSON.stringify(favoritos));
        button1.style.display = 'flex';
        button2.style.display = 'none';
        alert('Produto removido dos favoritos!');
      }
    };
  });
  

var favoritos= JSON.parse(localStorage.getItem('favorito')) || [];




renderItems()

  


function renderItems(id) {
    const item = ITEMS.find((item) => item.id === parseInt(id));
    if (!item) {
      console.log('Item não encontrado');
      return;
    }
  
    console.log(ITEMS); // Exibe o conteúdo da variável ITEMS no console
  
    let data1 = `
      <div class="select-image">
        <div class="product_name">
          <h4>Old Fashioned</h4>
          <h1>${item.name}</h1>
        </div>
        <img id="figura" src="${item.image1}" alt="">
      </div>
      <div class="descricao">
        <h1>Descrição do produto:</h1>
        <p>${item.description}</p>
      </div>
      <div class="compra">
        <h1>Compra:</h1>
        <div class="prices">
        <span class="price">R$${item.price}</span>
        <s class="off">R$${item.off}</s>
        </div>
        
      </div>
    `;
    document.getElementById('item').innerHTML = data1;
  }
  
  window.onload = () => {
    let idParameter = new URLSearchParams(window.location.search);
    let identificador = idParameter.get('id');
    renderItems(identificador);
  };
  

//function renderItems(id) {
//    console.log(ITEMS);
//    fetch(ITEMS + id) // Busca os dados do produto
//      .then((data) => {
//        return data.json();
//      }).then((itemData) => {
//        let data1 = `
//          <div class="select-image">
//            <div class="product_name">
//              <h4>Old Fashioned</h4>
//              <h1>${itemData.name}</h1>
 //           </div>
 //           <img id="figura" src="${itemData.image1}" alt="">
 //         </div>
//          <div class="descricao">
 //           <h1>Descrição do produto:</h1>
 //           <p>${itemData.description}</p>
 //         </div>
 //         <div class="compra">
 //           <h1>Compra:</h1>
//            <div class="prices">
 //             <span class="price">R$${itemData.price}</span>
 //             <s class="off">${itemData.off}</s>
 //           </div>
 //         </div>
 //         <div class="line2"></div>
//        `;
//        document.getElementById('item').innerHTML = data1;
//  
//       let idParameter = new URLSearchParams(window.location.search);
        //       let identificador = idParameter.get("id");
        //       detailId(identificador);
        //      });
      //     window.onload = () => {
        //        let idParameter = new URLSearchParams(window.location.search);
        //        let productId = idParameter.get("id");
        //        redirectToProductPage(productId);
        //      };
//  }
  
 
  


 

