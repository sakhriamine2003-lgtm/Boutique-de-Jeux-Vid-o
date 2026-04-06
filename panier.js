import { games } from "./data.js";

export const cart = JSON.parse(localStorage.getItem("cart")) || [];

function sauvegarder() {localStorage.setItem("cart", JSON.stringify(cart));}

export function AjouterPanier(id) {
  const game = games.find(g => g.id === id);
  if (!game) return;

  const item = cart.find(i => i.game.id === id);
  if (item) {item.qtr++;}
  
  sauvegarder();

  alert(`${game.title} ajouté au panier !`);
}

