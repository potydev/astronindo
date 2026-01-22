# AstronIndo - Website Pembelajaran Astronomi

AstronIndo adalah website pembelajaran interaktif tentang astronomi dan alam semesta dengan animasi GSAP yang halus dan menarik.

## Fitur Utama

- **Desain Responsif**: Website yang optimal di berbagai perangkat
- **Animasi GSAP**: Animasi halus dan interaktif menggunakan GreenSock Animation Platform
- **Pembelajaran Galaksi**: Informasi lengkap tentang berbagai jenis galaksi
- **Eksplorasi Planet**: Detail tentang semua planet dalam tata surya
- **Quiz Interaktif**: Uji pengetahuan astronomi dengan tiga tingkat kesulitan
- **UI/UX Modern**: Desain yang menarik dengan tema astronomi

## Struktur Proyek

```
astronindo/
├── assets/
│   ├── css/
│   │   └── style.css          # File CSS utama
│   ├── js/
│   │   └── main.js            # File JavaScript dengan animasi GSAP
│   ├── images/
│   │   ├── logo.svg           # Logo website
│   │   └── favicon.ico        # Favicon
│   └── fonts/                 # Folder untuk font (jika diperlukan)
├── pages/
│   ├── galaksi.html           # Halaman pembelajaran galaksi
│   ├── planet.html            # Halaman pembelajaran planet
│   └── quiz.html              # Halaman quiz interaktif
├── index.html                 # Halaman utama
└── README.md                  # Dokumentasi proyek
```

## Teknologi yang Digunakan

- **HTML5**: Struktur halaman web
- **CSS3**: Desain dan tata letak dengan animasi
- **JavaScript**: Interaktivitas dan logika aplikasi
- **GSAP (GreenSock Animation Platform)**: Animasi halus dan performa tinggi
- **Google Fonts**: Typography modern dengan font Orbitron dan Space Grotesk

## Cara Menjalankan

1. Clone atau download repository ini
2. Buka folder `astronindo` di server web lokal (seperti XAMPP, WAMP, atau Live Server di VS Code)
3. Buka `index.html` di browser

## Fitur Detail

### Halaman Utama
- Hero section dengan animasi astronaut yang mengambang
- Fitur-fitur pembelajaran dengan animasi scroll
- Preview singkat galaksi, planet, dan quiz
- Navigasi yang responsif

### Halaman Galaksi
- Informasi lengkap tentang 4 jenis utama galaksi:
  - Galaksi Spiral
  - Galaksi Eliptikal
  - Galaksi Tak Beraturan
  - Galaksi Lensa
- Proses pembentukan galaksi
- Galaksi-galaksi terkenal di alam semesta

### Halaman Planet
- Tata surya interaktif dengan animasi orbit
- Detail lengkap 8 planet dengan statistik:
  - Diameter
  - Jarak dari Matahari
  - Periode orbit
  - Suhu permukaan
- Fakta menarik tentang setiap planet
- Informasi umum tentang tata surya

### Halaman Quiz
- Tiga tingkat kesulitan:
  - Pemula (10 pertanyaan)
  - Menengah (15 pertanyaan)
  - Ahli (20 pertanyaan)
- Sistem skor dan feedback
- Papan peringkat
- Animasi dan transisi yang halus

## Animasi GSAP

Website ini menggunakan GSAP untuk berbagai animasi:
- Loading screen dengan animasi planet
- Animasi scroll untuk section dan card
- Transisi halus antar elemen
- Animasi hover dan interaktif
- Animasi orbit planet di halaman planet

## Kustomisasi

### Mengubah Warna Tema
Edit variabel CSS di `assets/css/style.css`:
```css
:root {
    --primary-color: #0a0e27;
    --secondary-color: #1a237e;
    --accent-color: #7c4dff;
    --light-accent: #b388ff;
    --text-light: #e8eaf6;
    --text-dark: #ffffff;
}
```

### Menambah Pertanyaan Quiz
Edit array `quizQuestions` di `assets/js/main.js` atau `pages/quiz.html`:
```javascript
{
    question: "Pertanyaan baru?",
    options: ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
    correct: 0, // Index jawaban benar
    explanation: "Penjelasan jawaban"
}
```

## Browser Support

- Chrome (versi terbaru)
- Firefox (versi terbaru)
- Safari (versi terbaru)
- Edge (versi terbaru)

## Kontribusi

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -am 'Menambah fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Lisensi

Proyek ini dilisensikan under MIT License - lihat file [LICENSE](LICENSE) untuk detailnya.

## Kredit

- [GSAP](https://greensock.com/gsap/) - Untuk animasi yang halus
- [Google Fonts](https://fonts.google.com/) - Untuk typography
- [Font Awesome](https://fontawesome.com/) - Untuk ikon (jika digunakan)

## Kontak

Jika ada pertanyaan atau saran, silakan hubungi:
- Email: info@astronindo.com
- Website: www.astronindo.com