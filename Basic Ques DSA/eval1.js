function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testCases = +input[0]
    var line = 1;
    for (var i = 0; i < testCases; i++) {
        var [size] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)
        var [k] = input[line++].trim().split(" ").map(Number)
        arr.sort(function(a, b) {
            return a - b;
        })
        eval1(size, arr, k)
    }

}

function eval1(size, arr, k) {
    var left = 0;
    var right = size - 1;
    var sum = 0;
    var max = 0;
    console.log(arr)

    while (left < right) {
        sum = arr[left] + arr[right]

        if (sum < k && sum > max) {
            max = sum;

            left++
        } else {
            right--
        }
    }
    if (max > 0) {
        console.log(max)
    } else {
        console.log("-1")
    }





}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    5 4 20
    15`);
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