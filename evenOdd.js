const data_list=[23,87,89,2,23,60,33];
oddEven(data_list);

function oddEven(data){
    for (let index in data){
        if(data[index]% 2 ==0){
            console.log(`${data[index]} is an Even Number`);
        }else{
            console.log(`${data[index]}is an Odd number`);
        }
    }
}