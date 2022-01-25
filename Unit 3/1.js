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
    console.log(arr)

    var master_queue = []
    var queue1 = []
    var queue2 = []
    var queue3 = []
    var queue4 = []
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;

    for (var i = 0; i < testcase; i++) {
        if (arr[i][0] == "E") {



            master_queue.push(arr[i][1])


            if (arr[i][1] == 1) {
                queue1.push(arr[i][2])
                flag1 = true;
            } else if (arr[i][1] == 2) {
                queue2.push(arr[i][2])
                flag2 = true;
            } else if (arr[i][1] == 3) {
                queue3.push(arr[i][2])
                flag3 = true;
            } else if (arr[i][1] == 4) {
                queue4.push(arr[i][2])
                flag4 = true;
            }
            var team = master_queue.filter((v, i, a) => a.indexOf(v) === i);




        } else {

            var team = master_queue.filter((v, i, a) => a.indexOf(v) === i);
            console.log(team)
            if (team[0] == 1) {
                console.log(team[0], queue1[0]);
                queue1.shift();
                if (queue1.length == 0) { flag1 = false; }
            } else if (team[0] == 2) {
                console.log(team[0], queue2[0]);
                queue2.shift();
                if (queue2.length == 0) { flag2 = false; }
            } else if (team[0] == 3) {
                console.log(team[0], queue3[0]);
                queue3.shift();
                if (queue3.length == 0) { flag3 = false; }
            } else if (team[0] == 1) {
                console.log(team[0], queue4[0]);
                queue4.shift();
                if (queue4.length == 0) { flag4 = false; }
            }
            if (flag1 == false || flag2 == 0 || flag3 == false || flag4 == false) {
                team.shift()
                console.log("teams " + team)
            }
        }

    }

}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`11
    E 3 1
    D
    E 3 1
    E 3 2
    E 2 1
    D
    D
    E 1 1
    E 1 2
    E 4 1
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