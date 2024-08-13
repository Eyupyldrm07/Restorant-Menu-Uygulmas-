document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            displayMenu(data);
        })
        .catch(error => console.error('Error loading JSON:', error));

    // Sepeti Temizle butonu için event listener ekle
    document.getElementById('sepeti-temizle').addEventListener('click', clearCart);
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
        
    
        category.items.içecekler,içecekler.forEach(item => {
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
            <div class="cart-item-quantity">
                <button class="quantity-decrease" data-id="${item.id}">-</button>
                ${item.quantity}
                <button class="quantity-increase" data-id="${item.id}">+</button>
            </div>
            <div class="cart-item-total">${item.quantity * item.price} TL</div>
            <button class="btn btn-danger remove-item" data-id="${item.id}">Sil</button>
        `;
        
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.quantity * item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2) + ' TL';

    document.querySelectorAll('.quantity-increase').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });

    document.querySelectorAll('.quantity-decrease').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

function increaseQuantity(event) {
    const id = event.target.getAttribute('data-id');
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

function decreaseQuantity(event) {
    const id = event.target.getAttribute('data-id');
    const item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateCart();
    } else if (item && item.quantity === 1) {
        removeItem(event);
    }
}

function removeItem(event) {
    const id = event.target.getAttribute('data-id');
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Sepeti Temizle fonksiyonu
function clearCart() {
    cart = [];
    updateCart();
}


function displayMenu(menuData) {
    const menuContainer = document.getElementById('menu-container');
    
    menuData.categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.name;
        categoryElement.appendChild(categoryTitle);
        
        const rowElement = document.createElement('div');
        rowElement.classList.add('urun-row'); // Yeni eklendi, ürünleri yan yana dizmek için

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
            
            rowElement.appendChild(itemElement);
        });

        categoryElement.appendChild(rowElement); // Ürün satırını kategoriye ekle
        menuContainer.appendChild(categoryElement);
    });

    document.querySelectorAll('.sepete-ekle').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}














