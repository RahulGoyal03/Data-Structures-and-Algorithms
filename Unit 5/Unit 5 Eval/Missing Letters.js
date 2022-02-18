function runProgram(input) {
   //Enter the code here
   input = input.trim().split("\n")
    var testCases = +input[0]
    var line = 1;
    for(var i = 0; i < testCases; i++){
    //  var n = +input[line++]
     var arr = input[line++].trim().split(" ").map(Number)
     MissingLetter(arr)
    }
}
function MissingLetter(arr){
    var obj ={
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0,
        13:0,
    }
    for(var i = 0; i< arr.length; i++){
        var char = +arr[i]
        if(obj[char] == undefined){
            obj[char] = 1
        }else{
            obj[char] = obj[char] + 1
        }
    }
    // console.log(obj)
    for(key in obj){
        if(obj[key] == 0){
            console.log(key)
            break;
        }
    }
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`2
    0 1 2 4 5 6 9 10 11 12 
    1 2 3 5 7 8 9 10 11 12`)
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