function runProgram(input) {
   //Enter the code here
   input = input.trim().split("\n")
   let str = input[0].trim()
   ans =""
   console.log( bananaskip(ans, str))
}
function bananaskip(ans, str){
    if(str.length == 0){
        return ans;
    }
    if(str.charAt(0) == "b"){
        return bananaskip(ans, str.substring(1))
    }else{
        ans += str.charAt(0) 
        return bananaskip(ans, str.substring(1))
    }
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`abcbananacad`)
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