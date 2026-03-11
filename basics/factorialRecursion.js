//5! =5*4*3*2*1 =120
//5!= 5 * 4!=120


function faceRecursion(number){
    if(number === 1){
        return 1;
    }
    return number * faceRecursion (number-1);
}

console.log(faceRecursion(5));