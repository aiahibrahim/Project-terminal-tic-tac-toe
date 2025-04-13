/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/
function validateMove(move, board) {
    // Implement this at the end if you have time, otherwise you can help your teammates!
    let [row, col]= makeMove.split(',').map(Number);
    //to check if row and column are within valid range(1 to 3)
    if(isNaN(row) || isNaN(col) || row<1 || row>3 || col<1 || col>3){
        console.log('Try again...');
        return false;
    }
    
    // Check if the selected cell is empty ('_')
    if (board[row- 1][col- 1] !== '_') {
        console.log('Try again...');
        return false;
    }
    return true;
}

/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
export function makeMove(board, move, player) {
    if(!validateMove(move, board)){
    return false;
    }
    let [row, col] = move.split(',').map(Number);
    board[row - 1][col - 1] = player; // Adjust index for 0-based array

    return true;
}

module.exports = {
    makeMove
};

