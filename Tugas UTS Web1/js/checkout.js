// Pastikan dataKatalogBuku sudah tersedia dari data.js
if (typeof dataKatalogBuku === 'undefined') {
    console.error("Kesalahan: Variabel dataKatalogBuku tidak ditemukan. Pastikan data.js dimuat sebelum checkout.js.");
}
// Elemen HTML yang dibutuhkan
const tabelBody = document.querySelector('#tabel-pesanan tbody');
const totalPembayaranSpan = document.getElementById('total-pembayaran');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutMessage = document.getElementById('checkout-message');

let totalBelanja = 0;

// -----------------------------------------------------------
// FUNGSI UTILITY & LOCAL STORAGE
// -----------------------------------------------------------

// Mengambil data keranjang dari Local Storage
function getKeranjangDariStorage() {
    const keranjang = localStorage.getItem('keranjangBelanja');
    return keranjang ? JSON.parse(keranjang) : [];
}

// Menyimpan data keranjang ke Local Storage
function saveKeranjangToStorage(keranjang) {
    localStorage.setItem('keranjangBelanja', JSON.stringify(keranjang));
}

// Fungsi pembantu untuk mengubah harga string ("Rp 180.000") menjadi number (180000)
function parseHarga(hargaString) {
    // Menghilangkan "Rp", spasi, dan titik/koma, lalu diubah menjadi integer
    return parseInt(hargaString.replace('Rp ', '').replace(/\./g, '').replace(/,/g, ''));
}

// -----------------------------------------------------------
// MANAJEMEN KERANJANG DI HALAMAN CHECKOUT
// -----------------------------------------------------------

// Fungsi untuk mengubah kuantitas atau menghapus item
function ubahKuantitas(index, nilaiBaru) {
    let keranjang = getKeranjangDariStorage();
    const kuantitasBaru = parseInt(nilaiBaru);

    if (kuantitasBaru <= 0 || isNaN(kuantitasBaru)) {
        // Jika kuantitas 0 atau tidak valid, hapus item
        if (confirm("Apakah Anda yakin ingin menghapus item ini dari keranjang?")) {
            keranjang.splice(index, 1);
        } else {
            tampilkanPesanan(); // Batalkan penghapusan, refresh tampilan dengan kuantitas lama
            return; 
        }
    } else {
        // Update kuantitas item
        keranjang[index].kuantitas = kuantitasBaru;
    }

    saveKeranjangToStorage(keranjang); // Simpan dan update UI
    tampilkanPesanan(); 
}


// FUNGSI UTAMA UNTUK MENAMPILKAN PESANAN
function tampilkanPesanan() {
    const dataPesanan = getKeranjangDariStorage(); 
    tabelBody.innerHTML = '';
    totalBelanja = 0;

    if (dataPesanan.length === 0) {
        tabelBody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px;">Keranjang belanja Anda kosong. Silakan ke <a href="stok.html">Informasi Stok</a> untuk memilih buku.</td></tr>';
        totalPembayaranSpan.textContent = `Rp 0`;
        return;
    }

    dataPesanan.forEach((itemPesanan, index) => {
        // Cari detail buku di dataKatalogBuku
        const detailBuku = dataKatalogBuku.find(buku => buku.kodeBarang === itemPesanan.kodeBarang);
        
        if (!detailBuku) return;

        const hargaSatuan = parseHarga(detailBuku.harga);
        const subtotal = hargaSatuan * itemPesanan.kuantitas;
        totalBelanja += subtotal;

        const row = tabelBody.insertRow();
        row.insertCell(0).textContent = detailBuku.kodeBarang;
        row.insertCell(1).textContent = detailBuku.namaBarang;
        row.insertCell(2).textContent = detailBuku.harga;
        
        // Kolom Kuantitas (dapat diubah)
        const kuantitasCell = row.insertCell(3);
        const inputKuantitas = document.createElement('input');
        inputKuantitas.type = 'number';
        inputKuantitas.min = '0';
        inputKuantitas.value = itemPesanan.kuantitas;
        inputKuantitas.style.width = '60px';
        
        // Listener: Memanggil ubahKuantitas saat nilai berubah
        inputKuantitas.addEventListener('change', function() {
            ubahKuantitas(index, this.value);
        });
        kuantitasCell.appendChild(inputKuantitas);


        row.insertCell(4).textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
        
        // Tombol Hapus
        const aksiCell = row.insertCell(5);
        const btnHapus = document.createElement('button');
        btnHapus.textContent = 'Hapus';
        btnHapus.style.cssText = 'background-color: red; color: white; border: none; padding: 5px; cursor: pointer;';

        btnHapus.onclick = () => {
             // Panggil fungsi ubahKuantitas dengan nilai 0 untuk memicu penghapusan
            ubahKuantitas(index, 0); 
        };
        aksiCell.appendChild(btnHapus);
    });

    // Update total pembayaran
    totalPembayaranSpan.textContent = `Rp ${totalBelanja.toLocaleString('id-ID')}`;
}

// -----------------------------------------------------------
// FUNGSI SUBMIT CHECKOUT
// -----------------------------------------------------------

function handleCheckout(event) {
    event.preventDefault(); 
    
    if (getKeranjangDariStorage().length === 0) {
        checkoutMessage.textContent = 'Keranjang belanja masih kosong!';
        checkoutMessage.style.color = 'red';
        return;
    }

    if (totalBelanja === 0) {
        checkoutMessage.textContent = 'Total pembayaran nol. Ada kesalahan data.';
        checkoutMessage.style.color = 'red';
        return;
    }
    
    // Asumsi: Semua formulir pemesan dan pembayaran telah divalidasi

    checkoutMessage.textContent = 'Memproses pesanan...';
    checkoutMessage.style.color = 'blue';

    const noTransaksi = 'TRX' + Date.now().toString().slice(-6);
    
    setTimeout(() => {
        // *** LOGIKA PENTING: PEMBERSIHAN KERANJANG & PENYIMPANAN HISTORY ***
        
        // 1. Simpan data transaksi ini ke Local Storage History
        // (Anda bisa mengembangkan ini nanti)
        // const transaksiBaru = { no: noTransaksi, total: totalBelanja, ...};
        // saveHistoryToStorage(transaksiBaru);

        // 2. Kosongkan keranjang di Local Storage setelah sukses
        localStorage.removeItem('keranjangBelanja'); 

        checkoutMessage.textContent = `Pemesanan Berhasil! No. Transaksi: ${noTransaksi}. Total: Rp ${totalBelanja.toLocaleString('id-ID')}. Data pemesan sedang diproses.`;
        checkoutMessage.style.color = 'green';
        
        // Reset tampilan
        checkoutForm.reset(); 
        tampilkanPesanan(); // Tampilkan keranjang kosong
        
    }, 1500); 
}

// -----------------------------------------------------------
// EKSEKUSI
// -----------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    tampilkanPesanan(); // Muat keranjang saat halaman dibuka
    checkoutForm.addEventListener('submit', handleCheckout);
});