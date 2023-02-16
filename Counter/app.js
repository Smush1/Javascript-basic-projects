let valueDisplay = document.querySelector("#value")
let btns = document.querySelectorAll(".btn")

let num=0


btns.forEach(function (btn)
{
btn.addEventListener("click", function(e){
   let action =  e.currentTarget.classList
        if (action.contains("decrease")){
                num--
        } else if (action.contains("increase")){
            num++
        }
          else {
            num = 0
          }
          valueDisplay.textContent=num
} )
})