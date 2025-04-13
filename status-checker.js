const { checkIfNoMovesLeft } = require('./board-printer.js');
/*
    Example board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a row index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the row
    Otherwise, return false
*/

// Check if a player filled all 3 cells in the given row
function checkRow(board, player, rowNumber) {
    return board[rowNumber].every(cell => cell === player);
}

function checkColumn(board, player, columnNumber) {
    return board.every(row => row[columnNumber] === player);
}

function checkDiagonal(board, player) {
    const leftToRight = board[0][0] === player && board[1][1] === player && board[2][2] === player;
    const rightToLeft = board[0][2] === player && board[1][1] === player && board[2][0] === player;
    return leftToRight || rightToLeft;
}

function checkIfPlayerWon(board, player) {
    for (let i = 0; i <= 2; i++) {
        if (checkRow(board, player, i) || checkColumn(board, player, i)) {
            return true;
        }
    }
    if (checkDiagonal(board, player)) {
        return true;
    }
    return false;
}

function isGameOver(board) {
    if (checkIfPlayerWon(board, 'X')) {
        console.log('X has won the game!\n');
        return true;
    }

    if (checkIfPlayerWon(board, 'O')) {
        console.log('O has won the game!\n');
        return true;
    }

    if (checkIfNoMovesLeft(board)) {
        console.log('Game Over - It\'s a tie!\n');
        return true;
    }

    return false;
}

module.exports = {
    isGameOver
};