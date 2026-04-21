document.getElementById("girisbutonu").addEventListener("click");

let = kalanHak = 5;
const adminkullanici = "KeremPZ";
const adminsifre = "12345";

function girisYap() {
    event.preventDefault();
    const kullaniciAdi = document.getElementById("username").value;
    const sifre = document.getElementById("password").value;
    if (kullaniciAdi === adminkullanici && sifre === adminsifre) {
        alert("Giriş başarılı! Hoş geldin " + adminkullanici);
        window.location.href = "anasayfa.html";
    } else {
        kalanHak--;
        alert("Giriş başarısız! Kalan hakkınız: " + kalanHak); 
    }
}

