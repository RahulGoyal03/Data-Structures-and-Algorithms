function runProgram(input) {
   //Enter the code here
   var target = input
   var ans = ""
   dice(ans,target)
}
function dice(ans,target){
    if(target == 0){    
        console.log(ans);
       return
    }
    for(var i = 1; i <=6 && i<=target; i++){
        dice(ans + i, target-i)
    }
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`4`)
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