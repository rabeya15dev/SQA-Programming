//6! =6 *5*4*3*2*1=720
//5! =5*4*3*2*1=720
//1!=1
//0!=1

factorial(0);

function factorial(num){
    let result =1;
    if (num ==0|| num ==1){
        result=result;
    }else{
        for (let i=2; i<=num; i++){
            result=result * i;
        }
    }
    console.log(`factoria; of ${num} is ${result}`);
}