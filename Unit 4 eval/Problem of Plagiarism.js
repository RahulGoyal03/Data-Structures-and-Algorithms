function runProgram(input) {
   //Enter the code here
   input = input.trim().split("\n")
   var N =  +input[0]
   var [L, R] = input[1].trim().split(" ").map(Number)
   let arr = []
   let count = 0
   let ans =[]
   var curr = 0
   for(var i = 1; i <= N; i++){
       arr.push(i)
   }
//    console.log(arr)
 ProblemofPlagiarism(ans,N,L,R,arr,count,curr)

 var rahul = DraculaReject(ans,L,R,curr)
     console.log(rahul)

}
function ProblemofPlagiarism(ans,N,L,R,arr,count,curr){
// console.log(ans,L,R,arr,count)
   if( count == arr.length){
       ans.push(arr.join("")) // ans += arr
       return ans
    }

   for(var i = count; i< arr.length; i++){
       swap(arr,i,count)
       ProblemofPlagiarism(ans,N,L,R,arr,count+1,curr)
       swap(arr,i,count)
   }
    return ans;

}
function swap(arr,i,count){
    let temp = +arr[i]
    arr[i] = +arr[count]
    arr[count] = temp;
}

function DraculaReject(ans,L,R,curr){
    // console.log(ans,L,R,curr)
   
    for(let i =0;i < ans.length; i++){
        let sum = 0
        let reject = ans[i]
        // console.log(reject) 
       
        for(var j= L; j <= R; j++){
            sum += +reject[j]
            // console.log("reject", reject[j])
        }
        // console.log(sum)
        if(sum %2 != 0){
            // console.log("raj")
            curr++
        }
    }
    return curr
}
if (process.env.USERNAME === 'DELL') {
    runProgram(`3
    0 1`)
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