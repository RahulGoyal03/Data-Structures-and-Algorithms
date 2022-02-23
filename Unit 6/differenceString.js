function runProgram(input) {
  //Enter the code here
  var input = input.trim().split("\n");
  var str1 = input[0].trim();
  var str2 = input[1].trim();
  differenceString(str1, str2);
}
function differenceString(str1, str2) {
    // console.log(str1,str2)
  var out = "";
  for (var i = 0; i < str1.length; i++) {
    //   console.log(str1[i])
    if (str1[i] != str2[i]) {
      out += str1[i];
    }
  }
  console.log(out);
}

if (process.env.USERNAME === "DELL") {
  runProgram(`ABCX
    ABCD`);
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
