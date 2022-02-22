function runProgram(input) {
   //Enter the code here
   input = input.trim().split("\n")
   var n = +input[0]
   var arr = input[1].trim().split(" ").map(Number)
   countLargestNeighbour(n,arr)
}
function countLargestNeighbour(n,arr){
    // console.log(n,arr)
    var count = 0

    for(var i = 1;i< n; i++){
        if((arr[i-1] < arr[i]) && (arr[i] > arr[i+1] )){
            count++
        }
    }
    console.log(count)
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`6
    -5 -2 0 1 13 9`)
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