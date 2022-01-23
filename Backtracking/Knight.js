

let n = 4;
var board = new Array(n).fill(0).map((el) => new Array(n).fill(0))
knight(board, 0, 0, 4);


function knight(board, row, col, knights) {
    if (knights == 0) {
        display(board);
        return ;
    }

    if (row == board.length - 1 && col == board.length) {
        return;
    }

   

    if (col == board.length) {
        knight(board, row + 1, 0, knights);
        return;
    }
    

    if (isSafe(board, row, col)) {
        board[row][col] = true;
        knight(board, row, col + 1, knights - 1);
        
        board[row][col] = false;
    }

    knight(board, row, col + 1, knights);
    
}

function isSafe(board, row, col) {
    if (isValid(board, row - 2, col - 1)) {
        if (board[row - 2][col - 1]) {
            return false;
        }
    }

    if (isValid(board, row - 1, col - 2)) {
        if (board[row - 1][col - 2]) {
            return false;
        }
    }

    if (isValid(board, row - 2, col + 1)) {
        if (board[row - 2][col + 1]) {
            return false;
        }
    }

    if (isValid(board, row - 1, col + 2)) {
        if (board[row - 1][col + 2]) {
            return false;
        }
    }

    return true;
}

// do not repeat yourself, hence created this function
function isValid(board, row, col) {
    if (row >= 0 && row < board.length && col >= 0 && col < board.length) {
        return true;
    }
    return false;
}

function display(board) {
    let displayBoard = []
    board.forEach(row => {
        row.forEach(element => {
            if (element) {
                displayBoard.push("K");
            } else {
                displayBoard.push("X");
            }
        })
    });
    console.log(displayBoard)  
}