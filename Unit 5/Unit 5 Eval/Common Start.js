function runProgram(input) {
   //Enter the code here
   input = input.trim().split("\n")
   var testCases = +input[0]
   var line = 1;
   for(var i = 0; i < testCases; i++){
    var str = input[line++]
   console.log(str)
  }

}
function solution(str1, str2) {
    str1 = str1.split('')
    str2 = str2.split('')  
  
    const output = []
  
    for(let i = str1.length -1; i >= 0; i--) {   
      for(let j = str2.length -1; j >= 0; j--) {
        if( str2[j] === str1[i] ) {
          output.push(str2[j]) 
          break
        }      
      } 
  
    }
  
    return output.reverse().join('')
  
  }
if (process.env.USERNAME === 'DELL') {
    runProgram(`1
rbbyrrby rbb rbbybbryb`)
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