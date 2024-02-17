/* FIRST EXAMPLE HARRY */

/* function loadScript(src, callback){
    var script = document.createElement("script")
    script.src = src;
    script.onload = ()=>{ 
        console.log('Script Loaded :' + src)
        callback(null, src)
    }
  

   script.onerror =()=>{ 
    console.log('Error with script loading' + src)
    callback(new Error('Some error is occured with src'))
}
   document.body.appendChild(script)
}


function hello(error, src){
    if (error){
        console.log(error);
        return
    }
    alert('Hello' + src);
}

function goodmorning(error, src){
    alert('Good Morning' + src );
}

loadScript('https://cdn.jsdelivr22.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', goodmorning)
 */

 




/*   ||    TRAVERSY MEDIA */



/* const posts =[
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


function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        console.log(post)
        callback()
    } ,2000)
    
}

getPosts()

createPost({title : 'Post three', body : 'This is third post'}, getPosts ) */






