const posts =[
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=> {
            output += `<li> ${ post.title }</li>`
            document.body.innerHTML = output;
        })
    }, 1000)
}


 function createPost(post){
    let promise0 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error = false;
        if(!error){
            resolve();
        }
        else{
            reject(" Some error has been occured");
        }
        }
            ,2000)
    })

    return promise0

} 

/* createPost({title : 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(err => console.log(err)) */




/*  ||  Async and await */

/* async function init(){
   await createPost({title : 'Post Three', body: 'This is post three'})

   getPosts()
    
}

init()
 */




async function fetchUsers(){
   const res = await fetch('https://jsonplaceholder.typicode.com/users');

   const data = await res.json()

    console.log(data);

}


fetchUsers();





// Just another try

const para1 = document.querySelector(".demo1");
const para2 = document.querySelector(".demo2");
const para3 = document.querySelector(".demo3");

para1.innerHTML = 'Hello 1'

let promise = new Promise((resolve, reject)=>{
    alert("Hello")
    const error = false;
        if(!error){
            resolve(22)
        }
        else{
            reject('Some error has occured')
        }

})

setTimeout( ()=>{
    para2.innerHTML = "Hello 2"
    console.log(promise)
},3000)

para3.innerHTML = "Hello 3"





/*   ||  Promise.all   */

/* const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=> {
    setTimeout( resolve , 2000, 'Goodbye')
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(
    (res)=> res.json()
    )


Promise.all([promise1, promise2, promise3,promise4]).then((values)=>console.log(values)) */