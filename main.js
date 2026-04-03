import { games } from "./data.js";
import { afficherGames } from "./UI.js";
import { SearchInput } from "./search.js";
import { Affichercategory, FiltrerCategory } from "./category.js";
import { AffichePanier } from "./panier.js";

afficherGames(games);
SearchInput();
Affichercategory();

FiltrerCategory(games);
AffichePanier();