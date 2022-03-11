function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  //    console.log(input)
  var testCases = input[0];
  var line = 1;
  for (var i = 0; i < testCases; i++) {
      var[n,k] = input[line++].trim().split(" ").map(Number)
      var arr = input[line++].trim().split(" ").map(Number)
      firstNegativeNumber(n,k,arr)
  }
}

function firstNegativeNumber(n,k,arr){
    for(var i = 0; i < n; i++){
        
    }
}

if (process.env.USERNAME === "DELL") {
  runProgram(`2
    5 2
    -8 2 3 -6 10
    8 3
    12 -1 -7 8 -15 30 16 28`);
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
