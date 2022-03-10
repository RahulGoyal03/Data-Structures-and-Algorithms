var nums = [12,345,2,6,7896]
var count = 0
for(var i  = 0; i < nums.length; i++){
     var out = ''
    
    if(nums[i]){
        out += nums[i]
        if(out.length % 2 == 0){
            count++ 
        }
    }
   
}
console.log(count)