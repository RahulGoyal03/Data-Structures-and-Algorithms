function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  //   console.log(input);
  var [row, col] = input[0].trim().split(" ").map(Number);
  var line = 1;
  var mat = [];
  for (var i = 1; i <= row; i++) {
    var arr = input[line++].trim().split(" ").map(Number);
    mat.push(arr);
  }
  flipEvenRow(row,col,mat);
}
function flipEvenRow(row,col,mat){
    // console.log(mat.length)
    for(let i = 0; i < mat.length; i++){
        if(i % 2 != 0){
           console.log(mat[i].reverse().join(" "))
        }else{
            console.log(mat[i].join(" "))
        }
    }
}

if (process.env.USERNAME === "DELL") {
  runProgram(`4 2
    1 2
    3 4
    5 6
    7 8
    `);
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
