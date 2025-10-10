const nilaiUjian = 90;
const nilaiAbsensi = 90;

const lulusUjian = nilaiUjian > 90;
const lulusAbsensi = nilaiAbsensi > 90;

const lulus = lulusUjian && lulusAbsensi;
document.writeln("<p>" + lulus + "</p>")