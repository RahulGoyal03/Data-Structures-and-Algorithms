function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testCases = +input[0]
    var line = 1;

    for (var i = 0; i < testCases; i++) {
        var [size] = input[line++].trim().split(" ").map(Number)
        var arr1 = input[line++].trim().split(" ").map(Number)
        var arr2 = input[line++].trim().split(" ").map(Number)
        TwoSortedArrays(size, arr1, arr2)
    }

}

function TwoSortedArrays(size, arr1, arr2) {
    var left = 0;
    var right = size - 1;
    var count = 0;

    while (left < arr1.length && right >= 0) {
        if (arr1[left] == arr2[right]) {
            count++
            left++
            right--
        } else if (arr1[left] < arr2[right]) {
            left++
        } else {
            right--
        }
    }
    console.log(count)
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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