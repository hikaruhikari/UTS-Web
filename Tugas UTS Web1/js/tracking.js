/**
 * Asumsi: Variabel dataTracking sudah didefinisikan di data.js
 * var dataTracking = { ... }
 */

function cariTracking() {
    const nomorDO = document.getElementById('input-nomor-do').value.trim();
    const resultsDiv = document.getElementById('tracking-results');
    resultsDiv.innerHTML = ''; // Kosongkan hasil sebelumnya

    if (!nomorDO) {
        resultsDiv.innerHTML = '<p style="color: red;">Mohon masukkan Nomor Delivery Order.</p>';
        return;
    }

    const data = dataTracking[nomorDO];

    if (!data) {
        resultsDiv.innerHTML = `<p style="color: red;">Nomor Delivery Order **${nomorDO}** tidak ditemukan.</p>`;
        return;
    }

    // --- Detail Informasi ---
    let htmlDetails = `
        <h3 style="margin-bottom: 10px;">Hasil Tracking untuk DO: **${data.nomorDO}**</h3>
        <div class="result-detail">
            <strong>Nama Pemesan:</strong> <span>${data.nama}</span>
        </div>
        <div class="result-detail">
            <strong>Ekspedisi:</strong> <span>${data.ekspedisi}</span>
        </div>
        <div class="result-detail">
            <strong>Tanggal Kirim:</strong> <span>${data.tanggalKirim}</span>
        </div>
        <div class="result-detail">
            <strong>Jenis Paket:</strong> <span>${data.paket}</span>
        </div>
        <div class="result-detail">
            <strong>Total Pembayaran:</strong> <span>${data.total}</span>
        </div>
    `;

    // --- Status Pengiriman (Progress Bar Sederhana) ---
    let progressClass = '';
    let statusDisplay = '';

    if (data.status === "Dikirim") {
        progressClass = 'status-Dikirim';
        statusDisplay = '📦 Dikirim (Selesai)';
    } else if (data.status === "Dalam Perjalanan") {
        progressClass = 'status-DalamPerjalanan';
        statusDisplay = '🚚 Dalam Perjalanan';
    } else {
        // Status lain, misalnya "Gagal Kirim" atau status default
        progressClass = 'status-Error';
        statusDisplay = `⚠️ Status Lain: ${data.status}`;
    }

    htmlDetails += `
        <div class="result-detail">
            <strong>Status Pengiriman:</strong> <span>${statusDisplay}</span>
        </div>
        <div class="progress-bar">
            <div class="progress-bar-fill ${progressClass}">
                ${data.status}
            </div>
        </div>
    `;

    // --- Detail Perjalanan (Tabel) ---
    let htmlPerjalanan = `
        <h4 style ="margin-top: 20px;">Detail Perjalanan</h4>
        <table id="perjalanan-table">
            <thead>
                <tr>
                    <th>Waktu</th>
                    <th>Keterangan</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Urutkan perjalanan dari yang terbaru ke terlama untuk tampilan yang lebih mudah dibaca
    const perjalananTerurut = [...data.perjalanan].reverse(); 

    perjalananTerurut.forEach(item => {
        htmlPerjalanan += `
            <tr>
                <td>${item.waktu}</td>
                <td>${item.keterangan}</td>
            </tr>
        `;
    });

    htmlPerjalanan += `
            </tbody>
        </table>
    `;

    resultsDiv.innerHTML = htmlDetails + htmlPerjalanan;
}