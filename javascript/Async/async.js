// Example 1
//Collecting external API's

// let main = () =>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')
// }
// main()
// .then(response => response.json())
// .then(data => console.log('data',data))
// .catch(error => console.log('error',error))


// Example 2 
//Waiting for completion of promise using Await keyword 
async function getName(){
    return "Mustafa"
}

async function logName(){
  let name = await getName().then(data => data);
  console.log('Name:' ,name);
  console.log('Name:' ,name);
  console.log('Name:' ,name);
  console.log('Name:' ,name);
}

logName();