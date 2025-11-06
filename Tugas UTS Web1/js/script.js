const formLogin = document.getElementById("formLogin");

formLogin.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

        function validateForm() {
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let isValid = true;

                        // Reset pesan kesalahan
            document.getElementById("error-email").innerText = "";
            document.getElementById("error-password").innerText = "";
            document.getElementById("message").innerText = "";

            // Validasi Email
            let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (email == "") {
                document.getElementById("error-email").innerText = "Email tidak boleh kosong";
                isValid = false;
            } else if (!emailPattern.test(email)) {
                document.getElementById("error-email").innerText = "Format email tidak valid";
                isValid = false;
            }
            // Validasi Password
            if (password == "") {
                document.getElementById("error-password").innerText = "Password tidak boleh kosong";
                isValid = false;
            }

            if (!isValid) {
                return false;
            }
            const userFound = dataPengguna.find(user => 
                user.email === email && user.password === password
            );
            if (userFound) {
                // Login Berhasil
                document.getElementById("message").innerText = `Login Berhasil! Selamat datang, ${userFound.nama}.`;
                document.getElementById("message").style.color = 'green';
                    
                // --- 4. Pengalihan Halaman Berdasarkan Role ---
                if (userFound.role === 'Admin') {
                    alert('Mengalihkan ke Halaman Admin...');
                    window.location.href = "dashboard.html"; 
                } else {
                    alert('Mengalihkan ke Halaman User...');
                    window.location.href = "dashboard.html";
                }
                return true;

            } else {
                // Login Gagal
                document.getElementById("message").innerText = 'Email atau Password salah. Silakan coba lagi.';
                document.getElementById("message").style.color = 'red';
                return false;
            }
        }
// --- A. Dapatkan Referensi Elemen ---
const forgotPassLink = document.getElementById('forgotPasswordLink');
const registerLink = document.getElementById('registerLink');

const forgotPassModal = document.getElementById('forgotPasswordModal');
const registerModal = document.getElementById('registerModal');

// Ambil semua tombol tutup
const closeButtons = document.querySelectorAll('.close-btn');


// --- B. Fungsi Tampilkan/Sembunyikan Modal ---

// Fungsi untuk menutup modal
function closeModal(modalElement) {
    modalElement.style.display = 'none';
}

// Event listener untuk tombol 'Lupa Password'
forgotPassLink.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah link pindah halaman
    forgotPassModal.style.display = 'block';
});

// Event listener untuk tombol 'Daftar'
registerLink.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah link pindah halaman
    registerModal.style.display = 'block';
});

// Event listener untuk tombol tutup (x) di dalam modal
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Ambil ID modal dari atribut data-modal dan tutup
        const modalId = this.getAttribute('data-modal');
        closeModal(document.getElementById(modalId));
    });
});

// Tutup modal ketika pengguna mengklik di luar konten modal
window.addEventListener('click', function(e) {
    if (e.target == forgotPassModal) {
        closeModal(forgotPassModal);
    }
    if (e.target == registerModal) {
        closeModal(registerModal);
    }
});


// --- C. Tambahkan Logika Form di Dalam Modal (Opsional) ---

// Contoh sederhana validasi form Lupa Password
const forgotPassForm = document.getElementById('forgotPassForm');
forgotPassForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('forgot-email').value;
    alert(`Link reset telah dikirim ke: ${email}`);
    closeModal(forgotPassModal);
    forgotPassForm.reset();
});

// Contoh sederhana validasi form Daftar
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('reg-email').value;
    // Di sini seharusnya ada logika untuk menyimpan data ke database atau file
    alert(`Pendaftaran untuk ${email} berhasil!`);
    closeModal(registerModal);
    registerForm.reset();
});