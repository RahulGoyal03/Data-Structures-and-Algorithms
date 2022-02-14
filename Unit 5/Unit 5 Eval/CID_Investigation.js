function CID_investication(str) {
    
    var res = []
    var obj = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    
    function My_fun(i, ans){
        if(ans.length == str.length){
            res.push(ans)
            return
        }
        // console.log("sdf",obj[str[i]])
        let tem = obj[str[i]];
        for(let j = 0; j<tem.length; j++){
            // console.log(key, "k")
            My_fun(i+1, ans + tem[j])
        }
    }
    
    
        My_fun(0, "")
    
    // console.log(res)
    for(let i = 0; i<res.length; i++){
        console.log(res[i])
    }
    
    
}

function runProgram(input) {
   CID_investication(input)
   
}