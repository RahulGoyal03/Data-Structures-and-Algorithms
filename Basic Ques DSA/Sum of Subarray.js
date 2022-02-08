function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testCases = +input[0]
    var line = 1;

    for (var i = 0; i < testCases; i++) {
        var [n, sum] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)
        findSubarraySum(arr, n, sum)
    }
}

function findSubarraySum(arr, n, sum) {

    // HashMap to store number of subarrays
    // starting from index zero having
    // particular value of sum.
    let prevSum = new Map();
    let res = 0;

    // Sum of elements so far.
    let currsum = 0;
    for (let i = 0; i < n; i++) {

        // Add current element to sum so far.
        currsum += arr[i];

        // If currsum is equal to desired sum,
        // then a new subarray is found. So
        // increase count of subarrays.
        if (currsum == sum)
            res++;

        // currsum exceeds given sum by currsum
        //  - sum. Find number of subarrays having
        // this sum and exclude those subarrays
        // from currsum by increasing count by
        // same amount.
        if (prevSum.has(currsum - sum))
            res += prevSum.get(currsum - sum);

        // Add currsum value to count of
        // different values of sum.
        let count = prevSum.get(currsum);
        if (count == null)
            prevSum.set(currsum, 1);
        else
            prevSum.set(currsum, count + 1);
    }
    console.log(res)
    return res;

}

if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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