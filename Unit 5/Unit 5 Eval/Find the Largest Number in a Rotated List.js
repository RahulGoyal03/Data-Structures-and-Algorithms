function runProgram(input) {
   //Enter the code here
   input =input.trim().split("\n");
   var n = +input[0]
   var arr = input[1].trim().split(" ").map(Number)
  LargestNum(n,arr)
}
function LargestNum(n,arr){
    
}
if (process.env.USERNAME === 'DELL') {
    runProgram(`5
    6 7 8 1 4`)
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