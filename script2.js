

document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            displayMenu(data);
        })
        .catch(error => console.error('Error loading JSON:', error));
});

function displayMenu(menuData) {
    const menuContainer = document.getElementById('menu-container');
    
    menuData.categories.forEach(category => {
        // Kategori başlığını oluştur
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.name;
        categoryElement.appendChild(categoryTitle);
        
        // Ürünleri ekle
        category.items.yiyecekler.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('urun');
            
            itemElement.innerHTML = `
                <div class="urun-gorsel">
                    <img src="${item.image}" alt="${item.name}" class="urun-gorsel-image">
                </div>
                <div class="urun-bilgi">
                    <div class="urun-adi">${item.name}</div>
                    <div class="urun-aciklama">${item.description}</div>
                    <div class="urun-fiyat">${item.price} TL</div>
                    <button class="btn btn-primary sepete-ekle">Sepete Ekle</button>
                </div>
            `;
            
            categoryElement.appendChild(itemElement);
        });
        
        menuContainer.appendChild(categoryElement);
    });
}
document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            displayMenu(data);
        })
        .catch(error => console.error('Error loading JSON:', error));
});

let cart = [];

function displayMenu(menuData) {
    const menuContainer = document.getElementById('menu-container');
    
    menuData.categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.name;
        categoryElement.appendChild(categoryTitle);
        
        category.items.yiyecekler.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('urun');
            
            itemElement.innerHTML = `
                <div class="urun-gorsel">
                    <img src="${item.image}" alt="${item.name}" class="urun-gorsel-image">
                </div>
                <div class="urun-bilgi">
                    <div class="urun-adi">${item.name}</div>
                    <div class="urun-aciklama">${item.description}</div>
                    <div class="urun-fiyat">${item.price} TL</div>
                    <button class="btn btn-primary sepete-ekle" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">Sepete Ekle</button>
                </div>
            `;
            
            menuContainer.appendChild(itemElement);
        });
    });

    document.querySelectorAll('.sepete-ekle').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function addToCart(event) {
    const button = event.target;
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    const item = cart.find(item => item.id === id);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('sepet-listesi');
    const totalPriceElement = document.getElementById('toplam-fiyat');
    
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.classList.add('list-group-item');
        
        itemElement.innerHTML = `
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-quantity">${item.quantity} x ${item.price} TL</div>
            <div class="cart-item-total">${item.quantity * item.price} TL</div>
        `;
        
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.quantity * item.price;
    });
    

    totalPriceElement.textContent = totalPrice.toFixed(2) + ' TL';
}





// css kodlari burada


// body {
//     font-family: Arial, sans-serif;
// }

// #menu-container {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 20px;
// }

// .category {
//     margin-bottom: 40px;
// }

// .urun {
//     display: flex;
//     border: 1px solid #ddd;
//     padding: 15px;
//     margin: 10px;
//     width: 300px;
//     border-radius: 5px;
//     text-align: center;
//     align-items: center;
// }

// .urun-gorsel {
//     flex: 1;
// }

// .urun-gorsel-image {
//     max-width: 100%;
//     height: auto;
//     border-radius: 5px;
// }

// .urun-bilgi {
//     flex: 2;
//     padding: 0 15px;
// }

// .urun-adi {
//     font-size: 1.2em;
//     margin: 0 0 10px 0;
// }

// .urun-aciklama {
//     font-size: 0.9em;
//     margin: 0 0 10px 0;
// }

// .urun-fiyat {
//     font-size: 1.1em;
//     margin: 0 0 10px 0;
// }

// .btn-primary {
//     background-color: #007bff;
//     border: none;
//     color: white;
//     padding: 10px 20px;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 1em;
//     margin: 10px 0;
//     border-radius: 5px;
//     cursor: pointer;
// }

// .btn-primary:hover {
//     background-color: #0056b3;
// }








