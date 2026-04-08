// 1. Önce formumuzu ve butonumuzu seçelim
const biletFormu = document.querySelector('.alim');
const sonucKutusu = document.createElement('div'); 

biletFormu.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    const isim = document.getElementById('name').value;
    const yas = Number(document.getElementById('age').value);
    const biletTipi = document.getElementById('ticket').value;

    
    let bazFiyat = 0;
    
    
    if (biletTipi === "general") bazFiyat = 1000;
    else if (biletTipi === "vip") bazFiyat = 5000;
    else if (biletTipi === "vvip") bazFiyat = 10000;

    let odenecekTutar = bazFiyat;

    
    if (yas < 18) {
        odenecekTutar = bazFiyat * 0.5;
        alert("Kanki daha reşit değilsin, sana %50 indirim verdik.");
    } else if (yas > 65) {
        odenecekTutar = bazFiyat * 0.3; 
        alert("Hürmetler , sana efsane indirim yaptık!");
    }

    
    sonucKutusu.className = "bas2"; 
    sonucKutusu.style.marginTop = "20px";
    sonucKutusu.style.color = "var(--KeremPZ-gri)"; 
    sonucKutusu.innerHTML = `
        <h3>🏁 Biletin Hazır ${isim}!</h3>
        <p>Hesaplanan Tutar: <strong>${odenecekTutar} ₺</strong></p>
        <p>Miami sahilinde görüşmek üzere!</p>
    `;
    
    biletFormu.appendChild(sonucKutusu);
});