export default class Game {
    constructor(selector, fieldSize, border) {
        this.selector = selector;
        this.fieldSize = fieldSize;
        this.border = border;
        this.render()
        this.addStyles()
        this.addGoblin()
    }
    markup() {
       let board = document.createElement("div");
       board.className = "game";
       board.style.border = `${this.border}px solid black`
       for(let count = 0; count < Math.pow(this.fieldSize, 2); count++) {
        board.innerHTML += `<div class="squre"></div>`
       }       
       return board;

    }
    render(){
        const markup = this.markup()
        this.selector.append(markup);
    }
    get widthBoard () {
        return  this.selector.querySelector(".game").offsetWidth - this.border * 2
    }
    get widthSqure() {

        return this.widthBoard / this.fieldSize - this.border * 2
    }
    addStyles() {
        const squres = Array.from(this.selector.querySelectorAll(".squre"));
        squres.forEach(item => item.style.width = `${this.widthSqure}px`);
        squres.forEach(item => item.style.height = `${this.widthSqure}px`)
        squres.forEach(item => item.style.border = `${this.border}px solid black`)
    }
    get randomNumbers() {
        return Math.floor(Math.random() * (Math.pow(this.fieldSize, 2) - 0))
    }
    addGoblin() {
        const squres = Array.from(this.selector.querySelectorAll(".squre"));
        squres[this.randomNumbers].innerHTML = `<img src="goblin.png" alt="goblin">`
    }
}