function find(st) {
    let str = ''
    for (var i = 0; i < st.length; i++) {
        str += st[i];
    }
    if (str.length === 0) {
        return "";
    }
    if (str.length === 1) {
        return str;
    }
    let result = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        const remaining = str.slice(0, i) + str.slice(i + 1);

        for (let j = 0; j < remaining.length; j++) {
            result.push(char + find(remaining)[j]);
        }
    }


    return result;
}



function runProgram(input) {
    let a = input.split('\n')
    for (var j = 1; j < a.length; j++) {
        str = a[j].trim().split(" ")
        let ans = find(str);

        for (var k = 0; k < ans.length; k++) {
            let out = ''
            for (var m = 0; m < ans[0].length; m++) {
                out += ans[k][m] + " "
            }
            console.log(out)

        }

    }


}

if (process.env.USERNAME === 'prajw') {
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