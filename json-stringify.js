const user ={
    Id:201,
    Name: "jubayer",
    Love:{
    Name: "maria",
    Age: 16 
    },
    Age:22
}

const userJson = JSON.stringify(user);
console.log(userJson);
const userFromJson = JSON.parse(userJson)  // json string to convert object
console.log(userFromJson);