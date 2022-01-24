function runProgram(input) {
    input = input.trim().split('\n')
    let [N, key] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number).sort((a, b) => a - b)

    let low = 0
    let high = N - 1
        // console.log(arr)
    // console.log(lowerBound(arr, low, high, key))
    // console.log(lowerBound2(arr, low, high, key))
   var ans1 = (lowerBound(arr, low, high, key))
   var ans2 = (lowerBound2(arr, low, high, key))
   console.log(ans2-ans1 +1)
}


function lowerBound(arr, low, high, key) {
    if (low > high) {
        return -1
    }
    let mid = low + Math.floor((high - low) / 2)
    if (key < arr[mid]) {
        return lowerBound(arr, low, mid - 1, key)
    } else if (key > arr[mid]) {
        return lowerBound(arr, mid + 1, high, key)
    } else if (key == arr[mid]) {
        if (arr[mid] == arr[mid - 1]) {
            return lowerBound(arr, low, mid, key)
        } else {
           return mid
        }
    }
}
function lowerBound2(arr, low, high, key) {
    if (low > high) {
        return -1
    }
    let mid = low + Math.floor((high - low) / 2)
    if (key < arr[mid]) {
        return lowerBound2(arr, low, mid - 1, key)
    } else if (key > arr[mid]) {
        return lowerBound2(arr, mid + 1, high, key)
    } else if (key == arr[mid]) {
        if (arr[mid] == arr[mid + 1]) {
            return lowerBound2(arr, mid+1, high, key)
        } else {
           return mid
        }
    }
}

//__________Without Recursion_____________//

// function runProgram(input){
//     let input_arr = input.trim().split("\n")
//     let [_, K] = input_arr[0].trim().split(" ").map(Number)
//     let array = input_arr[1].trim().split(" ").map(Number)

//     let low = 0;
//     let high = array.length - 1
//     let upper;
//     while(low <= high){
//         let mid = Math.floor(low + ((high - low) / 2))
//         if(array[mid] == K){
//             upper = mid
//             low = mid + 1
//         }
//         else if(K < array[mid]){
//             high = mid - 1
//         }
//         else{
//             low = mid + 1
//         }
//     }

//     low = 0
//     high = array.length - 1
//     let lower;
//     while(low <= high){
//         let mid = Math.floor(low + ((high - low) / 2))
//         if(array[mid] == K){
//             lower = mid
//             high = mid - 1
//         }
//         else if(K < array[mid]){
//             high = mid - 1
//         }
//         else{
//             low = mid + 1
//         }
//     }

//     if(upper !== undefined && lower !== undefined){
//         let ans = upper - lower + 1
//         console.log(ans)
//     }
//     else{
//         console.log(-1)
//     }
// }



if (process.env.USERNAME == "DELL") {
    runProgram(`10 7
    2 5 7 7 7 10 11 15 18 20 22`);
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