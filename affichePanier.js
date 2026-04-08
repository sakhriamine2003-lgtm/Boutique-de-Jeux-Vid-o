const paniertable = document.getElementById("panier");
let  cart = JSON.parse(localStorage.getItem("cart")) || [];

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


for (let i = 0; i < cart.length; i++) {

  const item = cart[i];
  const game = item.game;
  const qty = item.qty;

  total += game.price * qty;

  paniertable.innerHTML += `
    <section class="flex flex-col md:flex-row md:justify-between md:items-center bg-[#3C3B3B] text-white rounded-[20px] mt-4 p-4 mx-4 md:mx-6 gap-4">

      <!-- IMAGE -->
      <img 
        class="w-full md:w-[100px] h-[150px] md:h-[70px] rounded-[10px] object-cover" 
        src="${game.image}" 
      />

      <!-- INFO -->
      <div class="flex flex-col gap-1 w-full md:w-[150px] text-center md:text-left">
        <h2 class="font-bold text-lg md:text-base">${game.title}</h2>
        <p class="text-orange-400 text-lg md:text-base">
          ${(game.price * qty).toFixed(0)} €
        </p>
        <p class="text-gray-400 text-sm">
          ${game.price} € / unité
        </p>
      </div>

      <!-- ACTIONS -->
      <div class="flex items-center justify-center md:justify-end gap-3">
        <button onclick="quantitieMoins(${game.id})"
          class="px-3 py-1 bg-gray-700 rounded text-lg hover:bg-gray-600">
          -
        </button>

        <span class="font-bold text-lg">${qty}</span>

        <button onclick="quantitiePlus(${game.id})"
          class="px-3 py-1 bg-gray-700 rounded text-lg hover:bg-gray-600">
          +
        </button>

        <button onclick="SupprimerCard(${game.id})"
          class="text-red-400 ml-2 text-xl hover:text-red-600">
          X
        </button>
      </div>

    </section>
  `;
}


  paniertable.innerHTML += `
    <section class="mt-8 text-white text-center pb-10">
      <div class="font-bold text-2xl mb-6">
        Total : <span class="text-orange-400">${total.toFixed(0)} €</span>
      </div>
      <div class="flex justify-center gap-6">
        <a href="index.html" class="px-8 py-3 border border-white rounded">
          Continuer
        </a>
        <button id="btn-payer" class="px-8 py-3 bg-orange-400 text-black rounded font-bold">
          Payer >
        </button>
      </div>
    </section>
  `;


}


function quantitiePlus(id) {
  const item = cart.find(data => data.game.id === id);
  if (item) {  item.qty++; }
  sauvegarder();
  AffichePanier();
}

function quantitieMoins(id) {
  const item = cart.find(data => data.game.id === id);
  if (!item) return;
  if (item.qty > 1) {
    item.qty--;
  } 
   
  sauvegarder();
  AffichePanier();
}

function SupprimerCard(id) {
  cart = cart.filter(item => item.game.id !== id);
  sauvegarder();
  AffichePanier();
}




const btn =document.getElementById("btn-payer");
function CommandeValidee(){

  btn.addEventListener('click' ,()=> {

    if(cart){ localStorage.remove();
       alert('Commande validee ! Merci pour votre achat')}
      else {return ; }
    


     }
    ) }

  




window.CommandeValidee = CommandeValidee;
window.quantitiePlus = quantitiePlus;
window.quantitieMoins = quantitieMoins;
window.SupprimerCard = SupprimerCard ;

AffichePanier();


