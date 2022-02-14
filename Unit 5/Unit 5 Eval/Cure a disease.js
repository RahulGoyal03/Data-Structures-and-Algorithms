function runProgram(input) {
   //Enter the code here
   input = input.trim().split("\n")
   var n = +input[0]
   var line = 1;
   
   var vaccine = input[line++].trim().split(" ").map(Number).sort((a,b) => b - a)
    var strength = input[line++].trim().split(" ").map(Number).sort((a ,b) => b - a)
   console.log(cureADisease(n,vaccine,strength))
}
function cureADisease(n,vaccine,strength){
    for(var i = 0; i < n; i++){
        if(vaccine[i] < strength[i]){
            return "No"
        }
    }
    return "Yes"
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`5
    123 146 454 542 456
    100 328 248 689 200`)
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