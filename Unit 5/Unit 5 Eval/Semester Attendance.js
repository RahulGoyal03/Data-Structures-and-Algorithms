function runProgram(input) {
  //Enter the code here
  input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var n = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);

    console.log("Case " + (i + 1) + ": " + SemesterAttendance(n, arr));
  }
}
function SemesterAttendance(n, arr) {
  let first_prof = arr[0];
  let attendance = 0;
  let attendance_score;

  for (var i = 1; i < n; i++) {
    if (first_prof > attendance) {
      attendance_score = first_prof;
    } else {
      attendance_score = attendance;
    }

    first_prof = attendance + arr[i];
    // console.log(attendance,arr[i],first_prof)
    attendance = attendance_score;
  }
  //   var num = 0;
  if (first_prof > attendance) {
    // num + 1;
    return first_prof;
    // return "Case" + num + ":" + first_prof;
  } else {
    // num++;
    return attendance;
    // return "Case" + num + ":" + attendance;
  }
}

if (process.env.USERNAME === "DELL") {
  runProgram(`2
    5
    1 2 3 4 5
    1
    10`);
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
