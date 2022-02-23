function runProgram(input) {
  //Enter the code here
  var input = input.trim().split("\n");
  var n = +input[0];
  var arr = [];
  for (var i = 1; i <= n; i++) {
    var num = +input[i];
    arr.push(num);
  }
  arr.sort((a, b) => a - b);
  distributeMedicine(n, arr);
}
function distributeMedicine(n, arr) {
    // sum = 0
    var obj ={}
    for(var i = 0; i < arr.length; i++){
        var num = arr[i]
        if(obj[num] == undefined){
            obj[num] = 1
        }else{
            obj[num] = obj[num] + 1 
        }
    }
    // console.log(obj)
    sum=0
    for(key in obj){
        if(obj[key] > 1){
            sum+= obj[key] +1
        }else{
            sum+= obj[key]
        }
    }
    console.log(sum)
  
}
if (process.env.USERNAME === "DELL") {
  runProgram(`3
    1
    2
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
