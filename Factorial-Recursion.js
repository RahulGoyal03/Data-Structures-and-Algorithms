function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var N = +input[0]

    console.log(factorialRecursion(N))
}

function factorialRecursion(N) {
    if (N <= 1) // base case
        return 1;
    else
        return N * factorialRecursion(N - 1);
}

if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`5`);
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