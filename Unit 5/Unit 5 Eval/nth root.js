function runProgram(input) {
   //Enter the code here
   input = input.trim().split("\n")
   var n = +input[0]
   var line = 1;
   for(var i = 0; i < n; i++){
       var [nth, m] = input[line++].trim().split(" ").map(Number)
       nthRoot(nth,m)
   }
   
}
function nthRoot(nth,m){
    out =''
    var num = Math.floor(m **(1/nth))
    console.log(num)
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`3
    2 9
    6 4096
    3 126`)
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