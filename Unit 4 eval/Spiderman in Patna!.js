function runProgram(input) {
   //Enter the code here
   input = input.trim().split("\n")
   var size  = +input[0]
   var arr = input[1].trim().split(" ").map(Number)

   let sum = 0
   let min = arr[0]

   for(let i = 0; i < size; i++){
       if(arr[i] < min){
           min = arr[i]
       }
       sum+= min
   }
   console.log(sum)
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`4
    10 30 40 20`)
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