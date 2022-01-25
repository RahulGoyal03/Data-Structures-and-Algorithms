function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testCases = +input[0]
    var line = 1;

    for (var i = 0; i < testCases; i++) {
        var [size] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)
        AllTwice(size, arr)
    }
}

function AllTwice(size, arr) {
    var unique = {}

    for (var i = 0; i < arr.length; i++) {
        var char = arr[i]

        if (unique[char] === undefined) {
            unique[char] = 1;

        } else {
            unique[char] = unique[char] + 1;
        }
    }
    // console.log(unique)
    out = ""
    for (key in unique) {
        if (unique[key] == 1) {
            out += key
        }

    }
    console.log(out)
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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