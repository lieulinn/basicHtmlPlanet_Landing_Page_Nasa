const factDetails = [
  { title: "We live in a galaxy.", copy: "Galaksi Bima Sakti adalah galaksi spiral tempat Tata Surya berada. Tata Surya terletak di salah satu lengan spiralnya, yang dikenal sebagai Lengan Orion." },
  { title: "Venus is seriously hot.", copy: "Atmosfer Venus yang padat memerangkap panas melalui efek rumah kaca. Akibatnya, suhu permukaannya lebih tinggi daripada Mercury, meskipun Mercury lebih dekat ke Matahari." },
  { title: "The Sun is a star.", copy: "Matahari adalah bola plasma yang menghasilkan energi melalui fusi nuklir di intinya. Energi ini menopang sebagian besar kehidupan dan cuaca di Bumi." },
  { title: "Jupiter is enormous.", copy: "Jupiter memiliki massa lebih dari dua kali gabungan massa semua planet lain di tata surya. Badai Great Red Spot di atmosfernya telah diamati selama berabad-abad." },
  { title: "Space is mostly silent.", copy: "Gelombang suara membutuhkan medium seperti udara, air, atau benda padat. Karena ruang antarbintang sangat renggang, suara tidak merambat seperti yang kita dengar di Bumi." },
  { title: "Saturn has rings.", copy: "Cincin Saturnus terdiri dari bongkahan partikel yang ukurannya beragam, sebagian besar berupa es air. Cincin ini sangat lebar tetapi relatif tipis." },
  { title: "The universe expands.", copy: "Pengamatan terhadap galaksi jauh menunjukkan bahwa ruang alam semesta mengembang. Pada skala besar, semakin jauh galaksi, umumnya semakin cepat galaksi itu tampak menjauh dari kita." },
  { title: "Why do astronauts float?", copy: "Astronaut dan wahana antariksa berada dalam keadaan jatuh bebas saat mengorbit Bumi. Mereka tetap dipengaruhi gravitasi, tetapi bergerak bersama sehingga tampak melayang." }
];
const factCards = [...document.querySelectorAll(".fact-card")];
const categoryButtons = [...document.querySelectorAll(".fact-filter")];
const search = document.querySelector("#fact-search");
const empty = document.querySelector("#facts-empty");
const count = document.querySelector("#fact-count");
let selectedCategory = "all";

function filterFacts() {
  const query = (search?.value || "").trim().toLowerCase();
  let visible = 0;
  factCards.forEach(card => {
    const categoryMatch = selectedCategory === "all" || card.dataset.category === selectedCategory;
    const searchMatch = `${card.dataset.search} ${card.textContent}`.toLowerCase().includes(query);
    card.hidden = !(categoryMatch && searchMatch);
    if (!card.hidden) visible++;
  });
  if (empty) empty.hidden = visible !== 0;
  if (count) count.textContent = String(visible).padStart(2, "0");
}
categoryButtons.forEach(button => button.addEventListener("click", () => {
  selectedCategory = button.dataset.category;
  categoryButtons.forEach(item => item.classList.toggle("active", item === button));
  filterFacts();
}));
search?.addEventListener("input", filterFacts);

const modal = document.querySelector("#fact-modal");
document.querySelectorAll(".fact-more").forEach(button => button.addEventListener("click", () => {
  const fact = factDetails[Number(button.dataset.fact)];
  if (!fact || !modal) return;
  document.querySelector("#fact-modal-title").textContent = fact.title;
  document.querySelector("#fact-modal-copy").textContent = fact.copy;
  openModal(modal);
}));
