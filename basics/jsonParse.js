const car =[
    {
        
    name: "BMW",
    variation:{
        color:"Black",
        wheel:4,
    },
    },
    {
        id:2,
    name: "Honda",
    variation:{
        color:"White",
        wheel:4,
        type:{
            door:4,
            window:4,
        },
        },
    },
     {
       
    name: "Honda",
    variation:{
        color:"White",
        wheel:4,
    },
},


     {
        id:2,
    name: "Honda",
    variation:{
        color:"White",
        wheel:4,
        type:{
            door:4,
            window:4,
        },
        },
}

];

//console.log(car);
//console.log(JSON.stringify(car,null,2));
//console.log(car[0].variation.color);
console.log(car.filter(car => car.name="BMW"));

//const data =car.hasOwnPoperty(key=color)
