function runProgram(input) {
   //Enter the code here
   let input_arr = input.trim().split("\n")

   for(let i = 1; i < input_arr.length; i++){
       let string = input_arr[i].trim()
       let count = 0

       for (let i = 0; i< string.length; i++){
           count++
           while(string[i] == string[i+1]){
               i++
           }
       }
       console.log(count)
   }
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`2
    aaaaa
    abbbaaz`)
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