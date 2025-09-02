function hitungSeri() {
  let R1 = parseFloat(document.getElementById("seriR1").value);
  let R2 = parseFloat(document.getElementById("seriR2").value);
  let V = parseFloat(document.getElementById("seriV").value);

  let Rtotal = R1 + R2;
  let I = V / Rtotal;

  document.getElementById("seriOutput").innerHTML =
    `<b>Hukum Kirchhoff (Seri):</b><br>
    Rtotal = R1 + R2 = ${R1} + ${R2} = <b>${Rtotal.toFixed(2)} Ω</b><br>
    I = V / Rtotal = ${V} / ${Rtotal.toFixed(2)} = <b>${I.toFixed(2)} A</b>`;

  // Lampu menyala
  document.getElementById("seriLamp1").classList.add("on");
  document.getElementById("seriLamp2").classList.add("on");

  // Arus aktif
  document.getElementById("seriCurrent").classList.add("active");
}

function hitungParalel() {
  let R1 = parseFloat(document.getElementById("paralelR1").value);
  let R2 = parseFloat(document.getElementById("paralelR2").value);
  let V = parseFloat(document.getElementById("paralelV").value);

  let Rtotal = 1 / (1/R1 + 1/R2);
  let I = V / Rtotal;
  let I1 = V / R1;
  let I2 = V / R2;

  document.getElementById("paralelOutput").innerHTML =
    `<b>Hukum Kirchhoff (Paralel):</b><br>
    1/Rt = 1/R1 + 1/R2 = 1/${R1} + 1/${R2}<br>
    Rtotal = <b>${Rtotal.toFixed(2)} Ω</b><br>
    I = V / Rt = ${V} / ${Rtotal.toFixed(2)} = <b>${I.toFixed(2)} A</b><br>
    I1 = ${V} / ${R1} = ${I1.toFixed(2)} A<br>
    I2 = ${V} / ${R2} = ${I2.toFixed(2)} A<br>
    (Hukum Kirchhoff: I = I1 + I2 → ${I.toFixed(2)} ≈ ${ (I1+I2).toFixed(2)} )`;

  // Lampu menyala
  document.getElementById("paralelLamp1").classList.add("on");
  document.getElementById("paralelLamp2").classList.add("on");

  // Arus aktif
  document.getElementById("paralelCurrent1").classList.add("active");
  document.getElementById("paralelCurrent2").classList.add("active");
}
