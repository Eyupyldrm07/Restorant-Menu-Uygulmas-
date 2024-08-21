
fetch('https://muhammetseyda.github.io/restoran-menu.json')
    .then(response => response.json())
    .then(data => {
        const kahvaltiYiyecekler = data.categories.find(category => category.name === 'Kahvaltı').items.yiyecekler;
        const kahvaltiIcecekler = data.categories.find(category => category.name === 'Kahvaltı').items.içecekler;
        const ogleYiyecekler = data.categories.find(category => category.name === 'Öğle').items.yiyecekler;
        const ogleIcecekler = data.categories.find(category => category.name === 'Öğle').items.içecekler;
        const aksamYiyecekler = data.categories.find(category => category.name === 'Akşam').items.yiyecekler;
        const aksamIcecekler = data.categories.find(category => category.name === 'Akşam').items.içecekler;


        const sabahYiyecekTabPane = document.getElementById('sabahyiyecek-tab-pane');
        const sabahIcecekTabPane = document.getElementById('sabahicecek-tab-pane');
        const ogleYiyecekTabPane = document.getElementById('oglenyiyecek-tab-pane');
        const ogleIcecekTabPane = document.getElementById('oglenicecek-tab-pane');
        const aksamYiyecekTabPane = document.getElementById('aksamyiyecek-tab-pane');
        const aksamIcecekTabPane = document.getElementById('aksamicecek-tab-pane');

        // Kahvaltı Yiyecekleri ekleme
        kahvaltiYiyecekler.forEach(item => {
            const sabahYiyecekDiv = document.createElement('div');
            sabahYiyecekDiv.className = 'sabah-yiyecek';
            sabahYiyecekDiv.innerHTML = `
                <div class="tekitem"  onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <img src="${item.image}" alt="${item.name}" width="200" height="200" class="d-inline-block align-text-top " style="border-radius: 15%"> 
                </div>
                <div class="tekitem-desc" onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <div class="tekitem-title">
                        <h3>${item.name}</h3>
                        <h5>${item.description}</h5>
                    </div>
                </div>
                <div class="tekitem-fiyat" onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <h5>${item.price} TL</h5>
                </div>
                <div class="tekitem-sepet" >
                     <button class="sepete-ekle-btn" onclick="itemSepeteEkle(${item.id}, '${item.name}', ${item.price}, '${item.image}');">Sepete ekle</button>
                </div>
            `;
            sabahYiyecekTabPane.appendChild(sabahYiyecekDiv);
        });

        // Kahvaltı İçecekleri ekleme
        kahvaltiIcecekler.forEach(item => {
            const sabahIcecekDiv = document.createElement('div');
            sabahIcecekDiv.className = 'sabah-icecek';
            sabahIcecekDiv.innerHTML =`
                <div class="tekitem"  onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <img src="${item.image}" alt="${item.name}" width="200" height="200" class="d-inline-block align-text-top" style="border-radius: 15%">
                </div>
                <div class="tekitem-desc" onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <div class="tekitem-title">
                        <h3>${item.name}</h3>
                        <h5>${item.description}</h5>
                    </div>
                </div>
                <div class="tekitem-fiyat" onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <h5>${item.price} TL</h5>
                </div>
                <div class="tekitem-sepet" >
                     <button class="sepete-ekle-btn" onclick="itemSepeteEkle(${item.id}, '${item.name}', ${item.price}, '${item.image}');">Sepete ekle</button>
                </div>
            `;
            sabahIcecekTabPane.appendChild(sabahIcecekDiv);
        });

        // Öğlen Yiyecekleri ekleme
        ogleYiyecekler.forEach(item => {
            const ogleYiyecekDiv = document.createElement('div');
            ogleYiyecekDiv.className = 'ogle-yiyecek';
            ogleYiyecekDiv.innerHTML = `
                <div class="tekitem"  onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <img src="${item.image}" alt="${item.name}" width="200" height="200" class="d-inline-block align-text-top" style="border-radius: 15%">
                </div>
                <div class="tekitem-desc" onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <div class="tekitem-title">
                        <h3>${item.name}</h3>
                        <h5>${item.description}</h5>
                    </div>
                </div>
                <div class="tekitem-fiyat" onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <h5>${item.price} TL</h5>
                </div>
                <div class="tekitem-sepet" >
                     <button class="sepete-ekle-btn" onclick="itemSepeteEkle(${item.id}, '${item.name}', ${item.price}, '${item.image}');">Sepete ekle</button>
                </div>
            `;
            ogleYiyecekTabPane.appendChild(ogleYiyecekDiv);
        });

        // Öğlen İçecekleri ekleme
        ogleIcecekler.forEach(item => {
            const ogleIcecekDiv = document.createElement('div');
            ogleIcecekDiv.className = 'ogle-icecek';
            ogleIcecekDiv.innerHTML = `
                <div class="tekitem"  onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <img src="${item.image}" alt="${item.name}" width="200" height="200" class="d-inline-block align-text-top" style="border-radius: 15%">
                </div>
                <div class="tekitem-desc" onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <div class="tekitem-title">
                        <h3>${item.name}</h3>
                        <h5>${item.description}</h5>
                    </div>
                </div>
                <div class="tekitem-fiyat" onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <h5>${item.price} TL</h5>
                </div>
                <div class="tekitem-sepet" >
                     <button class="sepete-ekle-btn" onclick="itemSepeteEkle(${item.id}, '${item.name}', ${item.price}, '${item.image}');">Sepete ekle</button>
                </div>
            `;
            ogleIcecekTabPane.appendChild(ogleIcecekDiv);
        });
         // aksam Yiyecekleri ekleme
         aksamYiyecekler.forEach(item => {
            const aksamYiyecekDiv = document.createElement('div');
            aksamYiyecekDiv.className = 'aksam-yiyecek';
            aksamYiyecekDiv.innerHTML = `
                <div class="tekitem"  onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <img src="${item.image}" alt="${item.name}" width="200" height="200" class="d-inline-block align-text-top" style="border-radius: 15%">
                </div>
                <div class="tekitem-desc" onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <div class="tekitem-title">
                        <h3>${item.name}</h3>
                        <h5>${item.description}</h5>
                    </div>
                </div>
                <div class="tekitem-fiyat" onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <h5>${item.price} TL</h5>
                </div>
                <div class="tekitem-sepet" >
                     <button class="sepete-ekle-btn" onclick="itemSepeteEkle(${item.id}, '${item.name}', ${item.price}, '${item.image}');">Sepete ekle</button>
                </div>
            `;
            aksamYiyecekTabPane.appendChild(aksamYiyecekDiv);
        });

        // aksam İçecekleri ekleme
        aksamIcecekler.forEach(item => {
            const aksamIcecekDiv = document.createElement('div');
            aksamIcecekDiv.className = 'aksam-icecek';
            aksamIcecekDiv.innerHTML =`
                <div class="tekitem"  onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <img src="${item.image}" alt="${item.name}" width="200" height="200" class="d-inline-block align-text-top" style="border-radius: 15%">
                </div>
                <div class="tekitem-desc" onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <div class="tekitem-title">
                        <h3>${item.name}</h3>
                        <h5>${item.description}</h5>
                    </div>
                </div>
                <div class="tekitem-fiyat" onclick="itemDetaylariniGoster('${item.name}', '${item.description}', '${item.price}', '${item.image}')">
                    <h5>${item.price} TL</h5>
                </div>
                <div class="tekitem-sepet" >
                     <button class="sepete-ekle-btn" onclick="itemSepeteEkle(${item.id}, '${item.name}', ${item.price}, '${item.image}');">Sepete ekle</button>
                </div>
            `;
            aksamIcecekTabPane.appendChild(aksamIcecekDiv);
        });
    })
    .catch(error => console.error('JSON verileri alınırken hata oluştu:', error));


    function itemDetaylariniGoster(name, description, price, image) {
        // Modal içeriğini doldur
        document.getElementById('modalitemGorsel').src = image;
        document.getElementById('modalitemAdi').textContent = name;
        document.getElementById('modalitemAciklama').textContent = description;
        document.getElementById('modalitemFiyat').textContent = price + ' TL';
    
        // Modalı göster
        var itemModal = new bootstrap.Modal(document.getElementById('itemModal'));
        itemModal.show();
    }
let sepet = [];
    
    function itemSepeteEkle(id, name, price, image) {
        const mevcutitem = sepet.find(item => item.id === id);
        if (mevcutitem) {
            mevcutitem.adet++;
        } else {
            sepet.push({ id, name, price, image, adet: 1 });
        }
        sepetGuncelle();
    }
    
    function sepetGuncelle() {
        const sepetIcerik = document.getElementById('sepet-icerik');
        const toplamTutarSpan = document.getElementById('toplam-tutar');
        const sepetCount = document.getElementById('sepet-count');
    
        sepetIcerik.innerHTML = '';
        let toplamTutar = 0;
    
        sepet.forEach(item => {
            const itemTutar = item.price * item.adet;
            toplamTutar += itemTutar;
    
            const itemHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6>${item.name}</h6>
                        <p>${item.price} TL x <input type="number" value="${item.adet}" min="1" class="adet-input" data-id="${item.id}" style="width: 50px;"> = ${itemTutar} TL</p>
                    </div>
                    <button class="btn btn-danger btn-sm" onclick="itemCikar(${item.id})">Kaldır</button>
                </div>
            `;
            sepetIcerik.innerHTML += itemHTML;
        });
    
        toplamTutarSpan.textContent = toplamTutar.toFixed(2);
        sepetCount.textContent = sepet.length;
    
        // Adet değiştirme olayını bağla
        document.querySelectorAll('.adet-input').forEach(input => {
            input.addEventListener('change', adetDegistir);
        });
    }
    
    function itemCikar(itemId) {
        sepet = sepet.filter(item => item.id !== itemId);
        sepetGuncelle();
    }
    
    function adetDegistir(event) {
        const itemId = parseInt(event.target.getAttribute('data-id'));
        const yeniAdet = parseInt(event.target.value);
    
        if (yeniAdet <= 0) {
            itemCikar(itemId);
        } else {
            const item = sepet.find(item => item.id === itemId);
            if (item) {
                item.adet = yeniAdet;
            }
        }
        sepetGuncelle();
    }


    
    
