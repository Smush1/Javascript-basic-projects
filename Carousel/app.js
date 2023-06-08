let imagesIds=[
    {
    "id": 1,
    "image": "Herb11.jpg" 
    },
    {
    "id": 2,
    "image": "Herbingedients.jpg"
    },
    {
    "id": 3,
    "image": "Herbingr.jpg"
    },
    {
    "id": 4,
    "image": "Digantalogo.jpeg"
    }
]

var currentItem=0


const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const imagevw = document.querySelector('.image-view')
console.log(imagesIds)
const item= imagesIds[currentItem]
console.log(item.id)
console.log(imagevw.src)

window.addEventListener("DOMContentLoaded",function (){
    setInterval(currentItem++,2500 )
})


btnLeft.addEventListener("click",function(){
    console.log('left is clicked')
    console.log(imagevw.classList)
    if (currentItem>0)
    {
        currentItem--
    }
    else {
        currentItem=3
    }   
    changeImage()
})

btnRight.addEventListener("click",function(){
    console.log('right is clicked')
    console.log(imagevw.classList)
    if (currentItem<imagesIds.length-1)
    {
        currentItem++
        
    }
    else {
        currentItem=0

    }
    changeImage()
})

function changeImage(){
    let item= imagesIds[currentItem ]
    console.log(currentItem)
    imagevw.src=item.image
}