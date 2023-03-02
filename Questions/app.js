//using selectors inside the element
// traversing the dom
const article = document.querySelector("article")
const btns = document.querySelectorAll(".question-btn")

btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
     const btnfunction = e.currentTarget.parentElement.parentElement
        console.log(btnfunction)   
     btnfunction.classList.toggle("show-text")
    })
})
