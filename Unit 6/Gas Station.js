function runProgram(input) {
  //Enter the code here
  var input = input.trim().split("\n");
  //    console.log(input)
  var n = +input[0];
  var gas = input[1].trim().split(" ").map(Number);
  var cost = input[2].trim().split(" ").map(Number);
  GasStation(n, gas,cost);
}
function GasStation(n,gas,cost){
    // console.log(n,gas,cost)
    let startStation = 0
    let totalFuelAvailable = 0

    let currentFuelavailable = 0
    for(var i = 0; i < n; i++){
        let netFuel = gas[i] - cost[i]
        currentFuelavailable += netFuel

        if(currentFuelavailable < 0){
            startStation = i + 1;
            currentFuelavailable = 0
        }
        totalFuelAvailable += netFuel 
    }
    console.log(totalFuelAvailable >=0 ? startStation : -1)
}

if (process.env.USERNAME === "DELL") {
  runProgram(`5
    1 2 3 4 5
    3 4 5 1 2`);
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
