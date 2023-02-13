const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "brown","yellow"];

const btn = document.getElementById("btn")
const color= document.querySelector(".color")

btn.addEventListener("click", function(){
    let newColor =  Math.floor(Math.random()*colors.length)
    document.body.style.background = colors[newColor]
    color.textContent = colors[newColor]
})