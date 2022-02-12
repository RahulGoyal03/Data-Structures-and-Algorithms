function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  ArrayToString(n, arr);
}
function ArrayToString(n, arr) {
  out = "";
  for (var i = 0; i < n; i++) {
    if (arr[i] < 0) {
      out += 0;
    } else {
      out += arr[i];
    }
  }
  console.log(out);
}

if (process.env.USERNAME === "DELL") {
  runProgram(`5
    2 -4 6 8 -9`);
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
