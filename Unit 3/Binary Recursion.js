function runProgram(input) {
    input = input.trim().split("\n");
    let tests = +input.shift();
    let j = 0;
    for (let i = 0; i < tests; i++) {
        let num = +input[j++];
        console.log(binary(num))
    }
}

function binary(n) {
    if (n == 1) {
        return 1;
    } else if (n == 0) {
        return 0;
    } else {
        return binary(Math.floor(n / 2)) + "" + (n % 2) + ""
    }
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`5 
    3
    1
    1
    1
    1`);
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