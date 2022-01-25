function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testcase = +input[0]
    var line = 1;

    for (var i = 0; i < testcase; i++) {
        var s = input[line++].trim()
            // console.log(s)
        againAClasicalProblem(s)
    }
}

function againAClasicalProblem(s) {
    // console.log(s)

    const openers = ['(', '{', '['];
    const closers = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const bracket_stack = [];

    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (openers.includes(c)) {
            bracket_stack.push(c);
        } else if (closers[c]) {
            if (bracket_stack.length == 0) {
                console.log("not balanced")
                return;
            }

            if (bracket_stack.pop() !== closers[c]) {
                console.log("not balanced")
                return;
            }
        }
    }

    if (bracket_stack.length > 0) {
        console.log("not balanced")
        return;
    }
    console.log("balanced")
    return;
}
// console.log(againAClasicalProblem())
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
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