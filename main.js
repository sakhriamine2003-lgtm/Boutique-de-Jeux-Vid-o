import { games } from "./data.js";
import { afficherGames } from "./UI.js";
import { SearchInput } from "./search.js";
import { Affichercategory, FiltrerLaCatigory } from "./category.js";

afficherGames(games);
SearchInput();
Affichercategory();

FiltrerLaCatigory(games, afficherGames);