const paniertable = document.getElementById("panier");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

function sauvegarder() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function AffichePanier() {
  if (cart.length === 0) {
    paniertable.innerHTML = `
      <p class="text-white text-center mt-8 ">Panier vide</p>
      <div class="flex justify-center mt-4">
        <a href="index.html" class="px-6 py-2 bg-orange-400  font-bold">
          Retour aux jeux
        </a>
      </div>
    `;
    return;
  }

  let total = 0;
 paniertable.innerHTML = `
    <div class="text-white mt-4 mx-4">
      <div class="flex justify-between my-2 font-bold text-xl">
        <div class="flex gap-2">
          <h1>Panier</h1>
          <h1>(${cart.length})</h1>
        </div>
        <button onclick="viderPanier()" class="text-red-400 text-sm">Vider</button>
      </div>
    </div>
  `;

  cart.forEach(item => {
    const { game, qty } = item;
    total += game.price * qty;

    paniertable.innerHTML += `
      <section class="flex justify-between items-center bg-[#3C3B3B] text-white rounded-[20px] mt-4 p-4 mx-6">
        <img class="w-[100px] h-[70px] rounded-[10px] object-cover" src="${game.image}" />
        <div class="flex flex-col gap-1 w-[150px]">
          <h2 class="font-bold">${game.title}</h2>
          <p class="text-orange-400">${(game.price * qty).toFixed(0)} €</p>
          <p class="text-gray-400 text-sm">${game.price} € / unité</p>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="quantitieMoins(${game.id})" class="px-3 py-1 bg-gray-700 rounded text-lg">-</button>
          <span class="font-bold">${qty}</span>
          <button onclick="quantitiePlus(${game.id})" class="px-3 py-1 bg-gray-700 rounded text-lg">+</button>
          <button onclick="SupprimerCard(${game.id})" class="text-red-400 ml-2 text-xl">X</button>
        </div>
      </section>
    `;
  });

  paniertable.innerHTML += `
    <section class="mt-8 text-white text-center pb-10">
      <div class="font-bold text-2xl mb-6">
        Total : <span class="text-orange-400">${total.toFixed(0)} €</span>
      </div>
      <div class="flex justify-center gap-6">
        <a href="index.html" class="px-8 py-3 border border-white rounded">
          Continuer
        </a>
        <button class="px-8 py-3 bg-orange-400 text-black rounded font-bold">
          Payer >
        </button>
      </div>
    </section>
  `;


}

function quantitiePlus(id) {
  const item = cart.find(i => i.game.id === id);
  if (item) item.qty++;
  sauvegarder();
  AffichePanier();
}

function quantitieMoins(id) {
  const item = cart.find(i => i.game.id === id);
  if (!item) return;
  if (item.qty > 1) {
    item.qty--;
  } else {
    SupprimerCard(id);
    return;
  }
  sauvegarder();
  AffichePanier();
}

function SupprimerCard(id) {
  const index = cart.findIndex(i => i.game.id === id);
  if (index > -1) cart.splice(index, 1);
  sauvegarder();
  AffichePanier();
}



window.quantitiePlus = quantitiePlus;
window.quantitieMoins = quantitieMoins;
const paniertable = document.getElementById("panier");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

function sauvegarder() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function AffichePanier() {
  if (cart.length === 0) {
    paniertable.innerHTML = `
      <p class="text-white text-center mt-8 ">Panier vide</p>
      <div class="flex justify-center mt-4">
        <a href="index.html" class="px-6 py-2 bg-orange-400  font-bold">
          Retour aux jeux
        </a>
      </div>
    `;
    return;
  }

  let total = 0;
 paniertable.innerHTML = `
    <div class="text-white mt-4 mx-4">
      <div class="flex justify-between my-2 font-bold text-xl">
        <div class="flex gap-2">
          <h1>Panier</h1>
          <h1>(${cart.length})</h1>
        </div>
        <button onclick="viderPanier()" class="text-red-400 text-sm">Vider</button>
      </div>
    </div>
  `;

  cart.forEach(item => {
    const { game, qty } = item;
    total += game.price * qty;

    paniertable.innerHTML += `
      <section class="flex justify-between items-center bg-[#3C3B3B] text-white rounded-[20px] mt-4 p-4 mx-6">
        <img class="w-[100px] h-[70px] rounded-[10px] object-cover" src="${game.image}" />
        <div class="flex flex-col gap-1 w-[150px]">
          <h2 class="font-bold">${game.title}</h2>
          <p class="text-orange-400">${(game.price * qty).toFixed(0)} €</p>
          <p class="text-gray-400 text-sm">${game.price} € / unité</p>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="quantitieMoins(${game.id})" class="px-3 py-1 bg-gray-700 rounded text-lg">-</button>
          <span class="font-bold">${qty}</span>
          <button onclick="quantitiePlus(${game.id})" class="px-3 py-1 bg-gray-700 rounded text-lg">+</button>
          <button onclick="SupprimerCard(${game.id})" class="text-red-400 ml-2 text-xl">X</button>
        </div>
      </section>
    `;
  });

  paniertable.innerHTML += `
    <section class="mt-8 text-white text-center pb-10">
      <div class="font-bold text-2xl mb-6">
        Total : <span class="text-orange-400">${total.toFixed(0)} €</span>
      </div>
      <div class="flex justify-center gap-6">
        <a href="index.html" class="px-8 py-3 border border-white rounded">
          Continuer
        </a>
        <button class="px-8 py-3 bg-orange-400 text-black rounded font-bold">
          Payer >
        </button>
      </div>
    </section>
  `;


}

function quantitiePlus(id) {
  const item = cart.find(i => i.game.id === id);
  if (item) item.qty++;
  sauvegarder();
  AffichePanier();
}

function quantitieMoins(id) {
  const item = cart.find(i => i.game.id === id);
  if (!item) return;
  if (item.qty > 1) {
    item.qty--;
  } else {
    SupprimerCard(id);
    return;
  }
  sauvegarder();
  AffichePanier();
}

function SupprimerCard(id) {
  const index = cart.findIndex(i => i.game.id === id);
  if (index > -1) cart.splice(index, 1);
  sauvegarder();
  AffichePanier();
}

window.quantitiePlus = quantitiePlus;
window.quantitieMoins = quantitieMoins;
window.SupprimerCard = SupprimerCard ;

AffichePanier();


