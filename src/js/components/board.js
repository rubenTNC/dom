export default class Board {
  constructor(selector, fieldSize, border) {
    this.selector = selector;
    this.fieldSize = fieldSize;
    this.border = border;
    this.border = border;
    this.markup();
    this.addStyles();
  }
  get numberSqure() {
    return Math.pow(this.fieldSize, 2);
  }
  get squres() {
    return Array.from(this.selector.querySelectorAll(".squre"));
  }
  markup() {
    let board = document.createElement("div");
    board.className = "game";
    board.style.border = `${this.border}px solid black`;
    this.selector.append(board);
    for (let count = 0; count < Math.pow(this.fieldSize, 2); count++) {
      const squre = document.createElement("div");
      squre.className = "squre";
      board.appendChild(squre);
    }
  }
  get widthBoard() {
    return this.selector.querySelector(".game").offsetWidth - this.border * 2;
  }
  get widthSqure() {
    return this.widthBoard / this.fieldSize - this.border * 2;
  }
  get squre() {
    return Array.from(this.selector.querySelectorAll(".squre"));
  }
  addStyles() {
    this.squres.forEach((item) => (item.style.width = `${this.widthSqure}px`));
    this.squres.forEach((item) => (item.style.height = `${this.widthSqure}px`));
    this.squres.forEach(
      (item) => (item.style.border = `${this.border}px solid black`)
    );
  }
}
