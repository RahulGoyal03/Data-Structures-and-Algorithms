function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var size = +input[0];
    var arr = input[1].trim().split(" ").map(Number)
    ques1(size, arr)

}

function ques1(size, arr) {
    // console.log(size, arr)

    var stack = []
    var ans = []
    count = 0;
    for (var i = 0; i < size; i++) {
        while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
            stack.pop()
        }
        if (stack.length == 0) {
            count++
            ans[i] = -1
        } else {
            ans[i] = stack[stack.length - 1]

        }
        stack.push(arr[i])
    }
    console.log(count)
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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