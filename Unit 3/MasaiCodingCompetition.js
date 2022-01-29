function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n");
    let testcase = +input[0];
    let e = 1;
    let arr = []
    for (let i = 0; i < testcase; i++) {
        let [op, num1, num2] = input[e++].trim().split(" ")
        num1 = +num1;
        num2 = +num2;
        arr.push([op, num1, num2])
    }
    MasaiCodingCompetition(arr, testcase)
}

function MasaiCodingCompetition(arr, testcase) {
    // console.log(arr)

    var master_queue = []
    var queue1 = []
    var queue2 = []
    var queue3 = []
    var queue4 = []
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    // console.log(testcase)

    for (var i = 0; i < testcase; i++) {
        if (arr[i][0] == "E") {
            if (arr[i][1] == 1) {
                if ((master_queue.length == 0) || !(master_queue.includes(1))) {
                    master_queue.push(arr[i][1])

                }
                queue1.push(arr[i][2])
            }
            if (arr[i][1] == 2) {
                if ((master_queue.length == 0) || !(master_queue.includes(2))) {
                    master_queue.push(arr[i][1])

                }
                queue2.push(arr[i][2])
            }
            if (arr[i][1] == 3) {
                if ((master_queue.length == 0) || !(master_queue.includes(3))) {
                    // console.log(!(master_queue.includes(3)))
                    master_queue.push(arr[i][1])

                }
                queue3.push(arr[i][2])
            }
            if (arr[i][1] == 4) {
                if ((master_queue.length == 0) || !(master_queue.includes(4))) {

                    master_queue.push(arr[i][1])

                }
                queue4.push(arr[i][2])
            }
        } else {
            if (master_queue[0] == 1) {
                console.log(1 + " " + queue1[0]);
                queue1.shift();
                if (queue1.length == 0) { master_queue.shift(); }
            } else if (master_queue[0] == 2) {
                console.log(2 + " " + queue2[0]);
                queue2.shift();
                if (queue2.length == 0) { master_queue.shift(); }
            } else if (master_queue[0] == 3) {
                console.log(3 + " " + queue3[0]);
                queue3.shift();
                if (queue3.length == 0) { master_queue.shift(); }
            } else if (master_queue[0] == 1) {
                console.log(4 + " " + queue4[0]);
                queue4.shift();
                if (queue4.length == 0) { master_queue.shift(); }
            }
        }

    }
    // console.log(master_queue)
    // console.log(queue3)


}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`100
    E 3 1
    D
    E 1 1
    D
    E 1 1
    E 3 1
    E 1 2
    E 1 3
    D
    D
    D
    E 1 1
    E 3 2
    D
    E 3 1
    E 3 3
    D
    E 2 1
    D
    E 4 1
    D
    E 4 2
    E 3 1
    E 4 3
    E 1 2
    E 3 2
    E 2 2
    E 3 3
    D
    E 4 4
    E 2 3
    E 1 1
    E 3 4
    E 3 5
    E 1 3
    D
    D
    E 4 5
    D
    E 4 6
    D
    D
    D
    E 3 6
    D
    D
    D
    D
    D
    E 1 1
    E 3 7
    E 2 1
    D
    E 2 2
    D
    E 2 3
    D
    E 2 4
    E 1 2
    E 3 1
    D
    D
    D
    E 2 5
    E 1 3
    E 4 1
    D
    E 3 2
    E 4 2
    E 2 6
    D
    D
    D
    D
    D
    E 1 1
    D
    E 2 7
    D
    D
    E 4 3
    D
    E 3 1
    D
    E 3 2
    D
    D
    D
    E 3 3
    D
    D
    E 2 1
    E 2 2
    E 4 1
    E 4 4
    D
    D
    E 4 2
    E 1 1
    D`);
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