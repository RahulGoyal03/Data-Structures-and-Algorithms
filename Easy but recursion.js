function sumOfArr(arr, size) {
    if (size <= 0)
        return 0
    return (sumOfArr(arr, size - 1) + arr[size - 1]);
}

function runProgram(input) {
    input = input.split("\n")
    var test = +input[0]
    var line = 1
    for (var i = 0; i < test; i++) {
        var size = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        console.log(sumOfArr(arr, size))
    }
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`3
        5
        6 3 8 2 -4
        5
        -10 -7 10 2 -2
        5
        -4 -5 6 -3 9`);
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