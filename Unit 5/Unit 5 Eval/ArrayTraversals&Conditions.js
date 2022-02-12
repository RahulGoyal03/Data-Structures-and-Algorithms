function runProgram(input) {
   //Enter the code here
   input =input.trim().split("\n");
   var n = +input[0]
   var arr = input[1].trim().split(" ").map(Number)
  ArrayTraversal(n,arr)
}

function ArrayTraversal(n,arr){
    // var c1= ""
   var count1 =0
   var count2 =0
   var count3 =0
   var count4 =0
  
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 5 == 0){
            count1++
        }else if(arr[i] % 3 == 0){
            count2++
        }else if(arr[i] % 2 == 0){
            count3++
        }else{
            count4++
        }
    }
    console.log(count1+" "+count2+" "+count3+" "+count4+" ")
}



if (process.env.USERNAME === 'DELL') {
    runProgram(`4
    1 2 3 4`)
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