function runProgram(input) {
     //Enter code here
    var input = input.trim().split("\n")
    var [N, Q] = input[0].trim().split(" ").map(Number)

    var arr = input[1].trim().split(" ").map(Number).sort((a, b) => a - b)
    var line = 2;
    for (var i = 0; i < Q; i++) {
        var key = +input[line++].trim()
        discoverNumber(arr, N, key)
    }
}

function discoverNumber(arr, N, target) {

    let start = 0;
    let end = N - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (target < arr[mid]) {
            end = mid - 1;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            console.log("YES")
            return;
        }
    }
    console.log("NO")
    return;

}

if (process.env.USERNAME == "DELL") {
    runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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
