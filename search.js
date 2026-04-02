import { afficherGames } from "./UI";

const input = document.getElementById("search");


 export function SearchInput(){
input.addEventListener("input", () => {
const value = input.value.toLowerCase();

const result = games.filter(game =>
   game.title.toLowerCase().includes(value)
  );
});}

afficherGames(result)
