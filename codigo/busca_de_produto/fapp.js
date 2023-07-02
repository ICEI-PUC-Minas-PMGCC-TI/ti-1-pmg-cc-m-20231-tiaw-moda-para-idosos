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

// Recupera o array de produtos do localStorage, ou cria um novo array se ele não existir ainda
var savedcartitem = JSON.parse(localStorage.getItem('saved_cart_item')) || [];


for (let i of ITEMS) {
    // Create Card
    
    let card = document.createElement("div");

    // Set classes based on categories
    card.classList.add("card");
    for (let category of i.category) {
        card.classList.add(category.toLowerCase());
    }

    // Image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    // Image tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image1);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // Container
    let container = document.createElement("div");
    container.classList.add("container");

    // Product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.name.toUpperCase();
    container.appendChild(name);

    // Product price
    let price = document.createElement("h6");
    price.innerText = "R$ " + i.price.toFixed(2);
    container.appendChild(price);

    card.appendChild(container);

    let cardbuttons = document.createElement("div");
    cardbuttons.classList.add("card-buttons");

    //Add Veja Mais button
    let button = document.createElement("button");
    button.classList.add("button");
    button.classList.add("vejamais");
    button.innerText = "Veja Mais";

    button.setAttribute("onclick", "redirectToProductPage(" + i.id + ")");
    //button.setAttribute("onclick", "window.location.href='product.html?id=" + i.id + "'"); 
    //button.setAttribute("onclick", "window.location.href='product.html?id=" + ITEMS[index].id + "'");
  

    function redirectToProductPage(productId) {
      window.location.href = 'product.html?id=' + productId;

    }
    
    card.appendChild(button);
    


    //Add Like button
    let like = document.createElement("button");
    like.classList.add("button");
    like.classList.add("like");
    button.classList.add("blackbtn");
    like.innerHTML = '<i class="fa fa-heart"></i>';
    like.setAttribute("data-item-id", i.id);
    card.appendChild(like);


    document.getElementById("products").appendChild(card);
}


function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (value.toLowerCase() === button.innerText.toLowerCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");

    elements.forEach(element => {
        if (value === "tudo") {
            element.classList.remove("hide");
        } else {
            let categories = element.classList;
            let match = Array.from(categories).some(category => {
                return value.toLowerCase() === category.toLowerCase();
            });
            
            if (match) {
                element.classList.remove("hide");
            } else {
                // hide elements that don't match the selected value
                element.classList.add("hide");
            }
        }
    });


    // Check if any cards are visible
    let visibleCards = document.querySelectorAll(".card:not(.hide)");
    let noResultElement = document.getElementById("no-result");

    if (visibleCards.length === 0) {
        // Display "No results found" message
        if (!noResultElement) {
            noResultElement = document.createElement("h1");
            noResultElement.id = "no-result";
            noResultElement.innerText = "Nenhum resultado foi encontrado para a busca.";
            document.getElementById("products").appendChild(noResultElement);
        }
    } else {
        // Remove "No results found" message if it exists
        if (noResultElement) {
            noResultElement.remove();
        }
    }
}


//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    
    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())) {
            //display matches
            cards[index].classList.remove("hide");
        } else {
            //hide non-matches
            cards[index].classList.add("hide");
        }

    });

});


// Initially display all products
window.onload = () => {
    filterProduct("tudo");
}


//Salvar nos favoritos
document.querySelectorAll(".like").forEach((likeButton, index) => {
  const itemId = ITEMS[index].id;
  const favoritos = JSON.parse(localStorage.getItem('favorito')) || [];
  if (favoritos.includes(itemId)) {
    likeButton.classList.add("like2");}
    
    likeButton.onclick = function () {
        

        if (favoritos.includes(itemId)) {
            likeButton.classList.add("like2");
            alert('Este item já está nos favoritos!');
        } else {
            favoritos.push(itemId);
            localStorage.setItem('favorito', JSON.stringify(favoritos));
            //Change button color
            likeButton.classList.add("like2");
            alert('Produto salvo nos favoritos!');
            
        }
    };
});



let  openBtn = document.getElementById('open_cart_btn');
let  cart = document.getElementById('sidecart');
let  closeBtn = document.getElementById('close_btn');
let  backdrop = document.querySelector('.backdrop');
let  itemsEL = document.querySelector('.items');
let  cartItems = document.querySelector('.cart_items');
let  itemsNumber = document.getElementById('items_num');
let  subtotalPrice = document.getElementById('subtotal_price');



openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
backdrop.addEventListener('click', closeCart)


renderCartItems()

// Open Cart
function openCart() {
  cart.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(() => {
  backdrop.classList.add('show');
  }, 0);
}

// Close Cart
function closeCart() {
  cart.classList.remove('open');
  backdrop.classList.remove('show');
  setTimeout(() => {
    backdrop.style.display = 'none';
  }, 500);
}


//Add Items to Cart
function addItem(idx, itemId) {
  // find same items
  const foundedItem = cart_data.find(
    (item) => item.id.toString() === itemId.toString()
  )
  if (foundedItem) {
    //increase item qty
    increaseQty(itemId)

    updateCart()
  } else {
    cart_data.push(ITEMS[idx])

    // Adiciona o item ao localStorage
    saved_cart_item.push(itemId);
    localStorage.setItem('saved_cart_item', JSON.stringify(saved_cart_item));
    alert('Seu produto foi adicionado ao carrinho com sucesso');
  }
  updateCart();
  openCart();


}
// Remove Cart Items
function removeCartItem(itemId) {
  cart_data = cart_data.filter((item) => item.id != itemId)
  // encontra o índice do item no array saved_cart_item
  const index = saved_cart_item.indexOf(itemId);

  if (index !== -1) {
    // Remove o item do array saved_cart_item
    saved_cart_item.splice(index, 1);

    // Remove o item do localStorage
    localStorage.setItem('saved_cart_item', JSON.stringify(saved_cart_item));

    // Remove o item do array cart_data
    cart_data = cart_data.filter((item) => item.id.toString() !== itemId.toString());

    updateCart()
  }



  updateCart()
}

// Increase Qty
function increaseQty(itemId) {
  const item = cart_data.find((item) => item.id == itemId)
  item.qty++;
  // Adiciona o item ao localStorage
  saved_cart_item.push(itemId);
  localStorage.setItem('saved_cart_item', JSON.stringify(saved_cart_item));

  updateCart()
}

// Decrease Qty
function decreaseQty(itemId) {
  //    cart_data = cart_data.map((item) => 
  //    item.id.toString() === itemId.toString()
  //    ? {...item, qty: item.qty > 1 ? item.qty -1 : item.qty}
  //    : item)

  const item = cart_data.find((item) => item.id == itemId)
  item.qty = Math.max(item.qty - 1, 0);

  // encontra o índice do item no array saved_cart_item
  const index = saved_cart_item.indexOf(itemId);

  if (index !== -1) {
    // Remove o item do array saved_cart_item
    saved_cart_item.splice(index, 1);

    // Remove o item do localStorage
    localStorage.setItem('saved_cart_item', JSON.stringify(saved_cart_item));


    updateCart()
  }

  updateCart()

}
document.addEventListener('DOMContentLoaded', () => {
  const saved_cart_item = JSON.parse(localStorage.getItem('saved_cart_item')) || [];
  itemsNumber.innerText = saved_cart_item.length;
});
// Calculate Items Number
function calculateItemsNum() {
  let subtotal = 0
  cart_data.forEach((item) => (subtotal += item.price * item.qty))

  subtotalPrice.innerText = subtotal.toFixed(2);
}
// Calculate Subtotal Price
function calcSubtotalPrice() {
  let subtotal = 0
  cart_data.forEach((item) => (subtotal += item.price * item.qty))

  subtotalPrice.innerText = subtotal;
}
// Render Items
//function renderItems() {
//  ITEMS.forEach((item, idx) => {

//    const itemEl = document.createElement('div');
//    itemEl.classList.add('item');
    //itemEl.onclick = () => addItem(idx, item.id);
   // const addToCartBtn = document.createElement('button');
//   const addToCartBtn = document.getElementbyId('add-to-cart-button');

    //addToCartBtn.classList.add('btn2');
    //addToCartBtn.textContent = 'Adicione ao Carrinho';
 //   addToCartBtn.addEventListener('click', () => addItem(idx, item.id));
 //   itemEl.innerHTML = `
 //       <img src="${item.image1}" alt="">
 //       <button class="btn1" onclick="gotoproduct(${item.id})">Veja Mais</button>
//        `
 //   itemEl.appendChild(addToCartBtn);
 //   itemsEL.appendChild(itemEl);

//  })
// }

function gotoproduct(id) {
  window.location.href = `index.html?id=${id}`
}

