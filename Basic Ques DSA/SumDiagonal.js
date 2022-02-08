function sumDiagonal(arr, N, M) {
    var sum = 0
    var sum1 = 0;
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < M; j++) {
            if (i == j) {
                sum += arr[i][j]
            }
            if (j == M - i - 1) {
                sum1 += arr[i][j]
            }
        }
    }
    console.log(sum, sum1)
}

function runProgram(input) {

    input = input.trim().split("\n")
    var testCases = +input[0]
    var line = 1;

    for (var j = 0; j < testCases; j++) {
        var [N, M] = input[line++].trim().split(" ").map(Number)
        var arr = []
        for (var i = 0; i < N; i++) {
            arr.push(input[line++].trim().split(" ").map(Number))
        }
        sumDiagonal(arr, N, M)
    }

}
if (process.env.USERNAME === "Girraj Goyal") {
    runProgram(`2
    2 3
    1 2 3
    4 5 6
    2 2
    1 2
    3 4`);
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