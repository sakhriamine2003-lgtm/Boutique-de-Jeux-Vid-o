import { games } from "./data.js";
import { afficherGames } from "./UI.js";

const input = document.getElementById("search");

export function SearchInput(){
input.addEventListener("input", () => {
const stocke = input.value.toLowerCase();

const result = games.filter(game =>
  game.title.toLowerCase().includes(stocke)
  ); afficherGames(result)
});}


