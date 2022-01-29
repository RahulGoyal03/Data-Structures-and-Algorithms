function runProgram(input) {
    input = input.trim().split("\n");
    let testcase = +input[0];
    let e = 1;
    let m = []
    for (let i = 0; i < testcase; i++) {
        let [op, num] = input[e++].trim().split(" ")
        num = +num;
        m.push([op, num])
    }
    minStack(m, testcase)

}

function minStack(m, testcase) {
    console.log(m)

    function getMin(s) {

        var min = 999999999;
        for (var i = 0; i < s.length; i++) {
            if (min > s[i]) {
                min = s[i]
            }
        }
        return min;
    }


    let s = [];
    for (var i = 0; i < testcase; i++) {
        if (m[i][0] == 'push') {
            s.push(m[i][1]);
        }
        if (m[i][0] == 'pop' && s.length != 0) {
            s.pop();
        }
        if (m[i][0] == 'getMin' && s.length != 0) {
            console.log(getMin(s))
        }

    }
    //console.log();
}



if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`8
    push 5
    push 3
    push 1
    getMin
    pop
    getMin
    pop
    getMin`);
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