function runProgram(input) {
    input = input.trim().split('\n')
    let [N, key] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)

    let low = 0
    let high = N - 1
    console.log(upperBound(arr, low, high, key))
}


function upperBound(arr, low, high, key) {

    let mid = low + Math.floor((high - low) / 2)

    if (key < arr[mid]) {
        if (key < arr[mid - 1]) {
            return upperBound(arr, low, mid - 1, key)
        } else {
            return mid;
        }
    } else if (key > arr[mid]) {
        return upperBound(arr, mid + 1, high, key)
    } else if (key == arr[mid]) {
        if (key < arr[mid + 1]) {
            return (mid + 1);
        }
    }
}



if (process.env.USERNAME == "DELL") {
    runProgram(`10 4
0 2 4 4 5 5 7 7 9 10`);
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