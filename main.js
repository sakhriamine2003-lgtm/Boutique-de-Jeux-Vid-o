import { games } from "./data.js";
import { afficherGames } from "./UI.js";
import { SearchInput } from "./search.js";
import { Affichercategory, FiltrerCategory } from "./category.js";
import { AjouterPanier } from "./panier.js"; // ✅ seulement AjouterPanier

window.AjouterPanier = AjouterPanier; // ✅ pour que onclick="AjouterPanier()" fonctionne

afficherGames(games);
SearchInput();
Affichercategory();
FiltrerCategory(games);