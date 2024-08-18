
fetch('https://muhammetseyda.github.io/restoran-menu.json')
    .then(response => response.json())
    .then(data => {
        const kahvaltiYiyecekler = data.categories.find(category => category.name === 'Kahvaltı').items.yiyecekler;
        const kahvaltiIcecekler = data.categories.find(category => category.name === 'Kahvaltı').items.içecekler;
        const ogleYiyecekler = data.categories.find(category => category.name === 'Öğle').items.yiyecekler;
        const ogleIcecekler = data.categories.find(category => category.name === 'Öğle').items.içecekler;

        const sabahYiyecekTabPane = document.getElementById('sabahyiyecek-tab-pane');
        const sabahIcecekTabPane = document.getElementById('sabahicecek-tab-pane');
        const ogleYiyecekTabPane = document.getElementById('oglenyiyecek-tab-pane');
        const ogleIcecekTabPane = document.getElementById('oglenicecek-tab-pane');

        // Kahvaltı Yiyecekleri ekleme
        kahvaltiYiyecekler.forEach(item => {
            const sabahYiyecekDiv = document.createElement('div');
            sabahYiyecekDiv.className = 'sabah-yiyecek';
            sabahYiyecekDiv.innerHTML = `
                <div class="tekurun">
                    <img src="${item.image}" alt="${item.name}" width="75" height="75" class="d-inline-block align-text-top">
                </div>
                <div class="tekurun-desc">
                    <div class="tekurun-title">
                        <h3>${item.name}</h3>
                        <h5>${item.description}</h5>
                    </div>
                </div>
                <div class="tekurun-fiyat">
                    <h5>${item.price} TL</h5>
                </div>
                <div class="tekurun-sepet">
                    <button class="btn btn-primary">Sepete Ekle</button>
                </div>
            `;
            sabahYiyecekTabPane.appendChild(sabahYiyecekDiv);
        });

        // Kahvaltı İçecekleri ekleme
        kahvaltiIcecekler.forEach(item => {
            const sabahIcecekDiv = document.createElement('div');
            sabahIcecekDiv.className = 'sabah-icecek';
            sabahIcecekDiv.innerHTML = `
                <div class="tekurun">
                    <img src="${item.image}" alt="${item.name}" width="75" height="75" class="d-inline-block align-text-top">
                </div>
                <div class="tekurun-desc">
                    <div class="tekurun-title">
                        <h3>${item.name}</h3>
                        <h5>${item.description}</h5>
                    </div>
                </div>
                <div class="tekurun-fiyat">
                    <h5>${item.price} TL</h5>
                </div>
                <div class="tekurun-sepet">
                    <button class="btn btn-primary">Sepete Ekle</button>
                </div>
            `;
            sabahIcecekTabPane.appendChild(sabahIcecekDiv);
        });

        // Öğlen Yiyecekleri ekleme
        ogleYiyecekler.forEach(item => {
            const ogleYiyecekDiv = document.createElement('div');
            ogleYiyecekDiv.className = 'ogle-yiyecek';
            ogleYiyecekDiv.innerHTML = `
                <div class="tekurun">
                    <img src="${item.image}" alt="${item.name}" width="75" height="75" class="d-inline-block align-text-top">
                </div>
                <div class="tekurun-desc">
                    <div class="tekurun-title">
                        <h3>${item.name}</h3>
                        <h5>${item.description}</h5>
                    </div>
                </div>
                <div class="tekurun-fiyat">
                    <h5>${item.price} TL</h5>
                </div>
                <div class="tekurun-sepet">
                    <button class="btn btn-primary">Sepete Ekle</button>
                </div>
            `;
            ogleYiyecekTabPane.appendChild(ogleYiyecekDiv);
        });

        // Öğlen İçecekleri ekleme
        ogleIcecekler.forEach(item => {
            const ogleIcecekDiv = document.createElement('div');
            ogleIcecekDiv.className = 'ogle-icecek';
            ogleIcecekDiv.innerHTML = `
                <div class="tekurun">
                    <img src="${item.image}" alt="${item.name}" width="75" height="75" class="d-inline-block align-text-top">
                </div>
                <div class="tekurun-desc">
                    <div class="tekurun-title">
                        <h3>${item.name}</h3>
                        <h5>${item.description}</h5>
                    </div>
                </div>
                <div class="tekurun-fiyat">
                    <h5>${item.price} TL</h5>
                </div>
                <div class="tekurun-sepet">
                    <button class="btn btn-primary">Sepete Ekle</button>
                </div>
            `;
            ogleIcecekTabPane.appendChild(ogleIcecekDiv);
        });
    })
    .catch(error => console.error('JSON verileri alınırken hata oluştu:', error));
