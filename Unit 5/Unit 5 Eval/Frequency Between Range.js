function runProgram(input) {
   //Enter the code here
   input = input.trim().split("\n");
  var [n,query] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var line = 2;
  for (var i = 0; i < query; i++) {
    //  var n = +input[line++]
    var [left,right,value] = input[line++].trim().split(" ").map(Number);
  
   FrequencyBetweenRange(left, right,value,arr);
  }
}
function FrequencyBetweenRange(left,right,value,arr){
    // console.log(left,right,value,arr)
    var count = 0 
    for(var i = left-1; i < right; i++){
        if(value == arr[i]){
            count++
        }
    }
    console.log(count)
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`6 2
    1 5 3 2 3 2 
    3 6 2
    4 4 2
    `)
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