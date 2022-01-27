function runProgram(input) {
    //Enter code here
    var str = input.trim()
    console.log(lengthAndRecursion(str))
}

function lengthAndRecursion(str) {

    if (str == "")
        return 0;
    else
        return lengthAndRecursion(str.substring(1)) + 1;
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`masaischool`);
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