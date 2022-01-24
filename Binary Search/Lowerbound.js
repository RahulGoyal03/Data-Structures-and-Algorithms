function runProgram(input) {
    input = input.trim().split('\n')
    let [N, key] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number).sort((a, b) => a - b)

    let low = 0
    let high = N - 1
        // console.log(arr)
    console.log(lowerBound(arr, low, high, key))
}


function lowerBound(arr, low, high, key) {
    if (low > high) {
        return -1
    }
    let mid = low + Math.floor((high - low) / 2)
    if (key < arr[mid]) {
        return lowerBound(arr, low, mid - 1, key)
    } else if (key > arr[mid]) {
        return lowerBound(arr, mid + 1, high, key)
    } else if (key == arr[mid]) {
        if (arr[mid] == arr[mid - 1]) {
            return lowerBound(arr, low, mid, key)
        } else {
            return mid;
        }
    }
}

if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`5 0
    2 -2 0 3 4`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}