function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  var n = +input[0];
  //   var line = 1;
  var bag = input[1].trim().split(" ").map(Number);
  var handBag = input[2].trim().split(" ").map(Number);
  MasaiAirline(n,bag,handBag)
}

function MasaiAirline(n,bag,handBag){
    for(var i = 0; i < n; i++){
        if((bag[i] <= 15) && (handBag[i] <= 7)){
            console.log("Boarding")
        }else{
            console.log("Stopped")
        } 
    }
}

if (process.env.USERNAME === "DELL") {
  runProgram(`4
    12 14 15 6
    8 5 7 4`);
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
