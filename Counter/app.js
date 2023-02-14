let valuedisplay = document.querySelector("#value")
let reset = document.querySelector(".reset")
let increase = document.querySelector(".increase")
let decrease = document.querySelector(".decrease")
let num=0

increase.addEventListener("click",function(){
    num +=1
    valuedisplay.textContent = num
    
})

reset.addEventListener("click", function(){
    valuedisplay.textContent = num = 0
})

decrease.addEventListener("click",function(){
    num -=1
    valuedisplay.textContent = num
    
})