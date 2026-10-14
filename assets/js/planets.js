const planetInfo = {
  mercury: { name: "Mercury", type: "TERRESTRIAL PLANET", description: "Mercury adalah planet terkecil di tata surya dan mengorbit paling dekat dengan Matahari. Permukaannya dipenuhi kawah dan mengalami perubahan suhu ekstrem.", facts: [["Diameter", "4.879 km"], ["Tahun", "88 hari Bumi"], ["Satelit", "0"]] },
  venus: { name: "Venus", type: "TERRESTRIAL PLANET", description: "Venus memiliki atmosfer sangat tebal yang didominasi karbon dioksida. Efek rumah kaca yang kuat menjadikannya planet terpanas di tata surya.", facts: [["Diameter", "12.104 km"], ["Tahun", "225 hari Bumi"], ["Satelit", "0"]] },
  earth: { name: "Earth", type: "TERRESTRIAL PLANET", description: "Bumi memiliki air cair di permukaan dan atmosfer yang mendukung kehidupan seperti yang kita kenal. Sejauh ini, Bumi adalah satu-satunya tempat dengan kehidupan yang telah dikonfirmasi.", facts: [["Diameter", "12.742 km"], ["Tahun", "365,25 hari"], ["Satelit", "1"]] },
  mars: { name: "Mars", type: "TERRESTRIAL PLANET", description: "Mars dikenal sebagai Planet Merah karena oksida besi pada debu permukaannya. Para ilmuwan meneliti jejak air masa lalu dan kemungkinan kondisi yang pernah mendukung kehidupan mikroba.", facts: [["Diameter", "6.779 km"], ["Tahun", "687 hari Bumi"], ["Satelit", "2"]] },
  jupiter: { name: "Jupiter", type: "GAS GIANT", description: "Jupiter merupakan planet terbesar di tata surya. Atmosfernya menampilkan pita awan dan badai besar, termasuk Great Red Spot.", facts: [["Diameter", "139.820 km"], ["Tahun", "11,86 tahun Bumi"], ["Satelit", "Banyak"]] },
  saturn: { name: "Saturn", type: "GAS GIANT", description: "Saturnus memiliki sistem cincin yang luas, terdiri dari banyak partikel es dan batuan. Planet ini memiliki kepadatan rata-rata lebih rendah daripada air.", facts: [["Diameter", "116.460 km"], ["Tahun", "29,4 tahun Bumi"], ["Satelit", "Banyak"]] },
  uranus: { name: "Uranus", type: "ICE GIANT", description: "Uranus adalah raksasa es berwarna biru kehijauan karena metana di atmosfernya. Sumbu rotasinya sangat miring sehingga planet ini tampak berputar menyamping.", facts: [["Diameter", "50.724 km"], ["Tahun", "84 tahun Bumi"], ["Satelit", "Banyak"]] },
  neptune: { name: "Neptune", type: "ICE GIANT", description: "Neptune adalah planet terjauh dari Matahari di antara delapan planet. Atmosfernya yang dinamis memiliki angin dengan kecepatan sangat tinggi.", facts: [["Diameter", "49.244 km"], ["Tahun", "165 tahun Bumi"], ["Satelit", "Banyak"]] }
};

const cards = [...document.querySelectorAll(".planet-card")];
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const searchInput = document.querySelector("#planet-search");
const emptyState = document.querySelector("#empty-state");
let activeFilter = "all";

function filterPlanets() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matchesType = activeFilter === "all" || card.dataset.type === activeFilter;
    const matchesSearch = card.dataset.name.includes(query) || card.textContent.toLowerCase().includes(query);
    const show = matchesType && matchesSearch;
    card.hidden = !show;
    if (show) visible++;
  });
  if (emptyState) emptyState.hidden = visible !== 0;
}
filterButtons.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle("active", item === button));
  filterPlanets();
}));
searchInput?.addEventListener("input", filterPlanets);

const modal = document.querySelector("#planet-modal");
document.querySelectorAll(".detail-btn").forEach(button => button.addEventListener("click", () => {
  const data = planetInfo[button.dataset.planet];
  if (!data || !modal) return;
  document.querySelector("#modal-title").textContent = data.name;
  document.querySelector("#modal-type").textContent = data.type;
  document.querySelector("#modal-description").textContent = data.description;
  const visual = document.querySelector("#modal-planet-visual");
  visual.className = `modal-planet planet-visual ${button.dataset.planet}`;
  const facts = document.querySelector("#modal-facts");
  facts.replaceChildren();
  data.facts.forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "modal-fact";
    const strong = document.createElement("strong");
    const small = document.createElement("span");
    strong.textContent = value; small.textContent = label;
    item.append(strong, small); facts.append(item);
  });
  openModal(modal);
}));
