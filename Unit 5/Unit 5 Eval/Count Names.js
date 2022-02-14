function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  var n = +input[0];
  //   var line = 1;
  var arr = [];
  for (var i = 1; i < n + 1; i++) {
    var char = input[i].trim();
    arr.push(char);
  }
  //   arr.sort((a,b) => a - b)
  arr.sort();
  //   console.log(arr)
  CountNames(n, arr);
}
function CountNames(n, arr) {
  //   console.log(n,arr)
  obj = {};
  for (var i = 0; i < arr.length; i++) {
    var char = arr[i];
    if (obj[char] == undefined) {
      obj[char] = 1;
    } else {
      obj[char] = obj[char] + 1;
    }
  }
  //   console.log(obj)

  for (key in obj) {
    console.log(key + " " + obj[key]);
  }
}

if (process.env.USERNAME === "DELL") {
  runProgram(`4
    masai
    school
    masai
    rahul`);
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
