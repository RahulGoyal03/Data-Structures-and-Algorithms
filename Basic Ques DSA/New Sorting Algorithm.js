function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var [size, k] = input[0].split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    newsorting(size, k, arr)

}

function newsorting(size, k, arr) {
    console.log(size, k, arr)
    var out = [];
    for (var i = 0; i < arr.length - 1; i++) {
        // var min = i
        for (var j = 0; j < size - i - 1; j++) {
            if (arr[j] % k > arr[j + 1] % k) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;

            }

        }

    }
    console.log(arr)

}

if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`5 6
    12 18 17 65 46`);
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