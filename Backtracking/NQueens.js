
    
        var n = 4;
        // var board = []
        var board = new Array(n).fill(0).map((el) => new Array(n).fill(0))
        // console.log(board)
        console.log(queens(board, 0));
    

    function queens(board,row) {
        if (row == board.length) {
            display(board);
            return 1;
        }

        var count = 0;

        // placing the queen and checking for every row and col
        for (var col = 0; col < board.length; col++) {
            // place the queen if it is safe
            if(isSafe(board, row, col)) {
                board[row][col] = true;
                count += queens(board, row + 1);
                board[row][col] = false;
            }
        }

        return count;
    }

    function isSafe(board, row, col) {
        // check vertical row
        for (let i = 0; i < row; i++) {
            if (board[i][col]) {
                return false;
            }
        }

        // diagonal left
        let maxLeft = Math.min(row, col);
        for (let i = 1; i <= maxLeft; i++) {
            if(board[row-i][col-i]) {
                return false;
            }
        }

        // diagonal right
        let maxRight = Math.min(row, board.length - col - 1);
        for (let i = 1; i <= maxRight; i++) {
            if(board[row-i][col+i]) {
                return false;
            }
        }

        return true;
    }

function display(board) {
    let displayBoard = []
     board.forEach(row => {
         row.forEach(element =>{
            if (element) {
                displayBoard.push("Q");
              }else {
             displayBoard.push("X");
              }
         })
    });
console.log(displayBoard)
}