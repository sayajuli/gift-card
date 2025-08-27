# 🎁 Gift Card Coffee - Web Aplikasi Hadiah Kopi

Sebuah aplikasi web gift card interaktif yang dibuat khusus untuk teman, berisi informasi lengkap tentang hadiah kopi **Batavia Espresso** beserta tutorial cara menyeduhnya.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📖 Tentang Proyek

Ini adalah **proyek React pertama saya** yang dibuat sebagai hadiah digital untuk teman. Web ini berisi:

- 🎨 Gift card digital yang interaktif
- ☕ Informasi lengkap tentang kopi Batavia Espresso
- 📚 Tutorial step-by-step cara membuat espresso dan kopi tubruk
- 🎭 Elemen surprise dan humor lokal (Bahasa Sunda)
- 📱 Design responsive untuk mobile dan desktop

## ✨ Fitur Utama

### 🏠 **Dashboard**
- Halaman utama dengan informasi detail tentang kopi Batavia Espresso
- Spesifikasi lengkap: origin, roast level, tasting notes
- Pertanyaan interaktif untuk menentukan preferensi kopi user

### ☕ **Tutorial Kopi**
- **Tutorial Espresso**: Panduan lengkap membuat espresso dengan mesin
- **Tutorial Tubruk**: Cara tradisional menyeduh kopi tubruk
- Dilengkapi dengan gambar step-by-step
- Tips dan saran penyajian

### 🎭 **Elemen Interaktif**
- Modal input nama user
- Penyimpanan preferensi menggunakan localStorage
- Easter egg untuk user yang tidak suka kopi
- Video ucapan spesial di halaman logout

## 🛠 Teknologi yang Digunakan

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.12
- **Routing**: React Router 7.8.2
- **Icons**: React Icons 5.5.0
- **Font**: Sofia Sans (Google Fonts)
- **Linting**: ESLint 9.33.0

## 📂 Struktur Proyek

```
src/
├── components/
│   ├── Elements/
│   │   ├── Button/          # Komponen tombol reusable
│   │   └── Input/           # Komponen input reusable
│   ├── Fragments/
│   │   ├── CardModal.jsx    # Modal input nama
│   │   ├── CardStep.jsx     # Card tutorial step
│   │   ├── Espresso.jsx     # Tutorial espresso
│   │   ├── Tubruk.jsx       # Tutorial tubruk
│   │   ├── IsLikeCoffee.jsx # Komponen untuk pecinta kopi
│   │   ├── IsNotLikeCoffee.jsx # Komponen untuk yang tidak suka kopi
│   │   ├── Question.jsx     # Pertanyaan preferensi
│   │   ├── StepMenu.jsx     # Menu pilihan tutorial
│   │   ├── Navbar.jsx       # Navigation bar
│   │   └── Prank.jsx        # Easter egg
│   └── Layouts/
│       ├── Layout.jsx       # Layout dasar
│       ├── DashboardLayout.jsx # Layout dashboard
│       └── StepLayout.jsx   # Layout tutorial
├── pages/
│   ├── Dashboard.jsx        # Halaman utama
│   ├── Step.jsx            # Halaman tutorial
│   └── Logout.jsx          # Halaman logout
└── assets/                 # Gambar dan video
```

## 🚀 Instalasi dan Menjalankan Proyek

### Prerequisites
- Node.js (versi 16 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**
```bash
git clone <repository-url>
cd gift-card
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
```

3. **Jalankan development server**
```bash
npm run dev
# atau
yarn dev
```

4. **Buka browser** dan akses `http://localhost:5173`

### Build untuk Production

```bash
npm run build
# atau
yarn build
```

## 🎯 Cara Menggunakan

1. **Buka aplikasi** - User akan disambut dengan modal input nama
2. **Masukkan nama** - Nama akan disimpan dan ditampilkan di navbar
3. **Jawab pertanyaan** - Tentukan apakah user suka kopi atau tidak
4. **Jelajahi konten**:
   - Baca informasi lengkap tentang kopi Batavia Espresso
   - Pilih tutorial yang diinginkan (Espresso atau Tubruk)
   - Ikuti langkah-langkah yang disediakan
5. **Logout** - Nikmati video ucapan spesial

## 🎨 Highlights Design

- **Color Scheme**: Dark theme dengan slate-800 sebagai warna utama
- **Typography**: Font Sofia Sans untuk readability yang baik
- **Responsive**: Layout yang adaptif dari mobile hingga desktop
- **Interactive Elements**: Hover effects dan smooth transitions
- **Local Touch**: Penggunaan bahasa Sunda untuk humor lokal

## 📱 Responsive Design

Aplikasi ini dioptimalkan untuk berbagai ukuran layar:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔄 State Management

Menggunakan kombinasi:
- **React useState** untuk state lokal komponen
- **localStorage** untuk persistensi data user (nama, preferensi kopi, step tutorial)

## 🤝 Kontribusi

Ini adalah proyek pembelajaran pertama saya dengan React. Feedback dan saran sangat diterima untuk pengembangan lebih lanjut!

## 📝 Catatan Pengembang

Proyek ini dibuat dengan penuh kasih sayang sebagai hadiah untuk teman. Meskipun sederhana, ini adalah langkah pertama saya dalam dunia React development. Banyak hal yang masih bisa diperbaiki dan dikembangkan lebih lanjut.

### Yang Dipelajari:
- ⚛️ Dasar-dasar React (Components, Props, State)
- 🧩 Component composition dan reusability
- 🎨 Styling dengan Tailwind CSS
- 🛣 Routing dengan React Router
- 💾 State management dengan localStorage
- 📱 Responsive web design
- 🔧 Build tools dengan Vite

---

**Dibuat dengan ❤️ untuk teman terbaik**

*"Semoga kopinya enak dan tutorialnya bermanfaat!"* ☕✨
