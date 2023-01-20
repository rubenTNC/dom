import { randomNumbers } from "./randomNumbers";
import { board } from "../app";


export default class Goblin {
    constructor(img) {
        this.img = img;
        this.addGoblin();
        this.move()
    }
    addGoblin() {
        const squres = board.squres;
        const goblin = document.createElement("img")
        goblin.setAttribute("src", this.img)
        squres[randomNumbers(0, board.numberSqure)].append(goblin);
    }
    move() {
        setInterval(() => {
            const activeSqure = board.squres.findIndex(item => item.querySelector("img"));
            const randomNumber = randomNumbers(0, board.numberSqure);
            if (activeSqure != randomNumber) {
                const child = board.squres[activeSqure].querySelector("img");
                board.squres[activeSqure].removeChild(child)
                this.addGoblin()
            } 

        }, 1000)
    }

}