let hedefSayi = Math.floor(Math.random() * 100) + 1;

const tahminInput = document.getElementById('tahminInput');
const tahminBtn = document.getElementById('tahminBtn');
const oyunMesaj = document.getElementById('oyunMesaj');

tahminBtn.addEventListener('click', function() {
    const kullaniciTahmini = Number(tahminInput.value);


    if (kullaniciTahmini > hedefSayi) {
        oyunMesaj.innerText = " Biraz daha küçük bir sayı dene.";
        oyunMesaj.style.color = "var(--KeremPZ-F1)"; 
    } 
    else if (kullaniciTahmini < hedefSayi) {
        oyunMesaj.innerText = " Daha büyük bir sayıya çık.";
        oyunMesaj.style.color = "var(--KeremPZ-Maimi)"; 
    } 
    else if (kullaniciTahmini === hedefSayi) {
        oyunMesaj.innerText = ` Doğru bildin. Sayı: ${hedefSayi}`;
        oyunMesaj.style.color = "var(--KeremPZ-ZY)"; 
        
        
        hedefSayi = Math.floor(Math.random() * 100) + 1;
    }
});