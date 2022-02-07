function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testCases = +input[0]
    var line = 1
    for (var i = 0; i < testCases; i++) {
        var [size] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)
        eval2(size, arr)
    }
}

function eval2(size, arr) {
    var stack = []
    var ans = []
    for (var i =size; i < size; i++) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop()
        }
        console.log(stack)
        if (stack.length != 0) {
            ans[i] = stack[stack.length - 1]

        } else {
            ans[i] = -1
        }
        stack.push(arr[i])
        console.log(stack)

    }

    console.log(ans)
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`1
    4
    1 3 2 4`);
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