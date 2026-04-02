const category = document.getElementById("category");

export function Affichercategory() {
  category.innerHTML = `
    <div class="flex gap-4 flex-wrap justify-center mt-6">

      <button data-cat="Action" class="px-6 py-2 bg-[#2a2a2a] text-white rounded-full hover:bg-orange-400 transition">
        Action
      </button>

      <button data-cat="RPG" class="px-6 py-2 bg-[#2a2a2a] text-white rounded-full hover:bg-orange-500 transition">
        RPG
      </button>

      <button data-cat="FPS" class="px-6 py-2 bg-[#2a2a2a] text-white rounded-full hover:bg-orange-500 transition">
        FPS
      </button>

      <button data-cat="all" class="px-6 py-2 bg-gray-500 text-white rounded-full">
        Tous
      </button>

    </div>
  `;
}


export function FiltrerLaCatigory(games, afficherGames) {
  
  category.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {

      const categorie = e.target.dataset.cat;

      if (categorie === "all") {
        afficherGames(games);
      } else {
        const result = games.filter(game =>
          game.category.toLowerCase() === categorie.toLowerCase()
        );

        afficherGames(result);
      }

    }
  });

}