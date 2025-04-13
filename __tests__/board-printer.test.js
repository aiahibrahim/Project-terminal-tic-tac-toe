// __tests__/board-printer.test.js

const { checkIfNoMovesLeft } = require("../board-printer");

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
    const board = [
        ['X', 'O', 'X'],
        ['X', 'O', 'O'],
        ['O', 'X', 'X']
    ];
    expect(checkIfNoMovesLeft(board)).toBe(true);
});

test("checkIfNoMovesLeft should return false if there are moves left", () => {
    const board = [
        ['X', '_', 'X'],
        ['X', 'O', 'O'],
        ['O', 'X', 'X']
    ];
    expect(checkIfNoMovesLeft(board)).toBe(false);
});
