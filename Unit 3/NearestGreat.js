function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testcase = +input[0]
    var line = 1;
    for (var i = 0; i < testcase; i++) {
        var N = input[1].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)

        nearestGreat(arr, N, testcase)
    }

}

function nearestGreat(arr, N, testcase) {
    console.log(arr, N, testcase)
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`5 3
    3 2 2 2 3`);
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