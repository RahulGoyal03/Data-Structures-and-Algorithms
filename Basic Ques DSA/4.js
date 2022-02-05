function runProgram(input) {

    input = input.trim().split("\n")
    var [size, k] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number)
    ques1(size, k, arr)
}

function ques1(size, k, arr) {
    var count = 0;
    for (var i = 0; i < size; i++) {
        var sum = 0;
        for (var j = i; j < size; j++) {
            if (sum + arr[j] <= k) {
                sum = arr[j] + sum;

                count++
            } else {
                break;
            }

        }

    }
    console.log(count)
}

if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`4 2
    1 2 2 4`);
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