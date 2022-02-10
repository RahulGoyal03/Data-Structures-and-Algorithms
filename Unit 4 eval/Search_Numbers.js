function runProgram(input) {
    //Enter the code here
    var input = input.trim().split("\n")
    var N = +input[0]
    var arr = input[1].trim().split(" ").map(Number).sort((a,b) => a - b)
    var query = +input[2]
    var low = 0
    var high = N - 1
    out = []

    for (var i = 3; i < query + 3; i++) {
        var [L, R] = input[i].trim().split(" ").map(Number)
        //    console.log(N,arr,query,L,R)
        var ans1 =(Search_Number(arr, L, R, low, high))
        var ans2 =(Search_Number2(arr, L, R, low, high))
        
        out.push(ans2-ans1 +1)
       
    }
    console.log(out.join(" "))
}

function Search_Number(arr, L, R, low, high) {
    // console.log( arr, L, R, low, high)
    if (low > high) {
        return low
    }
    let mid = low + Math.floor((high - low) / 2)
    if (L < arr[mid]) {
        return Search_Number( arr, L, R, low, mid-1)
    } else if (L > arr[mid]) {
        return Search_Number( arr, L, R, mid+1, high)
    } else if (L == arr[mid]) {
        if (arr[mid] == arr[mid - 1]) {
            return Search_Number( arr, L, R, low, mid)
        } else {
            return mid
        }
    }
}


function Search_Number2(arr, L, R, low, high) {
    // console.log( arr, L, R, low, high)
    if (low > high) {
        return high
    }
    let mid = low + Math.floor((high - low) / 2)
    if (R < arr[mid]) {
        return Search_Number2( arr, L, R, low, mid-1)
    } else if (R > arr[mid]) {
        return Search_Number2( arr, L, R, mid+1, high)
    } else if (R == arr[mid]) {
        if (arr[mid] == arr[mid + 1]) {
            return Search_Number2( arr, L, R, mid+1, high)
        } else {
            return mid
        }
    }
}

if (process.env.USERNAME === 'DELL') {
    runProgram(`5
    10 1 10 3 4
    4
    1 10
    2 9
    3 4
    2 2
    `)
} else {
    process.stdin.resume()
    process.stdin.setEncoding('ascii')
    let read = ''
    process.stdin.on('data', function (input) {
        read += input
    })
    process.stdin.on('end', function () {
        read = read.replace(/\n$/, '')
        read = read.replace(/\n$/, '')
        runProgram(read)
    })
    process.on('SIGINT', function () {
        read = read.replace(/\n$/, '')
        runProgram(read)
        process.exit(0)
    })
}