function runProgram(input) {
    let arr = input.trim().split("\n")
    arr.shift()
    let array = arr[0].trim().split(" ").map(Number)

    function BubbleSort(array, i, j) {
        if (i < array.length) {
            for (var k = j; k < array.length; k++) {
                if (array[i] > array[k]) {
                    var swap = array[i]
                    array[i] = array[k]
                    array[k] = swap
                }
            }
            BubbleSort(array, i + 1, j + 1)
        } else {
            console.log(array.join(" "))
            return
        }
    }

    BubbleSort(array, 0, 1)
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function(input) {
    read += input;
});
process.stdin.on("end", function() {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function() {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});