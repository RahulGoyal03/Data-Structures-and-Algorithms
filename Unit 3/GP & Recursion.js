function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var [n, r] = input[0].trim().split(" ").map(Number)
    console.log(gpAndRecursion(n, r).toFixed(4))
}

function gpAndRecursion(n, r) {
    if (n == 0) {
        return 1;

    } else {
        var ans = 1 / Math.pow(r, n) + gpAndRecursion(n - 1, r);
    }
    return ans;
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`3 5`);
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