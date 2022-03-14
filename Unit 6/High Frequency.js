function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  var testCases = +input[0].trim();
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var [n] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    highFrequency(n, arr);
  }
}
function highFrequency(n,arr){
    // console.log(n,arr)
    var obj = {}
    for(var i = 0; i < arr.length; i++){
        var num = arr[i]
        if(obj[num] === undefined){
            obj[num] = 1
        }else{
            obj[num] = obj[num] + 1
        }
    }
    // console.log(obj)
    var max = 0
    for( key in obj){
        if(obj[key] > max){
            max = obj[key]
        }
    }
    // console.log(max)
    for( key in obj){
        if(obj[key] == max){
            // max = obj[key]
            console.log(key)
            return
        }
    }


}

if (process.env.USERNAME === "DELL") {
  runProgram(`2
    6
    1 4 4 4 5 3
    11
    1 2 3 4 5 4 3 2 1 3 4`);
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
