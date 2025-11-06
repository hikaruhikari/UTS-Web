// js/history.js (Tanpa Import)

// 1. DATA RIWAYAT (Menggunakan variabel global dataTracking)
// dataTracking sudah tersedia di lingkup global.

if (typeof dataTracking === 'undefined') {
    console.error("Kesalahan: Variabel dataTracking tidak ditemukan. Pastikan data.js dimuat sebelum history.js.");
}

// Elemen HTML yang dibutuhkan
const tabelBody = document.querySelector('#tabel-riwayat tbody');
const noHistory = document.getElementById('no-history');

// 2. FUNGSI MENAMPILKAN RIWAYAT
function tampilkanRiwayat() {
    tabelBody.innerHTML = ''; 

    // Konversi objek dataTracking menjadi array untuk memudahkan iterasi
    const historyArray = Object.values(dataTracking);

    if (historyArray.length === 0) {
        noHistory.style.display = 'block';
        return;
    } else {
        noHistory.style.display = 'none';
    }

    historyArray.forEach(transaksi => {
        const row = tabelBody.insertRow();
        row.insertCell(0).textContent = transaksi.nomorDO;
        row.insertCell(1).textContent = transaksi.tanggalKirim;
        row.insertCell(2).textContent = transaksi.total;
        
        // Sel Status
        const statusCell = row.insertCell(3);
        statusCell.textContent = transaksi.status;
        
        if (transaksi.status === 'Dikirim') {
            statusCell.style.color = 'green';
        } else if (transaksi.status === 'Dalam Perjalanan') {
            statusCell.style.color = 'orange';
        } else if (transaksi.status === 'Dibatalkan') {
            statusCell.style.color = 'red';
        }

        // Tombol Detail
        const detailCell = row.insertCell(4);
        const btnDetail = document.createElement('button');
        btnDetail.textContent = 'Lihat Detail';
        btnDetail.style.backgroundColor = '#007bff';
        btnDetail.style.color = 'white';
        btnDetail.style.border = 'none';
        btnDetail.style.padding = '8px 12px';
        btnDetail.style.cursor = 'pointer';

        // Event listener: Menampilkan riwayat perjalanan lengkap
        btnDetail.onclick = () => {
            let detailPesan = `Detail Pengiriman ${transaksi.nomorDO} (${transaksi.ekspedisi}):\n\n`;
            
            transaksi.perjalanan.forEach(perjalanan => {
                detailPesan += `[${perjalanan.waktu}]\n  -> ${perjalanan.keterangan}\n\n`;
            });

            alert(detailPesan);
        };
        detailCell.appendChild(btnDetail);
    });
}

// Inisialisasi: Panggil saat halaman dimuat
document.addEventListener('DOMContentLoaded', tampilkanRiwayat);