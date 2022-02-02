function runProgram(input) {
    let input_arr = input.trim().split("\n")
    let array = input_arr[1].trim().split(" ").map(Number)
    let to_sum = Number(input_arr[2])

    let subset_array = [0]
    let new_size = 1
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < new_size; j++) {
            if (subset_array[j] + array[i] == to_sum) {
                console.log("yes")
                return
            } else {
                subset_array.push(subset_array[j] + array[i])
            }
        }
        new_size = subset_array.length
    }

    console.log("no")
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