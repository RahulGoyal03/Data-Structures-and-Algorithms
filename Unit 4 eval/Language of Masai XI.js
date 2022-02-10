function runProgram(input) {
   //Enter the code here
   input_arr = input.trim().split("\n")
//    console.log(input_arr)
   var N = +input_arr[0]
   var str = input_arr[1].trim()
   LanguageofMasaiXI(N,str)
}
function LanguageofMasaiXI(N,str){
    // console.log(N,str)

    if(str[0]== "a" || str[0] == "e"  || str[0] == "i" || str[0] == "o" || str[0] == "u"){
        str+= "hulk"
    }else{
        str+= "thor"
    }
console.log(str)
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`5
    abced`)
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