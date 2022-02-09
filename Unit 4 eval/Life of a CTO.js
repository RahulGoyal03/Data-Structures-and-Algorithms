function runProgram(input) {
    //Enter the code here
    input =input.trim().split("\n")
    let N = +input[0]
 //   console.log(input)
     let arr = input[1].trim().split(" ").map(Number)
     var low = 0
     var high = N-1
    var key = 1
     console.log(lifeOfACTO(arr,low,high,key))
 }
 

function lifeOfACTO(arr, low, high, key) {
    if (low > high) {
        return -1
    }
    let mid = low + Math.floor((high - low) / 2)
    if (key < arr[mid]) {
        return lifeOfACTO(arr, low, mid - 1, key)
    } else if (key > arr[mid]) {
        return lifeOfACTO(arr, mid + 1, high, key)
    } else if (key == arr[mid]) {
        if (arr[mid] == arr[mid - 1]) {
            return lifeOfACTO(arr, low, mid, key)
        } else {
            return mid;
        }
    }
}
 
 if (process.env.USERNAME == 'DELL') {
     runProgram(`5
     0 0 0 1 1`)
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