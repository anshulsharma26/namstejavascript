// arrow function  and restparamete
let myfun = (param1, param2, ...restParam)=>{
    console.log(param1+param2)
    console.log(restParam)
}
myfun(23,67,8,9,9)

// spread operator with arr
const arr = [ ...[81,78,34,67,78] , ... [7856,78] ]
console.log(arr)

// spread operator with object

const personDetails = {
    fatherName: "Anil Sharma",
    motherName: "Savita Sharma",
    dob: '26/05/2002'
}
const details = {
    name: "Anshul",
    gender: "mail"
}
const employeeDetails  = {...personDetails, ... details}
console.log(employeeDetails)





// array destructring

let [a,b,...restArr] = [78,67,90,89]
console.log(`${a} ${b} and ${restArr}`);

console.log(restArr)


