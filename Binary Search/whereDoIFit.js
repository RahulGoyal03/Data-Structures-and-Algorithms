function runProgram(input) {
    input = input.trim().split('\n')
    var testcases = +input[0]
    
    var line =1
    for(var i = 0; i < testcases; i++){
    var key = +input[line++]
    var arr = input[line++].trim().split(' ').map(Number).sort((a, b) => a - b)
    // console.log(testcases,key,arr)
    let low = 0
    let high = arr.length - 1
        // console.log(arr)
    console.log(whereDoIFit(arr, low, high, key))
    }
    
    
}


function whereDoIFit(arr, low, high, key) {
    if (low > high) {
        if(arr[low-1] == undefined){
            return "Front" +" "+ arr[low]
        }
        else if(low==arr.length){
              return arr[low-1] +" "+ "Last"
        }else{
            return arr[low-1] +" "+ arr[low]
        }
        
    }
    let mid = low + Math.floor((high - low) / 2)
    if (key < arr[mid]) {
        return whereDoIFit(arr, low, mid - 1, key)
    } else if (key > arr[mid]) {
        return whereDoIFit(arr, mid + 1, high, key)
    } else if (key == arr[mid]) {
        if (arr[mid] == arr[mid - 1]) {
            return whereDoIFit(arr, low, mid, key)
        } else {
            return mid;
        }
    }
}
// console.log(process.env.USERNAME)

if (process.env.USERNAME == "DELL") {
    runProgram(`3
        3
        1 4 5 6 8 9
        5 
        1 2 6 7 8
        1
        2 3 4 5 6`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}