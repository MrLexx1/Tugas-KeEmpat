// TUGAS KEEMPAT

let uang = parseInt(prompt("Masukkan jumlah uang Anda: "));
console.log("Pilih produk:");
console.log("1. Air Mineral (Rp 3000)");
console.log("2. Kopi (Rp 5000)");
console.log("3. Teh (Rp 4000)");

let pilihan = parseInt(
  prompt("Masukkan nomor produk yang ingin dibeli (1/2/3): ")
);

const hargaAirMineral = 3000;
const hargaKopi = 5000;
const hargaTeh = 4000;

if (pilihan === 1) {
  if (uang >= hargaAirMineral) {
    console.log(
      "Anda membeli Air Mineral. Kembalian Anda: Rp " + (uang - hargaAirMineral)
    );
  } else {
    console.log("Uang Anda tidak cukup untuk membeli Air Mineral.");
  }
} else if (pilihan === 2) {
  if (uang >= hargaKopi) {
    console.log("Anda membeli Kopi. Kembalian Anda: Rp " + (uang - hargaKopi));
  } else {
    console.log("Uang Anda tidak cukup untuk membeli Kopi.");
  }
} else if (pilihan === 3) {
  if (uang >= hargaTeh) {
    console.log("Anda membeli Teh. Kembalian Anda: Rp " + (uang - hargaTeh));
  } else {
    console.log("Uang Anda tidak cukup untuk membeli Teh.");
  }
} else {
  console.log("Pilihan produk tidak valid.");
}
