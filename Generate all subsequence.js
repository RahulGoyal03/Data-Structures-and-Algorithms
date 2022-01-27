function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var n = +input[0]
    var str = input[1].trim()
    printSubsequence(str, "")

}

function printSubsequence(input, output) {
    if (input.length == 0) {
        return;
    }

    console.log(output + input[0])
    printSubsequence(input.substring(1), output + input[0]);
    printSubsequence(input.substring(1), output);
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`4
    abcd`);
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