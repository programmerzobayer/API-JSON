fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data=> DisplayUser(data))


  function DisplayUser(users){
   const userName = users.map(user => user.username);
   const ul = document.getElementById("userList");
   for (let i=0 ; i<userName.length; i++){
    const user = userName[i];
    const li = document.createElement("li");
    li.innerText= user ;
    ul.appendChild(li);
    console.log(user);
   }
  }