function runProgram(input) {
    //Enter code here
    input = input.split("\n")
    var size = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    sortWithIndex(size, arr)
}

function sortWithIndex(size, arr) {
    obj = {}
    for (var k = 0; k < arr.length; k++) {
        var num = arr[k];
        if (obj[num] == undefined) {
            obj[num] = k
        } else {
            delete obj.num
        }
    }

    console.log(obj)
        // console.log(Object.values(obj).join(" "))
    for (var i = 0; i < arr.length - 1; i++) {
        var min = i
        for (var j = i + 1; j < size; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        var temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp;

    }

    for (keys in obj) {
        for (var i = 0; i < arr.length; i++) {
            if (keys == arr[i]) {

            }
        }
    }
    console.log(arr)

}
if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`5
    4 5 5 7 1`);
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