function runProgram(input) {
    //Enter code here
    input = input.split("\n");
    var testCases = +input[0]

    var line = 1;

    for (var i = 0; i < testCases; i++) {
        var [size, k, x] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(' ').map(Number)
        Xsubarrays(size, k, x, arr)
    }
}

function Xsubarrays(size, k, x, arr) {

    var out = [];
    var count = 0;
    // for (var i = 0; i < x; i++) {
    //     out.push(arr[i]);
    // }
    for (var i = x; i < arr.length; i++) {
        out.push(arr[i])
    }
    console.log(out)
    for (var i = 0; i < out.length; i++) {

    }

    // if (out > count) {
    //     // console.log(out)
    //     count = out;
    // }


    // function check(arr, start, end, x) {
    //     for (i = start; i <= end; i++) {
    //         if (arr[i] > x) return false;
    //     }

    //     return true;
    // }

    // //here to write code    
    // var left = 0;
    // var right = x - 1;
    // var count = 0;
    // while (left < arr.length && right < arr.length) {
    //     if (check(arr, left, right, k)) { count++; }
    //     left++;
    //     right++;
    // }
    // console.log(count)
    // return count;
}






if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`1
    5 3 2
    1 3 2 5 1`);
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