function CheckEvent(number){
    let data=6;
    if(number % 2 === 0) {
        console.log(`${number}is an even number`);
        data =5;
        
    }console.log(`the number:${data}`);
}

CheckEvent(10);
