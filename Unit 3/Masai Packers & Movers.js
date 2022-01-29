function runProgram(input) {
    //Enter code here
    var input_arr = input.trim().split("\n")
    var [to_transport, no_trucks] = input_arr[0].trim().split(" ").map(Number)
    var array = input_arr[1].trim().split(" ").map(Number)

    function no_ways(to_transport) {
        if (to_transport < 0) {
            return 0
        } else if (to_transport == 0) {
            return 1
        } else {
            return array.reduce((acc, item) => {
                return acc + no_ways(to_transport - item)
            }, 0)
        }
    }
    console.log(no_ways(to_transport))
}

if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`3 3
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