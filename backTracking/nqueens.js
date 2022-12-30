

let board = [
    [".",".",".","."],
    [".",".",".","."],
    [".",".",".","."],
    [".",".",".","."],
]
let ans = []
queens(0,board);
function queens(col,board){
    if(col == board.length){
        for(let i=0;i<board.length;i++){
            console.log(board[i].join(" "));
        }
        console.log("space")
        return
    }
    for(let row=0;row<board.length;row++){
        if(safe(row,col,board)){
            board[row][col] ="Q";
            queens(col+1,board)
            board[row][col] = ".";
        }
    }
}
function safe(row,col,board){
    for(let i=col;i>=0;i--){
        if(board[row][i]=="Q") return false;
    }
    for(let i=row,j=col;i>=0 && j>=0;i--,j--){
        if(board[i][j]=="Q") return false;
    }
    for(let i=row,j=col;i<board.length && j>=0;i++,j--){
        if(board[i][j]=="Q") return false;
    }
    return true;
}

//solver(0,board);
//console.log(ans.length);
function solver(row,board){
    if(row==board.length){
        for(let i=0;i<board.length;i++){
            console.log(board[i].join(" "))
        }
        console.log("space");
        return;
    }
    for(let col=0;col<board.length;col++){
        if(check(board,row,col)){
            board[row][col]="Q"
            solver(row+1,board);
            board[row][col]=".";
        }
    }
}
function check(board,row,col){
    for(let i=row;i>=0;i--){
        if(board[i][col]=="Q") return false;
    }
    for(let i=row,j=col;j>=0 && i>=0;i--,j--){
        if(board[i][j]=="Q") return false;
    }
    for(let i=row,j=col;j<board.length && i>=0;i--,j++){
        if(board[i][j]=="Q") return false;
    }

    return true;
}