function runProgram(input) {


    input = input.trim().split("\n")
    var [N, target] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number).sort((a, b) => a - b)

    console.log(BinarySearch(N, target, arr))
}

function BinarySearch(N, target, arr) {
    let start = 0;
    let end = N - 1;

    while (start <= end) {
        let mid = start + (end - start) / 2;
        if (target < arr[mid]) {
            end = mid - 1;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            return 1;
        }
    }
    return -1;
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