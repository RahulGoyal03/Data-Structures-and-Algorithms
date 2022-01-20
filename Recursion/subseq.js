function runProgram(input) {
    //Enter the code here
    input = input.trim().split("\n")
    let str = input[0].trim()
    ans =""
    subseq(ans, str)
 }
 function subseq(ans, str){
    if(str.length == 0){    
        console.log(ans);
       return
    }
    subseq(ans + str[0], str.substring(1))
    subseq(ans, str.substring(1))
     
 }
 
 if (process.env.USERNAME === 'DELL') {
     runProgram(`abc`)
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