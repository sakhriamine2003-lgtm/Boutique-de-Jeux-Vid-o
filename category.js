
const category =document.getElementById("category")

export function Affichercategory(){

category.innerHTML = `

<div class="flex gap-4 flex-wrap justify-center mt-6">

  <button id="Action" class="px-6 py-2 bg-[#2a2a2a] text-white  rounded-full hover:bg-orange-400 transition">
    Action
  </button>

  <button  id="RPG" class="px-6 py-2 bg-[#2a2a2a] text-white rounded-full hover:bg-orange-500  transition">
    RPG
  </button>

  <button  id="FPS" class="px-6 py-2 bg-[#2a2a2a] text-white  rounded-full hover:bg-orange-500  transition">
    FPS
  </button>

</div>


`
// }

// const Action = document.getElementById("Action");
// const RPG = document.getElementById("RPG");
// const FPS = document.getElementById("FPS");


// export function categoryAction(){
// Action.onclick = () => {
// const resultAction = games.filter(game =>
// game.category.toLowerCase().includes(value)
//   ); 
// };}


}
