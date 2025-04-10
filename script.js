const tippek = [
  "Vegyél három mély levegőt!",
  "Sétálj egyet a friss levegőn!",
  "Írj le három dolgot, amiért hálás vagy!",
  "Hallgass egy nyugtató zenét!"
];

function mutassTippet() {
  const tipp = tippek[Math.floor(Math.random() * tippek.length)];
  document.getElementById("tippSzoveg").innerText = tipp;
}

function inditLegzest() {
  const div = document.getElementById("legzesAnimacio");
  div.innerText = "Lélegezz be...";  
  setTimeout(() => div.innerText = "Tartsd bent...", 3000);
  setTimeout(() => div.innerText = "Fújd ki...", 6000);
  setTimeout(() => div.innerText = "", 9000);
}

function mentes() {
  const szoveg = document.getElementById("naploSzoveg").value;
  const szint = document.getElementById("stresszSzint").value;
  const datum = new Date().toLocaleDateString("hu-HU");
  const bejegyzes = `${datum}: ${szoveg} (Stressz: ${szint}/10)`;

  let lista = JSON.parse(localStorage.getItem("naplo")) || [];
  lista.push(bejegyzes);
  localStorage.setItem("naplo", JSON.stringify(lista));

  frissitNaplo();
}

function frissitNaplo() {
  const lista = JSON.parse(localStorage.getItem("naplo")) || [];
  const ul = document.getElementById("naploLista");
  ul.innerHTML = "";
  lista.forEach(elem => {
    const li = document.createElement("li");
    li.innerText = elem;
    ul.appendChild(li);
  });
}

window.onload = frissitNaplo;
