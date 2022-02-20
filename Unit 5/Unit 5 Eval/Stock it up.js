function runProgram(input) {
   //Enter the code here
   input = input.trim().split("\n");
  var n = +input[0];
  //   var line = 1;
  var stock = input[1].trim().split(" ").map(Number);
 StockItUp(n,stock)
}
function StockItUp(n,arr){
var total_sum=0;
    for(var i = 0; i < arr.length; i++){
        if( i==0 && arr[i] == 1){
            total_sum += 110*5
        } else if(i==1 && arr[i] == 1){
            total_sum += 120*2
        }else if(i==2 && arr[i] == 1){
            total_sum += 42*2
        }else if(i==3 && arr[i] == 1){
            total_sum += 53*3
        }else if(i==4 && arr[i] == 1){
            total_sum += 40*2
        }else if(i==5 && arr[i] == 1){
            total_sum += 32*5
        }else if(i==6 && arr[i] == 1){
            total_sum += 126*2
        }
    }
    console.log(total_sum*n)
}
if (process.env.USERNAME === 'DELL') {
    runProgram(`4
    0 1 1 1 0 0 1`)
} else {
    process.stdin.resume()
    process.stdin.setEncoding('ascii')
    let read = ''
    process.stdin.on('data', function(input) {
        read += input
    })
    process.stdin.on('end', function() {
        read = read.replace(/\n$/, '')
        read = read.replace(/\n$/, '')
        runProgram(read)
    })
    process.on('SIGINT', function() {
        read = read.replace(/\n$/, '')
        runProgram(read)
        process.exit(0)
    })
}