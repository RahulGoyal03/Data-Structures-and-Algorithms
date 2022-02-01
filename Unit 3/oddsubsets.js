function runProgram(input) {
    var input_arr = input.trim().split("\n")
    var array = input_arr[1].trim().split(" ").map(Number)
    var count = 0;

    function oddSubsets(array, index, out) {
        if (index == array.length) {
            var sum = out.reduce((acc, item) => acc + item, 0)
            if (sum % 2 != 0) {
                count++
            }
            return
        }
        out.push(array[index])
        oddSubsets(array, index + 1, out)
        out.pop()
        oddSubsets(array, index + 1, out)
    }
    oddSubsets(array, 0, [])
    console.log(count)
}


if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`3
    1 2 3`);
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