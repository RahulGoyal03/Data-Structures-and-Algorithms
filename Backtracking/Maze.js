function runProgram(input) {
   //Enter the code here
   var [r,c] = input.trim().split(" ").map(Number)
   var ans = ""
   var arr = []
   console.log(mazeProblem(r,c))
  mazeProblem2(ans,r,c)
  mazeProblemDiagonal(ans,r,c,arr)
  console.log(arr)
}
function mazeProblem2(ans,r,c){
    // console.log(r,c)
    if(r == 1 && c ==1){
        
        console.log(ans)
        return
    }
    if(r > 1){
        mazeProblem2(ans + "D", r-1, c)
    }
    if(c > 1){
        mazeProblem2(ans + "R", r, c-1)
    }
}
function mazeProblemDiagonal(ans,r,c,arr){
    // console.log(r,c)
    if(r == 1 && c ==1){
        
       arr.push(ans)
        return
    }
    if(r > 1 && c > 1){
        mazeProblemDiagonal(ans + "Di",r-1, c-1,arr)
    }
    if(r > 1){
        mazeProblemDiagonal(ans + "D", r-1, c,arr)
    }
    if(c > 1){
        mazeProblemDiagonal(ans + "R", r, c-1,arr)
    }
}

function mazeProblem(r,c){
    // console.log(r,c)
    if(r == 1 || c == 1){
        return 1;
    }
   let right = mazeProblem(r,c-1)
   let down = mazeProblem(r-1,c)
   return  right + down
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`3 3`)
} else {
    process.stdin.resume()
    process.stdin.setEncoding('ascii')
    let read = ''
    process.stdin.on('data', function(input) {
        read += input
    })
    process.stdin.on('end', function() {
        read = read.replace(/\n$/, '')
        read = read.replace(/\n$/, '')
        runProgram(read)
    })
    process.on('SIGINT', function() {
        read = read.replace(/\n$/, '')
        runProgram(read)
        process.exit(0)
    })
}