function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var n = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    RecordBreaker(n, arr);
  }
}
function RecordBreaker(n,arr){
    // console.log(n,arr)
    first_score = arr[0]
    count = 0
    count1 = 0
    less_score = arr[0]
    

    for(var i = 0; i < arr.length; i++){
        if(first_score<arr[i]){
            count++
            first_score = arr[i]
        } if(less_score>arr[i]){
            count1++
            less_score = arr[i]
        } 
    }
    console.log(count ,count1)

}

if (process.env.USERNAME === "DELL") {
  runProgram(`2
    9
    10 5 20 20 4 5 2 25 1
    10
    3 4 21 36 10 28 35 5 24 42`);
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
