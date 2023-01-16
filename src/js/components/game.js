export default class Game {
  constructor(selector, fieldSize, border) {
    this.selector = selector;
    this.fieldSize = fieldSize;
    this.border = border;
    this.render();
    this.addStyles();
    this.addGoblin();
    this.move();
  }
  markup() {
    let board = document.createElement("div");
    board.className = "game";
    board.style.border = `${this.border}px solid black`;
    for (let count = 0; count < Math.pow(this.fieldSize, 2); count++) {
      board.innerHTML += `<div class="squre"></div>`;
    }
    return board;
  }
  render() {
    const markup = this.markup();
    this.selector.append(markup);
  }
  get widthBoard() {
    return this.selector.querySelector(".game").offsetWidth - this.border * 2;
  }
  get widthSqure() {
    return this.widthBoard / this.fieldSize - this.border * 2;
  }
  get squres() {
    return Array.from(this.selector.querySelectorAll(".squre"));
  }
  addStyles() {
    this.squres.forEach((item) => (item.style.width = `${this.widthSqure}px`));
    this.squres.forEach((item) => (item.style.height = `${this.widthSqure}px`));
    this.squres.forEach(
      (item) => (item.style.border = `${this.border}px solid black`)
    );
  }
  get randomNumbers() {
    return Math.floor(Math.random() * (Math.pow(this.fieldSize, 2) - 0));
  }
  addGoblin() {
    this.squres[
      this.randomNumbers
    ].innerHTML = `<img src="../goblin.png">`;
  }
  move() {
    setInterval(() => {
      let count;
      for (let item of this.squres) {
        if (item.innerHTML === `<img src="goblin.png">`) {
          count = this.squres.indexOf(item);
        }
        if (count !== this.randomNumbers) {
          this.squres.forEach((item) => (item.innerHTML = ""));
          this.addGoblin();
        }
      }
    }, 1000);
  }
}
