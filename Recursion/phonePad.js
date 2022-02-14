function runProgram(input) {
   var str = input
   var ans = ""
   phone_pad(ans,str)
}
function phone_pad(ans,str){
    // console.log(str)
    var text = "a"
    if(str.length == 0){    
        console.log(ans);
       return
    }
    let digit = str.charAt(0) - "0"
    // console.log(digit)
    for(var i = (digit - 1) * 3; i < (digit*3); i++){
        let cha = (text.charCodeAt(0) + i)
       let ch = String.fromCharCode(cha)
     phone_pad(ans + ch, str.substring(1))
    }

   
     
}


if (process.env.USERNAME === 'DELL') {
    runProgram(`12`)
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
