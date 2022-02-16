function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  DistinctAgain(n, arr);
}
function DistinctAgain(n, arr) {
  // console.log(arr)
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var char = arr[i];
    if (obj[char] == undefined) {
      obj[char] = 1;
    } else {
      obj[char] = obj[char] + 1;
    }
  }
//   console.log(obj);
  var sum = 0;
  for (key in obj) {
    sum += +key;
  }
  console.log(sum)
}
if (process.env.USERNAME === "DELL") {
  runProgram(`5
2 2 2 1 1`);
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
