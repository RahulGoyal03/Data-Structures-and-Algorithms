function runProgram(input) {
    //Enter the code here
    input = input.trim().split("\n")
    let str = input[0].trim()
    var ans = ""
    var arr =[]
subseq(ans, str, arr)
console.log(arr)
 }
 function subseq(ans, str, arr){
    if(str.length == 0){
        if(ans == ""){
            return 
        }else{
            arr.push(ans)
        }
       return 
    }
    subseq(ans +str[0], str.substring(1), arr)
    subseq(ans, str.substring(1), arr)
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