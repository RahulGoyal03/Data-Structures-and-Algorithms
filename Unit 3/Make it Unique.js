function runProgram(input) {
    //Enter code here
    var str = input.trim()
    MakeItUnique(str)
}


function MakeItUnique(str) {
    var unique = {}

    for (var i = 0; i < str.length; i++) {
        var char = str[i]

        if (unique[char] === undefined) {
            unique[char] = 1;

        } else {
            unique[char] = unique[char] + 1;
        }
    }
    console.log(unique)
    out = ""
    for (key in unique) {

        out += key
    }
    console.log(out)
}


if (process.env.USERNAME == "Girraj Goyal") {
    runProgram(`my name is ankush`);
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