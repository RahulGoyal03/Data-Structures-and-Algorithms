function runProgram(input) {
    //Enter code here
    input = input.split("\n");
    var size = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    removeToSort(size, arr)
}

function removeToSort(size, arr) {
    var out = "";
    for (var i = 0; i < size; i++) {
        arr[i];
        for (var j = 0; j < size; j++) {
            if (arr[i] <= arr[j]) {
                out += arr[i] + " "
                break;
            }
        }
    }
    console.log(out)
}

if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`10
    1 2 4 3 5 7 8 6 9 10`);
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