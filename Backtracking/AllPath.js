// function runProgram(input) {
//    //Enter 
//    input = input.trim().split("\n")
//    let[r,c] = input[0].trim().split(" ").map(Number)
//    let maze = []
//    let line  = 1
//    let ans = ""
//    for(var i = 0; i < r; i++){
//     let arr = input[line++].trim().split(" ").map(Boolean)
//     maze.push(arr)
 
//    }
//    mazeRestrictions(ans,0,0,maze)
// }




// if (process.env.USERNAME === 'DELL') {
//     runProgram(`3 3
//     true true true
//     true true true
//     true true true`)
// } else {
//     process.stdin.resume()
//     process.stdin.setEncoding('ascii')
//     let read = ''
//     process.stdin.on('data', function(input) {
//         read += input
//     })
//     process.stdin.on('end', function() {
//         read = read.replace(/\n$/, '')
//         read = read.replace(/\n$/, '')
//         runProgram(read)
//     })
//     process.on('SIGINT', function() {
//         read = read.replace(/\n$/, '')
//         runProgram(read)
//         process.exit(0)
//     })
// }


    //i am considering this block in my 


    //this line is where the function will be over
    //so  before the function gets removed, also remove the changes that were made by that function


var maze = [[true,true,true],
            [true,true,true],
            [true,true,true]]
var r = 0;
var c = 0;
var ans = ""

allPath(ans,r,c,maze)

function allPath(ans,r,c,maze){
    // console.log(r,c)
    if (r == maze.length - 1 && c == maze[0].length - 1) {
        console.log(ans);
         return;
     }
     
     if (!maze[r][c]) {
         return;
     }
     
     // i am considering this block in my path
     maze[r][c] = false;
     
     if (r < maze.length - 1) {
         allPath(ans + 'D', r+1,c, maze);
     }
     
     if (c < maze[0].length - 1) {
         allPath(ans + 'R', r, c+1,maze);
     }
     
     if (r > 0) {
         allPath(ans + 'U', r-1, c,maze);
     }
     
     if (c > 0) {
         allPath(ans + 'L', r, c-1,maze);
     }
     
     // this line is where the function will be over
     // so before the function gets removed, also remove the changes that were made by that function
     maze[r][c] = true;
}


