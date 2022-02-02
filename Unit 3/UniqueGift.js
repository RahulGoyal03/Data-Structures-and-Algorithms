function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testCases = +input[0]

    var line = 1
        // var arr = []

    for (var i = 0; i < testCases; i++) {
        str = input[line++].trim().split(" ")
            // arr.push(a)
        UniqueGift(str.toString(), testCases)
    }
}

function UniqueGift(str, testCases) {
    // console.log(str)
    var queue = []
    var array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var ans = "";
    for (var i = 0; i < str.length; i++) {
        queue.push(str[i])
        temp = str.charCodeAt(i) - 97;
        array[temp] = array[temp] + 1;

        while (queue.length != 0) {

            temp1 = queue.toString().charCodeAt(0) - 97;
            // console.log(temp1)
            if (array[temp1] > 1) {
                queue.shift()
            } else {
                ans = ans + queue[0]
                    // console.log(queue)
                break;
            }
        }
        if (queue.length == 0) {
            ans = ans + "#"
        }


    }
    console.log(ans)

}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`2
    abadbc
    abcabc`);
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