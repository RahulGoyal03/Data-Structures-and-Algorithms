function runProgram(input) {
    //Enter the code here
    input = input.trim().split("\n")
    var testCases = +input[0]
    var line = 1;
    for (var i = 0; i < testCases; i++) {
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        console.log(StockBroker(n, arr))
    }
}

function StockBroker(n, arr) {

    var minprice = Infinity
    var maxprofit = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minprice)
            minprice = arr[i];
        else if (arr[i] - minprice > maxprofit)
            maxprofit = arr[i] - minprice;
    }
    return maxprofit;
}





if (process.env.USERNAME === 'DELL') {
    runProgram(`2
    6
    7 1 5 3 6 4
    4
    4 3 2 1
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