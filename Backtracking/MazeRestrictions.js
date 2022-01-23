var maze = [[true,true,true],[true,false,true],[true,true,true]]
var r = 0;
var c = 0;
var ans = ""
mazeRestrictions(ans,r,c,maze)

function mazeRestrictions(ans,r,c,maze){
    // console.log(r,c)
    if(r == maze.length-1 && c == maze[0].length-1){
        console.log(ans)
        return
    }
    if(maze[r][c] == false){
        return
    }
    if(r < maze.length-1){
        mazeRestrictions(ans + "D", r+1, c,maze)
    }
    if(c < maze[0].length-1){
        mazeRestrictions(ans + "R", r, c+1,maze)
    }
    
}