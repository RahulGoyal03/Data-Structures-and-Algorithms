function runProgram(input) {
    input = input.trim().split('\n')
    let [N, key] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)

    let low = 0
    let high = N - 1
    BinarySearch(arr, low, high, key)
}

function BinarySearch(arr, low, high, key) {
    let mid = low + Math.floor((high - low) / 2)
    let mid_val = arr[mid]
    if (high <= low) {
        console.log(-1)
        return
    }
    if (mid_val === key) {
        console.log(1)
        return
    } else if (mid_val < key) {
        BinarySearch(arr, mid + 1, high, key)
    } else {
        BinarySearch(arr, low, mid - 1, key)
    }
}


// function BinarySearch(arr, low, high, key) {


//     if (low <= high) {
//         var mid = low + Math.floor((high - low) / 2)
//     }
//     if (arr[mid] == key)
//         return 1
//     if (arr[mid] < key)
//         BinarySearch(arr, mid + 1, high, key)
//     if (arr[mid] > key)
//         BinarySearch(arr, low, mid - 1, key)
//     else
//         return -1

// }




if (process.env.USER === 'Girraj Goyal') {
    runProgram(`5 2
    8 4 1 9 11`)
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