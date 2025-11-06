<img width="1920" height="1080" alt="Screenshot (343)" src="https://github.com/user-attachments/assets/9e9af460-c616-4937-bf48-17a04de5a667" /># UTS-Web

Berdasarkan Tugas yang diberikan saya akan membagi menjadi 7 bagian dalam penjelasan disini:

1. login.html

Sebagai langkah awal dalam menelusuri web, tentu kita harus login atau mendaftar akun disitus web

<img width="1920" height="1080" alt="Screenshot (299)" src="https://github.com/user-attachments/assets/28f59be5-949a-4a50-b3f7-1868c663f44a" />

hal pertama yang dilakukan adalah membuat struktur html dengan kode umum lalu selanjutnya dibuat secara didetail, < link > pada < head > berfungsi sebagai pemanggil kode pada file agar di html bisa terbaca dan disitu dipanggil kode CSS dengan file style2.css

selanjutnya membuat kotak yang berisi input untuk email dan password serta link lupa password bagi yang lupa dan daftar jika belum pernah masuk

lalu dibuat popup pada 2 link tersebut yang dimulai dengan < div > yang diisi oleh kode pada gambar diatas dan dibawah ini

<img width="1920" height="1080" alt="Screenshot (300)" src="https://github.com/user-attachments/assets/80bb6dde-e9c8-4295-ae49-940c540eca7d" />

setelah semua selesai barulah dipanggil file .js dengan < script > yang dimana data.js sebagai penyimpanan informasi dan script.js sebagai media validasi login

<img width="1920" height="1080" alt="Screenshot (301)" src="https://github.com/user-attachments/assets/f7858357-e459-4c91-97b4-bc3f75525ef7" />

pada bagian var dataPengguna, terdapat beberapa pengguna sebagai user dan admin yang dimana ini sebagai cara agar saat login nama yang tertera bisa masuk tanpa melakukan daftar ulang

<img width="1920" height="1080" alt="Screenshot (302)" src="https://github.com/user-attachments/assets/4c65b46d-8efb-4652-b0c4-c254e74da266" />
<img width="1920" height="1080" alt="Screenshot (303)" src="https://github.com/user-attachments/assets/3955d21a-80b9-4abb-a8df-2913e9dd3bec" />
<img width="1920" height="1080" alt="Screenshot (304)" src="https://github.com/user-attachments/assets/7bdc1879-219e-4383-84a7-26528f69a08d" />
<img width="1920" height="1080" alt="Screenshot (305)" src="https://github.com/user-attachments/assets/288bec55-d287-4deb-a90e-d585d446530d" />
<img width="1920" height="1080" alt="Screenshot (306)" src="https://github.com/user-attachments/assets/9a46ead1-915f-44ea-9e9c-401476b40bc6" />

disini kode js/javascript dibuat dan digunakan untuk memvalidasi email dan password, disitu juga diletakkan komentar berwarna hijau agar kita bisa mengetahui kode mana yang digunakan untuk memvalidasi kode html yang diberikan

<img width="1920" height="1080" alt="Screenshot (307)" src="https://github.com/user-attachments/assets/d620dcd5-331a-4e4a-8d87-116f182fe2f5" />
<img width="1920" height="1080" alt="Screenshot (308)" src="https://github.com/user-attachments/assets/31e698bf-0e39-42a4-8e91-d13877481e5f" />
<img width="1920" height="1080" alt="Screenshot (309)" src="https://github.com/user-attachments/assets/a6561550-e14b-4532-b1ad-c32fa26442e0" />
<img width="1920" height="1080" alt="Screenshot (310)" src="https://github.com/user-attachments/assets/46e7cad1-28aa-4cf0-acf7-db7d85dcd125" />

disinilah file css berada, dibuat untuk memperindah tampilan pada html dan juga agar html tidak terasa penuh akibat banyak kode yang dimasukkan, walaupun ada beberapa yang masih memakai css di html bukan berarti file khusus css tidak berguna

<img width="1920" height="1080" alt="Screenshot (311)" src="https://github.com/user-attachments/assets/d7798cb3-7d1e-474e-98f3-37e4fe22f381" />

disinilah hasil dari kode pembuatan file login.html dengan style2.css, data.js dan script.js, disini menampilkan struktur login bagi pengguna.

dibawah popup jika lupa password

<img width="1920" height="1080" alt="Screenshot (312)" src="https://github.com/user-attachments/assets/8fad3f11-7983-4d29-92e8-7d85c639ae77" />

dibawah jika mau daftar

<img width="1920" height="1080" alt="Screenshot (313)" src="https://github.com/user-attachments/assets/e3e380c1-5013-4bf2-9b69-1b8abf60ec24" />

data belum diisi

<img width="1920" height="1080" alt="Screenshot (314)" src="https://github.com/user-attachments/assets/2bb78809-36db-4da2-b54d-40019d9658ca" />

jika ada kesalahan pada data

<img width="1920" height="1080" alt="Screenshot (315)" src="https://github.com/user-attachments/assets/165c723c-d131-4916-a7ae-3e466e97e1a5" />

berhasil login

<img width="1920" height="1080" alt="Screenshot (316)" src="https://github.com/user-attachments/assets/f0ca9ba3-25ef-4a79-8bd9-afc6539ca083" />

2. dashboard.html

Dashboard disini lebih sebagai ruang tamu pada sebuah rumah yang boleh dijelajahi oleh berbagai pihak sesuai aturan pemilik rumah atau dalam aplikasi disebut admin

<img width="1920" height="1080" alt="Screenshot (317)" src="https://github.com/user-attachments/assets/ec54d1d7-a7b0-4425-9fc5-d004d051c1a5" />

kode script pada html adalah kode js yang dibuat dengan tujuan agar setiap kali pengguna masuk web menampilkan salam hangat kepada user sesuai waktu user berada

<img width="1920" height="1080" alt="Screenshot (318)" src="https://github.com/user-attachments/assets/dd351cec-e790-46b4-bbe6-a28c34e0b062" />

pada file ini juga menggunakan file style.css untuk UI/tampilan pada html dan disini saya akan memberikan semua gambar pada file tersebut dengan tujuan agar file berikutnya bisa tidak perlu menampilkan gambar pada file ini (karena selain login semuanya menggunakan css yang sama)

<img width="1920" height="1080" alt="Screenshot (319)" src="https://github.com/user-attachments/assets/c320b01a-900f-4195-8246-00984e554a4e" />
<img width="1920" height="1080" alt="Screenshot (320)" src="https://github.com/user-attachments/assets/270dd9cc-a813-40b4-9fef-51b4c684587b" />
<img width="1920" height="1080" alt="Screenshot (321)" src="https://github.com/user-attachments/assets/2e6b3460-676a-4f81-82bb-784c1c259d57" />
<img width="1920" height="1080" alt="Screenshot (322)" src="https://github.com/user-attachments/assets/50da4b26-aa16-4dd4-8b31-5d1f78b1fa69" />
<img width="1920" height="1080" alt="Screenshot (323)" src="https://github.com/user-attachments/assets/968d1d39-ba22-4034-8c03-e5acf2d71e5e" />
<img width="1920" height="1080" alt="Screenshot (324)" src="https://github.com/user-attachments/assets/6c3410af-20ab-46c8-a69a-7c0844a9f9b2" />
<img width="1920" height="1080" alt="Screenshot (325)" src="https://github.com/user-attachments/assets/4c53ec05-1ba1-4997-9032-318e3ab0094d" />
<img width="1920" height="1080" alt="Screenshot (326)" src="https://github.com/user-attachments/assets/19854a3c-37f5-42d5-824b-9040a508c698" />
<img width="1920" height="1080" alt="Screenshot (327)" src="https://github.com/user-attachments/assets/5a7dd9af-a577-4c2f-9a89-b2277bccb54a" />
<img width="1920" height="1080" alt="Screenshot (328)" src="https://github.com/user-attachments/assets/4add0198-e24d-418d-8475-3add99fb56a2" />

beginilah tampilan sederhana dari dashboard.html

<img width="1920" height="1080" alt="Screenshot (329)" src="https://github.com/user-attachments/assets/9c88ad73-14e1-49e9-89ed-ac7f6fe00870" />

3. stok.html

pada bagian ini menampilkan seluruh isi barang pada data yang dimiliki sebagai produk yang dijual, pada tampilan awal tetap mempertahankan bagian navigasi tetapi untuk isinya akan berbeda sesuai navigasi yang dipilih

<img width="1920" height="1080" alt="Screenshot (330)" src="https://github.com/user-attachments/assets/a3ab6a16-6efe-4cbc-9cec-5afb3d307fc2" />

disini akan dibuat tabel yang menyusun berbagai barang baik nama harga dan lain-lain dengan memakai < section > di dalam < div > lalu setelahnya akan dibuat < section > baru untuk menambah barang/stok kalau dalam web dan diakhiri dengan script data.js dan script2.js

<img width="1920" height="1080" alt="Screenshot (331)" src="https://github.com/user-attachments/assets/f7d5b048-58f3-4436-90ec-910505813e12" />
<img width="1920" height="1080" alt="Screenshot (332)" src="https://github.com/user-attachments/assets/b2e82c66-5f63-4625-b2c1-668b168afba4" />
<img width="1920" height="1080" alt="Screenshot (333)" src="https://github.com/user-attachments/assets/2bbe8958-57e6-4c92-8398-55948e701ad5" />

berikut adalah data di file data.js untuk barang yang akan dijual 

<img width="1920" height="1080" alt="Screenshot (341)" src="https://github.com/user-attachments/assets/8a7a2900-d4f4-4c22-a83c-4fd2a1254dcd" />
<img width="1920" height="1080" alt="Screenshot (342)" src="https://github.com/user-attachments/assets/4739483d-9a67-4666-87af-fdb8c180b9bc" />

di bagian ini script2.js berperan untuk menyusun var dataKatalogBuku dan menambahkan tabel baru jika ada stok/barang baru yang ingin ditambahkan. di kode sudah diberikan bagian-bagian untuk setiap kode tersebut dijalankan

<img width="1920" height="1080" alt="Screenshot (334)" src="https://github.com/user-attachments/assets/f8a71d07-9dd3-4a59-8dcb-b1369cfb48d0" />
<img width="1920" height="1080" alt="Screenshot (335)" src="https://github.com/user-attachments/assets/65b21d02-2c01-446b-a3ce-8977bde084da" />
<img width="1920" height="1080" alt="Screenshot (336)" src="https://github.com/user-attachments/assets/81ec3638-6812-4727-8e45-21bbb4f61155" />
<img width="1920" height="1080" alt="Screenshot (337)" src="https://github.com/user-attachments/assets/7d919397-c9ed-41aa-ae3e-d0af131c90ae" />
<img width="1920" height="1080" alt="Screenshot (338)" src="https://github.com/user-attachments/assets/01352e06-f81b-4734-9196-f90f98350ae4" />
<img width="1920" height="1080" alt="Screenshot (339)" src="https://github.com/user-attachments/assets/da8e7ebd-6340-4d27-a882-e8964c011aa2" />
<img width="1920" height="1080" alt="Screenshot (340)" src="https://github.com/user-attachments/assets/57286bdd-7c61-4642-95f4-271c7cd0aaf8" />

tampilan barang yang dijual dengan tabel

<img width="1920" height="1080" alt="Screenshot (343)" src="https://github.com/user-attachments/assets/b65348a4-efed-4160-b399-e20d6159c346" />

form penambah barang

<img width="1920" height="1080" alt="Screenshot (344)" src="https://github.com/user-attachments/assets/cda9f75c-c9e5-4a8d-9628-72baf74a4f2a" />

barang berhasil ditambahkan

<img width="1920" height="1080" alt="Screenshot (345)" src="https://github.com/user-attachments/assets/e538944e-10c3-4ba6-9fad-99d0569122b6" />

4. tracking.html

tujuan dari tracking adalah untuk melacak keberadaan barang yang dikirim oleh driver paket dengan mengidentifikasi penerima barang, kode yang dibuat cukup simpel karen apa yang ditampilkan akan menggunakan tracking.js

<img width="1920" height="1080" alt="Screenshot (349)" src="https://github.com/user-attachments/assets/bd5f7527-c15e-4d73-a685-c8e8b1c53000" />
<img width="1920" height="1080" alt="Screenshot (350)" src="https://github.com/user-attachments/assets/f428263c-3269-417d-9b89-79a348b7c5ad" />

disini data yang dikirim berdasarkan data.js

<img width="1920" height="1080" alt="Screenshot (346)" src="https://github.com/user-attachments/assets/87f4e8c5-c0c7-43b6-9d7e-d5e2be2fca88" />
<img width="1920" height="1080" alt="Screenshot (347)" src="https://github.com/user-attachments/assets/298dc46b-b8d0-474e-b4c2-d8f43f4557c6" />
<img width="1920" height="1080" alt="Screenshot (348)" src="https://github.com/user-attachments/assets/9459481a-c199-46ab-9365-7749150f4cab" />

disinilah tampilan dari data yang di cari di tracking.html dengan menggunakan tracking.js

<img width="1920" height="1080" alt="Screenshot (351)" src="https://github.com/user-attachments/assets/be86b4b1-8ffa-42cd-87be-2aa17be2abf0" />
<img width="1920" height="1080" alt="Screenshot (352)" src="https://github.com/user-attachments/assets/47282453-1853-4d1b-bcb0-d3b368852dd1" />
<img width="1920" height="1080" alt="Screenshot (353)" src="https://github.com/user-attachments/assets/1972b715-0097-468c-9892-3bca8c6c1074" />
<img width="1920" height="1080" alt="Screenshot (354)" src="https://github.com/user-attachments/assets/9c293396-6eb5-4690-93b0-6045e78b3c09" />
<img width="1920" height="1080" alt="Screenshot (355)" src="https://github.com/user-attachments/assets/999e5886-7de6-4cf1-8d4a-d25be0918c99" />

ini tampilan awal pada tracking pengiriman

<img width="1920" height="1080" alt="Screenshot (357)" src="https://github.com/user-attachments/assets/e99ca685-acff-47a1-9c12-8b502bc315df" />

hasil yang ditampilkan

<img width="1920" height="1080" alt="Screenshot (356)" src="https://github.com/user-attachments/assets/9dc3b185-9f96-4635-b640-55cbdae92a99" />

5. checkout.html

untuk bagian ini dibuat agar menampilkan seluruh barang yang ingin dibeli lalu dibuat pesanan setelah mengisi form yang diberikan, kode html dibuat dengan bagian atas adalah struk yang tertera lalu bagian bawah adalah form user untuk barangnya dikirim serta pembayarannya

<img width="1920" height="1080" alt="Screenshot (358)" src="https://github.com/user-attachments/assets/aacd7612-791b-4de8-acf9-d72d7e9480e1" />
<img width="1920" height="1080" alt="Screenshot (359)" src="https://github.com/user-attachments/assets/bb2efead-3df1-4474-b95c-0d7d654768ca" />
<img width="1920" height="1080" alt="Screenshot (360)" src="https://github.com/user-attachments/assets/4cb7cb67-9714-40d2-a02f-9f6d8ad0fdcc" />
<img width="1920" height="1080" alt="Screenshot (361)" src="https://github.com/user-attachments/assets/874adc70-ce46-4940-ab49-b6ad18cf7191" />

disini adalah script berupa file checkout.js untuk memvalidasi data yang diinputkan di form serta menampilkan barang kedalam struk yang akan dibeli dan jika kita ingat bahwa di bagian stok barang terdapat tombol beli yang bertujuan untuk membeli barang yang akan dipindahkan ke checkout

<img width="1920" height="1080" alt="Screenshot (362)" src="https://github.com/user-attachments/assets/72e11ac6-2690-4ce0-afb6-8a3cbc2a74d4" />
<img width="1920" height="1080" alt="Screenshot (363)" src="https://github.com/user-attachments/assets/81296174-0c9a-4824-beba-56aa86c5ce86" />
<img width="1920" height="1080" alt="Screenshot (364)" src="https://github.com/user-attachments/assets/807d2bfb-d2f3-4171-a0e9-52fc916417a5" />
<img width="1920" height="1080" alt="Screenshot (365)" src="https://github.com/user-attachments/assets/584d612d-0eab-47bf-883b-e567725685a2" />
<img width="1920" height="1080" alt="Screenshot (366)" src="https://github.com/user-attachments/assets/9775d3f2-26ad-4447-b3e3-0f0c77fcdd8a" />
<img width="1920" height="1080" alt="Screenshot (367)" src="https://github.com/user-attachments/assets/fe13908a-d852-46b9-a43b-008e8e7816b8" />
<img width="1920" height="1080" alt="Screenshot (368)" src="https://github.com/user-attachments/assets/ed5a4c1f-74a0-4f68-9b18-ac8ff32000c9" />
<img width="1920" height="1080" alt="Screenshot (369)" src="https://github.com/user-attachments/assets/7d02dc02-1bd4-4dc4-8c9c-48fd7c6dbaec" />

tampilan awal Laporan pemesanan

<img width="1920" height="1080" alt="Screenshot (370)" src="https://github.com/user-attachments/assets/654f9828-9596-4e7c-a44b-642695c415a9" />

jika barang sudah dipilih

<img width="1920" height="1080" alt="Screenshot (371)" src="https://github.com/user-attachments/assets/2250ad0b-cd8f-426f-9743-51854fc8f8d6" />

barang berhasil dibeli

<img width="1920" height="1080" alt="Screenshot (372)" src="https://github.com/user-attachments/assets/e685ce62-4571-4fd0-ba50-2338b2c2a355" />

6. history.html

halaman ini hanya menampilkan riwayat pemesana sebelumnya, kode yang dibuat juga tidak banyak dan bahkan banyak kode yang dibuat terlihat mirip dengan sebelumnya

<img width="1920" height="1080" alt="Screenshot (373)" src="https://github.com/user-attachments/assets/cabe6e3d-b49f-46ed-8614-eff7fdc804dd" />
<img width="1920" height="1080" alt="Screenshot (374)" src="https://github.com/user-attachments/assets/69e8ef69-af90-4ceb-994d-33eaa404e5f4" />

pada file history.js, data yang sebelumnya tercatat dalam riwayat pemesana akan ditampilkan di web dengan bantuan kode js ini


7. about.html

