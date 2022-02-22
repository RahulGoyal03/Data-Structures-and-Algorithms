function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  var testCases = input[0].trim();
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var n = input[line++].trim();
    var str = input[line++].trim();
    CipherString(n, str);
  }
}
function CipherString(n,str) {
    var strComp = '';
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        count = 1;
        if (str[i] == str[i + 1]) {
            
            while (str[i] == str[i + 1]) {
                i++;
                count++;
            }
            
        }
        strComp += str[i] + count;

    }

    console.log(strComp);
}

if (process.env.USERNAME === "DELL") {
  runProgram(`2
    6
    aabccc
    5
    aazaa`);
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
