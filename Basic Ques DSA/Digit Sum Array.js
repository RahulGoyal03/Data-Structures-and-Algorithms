function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testCases = +input[0]
    var line = 1;
    for (var i = 0; i < testCases; i++) {
        var size = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        digitSumArray(size, arr)
    }
}

function digitSumArray(size, arr) {
    array = [];
    for (var i = 0; i < size; i++) {
        out = "";
        out += arr[i]
        out.split("")
        sum = 0;
        for (var j = 0; j < out.length; j++) {
            var a = parseInt(out[j])

            sum += a

        }
        array.push(sum)

    }
    console.log(array.join(" "))


}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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