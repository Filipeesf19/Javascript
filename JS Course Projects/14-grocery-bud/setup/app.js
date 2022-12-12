// ****** SELECT ITEMS **********
const alert = document. querySelector('.alert');
const form = document. querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener("click", clearItems);
// load items
window.addEventListener('DOMContentLoaded', setupItems);

// ****** FUNCTIONS **********
// add Item
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        createListItem(id,value)
        // display alert
        displayAlert("item added to the list", "success")
        // show container
        container.classList.add("show-container")
        // add to local storage
        addToLocalStorage(id, value);
        //set back to default
        setBackToDefault()
    }
    else if(value && editFlag){
        editElement.innerHTML = value
        displayAlert('value changed', 'success')
        // edit local storage
        editLocalStorage(editId,value)
        setBackToDefault()
    }
    else{
        displayAlert("please enter value","danger")
    }
}

// clear items funtion
function clearItems(){
    const items = document.querySelectorAll(".grocery-item")
    if(items.length > 0){
        items.forEach((item) => {
            list.removeChild(item)
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem('list');
}

// display alert function
// display the alert and clear alert / remove formatting after 1 sec
function displayAlert(text,action){
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    // remove alert
    setTimeout(() => {
        alert.textContent = ""
        alert.classList.remove(`alert-${action}`)
    },1000)
}

// delete function
function deleteItem(e) {
    // target "grocery-item"
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    // remove that "grocery-item" from the "grocery-list"
    list.removeChild(element)
    // hide "clear Items" is there are no items on the list
    if (list.children.length === 0){
        container.classList.remove("show-container")
    }
    displayAlert("item removed","danger")
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
}

// edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item (look for the element with "title" class)
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //set form value to the "title" value, i.e. the grocery item being edited
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = "edit"
}

// set back to default
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editId = "";
    submitBtn.textContent = 'submit'
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    const grocery = {id,value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items))
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter((item) => {
        if (item.id !== id) {
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items))
}

function editLocalStorage(id,value){
    let items = getLocalStorage();
    items = items.map((item) => {
        if (item.id = id) {
            item.value = value
        }
        return item;
    })
    localStorage.setItem("list", JSON.stringify(items))
}

function getLocalStorage (){
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem('list')) : []
}

// ****** SETUP ITEMS **********
function setupItems(){
    let items = getLocalStorage();
    if(items.legnth > 0) {
        items.forEach((item) => {
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container')
    }

}


function createListItem(id,value) {
     // create a new element (grocery item list) named "article"
     const element = document.createElement('article');
     // add class
     element.classList.add('grocery-item');
     // add unique id
     const attr = document.createAttribute('data-id');
     attr.value = id;
     element.setAttributeNode(attr);
     // add the HTML
     element.innerHTML = `<p class="title">${value}</p>
     <div class="btn-container">
       <button type="button" class="edit-btn">
         <i class="fas fa-edit"></i>
       </button>
       <button type="button" class="delete-btn">
         <i class="fas fa-trash"></i>
       </button>
     </div>`;
     //setup edit and delete buttons after they have been created
     const deleteBtn = element.querySelector(".delete-btn");
     const editBtn = element.querySelector('.edit-btn');
     deleteBtn.addEventListener("click", deleteItem);
     editBtn.addEventListener("click", editItem);
     // append child
     list.appendChild(element);
}