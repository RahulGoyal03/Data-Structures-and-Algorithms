let DrStaibger = (str, index, temp) => {
        let n = str.length;

        if (index == n) {
            return;
        }

        let n1 = 0;
        let out = ""
            // console.log(temp)
        while (temp.length != n1) {
            if (temp[n1] == 1 && temp[n1 + 1] == 0) {
                out += (temp[n1] + temp[n1 + 1] + " ");
                n1++;
                n1++;
                break
            } else {
                out += temp[n1] + " ";
                n1++;
            }

        }
        console.log(out);

        for (let i = index + 1; i < n; i++) {
            temp += str[i];
            DrStaibger(str, i, temp);
            temp = temp.substring(0, temp.length - 1);
        }
    }
    // 





function runProgram(input) {
    let num = input.trim().split(" ").map(Number);

    let num1 = num[0]
    let n = 1;
    str = ""
    if (num1 == 1) {
        console.log("")
        console.log(1)
    } else if (num1 > 1) {
        while (n <= num1) {
            str += n;
            n++;

        }
        DrStaibger(str, -1, "");
    } else {
        DrStaibger(1, -1, "");
    }

    // console.log(str)

}

if (process.env.USERNAME === 'Girraj Goyal') {
    runProgram(`1`);
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