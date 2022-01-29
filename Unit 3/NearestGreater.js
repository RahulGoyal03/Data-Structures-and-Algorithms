function runProgram(input) {
    input = input.trim().split("\n");
    var num = +input[0]
    var line = 1

    for (var i = 0; i < num; i++) {
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number);

        // console.log(n,arr)
        // console.log(left(arr))   
        // console.log(right(arr))
        console.log(getAnswer(left(arr), right(arr)))
    }


}

function left(arr) {
    class Stack {
        constructor() {
            this.stack = [];
        }

        isEmpty() {
            return this.stack.length == 0;
        }

        push(num) {
            this.stack.push(num);
        }

        pop() {
            if (this.isEmpty()) {}
            return this.stack.pop();
        }

        peek() {
            if (this.isEmpty()) {
                return null;
            }
            return this.stack[this.stack.length - 1];
        }
    }

    var stack = new Stack();
    result = [];

    for (let i = 0; i < arr.length; i++) {
        if (stack.isEmpty()) {
            result.push(-1);
            stack.push(arr[i]);
        } else if (!stack.isEmpty()) {
            while (!stack.isEmpty() && arr[i] > stack.peek()) {
                stack.pop();
            }
            if (stack.isEmpty()) {
                result.push(-1);
            } else {
                result.push(stack.peek());
            }
            stack.push(arr[i]);
        }

    }


    return ((result).join(""));
}

function right(arr) {
    class Stack {
        constructor() {
            this.stack = [];
        }

        isEmpty() {
            return this.stack.length == 0;
        }

        push(num) {
            this.stack.push(num);
        }

        pop() {
            if (this.isEmpty()) {}
            return this.stack.pop();
        }

        peek() {
            if (this.isEmpty()) {
                return null;
            }
            return this.stack[this.stack.length - 1];
        }
    }

    var stack = new Stack();
    result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (stack.isEmpty()) {
            result.push(-1);
            stack.push(arr[i]);
        } else if (!stack.isEmpty()) {
            while (!stack.isEmpty() && arr[i] > stack.peek()) {
                stack.pop();
            }
            if (stack.isEmpty()) {
                result.push(-1);
            } else {
                result.push(stack.peek());
            }
            stack.push(arr[i]);
        }

    }


    return ((result).join(""));
}

function getAnswer(left, right) {
    //   console.log(left,right)

    var ans = [];
    for (var i = 0; i < left.length; i++) {
        if (left[i] == -1 && right[i] == -1) {
            ans[i] = -1;
        } else if (left[i] == -1) {
            ans[i] = right[i];
        } else if (right[i] == -1) {
            ans[i] = left[i];
        } else {
            var temp1 = Math.abs(i - left[i]);
            var temp2 = Math.abs(i - right[i]);
            ans[i] = temp1 > temp2 ? right[i] : left[i];
        }
    }
    return ans.join(" ");
}




if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`5 3
    3 2 2 2 3`);
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