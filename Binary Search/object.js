var obj ={
    firstName : ""
}
function getfull(firstName){
    this.firstName = firstName;
    obj.firstName = firstName
    getResult()
}
function getResult(){
    console.log(this.firstName)
    console.log(obj.firstName)
    
}
getfull("java")



