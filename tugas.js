1. // Variable
// var, let, const

// var

var nama = "Aditya";
nama = "Aditya Keren" // reassigned

console.log(nama); // "Aditya Keren"

var nama = "Aditya Pangestu"; //redeclared
console.log(nama); // "Aditya Pangestu"

// hoisting
// Hoisting adalah perilaku di JavaScript di mana deklarasi variabel (namun bukan inisialisasinya) didorong ke atas cakupan (scope) fungsinya.

nama = "Aditya" // assign duluan
var nama // dideklarasi setelahnya
console.log(nama);

// contoh lain
console.log(nama); // Output: undefined
var nama = "Adit";
console.log(nama); // Output: "Adit"

// scope
// variabel var ini bersifat global scope. Artinya, masih bisa diakses dari luar, walaupun berada di dalam suatu scope.

var usia = 50
if (true){
    var usia = 30
    console.log(usia) // Output: "30" - Variabel global dapat diakses dari dalam scope
}
console.log(usia); // Output: "30" - Variabel global dapat diakses dari luar scope


// let

let warna = "merah"
console.log(warna); // output: merah
warna = "pink" // reassigned
console.log(warna); // output: pink

let warna = "hitam" //redeclared
console.log(warna); //SyntaxError: Identifier 'warna' has already been declared

// hoisting
//Untuk hoisting, variabel let ini bisa di-hoisting. Tapi, kalau hoisting-nya dijalankan pada console di web browser, maka akan terjadi error. 

umur = "tujuh tahun" 
let umur;
console.log(umur);// Error: Cannot access 'age' before initialization

// contoh lain

console.log(age); // Error: Cannot access 'age' before initialization
let age = 30;
console.log(age); // Output: 30

// scope
// Scope dari variabel let ini adalah block scope. Artinya, variabel hanya bisa diakses di dalam scope, yang ditandai dalam sebuah kurung kurawal.

let usia = 50
if (true){
    let usia = 30
    console.log(usia) // Output: "30" - Variabel global dapat diakses dari dalam scope
}
console.log(usia); // Output: "50" - Variabel global dapat diakses dari luar scope


// conts

// Variabel const ini, nilai atau datanya tidak akan berubah dalam kondisi apapun. Karena itulah ia dinamakan const (konstan).

const phi = 3.14
console.log(phi);
phi = 2.16 // reassigned
console.log(phi); // Error: Assignment to constant variable


const nomor = 10;
console.log(nomor); // Output: 10

const nomor = 20; //redeclared 
// console.log(nomor); // Error: Identifier 'angka' has already been declared

// hoisting

potongan = 300
const potongan;
console.log(potongan); //Cannot access 'potongan' before initialization

console.log(nominal); // Error: Cannot access 'nominal' before initialization
const nominal = 10;
console.log(nominal); // Output: 10


2. // Tipe Data
// data primitif dan data non-primitif. 

// data primitif
// String: Digunakan untuk menyimpan teks.
// Number: Digunakan untuk menyimpan angka.
// Boolean: Digunakan untuk menyimpan nilai true atau false.
// Undefined: Digunakan untuk menunjukkan nilai yang belum diinisialisasi.
// Null: Digunakan untuk menunjukkan nilai kosong yang disengaja.

// String
// String adalah tipe data yang menyimpan karakter sebagai nilainya. Bisa dalam format huruf, angka, simbol, dan sebagainya. Lalu, karakter-karakter tersebut akan diapit oleh tanda kutip (‘ atau “).

let gender = "pria";
let pekerjaan = "engineer"

console.log(`dia adalah seorang ${gender} dan pekerjaannya dalah ${pekerjaan}`); // output dia adalah seorang pria dan pekerjaannya dalah engineer

// Number

//Tipe data number ini terdiri dari number integer (angka bilangan bulat) dan floating number (angka bilangan desimal). 

const angkaBulat = 10; // integer
const desimal = 3.14159; // floating number

console.log(angkaBulat); // Output: 10
console.log(desimal);   // Output: 3.14159

//Selain tipe data number biasa, juga ada tipe data number special numeric values.

//NaN (Not a Number): Merupakan representasi khusus untuk hasil operasi matematika yang tidak terdefinisi atau tidak valid.
// Infinity: Mewakili nilai yang melebihi batas numerik yang dapat direpresentasikan oleh tipe data tersebut. Infinity bisa positif (Infinity) atau negatif (-Infinity).

let hasil1 = 10 / 0; // Hasilnya Infinity
let hasil2 = "hello" / 5; // Hasilnya NaN 

// Boolean

// Tipe data boolean ini hanya memiliki dua nilai, yaitu true dan false.

let x = 4;
let y = 10;
let z = x > y; 
console.log(z);// Menghasilkan nilai false karena x tidak lebih besar dari y

// Null dan Undefined

//Tipe data null dalam pemrograman mewakili nilai yang sengaja kosong atau tidak ada. Penggunaan null bisa menjadi pertanda bahwa sebuah variabel belum diinisialisasi atau bahwa data tidak tersedia atau tidak relevan pada saat itu.

// Tipe data undefined dalam pemrograman digunakan untuk menunjukkan bahwa sebuah variabel telah dideklarasikan tetapi belum diberikan nilai. Ketika sebuah variabel dideklarasikan tetapi tidak diberi nilai, secara default nilainya adalah undefined.

let value1 = null;
let value2; // variabel ini tidak diinisialisasi, sehingga nilainya secara default adalah undefined

console.log(value1); // Menghasilkan null
console.log(value2); // Menghasilkan undefined

// Perbedaan antara null dan undefined terletak pada asal nilai tersebut. null adalah nilai yang sengaja diberikan untuk menunjukkan ketiadaan nilai, sementara undefined adalah nilai yang diberikan secara bawaan oleh JavaScript ketika variabel tidak diinisialisasi.


3. // Manipulasi string

// replace
// mengganti bagian tertentu
let data = "Saya suka mobil toyota";
let dataBaru = data.replace("toyota", "subaru"); // Mengganti "toyota" dengan "subaru"
console.log(dataBaru); // Output: Saya suka mobil subaru

let data = "Saya suka mobil toyota";
console.log(data.replace("toyota", "subaru")); 

// Substring
// Mengambil beberapa karakter string dari index awal sampai sebelum index akhir.

let kalimat = "Aditya pangestu";
let kalimatBaru = kalimat.substring(0, 5); // Memotong karakter dari indeks 0 hingga 4
console.log(kalimatBaru); // Output: Adit

let kalimat = "Aditya pangestu";
console.log(kalimat.substring(0, 5)); // Output: Adit


4. // Data object
// Object merupakan sebuah tipe data yang menyimpan koleksi tipe data yang lain.

let dataSiswa = {
    nama: "adit",
    umur: 24,
    hobi: "makan"
};
console.log(dataSiswa.nama); // Output: "adit"
console.log(dataSiswa.umur); // Output: "24"
console.log(dataSiswa.hobi); // Output: "makan"

// tipe lain mengakses data

console.log(dataSiswa["nama"]); // Output: "adit"
console.log(dataSiswa["umur"]); // Output: "24"
console.log(dataSiswa["hobi"]); // Output: "makan"


5. // Data array 
//Array adalah data yang menyimpan kumpulan tipe data primitif.

let hobi = ["makan", "tidur", "rebahan"]
console.log(hobi[0]); // Output: "makan"

6. // Object array
// gabungan antara data object dan array yang dimana data array diletakan pada salah satu properti object

let dataSiswa = {
    nama: "adit",
    umur: 24,
    hobi: ["makan", "tidur", "rebahan"] // aaray
};
console.log(dataSiswa.nama); // Output: "adit"
console.log(dataSiswa.umur); // Output: "24"
console.log(dataSiswa.hobi[0]); // Output: "makan"

7. // Operator dan pengkondisian

//operator
// Operator dalam JavaScript digunakan untuk melakukan operasi pada nilai dan variabel. Berikut adalah penjelasan tentang operator binary, ternary, dan unary

// binary
// Operator binary beroperasi pada dua operand (nilai) dan menghasilkan satu nilai. Mereka biasanya ditempatkan di antara dua operand.

// operand1-operator-operand2

// Jenis-jenis operator biner:

// Operator aritmatika: +, -, *, /, % (modulo)
// Operator perbandingan: ==, !=, <, >, <=, >=
// Operator logika: && (AND), || (OR), ! (NOT)
// Operator penugasan: =, +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, |=

let hasil = 10 + 5;  //  akan bernilai 15
let hasil2 = 5 == 7; //  akan bernilai false
let hasil3 = 10 > 5; //  akan bernilai true


// Unary
//Operator unary beroperasi pada satu operand saja dan biasanya ditempatkan sebelum atau setelah operand.

// Jenis-jenis operator unary:

// Increment/Decrement: ++, --
// Negasi: ! (NOT)
// Bitwise NOT: ~
// Tipe operator: typeof, void

// typeof
let angka = 10;
let teks = 'Hello';
console.log(typeof angka); // Output: number
console.log(typeof teks); // Output: string

//negasi
let z = !true; // z akan bernilai false

// Ternary
// Operator ternary adalah operator kondisional yang menghasilkan satu nilai dari dua nilai yang mungkin, berdasarkan kondisi yang diberikan

let result = (kondisi) ? expressionIfTrue : expressionIfFalse; // struktur umum

let usia = 25;
let setatus = usia >= 18 ? "Dewasa" : "Anak-anak"; 

console.log(setatus);// status akan bernilai "Dewasa"


// pengkondsian

//Pengkondisian JavaScript digunakan untuk membuat program yang dapat membuat keputusan berdasarkan nilai atau kondisi tertentu.

// Pernyataan if: digunakan untuk mengeksekusi kode jika suatu kondisi terpenuhi.
// Pernyataan else: digunakan untuk mengeksekusi kode jika kondisi pada pernyataan if tidak terpenuhi.

let angka = 17;  // Masukkan angka yang ingin Anda cek

if (angka % 2 === 0) {
    console.log("Angka " + angka + " adalah bilangan genap.");
} else {
    console.log("Angka " + angka + " adalah bilangan ganjil.");
}

//contoh lain

let usia = 25; // masukan umur
if (usia >= 18) {
    console.log("Anda sudah dewasa.");
} else {
    console.log("Anda masih anak-anak.");
}



8. // Function

// Fungsi Tanpa Parameter

function greet() {
    console.log("Halo!");
}
greet(); // Memanggil fungsi greet()
// Output: Halo, undefined!

//Fungsi Dengan Parameter

function greet(nama) {
    console.log("Halo, " + nama + "!");
}
greet("Adit"); // Memanggil fungsi greet() dengan argumen "Adit"
// Output: Halo, Adit!/

//Fungsi yang Mengembalikan Nilai

function tambah(x, y) {
    return x + y;  // Mengembalikan hasil penjumlahan
}
let jumlah = tambah(5, 3); // Memanggil fungsi dan menyimpan nilai kembalian
console.log(jumlah);      // Output: 8






