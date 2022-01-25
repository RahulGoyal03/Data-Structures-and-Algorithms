function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testCases = +input[0]
    var line = 1;

    for (var i = 0; i < testCases; i++) {
        var [size, k] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)
        differenceOfK(size, k, arr)
    }

    function differenceOfK(size, k, arr) {
        // console.log(size, k, arr)
        var left = 0;
        var right = 0;
        while (left < size && right < size) {
            var sum = 0;
            sum = arr[right] - arr[left]
                // console.log(sum)

            if (sum == k) {
                console.log("Yes")
                return
            } else if (sum < k) {
                right++
            } else {
                left++
            }
        }
        console.log("No")
        return
    }

}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`2
    4 5
    -8 -5 -3 0
    5 6
    -7 -4 -3 6 7
    `);
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
            