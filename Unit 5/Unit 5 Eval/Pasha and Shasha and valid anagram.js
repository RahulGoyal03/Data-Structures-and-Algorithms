function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    //  var n = +input[line++]
    var str1 = input[line++].trim().split("").map(String).sort();
    var str2 = input[line++].trim().split("").map(String).sort();
   VaildAnagram(str1, str2);
  }
}
function VaildAnagram(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;
    if (n1 != n2){
        console.log("False")
        return;
    }
    for (var i = 0; i < n1; i++){
        if (str1[i] != str2[i]){
            console.log("False")
            return 
        }
    }
    console.log("True")
    return 
//   console.log(out)
}

if (process.env.USERNAME === "DELL") {
  runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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
