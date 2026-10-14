# LOST IN SPACE

Website edukasi luar angkasa statis dengan gaya **Neo-Brutalism**, dibuat menggunakan HTML5, CSS3, dan Vanilla JavaScript.

Demo Web
https://nasadeepspace-initiative.vercel.app/

## Halaman

- `index.html`: Home, hero, ringkasan, dan planet pilihan.
- `pages/planets.html`: delapan planet, filter tipe, pencarian, dan modal detail.
- `pages/explore.html`: fakta astronomi, filter kategori, pencarian, dan modal informasi.
- `pages/about.html`: misi proyek dan teknologi.

## Fitur

- Responsive untuk desktop, tablet, dan ponsel.
- Navigasi mobile.
- Dark/light theme dengan preferensi disimpan di `localStorage`.
- Filter dan pencarian planet.
- Modal detail planet dan fakta.
- Animasi reveal ketika konten masuk viewport.
- Tanpa backend, database, atau framework.

## Menjalankan secara lokal

### Cara 1: Buka langsung
Buka `index.html` menggunakan browser. Sebagian besar fitur bekerja tanpa server lokal.

### Cara 2: VS Code + Live Server (disarankan)
1. Ekstrak ZIP project.
2. Buka folder `lost-in-space` di VS Code.
3. Pasang ekstensi **Live Server** jika belum tersedia.
4. Klik kanan `index.html`.
5. Pilih **Open with Live Server**.

### Cara 3: Python local server
Pastikan Python tersedia, lalu jalankan dari folder project:

```bash
python3 -m http.server 8000
```

Buka `http://localhost:8000`.

## Struktur folder

```text
lost-in-space/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── planets.js
│   │   └── explore.js
│   └── images/
└── pages/
    ├── planets.html
    ├── explore.html
    └── about.html
```

## Catatan

- Font dari Google Fonts membutuhkan koneksi internet. Jika offline, browser menggunakan font fallback.
- Ilustrasi planet dibuat dengan CSS sehingga project tidak bergantung pada gambar eksternal.
- Informasi astronomi ditulis sebagai konten pengenalan, bukan data real-time.
