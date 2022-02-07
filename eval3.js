function runProgram(input) {
    input = input.trim().split("\n")
    var testCases = +input[0]
    var line = 1
    for (var i = 0; i < testCases; i++) {
        var [N] = input[line++].trim().split(" ").map(Number)
        var arr1 = input[line++].trim().split(" ").map(Number)
        var [M] = input[line++].trim().split(" ").map(Number)
        var arr2 = input[line++].trim().split(" ").map(Number)

        arr1.sort(function(a, b) {
            return a - b;
        })
        arr2.sort(function(a, b) {
            return a - b;
        })
        eval3(N, arr1, arr2)
    }
}

function eval3(N, arr1, arr2) {
    var arr = []
    var obj = {}
    var ans = []

    for (var i = 0; i < arr1.length; i++) {
        arr.push(arr1[i])
    }
    for (var j = 0; j < arr2.length; j++) {
        arr.push(arr2[j])
    }
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i]
        if (obj[num] === undefined) {
            obj[num] = i
        } else {
            obj[num] = i + 1
        }
    }
    for (keys in obj) {
        ans.push(keys)
    }
    console.log(ans.join(" "))

}

if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`1
    4
    1 2 3 4
    5
    1 2 3 4 5`);
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