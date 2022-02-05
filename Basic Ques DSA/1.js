function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testCases = +input[0];
    var line = 1;

    for (var i = 0; i < testCases; i++) {
        var [size, k] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)
        ques1(size, k, arr)
    }
}


function ques1(size, k, arr) {
    // console.log(size, k, arr)
    arr.sort(function(a, b) {
        return a - b;
    });
    console.log(arr)
    var left = 0;
    var right = size - 1
    

    for (var i = 0; i < arr.length; i++){
        var sum = 0;
        for(var j = i; j < i+2; j++){
            sum+= arr[i]+arr[j]
            if(sum == k){
                console.log("Yes")
                break;

            }
        }
        
    }

}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`2
    5 31
    10 13 12 17 21
    5 44
    10 11 13 17 21`);
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