function runProgram(input) {
    //Enter the code here
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    console.log(ElementInTheMiddle(n, arr));
  }
  function ElementInTheMiddle(n, arr) {
    for (let i = 1; i < arr.length; i++) {
  
      let head = arr[i];
  
      let left = i - 1;
      let right = i + 1;
  
      while (left >= 0 && arr[left] <= head) {
  
          left--;
      }
  
      while (right <= arr.length && arr[right] >= head) {
          right++;
      }
  
      if (left == -1 && right == arr.length) {
          return arr[i];
  
      }
  
  }
  return -1
    
  }
  
  if (process.env.USERNAME === "DELL") {
    runProgram(`8
      5 6 4 3 5 7 7 8`);
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
  