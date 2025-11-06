// js/stok.js (Perbaikan ReferenceError dan Integrasi Keranjang)

const stokBody = document.getElementById('stok-body');
const formTambahStok = document.getElementById('form-tambah-stok');
const STORAGE_KEY = 'katalogBukuLS'; 

// -----------------------------------------------------------
// FUNGSI UTILITY & LOCAL STORAGE
// -----------------------------------------------------------

// Mendapatkan data stok (Prioritas: Local Storage -> data.js Global)
function getKatalogData() {
    const dataLS = localStorage.getItem(STORAGE_KEY);
    
    if (dataLS) {
        // 1. Jika ada data di Local Storage, gunakan itu
        return JSON.parse(dataLS);
    } else if (typeof dataKatalogBuku !== 'undefined') {
        // 2. Jika tidak ada, ambil dari data.js global (INISIALISASI AWAL)
        // dan simpan ke Local Storage untuk penggunaan selanjutnya
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataKatalogBuku));
        return dataKatalogBuku;
    } else {
        console.error("Kesalahan: dataKatalogBuku (dari data.js) tidak ditemukan.");
        return [];
    }
}

// Menyimpan data stok ke Local Storage
function saveKatalogData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Fungsi pembantu untuk memformat harga
function formatRupiah(numberStr) {
    const number = parseFloat(numberStr.toString().replace(/[^0-9]/g, ''));
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}

// --- FUNGSI KERANJANG ---
function getKeranjang() {
    const keranjang = localStorage.getItem('keranjangBelanja');
    return keranjang ? JSON.parse(keranjang) : [];
}

function saveKeranjang(keranjang) {
    localStorage.setItem('keranjangBelanja', JSON.stringify(keranjang));
}

// -----------------------------------------------------------
// FUNGSI TAMBAH BARANG KE KERANJANG (Aksi Tombol Beli)
// -----------------------------------------------------------

function tambahKeKeranjang(kodeBuku) {
    let keranjang = getKeranjang();
    
    const itemIndex = keranjang.findIndex(item => item.kodeBarang === kodeBuku);

    if (itemIndex > -1) {
        keranjang[itemIndex].kuantitas += 1;
        alert(`Kuantitas ${kodeBuku} bertambah menjadi ${keranjang[itemIndex].kuantitas} di keranjang.`);
    } else {
        keranjang.push({
            kodeBarang: kodeBuku,
            kuantitas: 1
        });
        alert(`Item ${kodeBuku} berhasil ditambahkan ke keranjang.`);
    }

    saveKeranjang(keranjang); 
}


// -----------------------------------------------------------
// FUNGSI UTAMA RENDER
// -----------------------------------------------------------

function renderStok(data) {
    if (!stokBody) return;
    
    stokBody.innerHTML = ''; 

    data.forEach((buku) => {
        const row = document.createElement('tr');
        const hargaFormatted = formatRupiah(buku.harga);
        
        row.innerHTML = `
            <td>${buku.kodeBarang}</td>
            <td style="text-align: center;">${buku.namaBarang}</td>
            <td>${buku.jenisBarang || '-'}</td>
            <td>${buku.edisi || '-'}</td>
            <td>${buku.stok}</td>
            <td>${hargaFormatted}</td>
            <td><img src="${buku.cover || 'img/default.jpg'}" alt="Cover ${buku.namaBarang}" style="width: 50px; height: auto;"></td>
            <td>
                <button class="btn-beli" data-kode="${buku.kodeBarang}" style="background-color: #28a745; color: white; border: none; padding: 5px 10px; cursor: pointer;">
                    Beli
                </button>
            </td>
        `;
        stokBody.appendChild(row);
    });
    
    // Pasang Event Listener untuk semua tombol Beli
    document.querySelectorAll('.btn-beli').forEach(button => {
        button.addEventListener('click', function() {
            const kode = this.getAttribute('data-kode');
            tambahKeKeranjang(kode);
        });
    });
}

// -----------------------------------------------------------
// FUNGSI TAMBAH BARIS BARU (Aksi Form)
// -----------------------------------------------------------

function tambahBarisStok(event) {
    event.preventDefault(); 
    
    let currentKatalog = getKatalogData(); // Panggil fungsi yang kini sudah didefinisikan

    // ... (Logika mengambil data form)

    const kodeInput = document.getElementById('kode').value.toUpperCase();
    const stokInput = parseInt(document.getElementById('stok').value);
    const hargaInput = document.getElementById('harga').value;
    
    const newBuku = {
        kodeBarang: kodeInput,
        namaBarang: document.getElementById('nama').value,
        jenisBarang: document.getElementById('jenis').value || 'Buku Ajar',
        edisi: document.getElementById('edisi').value || '1',
        stok: stokInput,
        harga: `Rp ${Number(hargaInput).toLocaleString('id-ID', { minimumFractionDigits: 0 })}`, 
        cover: 'img/default.jpg' 
    };
    
    // ... (Validasi & Cek Duplikasi)
    if (newBuku.kodeBarang === "" || newBuku.namaBarang === "" || isNaN(newBuku.stok) || newBuku.stok <= 0) {
        alert("Kode, Nama, dan Stok harus diisi dengan benar!");
        return;
    }

    const kodeSudahAda = currentKatalog.some(buku => buku.kodeBarang === newBuku.kodeBarang);
    if (kodeSudahAda) {
        alert(`Kode Barang ${newBuku.kodeBarang} sudah ada!`);
        return;
    }

    // Tambahkan dan Simpan
    currentKatalog.push(newBuku);
    saveKatalogData(currentKatalog);
    
    // Render ulang
    renderStok(currentKatalog);
    
    formTambahStok.reset();
    alert(`Buku "${newBuku.namaBarang}" berhasil ditambahkan!`);
}


// -----------------------------------------------------------
// EKSEKUSI
// -----------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Panggil fungsi getKatalogData() untuk mendapatkan data yang sudah benar
    const initialData = getKatalogData(); 
    renderStok(initialData);

    if (formTambahStok) {
        formTambahStok.addEventListener('submit', tambahBarisStok);
    }
});