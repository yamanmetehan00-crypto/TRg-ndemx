// Mevcut haberleri localStorage'dan al
let storedNews = JSON.parse(localStorage.getItem('newsList')) || [];

// Haber ekleme
document.getElementById('admin-add').addEventListener('click', () => {
  const title = document.getElementById('admin-title').value;
  const category = document.getElementById('admin-category').value;
  const city = document.getElementById('admin-city').value;
  const content = document.getElementById('admin-content').value;
  const time = document.getElementById('admin-time').value;
  const imageFile = document.getElementById('admin-image').files[0];

  if (!title || !category || !city || !content || !time || !imageFile) {
    alert("Tüm alanları doldur!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const newNews = {
      id: Date.now(),
      title,
      category,
      city,
      content,
      time,
      image: e.target.result
    };

    storedNews.unshift(newNews);
    localStorage.setItem('newsList', JSON.stringify(storedNews));
    alert("Haber eklendi!");
  };
  reader.readAsDataURL(imageFile);
});

// Ana sayfa ve il sayfası render fonksiyonları
function renderHome() {
  const container = document.querySelector(".news-container");
  if(!container) return;
  container.innerHTML = "";
  storedNews.slice(0,6).forEach(n => {
    container.innerHTML += `
      <div class="news-card">
        <img src="${n.image}">
        <h3>${n.title}</h3>
        <p>${n.city} • ${n.time}</p>
      </div>
    `;
  });
}

function renderCity(cityName) {
  const container = document.querySelector(".news-container");
  if(!container) return;
  const filtered = storedNews.filter(n => n.city === cityName);
  container.innerHTML = "";
  if(filtered.length === 0){
    container.innerHTML = "<p>Bu il için henüz haber yok.</p>";
    return;
  }
  filtered.forEach(n => {
    container.innerHTML += `
      <div class="card">
        <img src="${n.image}">
        <div class="card-content">
          <h3>${n.title}</h3>
          <p>${n.city} • ${n.time}</p>
        </div>
      </div>
    `;
  });
}