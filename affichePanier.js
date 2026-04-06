const panier = document.getElementById("panier");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function sauvegarder() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function AffichePanier() {
  if (cart.length === 0) {
    panier.innerHTML = `
      <p class="text-white text-center mt-10 text-xl">🛒 Panier vide</p>
      <div class="flex justify-center mt-4">
        <a href="index.html" class="px-6 py-2 bg-orange-400 text-black rounded font-bold">
          Retour aux jeux
        </a>
      </div>
    `;
    return;
  }
   // (${cart.length} ${cart.length > 1 ? "articles" : "article"})

  let total = 0;
  let html = `
    <div class="text-white mt-4 mx-4">
      <div class="flex justify-between my-2 font-bold text-xl">
        <div class="flex gap-2">
          <h1>Panier</h1>
          <h1>zzzzzzzzz</h1>
        </div>
        <button onclick="clearCart()" class="text-red-400 text-sm">Vider</button>
      </div>
    </div>
  `;

  cart.forEach(item => {
    const { game, quantité } = item;
    total += game.price * quantité;


    html += `
      <section class="flex justify-between items-center bg-[#3C3B3B] text-white rounded-[20px] mt-4 p-4 mx-4">
        <img class="w-[100px] h-[70px] rounded-[10px] object-cover" src="${game.image}" />
        <div class="flex flex-col gap-1 w-[150px]">
          <h2 class="font-bold">${game.title}</h2>
          <p class="text-orange-400">${(game.price * quantité)} €</p>
          <p class="text-gray-400 text-sm">${game.price} € / unité</p>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="decreaseQty(${game.id})" class="px-3 py-1 bg-gray-700 rounded text-lg">-</button>
          <span class="font-bold">${quantité}</span>
          <button onclick="increaseQty(${game.id})" class="px-3 py-1 bg-gray-700 rounded text-lg">+</button>
          <button onclick="removeFromCart(${game.id})" class="text-red-400 ml-2 text-xl"> X </button>
        </div>
      </section>
    `;
  });

  html += `
    <section class="mt-8 text-white text-center pb-10">
      <div class="font-bold text-2xl mb-6">
        Total : <span class="text-orange-400">${total} €</span>
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

  panier.innerHTML = html;
}





