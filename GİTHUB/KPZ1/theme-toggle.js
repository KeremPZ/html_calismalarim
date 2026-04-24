// Butonu seçiyoruz
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function() {
    // Body'e dark-theme sınıfını ekle/çıkar
    document.body.classList.toggle("dark-theme");

    // Butonun içindeki yazıyı güncelle
    if (document.body.classList.contains("dark-theme")) {
        themeBtn.textContent = "LIGHT MODE";
    } else {
        themeBtn.textContent = "DARK MODE";
    }
});