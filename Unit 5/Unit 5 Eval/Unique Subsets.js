function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  var n = +input[0];
  //   var line = 1;
  var arr = input[1].trim().split(" ").map(Number);
  var k = +input[2];
  console.log(uniqueSubsets(arr, k));
}

function uniqueSubsets(arr, k) {

var obj ={}
for(var i = 0; i< arr.length; i++){
    var char = arr[i]
    if(obj[char] == undefined){
        obj[char] = 1
    }else{
        obj[char] = obj[char] + 1
    }
}
// console.log(obj)
for(key in obj){
    if(obj[key] >= k){
        return "True"
    }
}
return "False"







}

if (process.env.USERNAME === "DELL") {
  runProgram(`5
  29 25 19 28 25
  2`);
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
