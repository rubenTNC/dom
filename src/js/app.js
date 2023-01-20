// import Game from "./components/game";
import Board from "./components/board";
const selector = document.querySelector(".app");
import goblin from "../img/goblin.png";
import Goblin from "./components/goblin";

export const board = new Board(selector, 4, 1);
new Goblin(goblin);
