function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
        // console.log(input)
    var [rows, cols] = input[0].trim().split(" ").map(Number)
    var line = 1;
    // console.log(rows, cols)
    var mat = []
    for (var i = 0; i < rows; i++) {
        var arr = input[line++].trim().split(" ").map(Number)
        mat.push(arr)

    }
    PrintMatrix(rows, cols, mat)
}

function PrintMatrix(rows, cols, mat) {
    // console.log(mat)
    for (var i = 0; i < rows; i++) {
        if (i % 2 == 0) {
            var out = "";
            for (var j = 0; j < cols; j++) {
                out += mat[i][j] + " "

            }
            console.log(out)

        }

    }

}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
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