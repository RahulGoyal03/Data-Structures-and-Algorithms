function runProgram(input) {
    //Enter code here
    input = input.split("\n")
    var size = +input[0]
    var arr = input[1].trim().split(" ").map(Number)

    kingTaxCollection(size, arr)
}

function kingTaxCollection(size, arr) {
    var arr1 = arr.sort((a, b) => a - b);
    var sum = 0;
    //  console.log(arr)
    var left = Math.floor(arr1.length / 2)
    var right = arr1.length
    while (left < right) {
        sum += arr1[left]
        left++
    }
    console.log(sum)
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`2
    1 3 1 2`);
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