const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn")
const color= document.querySelector(".color")

btn.addEventListener("click", function(){
    let result = 0

    for(let i=0; i< 5; i++){
        
       
        result += hex[Math.floor(Math.random()* hex.length)]
    }
    let hexColor = `#${result}`
    document.body.style.background = hexColor
    color.textContent = hexColor
    console.log(result)
    
})