function runProgram(input) {
    input = input.trim().split("\n")
    var [n, sum] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    console.log(subsetSum(arr, n, 0, 0, 0))
}

function subsetSum(arr, n, i, sum, count) {
    if (i == n) {
        if (sum == 0) {
            count++;
        }
        return count;
    }
    count = subsetSum(arr, n, i + 1, sum - arr[i], count);
    count = subsetSum(arr, n, i + 1, sum, count);
    return count;
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function(input) {
    read += input;
});
process.stdin.on("end", function() {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function() {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});