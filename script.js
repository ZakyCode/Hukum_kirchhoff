let info = document.getElementById("info");
let calc = document.getElementById("calc");
let labelR1 = document.getElementById("labelR1");
let labelR2 = document.getElementById("labelR2");
let labelV = document.getElementById("labelV");
let state = 0;

function hitung() {
  let jenis = document.getElementById("jenis").value;
  let V = parseFloat(document.getElementById("inputV").value);
  let R1 = parseFloat(document.getElementById("inputR1").value);
  let R2 = parseFloat(document.getElementById("inputR2").value);

  // update label
  labelR1.innerHTML = `R1=${R1}Ω`;
  labelR2.innerHTML = `R2=${R2}Ω`;
  labelV.innerHTML = `V=${V}V`;

  let Rtotal, I, V1, V2, I1, I2, hasil = "";

  if (jenis === "seri") {
    Rtotal = R1 + R2;
    I = V / Rtotal;
    V1 = I * R1;
    V2 = I * R2;
    hasil = `
      ⚡ <b>Rangkaian Seri</b><br>
      R_total = R1 + R2 = ${R1} + ${R2} = <b>${Rtotal.toFixed(2)} Ω</b><br>
      I_total = V / R_total = ${V} / ${Rtotal.toFixed(2)} = <b>${I.toFixed(2)} A</b><br><br>
      Tegangan R1 = I × R1 = ${I.toFixed(2)} × ${R1} = <b>${V1.toFixed(2)} V</b><br>
      Tegangan R2 = I × R2 = ${I.toFixed(2)} × ${R2} = <b>${V2.toFixed(2)} V</b><br><br>
      🔵 KVL Check: ${V1.toFixed(2)} + ${V2.toFixed(2)} = <b>${(V1+V2).toFixed(2)} V</b> = ${V} V ✅
    `;
  } else {
    Rtotal = (R1 * R2) / (R1 + R2);
    I = V / Rtotal;
    I1 = V / R1;
    I2 = V / R2;
    hasil = `
      ⚡ <b>Rangkaian Paralel</b><br>
      1/R_total = 1/R1 + 1/R2 → R_total = <b>${Rtotal.toFixed(2)} Ω</b><br>
      I_total = V / R_total = ${V} / ${Rtotal.toFixed(2)} = <b>${I.toFixed(2)} A</b><br><br>
      Arus R1 = V / R1 = ${V} / ${R1} = <b>${I1.toFixed(2)} A</b><br>
      Arus R2 = V / R2 = ${V} / ${R2} = <b>${I2.toFixed(2)} A</b><br><br>
      🔴 KCL Check: ${I1.toFixed(2)} + ${I2.toFixed(2)} = <b>${(I1+I2).toFixed(2)} A</b> = ${I.toFixed(2)} A ✅
    `;
  }

  calc.innerHTML = hasil;
}

// perhitungan awal
hitung();

// teks bergantian
setInterval(() => {
  if (state === 0) {
    info.innerHTML = "🔴 KCL: Arus masuk node = Arus keluar node";
    state = 1;
  } else {
    info.innerHTML = "🔵 KVL: Jumlah tegangan dalam loop = 0";
    state = 0;
  }
}, 4000);
