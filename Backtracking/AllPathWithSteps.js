var maze = [[true,true,true],
            [true,true,true],
            [true,true,true]]
var r = 0;
var c = 0;
var ans = ""
var steps = 1;
// var path = [[0,0,0],[0,0,0],[0,0,0]]
var path = []

let line  = 0
// let path = new Array(maze.length).fill(0).map((el) => new Array(maze.length).fill(0))
   for(var i = 0; i < maze.length; i++){
       let innerarr = []
       for(var j = 0; j < maze.length; j++){
           innerarr.push(0)
       }
    path.push(innerarr)
   }
   console.log(path)
allPath(ans,r,c,maze,path,steps)

function allPath(ans,r,c,maze,path,steps){
// console.log(r,c)

if (r == maze.length - 1 && c == maze[0].length - 1) {
    path[r][c] = steps;
    if(path[r][c]){
        console.log(path)
    }
console.log(ans);
return;
}

if (!maze[r][c]) {
return;
}

maze[r][c] = false;
path[r][c] = steps;

if (r < maze.length - 1) {
allPath(ans + 'D', r+1,c, maze,path,steps+1);
}

if (c < maze[0].length - 1) {
allPath(ans + 'R', r, c+1,maze,path,steps+1);
}

if (r > 0) {
allPath(ans + 'U', r-1, c,maze,path,steps+1);
}

if (c > 0) {
allPath(ans + 'L', r, c-1,maze,path,steps+1);
}
maze[r][c] = true;
path[r][c] = 0
}