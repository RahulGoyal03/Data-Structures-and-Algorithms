function runProgram(input) {
    var nums = input.split(" ");
    var n = nums[0];
    var k = nums[1];
    console.log(TheFamousSum(DigitSum(n)*k));
    
} 
function TheFamousSum(x) {
    if(x < 10)
        return x;
    return TheFamousSum(DigitSum(x));
}
function DigitSum(x) {
    var str = x.toString();
    var sum = 0;
    for(var i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}

  




if (process.env.USERNAME === "Girraj Goyal") {
  runProgram(`148 3`);
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