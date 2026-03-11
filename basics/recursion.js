//6! =6*5!
console.log(factorial(6));
function factorial(num){
    if (num == 0 || num == 1){
        return 1;
    }
    return num * factorial(num - 1);
}