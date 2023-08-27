const prodactCatalok = document.getElementById("prodact-catalok");

prodactCatalok.innerHTML = "";

for (let i = 0; i < catalok_Massiv.length; i++) {
  const item = catalok_Massiv[i];

  const img = document.createElement("img");
  img.src = item.img;

  const text = document.createElement("p");
  text.textContent = item.name;

  const div = document.createElement("div");
  div.className = "catalok-card";

  const div2 = document.createElement("div");
  div2.className = "catalok-card-footer";

  div.appendChild(img);
  div2.appendChild(text);

  prodactCatalok.appendChild(div);
  div.appendChild(div2);
}
