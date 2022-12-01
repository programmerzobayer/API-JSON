document.getElementById("btn").addEventListener("click", function(){
     const title = document.getElementById("title").value;
     const body = document.getElementById("bodyContent").value;
     const post= {title:title, body:body};
     nowPostToServer(post);
     document.getElementById("title").value="";
     document.getElementById("bodyContent").value="";
});

function nowPostToServer(postInfo){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(postInfo),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  .then((response) => response.json())
  .then((data) => console.log(data));
}