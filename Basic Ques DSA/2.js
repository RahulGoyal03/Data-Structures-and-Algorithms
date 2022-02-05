function runProgram(input) {
    //Enter code here

    //Enter code here
    input = input.trim().split("\n")
    var testCases = +input[0];
    var line = 1;

    for (var i = 0; i < testCases; i++) {
        var [size] = input[line++].trim().split(" ").map(Number)
        var str = input[line++].trim().split(" ")
        ques1(size, str)
    }
}

function ques1(size, str) {
    // console.log(size, str)
    function countstr(str, word) {
        let a = str.split(" ")

        let count = 0;
        for (let i = 0; i < a.length; i++) {
            if (word == (a[i])) {
                count++
            }
            return count;

        }
        // let str = str;
        // let word = "wish"
        document.write(countstr(str, word));
    }
}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`2
    7
    wishash
    8
    wishwish`);
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