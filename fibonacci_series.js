function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]

    console.log(fibonacciSeries(n))
}

function fibonacciSeries(n) {
     if (n == 0)
        return 0;

    // Stop co
    if (n == 1 || n == 2)
        return 1;

    // Recursion function
    else
        return (fibonacciSeries(n - 1) + fibonacciSeries(n - 2));
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`4`);
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
