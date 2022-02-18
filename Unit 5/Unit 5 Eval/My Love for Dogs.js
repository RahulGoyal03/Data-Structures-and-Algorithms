function runProgram(input) {
   //Enter the code here
   input = input.trim().split("\n")
   var n = +input[0]
   var line = 1;
   
   var dog = input[line++].trim().split(" ").map(Number).sort((a,b) => b - a)
    var cal = input[line++].trim().split(" ").map(Number).sort((a ,b) => b - a)
   myLoveForDog(n,dog,cal)
}

function myLoveForDog(n,dog,cal){
    ans = 0
    for(var i = 0; i < dog.length; i++){
        ans += dog[i]*cal[i]
    }
    console.log(ans)
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`2
    3 1
    4 3`)
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