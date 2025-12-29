document.getElementById('haberForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const baslik = document.getElementById('baslik').value;
    const aciklama = document.getElementById('aciklama').value;
    const il = document.getElementById('il').value;
    const resim = document.getElementById('resim').value;

    // Yeni haber objesi
    const yeniHaber = { baslik, aciklama, il, resim, tarih: new Date().toISOString() };

    // Burada GitHub API kullanacağız JSON'u güncellemek için
    // token ve repo bilgilerini buraya ekleyeceğiz
    console.log("Haber eklendi:", yeniHaber);

    alert("Haber eklendi! (Henüz GitHub API ile bağlanmadı)");
});