const jsonData={
   users: [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        address:{
            street:"123 Main St",
            City:"New York",
            ZipCode:"10001"
        }
    },
    {
        id: 2,
        name:"Jane smith",
        email: "jane@example.com",
        address:{
            street:"456Oka Ave",
            City:"Los Angeles",
            ZipCode:"90001"
        },
        index:2,
    },
    {
        id: 3,
        name: "John Doe",
        email: "john@example.com",
        address:{
            street:"123 Main St",
            City:"New York",
            ZipCode:"10001"
        },
         index:3,
    },
    {
        id: 4,
        name:"Jane smith",
        email: "jane@example.com",
        address:{
            street:"456Oka Ave",
            City:"Los Angeles",
            ZipCode:"90001"
        },
    },
   ],
};


/*function readJson(data){
    const firstUser = data.users[0].name;
    console.log(firstUser);

}*/


function readJson(data){
    const users =data.users;
    for (let i=0; i < users.length; i++){
        if (users[i].name ===  "Jane smith"){
             console.log(users[i].address);
        }
    }
}

readJson(jsonData);


let x = 10;

if (x > 5) console.log("Yes");

else console.log("No");

let total = 0;

for (let i = 1; i <= 3; i++) {

  total += i;

}

console.log(total);

const arr = [5, 10, 15]; 

console.log(arr.length); 

let num = 7;

if (num % 2 === 0) {

  console.log("Even");

} else {

  console.log("Odd");

}

