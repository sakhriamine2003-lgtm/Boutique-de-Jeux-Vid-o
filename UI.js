import { games } from "./data.js";
import { SearchInput } from "./search.js";


const container = document.getElementById("cards");

export function afficherGames(list) {
  container.innerHTML = ""; 

  for (let i = 0; i < list.length; i++) {
    let game = list[i];

    container.innerHTML += `
      <div 
        class="h-64 rounded-[10px] flex flex-col justify-end w-full md:w-[31%] mx-1"
        style="background-image: url('${game.image}'); background-size: cover; background-position: center;"
      >
        <div class="bg-[#3C3B3B]/50 flex justify-between items-center text-white font-bold p-4">
          <h2>${game.category}</h2>
          <div class="text-right">
            <p>${game.title}</p>
            <p>${game.price} €</p>
          </div>
        </div>
      </div>
    `;
  }
}

afficherGames(games);
SearchInput();         























