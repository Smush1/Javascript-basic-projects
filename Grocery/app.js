// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

/* console.log(alert, form, grocery, submitBtn, container, list, clearBtn); */

// edit option
let editElement;
let editFlag = false;
let editID = '';


// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit', addItem);


// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
   // console.log(grocery.value)
    const value= grocery.value;
    const id = new Date().getTime().toString()
   // console.log(id);
   console.log(typeof(value))

    /* if(value !== '' && editFlag === false ){
        console.log('add the item to the cart')
    }
    else if(value !== '' && editFlag === false ){
        console.log('editing')
    }
    else {
        console.log('Empty')
    } */

    if(value && !editFlag ){
        const element = document.createElement('article')
        // add class
        element.classList.add('grocery-item');
        // add id 
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML =    
                        `<p class="title"> ${value} </p>
                                <div class="btn-container">
                                <button class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                                </div>`;
            //append child
        list.appendChild(element);

        displayAlert('item added to cart', 'success')
    }
    else if(value && editFlag ){
        console.log('editing')
    }
    else {
        displayAlert('please enter the value', 'danger');
    }
}


//display Alert 

function displayAlert(text, action){
    alert.classList.add(`alert-${action}`);
    alert.textContent = text;


// settimeout


    setTimeout(function() {
        alert.classList.remove(`alert-${action}`);
        alert.textContent = '';
    }, 1000);
}






// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********