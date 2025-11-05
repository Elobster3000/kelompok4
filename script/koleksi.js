    // 📚 DATA BUKU DEFAULT
    // Digunakan hanya pada kunjungan pertama, sebelum ada data di localStorage.
    const initialBooks = [
        {
            title: "Laskar Pelangi",
            author: "Andrea Hirata",
            year: "2008",
            publisher: "Bentang Anggota IKAPI",
            rack: "8",
            pages: "534",
            synopsis: "Mengisahkan perjuangan dan persahabatan 10 anak di SD Muhammadiyah, Belitung, yang terancam ditutup karena kekurangan siswa.",
            image: "images/Laskar_pelangi_sampul.jpg",
            status: "Tersedia"
        },
        {
            title: "Psikologi Anak Berkebutuhan Khusus",
            author: "Muallifa, dkk.",
            year: "2024",
            publisher: "Selaksa Media",
            rack: "3",
            pages: "246",
            synopsis: "Membahas perkembangan kognitif, emosional, sosial, dan fisik anak dari lahir hingga remaja.",
            image: "images/psikologi.jpg",
            status: "Tersedia"
        },
        {
            title: "Katastrofi Mendunia",
            author: "Taufiq Ismail",
            year: "2004",
            publisher: "Yayasan Titik Infinitum",
            rack: "",
            pages: "348",
            synopsis: "Mengingatkan kembali peristiwa-peristiwa yang pernah melukai kehidupan bangsa, dengan mengaitkannya pada ideologi seperti marxisme, leninisme, stalinisme, dan komunisme Tiongkok yang dianggapnya membawa malapetaka.",
            image: "images/katastrofi.jpg",
            status: "Tersedia"
        },
        {
            title: "Bumi Manusia",
            author: "Pramoedya Ananta Toer",
            year: "2011",
            publisher: "Lentera Dipantara",
            rack: "8",
            pages: "551",
            synopsis: "Kisah tentang Minke, pemuda pribumi cerdas yang bersekolah di sekolah Belanda di era kolonialisme, yang jatuh cinta pada Annelies, gadis keturunan Indo-Belanda.",
            image: "images/bumimanusia.jpg",
            status: "Tersedia"
        },
        {
            title: "Cinta di atas awan",
            author: "Glenn Alexei",
            year: "2011",
            publisher: "Media Pressindo",
            rack: "8",
            pages: "274",
            synopsis: "Cerita yang mengikuti perjalanan cinta antara Karina, seorang pramugari maskapai Singapura, dan Jimmy, seorang pria yang ditemuinya.",
            image: "images/cinta.jpg",
            status: "Tersedia"
        },
        {
            title: "B.J. Habibie",
            author: "Fatimah Fayrus",
            year: "2023",
            publisher: "ANAK HEBAT INDONESIA",
            rack: "9",
            pages: "231",
            synopsis: "Berfokus pada perjalanan hidup, kecerdasan, dan semangat perjuangannya.",
            image: "images/habibie.jpg",
            status: "Tersedia"
        },
        {
            title: "Komet",
            author: "Tere Liye",
            year: "2018",
            publisher: "PT Gramedia Pustaka Utama anggota IKAPI",
            rack: "8",
            pages: "384",
            synopsis: "Petualangan tiga sahabat, Raib, Seli, dan Ali, yang harus pergi ke Klan Komet untuk menemukan artefak kuno dan menghentikan musuh mereka, Si Tanpa Mahkota.",
            image: "images/komet.jpg",
            status: "Tersedia"
        },
        {
            title: "Filosofi Teras",
            author: "Henry Manampiring",
            year: "2018",
            publisher: "PT. Kompas Media Nusantara",
            rack: "1",
            pages: "298",
            synopsis: "Menjelaskan bagaimana mengelola emosi negatif dengan menerapkan filsafat Stoisisme atau Stoikisme, yang disebut Filosofi Teras untuk kemudahan orang Indonesia.",
            image: "images/filosofi.jpg",
            status: "Tersedia"
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            year: "2018",
            publisher: "PT Gramedia Pustaka Utama",
            rack: "1",
            pages: "340",
            synopsis: "Perubahan kecil dan konsisten (atomic habits) dapat menghasilkan dampak besar yang luar biasa seiring waktu.",
            image: "images/atomic.jpg",
            status: "Tersedia"
        },
        {
            title: "Misteri dan Keajaiban 2 Kota Suci Mekah - Madinah",
            author: "Lia Kurniawati Siddiq",
            year: "2013",
            publisher: "Mutiara Allamah Utama",
            rack: "2",
            pages: "232",
            synopsis: "Berisi penjelasan tentang berbagai keajaiban dan keunikan di kedua kota suci ini, yang didukung oleh landasan dari Al-Qur'an dan hadis.",
            image: "images/misteri.jpg",
            status: "Tersedia"
        },
        {
            title: "La Tahzan for Teens",
            author: "Qomaruzzaman Awwab",
            year: "2007",
            publisher: "DAR! Mizan",
            rack: "2",
            pages: "164",
            synopsis: "Panduan untuk remaja yang membantu mereka menghadapi masalah dan emosi seperti kesedihan, stres, dan kecemasan dengan cara yang positif dan berlandaskan keimanan.",
            image: "images/latahzan.jpg",
            status: "Tersedia"
        },
        {
            title: "Teluk Alaska",
            author: "Eka Aryani",
            year: "2019",
            publisher: "Bumi Semesta Media",
            rack: "8",
            pages: "408",
            synopsis: "kisah cinta dan pertemanan antara Anastasia Mysha dan Alister Reygan. Keduanya bertemu kembali di SMA setelah lama terpisah, namun Alister kini berperilaku kasar dan sering mem-bully Ana, sementara Ana harus berjuang mengatasi masalah keluarga, perundungan dari teman-temannya, dan rasa sakit hati karena perlakuan Alister.",
            image: "images/alaska.jpg",
            status: "Tersedia"
        },
        {
            title: "Writer Blogger Casper",
            author: "Tina FAjarina",
            year: "2017",
            publisher: "Araska",
            rack: "8",
            pages: "194",
            synopsis: "Berisi kumpulan 10 cerita hantu yang berinteraksi dengan para writer (penulis) dan blogger.",
            image: "images/casper.jpg",
            status: "Tersedia"
        },
        {
            title: "Cewek!!!",
            author: "Esti Kinasih",
            year: "2005",
            publisher: "PT Gramedia Pustaka Utama anggota IKAPI",
            rack: "8",
            pages: "423",
            synopsis: "Tiga sahabat, Langen, Fani, dan Febi, yang pacaran dengan mahasiswa pencinta alam (mapala) yang sering mengabaikan mereka demi kegiatan mendaki gunung.",
            image: "images/cewek.jpg",
            status: "Tersedia"
        },
        {
            title: "Aisyah & Adinda",
            author: "Eddy D. Iskandar",
            year: "2018",
            publisher: "Yrama Widya",
            rack: "8",
            pages: "202",
            synopsis: " Kisah dua saudara perempuan, Aisyah dan Adinda, yang sedang berkomitmen dalam perjalanan mereka untuk menutup aurat dan mendalami agama Islam.",
            image: "images/aisyah.jpg",
            status: "Tersedia"
        },
    ];

    // ➡️ MENGAMBIL DATA PERSISTENSI DARI LOCALSTORAGE
    let currentBooks = [];
    const persistentData = localStorage.getItem('libraryBooksStatus');
    
    if (persistentData) {
        // Jika ada data tersimpan, gunakan data tersebut
        currentBooks = JSON.parse(persistentData);
    } else {
        // Jika belum ada, gunakan data awal dan simpan ke localStorage
        currentBooks = initialBooks;
        localStorage.setItem('libraryBooksStatus', JSON.stringify(initialBooks));
    }

    const bookList = document.getElementById("bookList");

    // 🔄 FUNGSI UTAMA: MENAMPILKAN BUKU
    function tampilkanBuku(data) {
        bookList.innerHTML = "";
        data.forEach(book => {
            const div = document.createElement("div");
            div.classList.add("book");
            
            // Logika Status dan Tombol
            const statusClass = book.status === "Tersedia" ? "status-tersedia" : "status-dipinjam";
            const statusText = book.status;
            
            // Tombol Pinjam/Dipinjam
            const isDisabledBorrow = book.status !== "Tersedia";
            const buttonBorrowDisabledAttribute = isDisabledBorrow ? 'disabled' : '';
            const buttonBorrowText = isDisabledBorrow ? 'Dipinjam' : 'Pinjam';
            const buttonBorrowClass = isDisabledBorrow ? 'btn btn-disabled' : 'btn';
            
            // Tombol Pengembalian
            const isReturnable = book.status === "Sedang Dipinjam";
            const buttonReturnClass = isReturnable ? 'btn btn-return' : 'btn btn-hidden';
            const buttonReturnDisabledAttribute = isReturnable ? '' : 'disabled';

            div.innerHTML = `
                <img src="${book.image}" alt="${book.title}" class="book-img">
                <h3>${book.title}</h3>
                <p>Nama Pengarang: ${book.author}</p>
                <p>Tahun Terbit: ${book.year}</p>
                <p>Penerbit: ${book.publisher}</p>
                <p>Rak Perpustakaan: ${book.rack}</p>
                <p>Halaman: ${book.pages}</p>
                <p>Sinopsis: ${book.synopsis}</p>
                
                <p class="status-badge ${statusClass}">Status: <strong>${statusText}</strong></p>
                
                <a href="#" class="${buttonBorrowClass}" 
                   onclick="if (!${isDisabledBorrow}) bukaPopup('${book.title}')" 
                   ${buttonBorrowDisabledAttribute}>${buttonBorrowText}</a>
                   
                <a href="#" class="${buttonReturnClass}" 
                   onclick="if (${isReturnable}) kembalikanBuku('${book.title}')" 
                   ${buttonReturnDisabledAttribute}>Kembalikan</a>
            `;
            bookList.appendChild(div);
        });
    }

    tampilkanBuku(currentBooks); // Panggil fungsi saat halaman dimuat

    // 🔎 FITUR PENCARIAN
    document.getElementById("searchForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const query = document.getElementById("searchInput").value.toLowerCase();
        
        // Pencarian menggunakan data currentBooks
        const hasil = currentBooks.filter(b => 
            b.title.toLowerCase().includes(query) ||
            b.author.toLowerCase().includes(query)
        ); 
        
        if (hasil.length > 0) {
            tampilkanBuku(hasil);
        } else {
            bookList.innerHTML = "<p style='text-align:center;'>Buku tidak ditemukan.</p>";
        }
    });

    // 📤 POPUP FORM PEMINJAMAN
    function bukaPopup(bookTitle) {
        document.getElementById("popupForm").style.display = "block";
        document.getElementById("bookTitle").innerText = "Buku: " + bookTitle;
        // Simpan judul buku yang akan dipinjam ke variabel global sementara
        window.currentBookTitle = bookTitle; 
    }

    function tutupPopup() {
        document.getElementById("popupForm").style.display = "none";
        document.getElementById("name").value = ""; 
        document.getElementById("class").value = ""; 
        window.currentBookTitle = null;
    }

    // ✅ FUNGSI KIRIM PEMINJAMAN (Mengubah Status ke 'Sedang Dipinjam')
    function kirimPeminjaman() {
        const name = document.getElementById("name").value;
        const kelas = document.getElementById("class").value;
        const bookTitleToBorrow = window.currentBookTitle;

        if (!name || !kelas) {
            alert("Nama dan Kelas harus diisi!");
            return;
        }

        // Cari buku di array currentBooks dan perbarui status
        const bookIndex = currentBooks.findIndex(book => book.title === bookTitleToBorrow);

        if (bookIndex !== -1) {
            currentBooks[bookIndex].status = "Sedang Dipinjam"; 
            
            // Simpan perubahan kembali ke localStorage
            localStorage.setItem('libraryBooksStatus', JSON.stringify(currentBooks));
            
            // Muat ulang tampilan buku
            tampilkanBuku(currentBooks); 
            
            alert(`Permintaan peminjaman buku "${bookTitleToBorrow}" oleh ${name} dari kelas ${kelas} telah diproses. Status buku sekarang 'Sedang Dipinjam'.`);
            tutupPopup();
        } else {
            alert("Kesalahan: Buku tidak ditemukan dalam daftar.");
        }
    }
    
    // ↩️ FUNGSI PENGEMBALIAN BUKU (Mengubah Status ke 'Tersedia')
    function kembalikanBuku(bookTitleToReturn) {
    // Penggunaan 'let' untuk variabel 'konfirmasi' sudah benar
    const konfirmasi = confirm(`Apakah Anda yakin ingin mengembalikan buku "${bookTitleToReturn}"?`);
    
    if (konfirmasi) {
        // 1. Cari buku di array currentBooks (data yang saat ini dimuat)
        const bookIndex = currentBooks.findIndex(book => book.title === bookTitleToReturn);

        if (bookIndex !== -1) {
            // Perbarui status di array currentBooks
            currentBooks[bookIndex].status = "Tersedia"; 
            
            // 2. Simpan perubahan array yang sudah diupdate ke localStorage (membuatnya permanen)
            localStorage.setItem('libraryBooksStatus', JSON.stringify(currentBooks));
            
            // 3. Muat ulang tampilan buku menggunakan data 'currentBooks' yang sudah diperbarui
            // Langkah ini sangat penting agar DOM (tampilan di browser) diperbarui.
            tampilkanBuku(currentBooks); 
            
            alert(`Buku "${bookTitleToReturn}" berhasil dikembalikan. Status buku sekarang 'Tersedia'.`);
        } else {
            alert("Kesalahan: Buku tidak ditemukan dalam daftar.");
        }
    }
}