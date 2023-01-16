import Game from "../components/game";
import selector from "../app"

test("game class check", () => {
    const result = new Game(selector, 4, 1);
    const expect = new Game(selector, 4, 1)
    expect(result).toEqual(expected);
})