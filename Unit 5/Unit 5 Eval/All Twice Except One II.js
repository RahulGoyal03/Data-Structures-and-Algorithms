function runProgram(input) {
   //Enter the code here
   input = input.trim().split("\n")
   var testCases = +input[0]
   var line = 1;
   for(var i = 0; i < testCases; i++){
    var n = +input[line++]
    var arr = input[line++].trim().split(" ").map(Number)
   AllTwiceExceptOne(n,arr)
  }
}

function AllTwiceExceptOne(n,arr){
var obj ={}
for(var i = 0; i< arr.length; i++){
    var char = arr[i]
    if(obj[char] == undefined){
        obj[char] = 1
    }else{
        obj[char] = obj[char] + 1
    }
}
console.log(obj)
for(key in obj){
    if(obj[key] == 1){
        console.log(key)
    }
}
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`1
        5
        1 2 1 3 4 4 5 2 3`)
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