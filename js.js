function addition(p1, p2){
    return Number(p1) + Number(p2);
}
function addition1() {
    let add1 = document.getElementById('sum1').value;
    let add2= document.getElementById('sum2').value;

    if(add1==false) {
        alert("i'm sorry!");
        }
    else if(add2==false) {
        alert("You failed!");
        }
    else
        {
        let result = addition(add1,add2);
        document.getElementById('sum').value= result
    }
}

function subtraction(p1, p2){
    return Number(p1) - Number(p2);
}
function subtraction1() {
    let num1 = document.getElementById('sum1').value;
    let num2 = document.getElementById('sum2').value;
    let result = subtraction(num1,num2);
    document.getElementById('difference').value= result;
}
function multiplication(p1, p2){
    return Number(p1) * Number(p2);
}
function multiplication1() {
    let num1 = document.getElementById('mul1').value;
    let num2 = document.getElementById('mul2').value;
    let result = multiplication(num1,num2);
    document.getElementById('product').value= result;
}
function division(p1, p2){
    return Number(p1) / Number(p2);
}
function division1() {
    let num1 = document.getElementById('div1').value;
    let num2 = document.getElementById('div2').value;
    let result = division(num1,num2);
    document.getElementById('quotient').value= result;
}