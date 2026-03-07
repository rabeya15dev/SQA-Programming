//find the max value from array

function getMax(data){
    let maxValue=data[0];
    for (let i = 1; i < data.length; i++){
        if (maxValue>data[i]){
            maxValue=maxValue;
        }else{
            maxValue = data[i];
        }
    }
    console.log(`Maximum value from array is : ${maxValue}`);

}
const data =[22,87,89,23,3,60,33];
getMax(data);