function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var over = +input[line++];
    var runs = input[line++].trim().split(" ").map(Number);
    runs.push(0);
    ManOfTheMatch(over, runs);
  }
}

function ManOfTheMatch(over, runs) {
  var virat = 0;
  var abd = 0;
  //swap after 6 ball and if the run is 1 or 3
}

if (process.env.USERNAME === "DELL") {
  runProgram(`3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
