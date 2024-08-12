// Sepet dizisi: Sepete eklenen ürünleri saklayacak
let sepet = [];

// Ürün ekle butonuna tıklama eventi
document.querySelector('.sepete-ekle').addEventListener('click', function() {
    const urunAdi = document.querySelector('.urun-adi').textContent;
    const urunFiyat = parseFloat(document.querySelector('.urun-fiyat').textContent.replace(' TL', ''));
    
    // Ürünü sepete ekle
    sepeteEkle(urunAdi, urunFiyat);
});

// Sepete ürün ekleme fonksiyonu
function sepeteEkle(urunAdi, urunFiyat) {
    const urunIndex = sepet.findIndex(item => item.urunAdi === urunAdi);

    if (urunIndex > -1) {
        // Ürün sepette varsa, adetini arttır
        sepet[urunIndex].adet += 1;
    } else {
        // Yeni ürün olarak sepete ekle
        sepet.push({
            urunAdi: urunAdi,
            urunFiyat: urunFiyat,
            adet: 1
        });
    }
    
    // Sepeti güncelle
    sepetiGuncelle();
}


// Sepeti güncelleme fonksiyonu
function sepetiGuncelle() {
    const sepetListesi = document.getElementById('sepet-listesi');
    sepetListesi.innerHTML = '';

    let toplamFiyat = 0;

    sepet.forEach(item => {
        toplamFiyat += item.urunFiyat * item.adet;

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        listItem.innerHTML = `
            <span>${item.urunAdi}</span>
            <span>${item.urunFiyat} TL x ${item.adet}</span>
            <button class="btn btn-sm btn-primary adet-arttir">+</button>
            <button class="btn btn-sm btn-primary adet-azalt">-</button>
        `;

        // Artır ve azalt butonlarına event listener ekle
        listItem.querySelector('.adet-arttir').addEventListener('click', function() {
            item.adet += 1;
            sepetiGuncelle();
        });

        listItem.querySelector('.adet-azalt').addEventListener('click', function() {
            if (item.adet > 1) {
                item.adet -= 1;
            } else {
                sepet = sepet.filter(i => i.urunAdi !== item.urunAdi);
            }
            sepetiGuncelle();
        });

        let btnclear=document.querySelector('#btnclear');
        btnclear.addEventListener('click',function(){sepet.splice(0,sepetListesi.lenght);
            sepetiGuncelle();

        })


        sepetListesi.appendChild(listItem);
    });

    document.getElementById('toplam-fiyat').textContent = toplamFiyat.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    fetchMenuData();
});

function fetchMenuData() {
    fetch('menu.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ağ hatası: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            renderMenu(data);
        })
        .catch(error => {
            console.error('Menü verisi alınırken hata oluştu:', error);
        });
}

function renderMenu(menuData) {
    const menuContainer = document.getElementById('menu-container');
    
    menuData.forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.classList.add('menu-section');
        
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.category;
        sectionElement.appendChild(sectionTitle);

        const itemList = document.createElement('ul');
        section.items.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.classList.add('menu-item');

            const itemName = document.createElement('span');
            itemName.classList.add('menu-item-name');
            itemName.textContent = item.name;
            itemElement.appendChild(itemName);

            const itemDescription = document.createElement('span');
            itemDescription.classList.add('menu-item-description');
            itemDescription.textContent = item.description;
            itemElement.appendChild(itemDescription);

            const itemPrice = document.createElement('span');
            itemPrice.classList.add('menu-item-price');
            itemPrice.textContent = item.price;
            itemElement.appendChild(itemPrice);

            itemList.appendChild(itemElement);
        });

        sectionElement.appendChild(itemList);
        menuContainer.appendChild(sectionElement);
    });
}



