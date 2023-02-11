// halaman
const halamanIndex = "http://127.0.0.1:5500/index.html";
const halamanbahagia =
  "https://gustimuhammadadzaky.github.io/jurnal-rasasyukur/bahagia.html";
const halamanKesimpulan =
  "https://gustimuhammadadzaky.github.io/jurnal-rasasyukur/kesimpulan.html";

// modalBuat halaman index
function simpan() {
  const noHp = document.getElementById("noHp").value;
  const url = `${halamanbahagia}?noHp=${noHp}`;
  location.href = url;
}

// tanggal
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch (hari) {
  case 0:
    hari = "Minggu";
    break;
  case 1:
    hari = "Senin";
    break;
  case 2:
    hari = "Selasa";
    break;
  case 3:
    hari = "Rabu";
    break;
  case 4:
    hari = "Kamis";
    break;
  case 5:
    hari = "Jum'at";
    break;
  case 6:
    hari = "Sabtu";
    break;
}
switch (bulan) {
  case 0:
    bulan = "Januari";
    break;
  case 1:
    bulan = "Februari";
    break;
  case 2:
    bulan = "Maret";
    break;
  case 3:
    bulan = "April";
    break;
  case 4:
    bulan = "Mei";
    break;
  case 5:
    bulan = "Juni";
    break;
  case 6:
    bulan = "Juli";
    break;
  case 7:
    bulan = "Agustus";
    break;
  case 8:
    bulan = "September";
    break;
  case 9:
    bulan = "Oktober";
    break;
  case 10:
    bulan = "November";
    break;
  case 11:
    bulan = "Desember";
    break;
}
var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan + " " + tahun;

document.getElementById("tampil-tanggal").innerHTML = tampilTanggal;

// Get Url : https://stackoverflow.com/questions/814613/how-to-read-get-data-from-a-url-using-javascript
// const lokasi = window.location.href;
const url = new URL(window.location.href);

// sumber : https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
const no_hp_params = new URLSearchParams([
  ...Array.from(url.searchParams.entries()), // [["a","hello"],["b","world"]]
]).toString();
console.log(no_hp_params);

// form bahagia submit
// sumber = https://www.youtube.com/watch?v=EnWqnyUZ65Y
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  q = [];
  for (item of formData) {
    const strItem = `${item[0]}=${item[1]}`;
    console.log(strItem);
    q.push(strItem);
  }

  // console.log(q);

  // http://127.0.0.1:5500/syukur.html?noHp=sss&hal-1-bahagia=text&hal-2-bahagia=text&hal-3-bahagia=text
  const kesimpulanUrl = `${halamanKesimpulan}?${no_hp_params}&${q[0]}&${q[1]}&${q[2]}&${q[3]}&${q[4]}`;
  // console.log(kesimpulanUrl);
  location.href = kesimpulanUrl;
});

// syukur
