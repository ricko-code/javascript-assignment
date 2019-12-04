// let name;
// let admin;


// name = "John";
// admin = name;
// alert(admin)

// let name = prompt("what is your name")
// alert(name)
// let age = prompt('How old are you')
// alert(age)
// let address = prompt('Where do you live')
// alert(address)

// this is the odd numbers assignment
for(i=1; i<=50; i++){
    if(i % 2 !=0){
        alert(i)
    } 
}

// the factorial assignment
function fac(n){
    return(n<2)?1:fac(n-1)*n;
}
alert (n);
function factorial(n)
{
    if (n ===0)
    {
        return 1;
    }
    return n * factorial(n-1)
}
console.log(factorial(5));