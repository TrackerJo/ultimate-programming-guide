import"./modulepreload-polyfill-B5Qt9EMX.js";import{c as o,j as e,R as a,r as i,F as r}from"./index-DxspbE1b.js";import{C as m}from"./circle_button-DXnc18ZB.js";import{B as t,C as l}from"./breakdown_part-0HVEa2Fn.js";o.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(c,{})}));function c(){const s=i.useRef(null),d=i.useRef(null),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:"welcome",className:"selectedDiv",children:[e.jsx(r,{}),e.jsx("h1",{className:"title",children:"Cookie Clicker Project"}),e.jsxs("div",{className:"section",id:"overview",children:[e.jsx("h2",{children:"Project Overview"}),e.jsx("p",{children:"Create cookie that can be clicked and upgrades to make gameplay more interesting"}),e.jsxs("p",{children:["Heres an examle website: ",e.jsx("a",{href:"../Examples/CookieClicker.html",target:"_blank",children:"Cookie Clicker Example"})]})]}),e.jsxs("div",{className:"sections",children:[e.jsxs("div",{className:"section html",children:[e.jsx("h2",{className:"sectionTitle",children:"HTML Breakdown"}),e.jsxs("div",{className:"Breakdown",children:[e.jsx(t,{text:"Create Blank HTML Website",snippet:`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Clicker Example</title>
  </head>
  <body>
  </body>
</html>`}),e.jsx(t,{text:e.jsxs("p",{children:["Import css stylesheet ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link",children:"link"})," in ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head",children:"head"})]}),snippet:'<link rel="stylesheet" href="./CookieClickerE.css" />'}),e.jsx(t,{text:e.jsxs("p",{children:["Import ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#basic_usage",target:"_blank",children:"script"})," at end of body"]}),snippet:'<script src="./cookieClickerE.js"><\/script>'})]}),e.jsx("br",{}),e.jsx("button",{onClick:()=>{s.current.showModal()},children:"View HTML Code"})]}),e.jsxs("div",{className:"section css",children:[e.jsx("h2",{children:"CSS Breakdown"}),e.jsx("div",{className:"Breakdown",children:e.jsx(t,{text:e.jsxs("p",{children:["Style an item as a ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex",target:"_blank",children:"flex"})," to align item name and delete button"]}),snippet:`.item{
    display: flex;
    gap: 10px;
    padding: 5px;
}`,type:"css"})}),e.jsx("br",{}),e.jsx("button",{onClick:()=>{d.current.showModal()},children:"View CSS Code"})]}),e.jsxs("div",{className:"section js",children:[e.jsx("h2",{children:"JavaScript Breakdown"}),e.jsxs("div",{className:"Breakdown",children:[e.jsx(t,{text:e.jsxs("p",{children:["Create three variables holding the add button, the input, and the list using ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById",target:"_blank",children:"getElementById"})]}),snippet:`const addBtn = document.getElementById('addBtn');
const addInput = document.getElementById('addInput');
const list = document.querySelector('.list');`,type:"js"}),e.jsx(t,{text:e.jsxs("p",{children:["Add ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_value_of_this_within_the_handler",target:"_blank",children:"click event listener"})," to the add button"]}),snippet:`addBtn.addEventListener('click', () => {
    //Code that runs when button is clicked goes here
})`,type:"js"}),e.jsx(t,{text:e.jsx("p",{children:"Check if the input is empty"}),snippet:`if(addInput.value === "") {
  return;
} `,type:"js"}),e.jsx(t,{text:e.jsxs("p",{children:["If the input isn't empty, ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement",target:"_blank",children:"create an div element"})," to hold the item with the correct class name, and an ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"id"})," as the number of list items there are, using ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/childElementCount",children:"childElementCount"})]}),snippet:`//Create a new list item div
let itemDiv = document.createElement('div');
//Set item div class to item
itemDiv.classList.add('item');
//Add id to item div with count of items
itemDiv.id = list.childElementCount;`,type:"js"}),e.jsx(t,{text:e.jsx("p",{children:"Add a list element to hold list item and a delete button"}),snippet:`let item = document.createElement('li');
item.textContent = addInput.value;
itemDiv.appendChild(item);
let deleteBtn = document.createElement('button');
deleteBtn.textContent = "Delete";`,type:"js"}),e.jsx(t,{text:e.jsxs("p",{children:["Get the items from ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",children:"localStorage"})," and add the new item to the items array, be sure to parse item using ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",children:"JSON.parse"})]}),snippet:`//Get local storage items
let items = JSON.parse(localStorage.getItem('items'));
//If there are no items, create an empty array
if(items == null){
    items = [];
}
//Add the input value to the items array
items.push(addInput.value);
//Set the items array to local storage
localStorage.setItem('items', JSON.stringify(items));`,type:"js"}),e.jsx(t,{text:e.jsx("p",{children:"Create a function to handle deleting the list item when the created button is clicked, and removing it from localStorage based on its id"}),snippet:`function deleteItem(e){
    //Get the item div that was clicked
    const itemDiv = e.target.parentElement;
    const itemId = itemDiv.id;
    //Remove the item div from the list
    list.removeChild(itemDiv);
    //Get the items from local storage
    let items = JSON.parse(localStorage.getItem('items'));
    //Remove the item from the items array
    items.splice(itemId, 1);
    //Set the items array to local storage
    localStorage.setItem('items', JSON.stringify(items));
    
}`,type:"js"}),e.jsx(t,{text:e.jsx("p",{children:"Add an event listener to the delete button and link the created function to it"}),snippet:"deleteBtn.addEventListener('click', deleteItem);",type:"js"}),e.jsx(t,{text:e.jsx("p",{children:"Append the delete button to the item div and item div to list"}),snippet:`itemDiv.appendChild(deleteBtn);
list.appendChild(itemDiv);`,type:"js"}),e.jsx(t,{text:e.jsx("p",{children:"Clear the input after adding the item"}),snippet:'addInput.value = "";',type:"js"}),e.jsx(t,{text:e.jsxs("p",{children:["On page load, using the ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event",children:"DOMContentLoaded"})," event listener, load the saved list items in localStorage"]}),snippet:`//On page load, get the items from local storage
document.addEventListener('DOMContentLoaded', () => {
    let items = JSON.parse(localStorage.getItem('items'));
        //If there are no items, return
    if(items == null) return;
        //Loop through each item
    items.forEach(item => {
        //Create a new list item div
        let itemDiv = document.createElement('div');
        //Set item div class to item
        itemDiv.classList.add('item');
        //Add id to item div with count of items
        itemDiv.id = list.childElementCount;

        //Create a new list item
        let itemList = document.createElement('li');
        //Set the list item's text to the input value
        itemList.textContent = item;
        //Add the list item to the list item div
        itemDiv.appendChild(itemList);
        //Create a new delete button
        let deleteBtn = document.createElement('button');
        //Set the delete button's text to "Delete"
        deleteBtn.textContent = "Delete";
        //Add an event listener to the delete button
        deleteBtn.addEventListener('click', deleteItem);
        //Add the delete button to the list item div
        itemDiv.appendChild(deleteBtn);
        //Add the list item div to the list
        list.appendChild(itemDiv);
    })
})`,type:"js"})]}),e.jsx("br",{}),e.jsx("button",{onClick:()=>{n.current.showModal()},children:"View JS Code"})]})]}),e.jsx("div",{className:"BackCenter",children:e.jsx(m,{text:"Back",onClick:()=>{window.location.href="/ultimate-programming-guide/WebDesign/Projects/"}})})]}),e.jsx(l,{dialogRef:s,CodeType:"HTML",code:`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cookie Clicker Example</title>
      <link rel="stylesheet" href="./cookieClicker.css" />
  </head>
  <body>
     
      <h2 id="cookieCount">Cookies: 0</h2>
      <label id="cookiesPerSecond">Cookies Per Second: 0</label>
      <br>
      <br>
      <img src="./cookie.png" alt="cookie" id="cookieImg">
      <h2><u>Buildings</u></h2>
      <div class="buildings">
          <div class="building" id="cursor">
              <label class="building-title">Cursor</label>
              <br>
              <label class="building-price" id="cursor-price">10 Cookies</label>
          </div>
          
  
      </div>
      <h2><u>Upgrades</u></h2>
  
      <div class="upgrades">
          <div class="upgrade" id="mouse">
              <div class="upgrade-icon">
                  <img src="" alt="mouse" id="mouseImg">
              </div>
              <div class="upgrade-popup">
                  <label>Mouse Upgrade</label>
                  <br>
                  <label class="price">Price: 50 cookies</label>
                  <br>
                  <label for="">Discription: Increase the amount of cookies gained per click</label>
              </div>
          </div>
      </div>
      <script src="./CookieClicker.js" type="module"><\/script>
  
  </body>
  </html>
    `}),e.jsx(l,{dialogRef:d,CodeType:"CSS",code:`#cookieImg {
    width: 100px;
    cursor: pointer;
}

body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
}

.building{
    border: 1px black solid;
    width: 100px;
    display: block;
    padding: 5px;
    cursor: pointer;
}

.building-title{
    font-weight: bold;
    cursor: pointer;
}

.building-price {
    cursor: pointer;
}

.upgrade-icon{
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: 1px black dashed;
}

.upgrade-popup {
    display: none;
    position: absolute;
    top:0px;
    left:60px;
    border: 1px black solid;
    padding: 10px;
    width: 300px;
}

.upgrade:hover .upgrade-popup{
    display:inline-block;
}

.upgrade{
    position: relative;
}

.upgrades {
    display: flex;
}

#mouseImg {
    width: 50px;
    cursor: pointer;
}
    `}),e.jsx(l,{dialogRef:n,CodeType:"JS",code:`//Get the add button, the input, and the list
const addBtn = document.getElementById('addBtn');
const addInput = document.getElementById('addInput');
const list = document.querySelector('.list');

//On page load, get the items from local storage
document.addEventListener('DOMContentLoaded', () => {
    let items = JSON.parse(localStorage.getItem('items'));
    //If there are no items, return
    if(items == null) return;
    //Loop through each item
    items.forEach(item => {
        //Create a new list item div
        let itemDiv = document.createElement('div');
        //Set item div class to item
        itemDiv.classList.add('item');
        //Add id to item div with count of items
        itemDiv.id = list.childElementCount;

        //Create a new list item
        let itemList = document.createElement('li');
        //Set the list item's text to the input value
        itemList.textContent = item;
        //Add the list item to the list item div
        itemDiv.appendChild(itemList);
        //Create a new delete button
        let deleteBtn = document.createElement('button');
        //Set the delete button's text to "Delete"
        deleteBtn.textContent = "Delete";
        //Add an event listener to the delete button
        deleteBtn.addEventListener('click', deleteItem);
        //Add the delete button to the list item div
        itemDiv.appendChild(deleteBtn);
        //Add the list item div to the list
        list.appendChild(itemDiv);
    })
})

addBtn.addEventListener('click', () => {
    //Check if the input is empty
    if(addInput.value === "") {
        return;
    }
    //Create a new list item div
    let itemDiv = document.createElement('div');
    //Set item div class to item
    itemDiv.classList.add('item');
    //Add id to item div with count of items
    itemDiv.id = list.childElementCount;

    //Create a new list item
    let item = document.createElement('li');
    //Set the list item's text to the input value
    item.textContent = addInput.value;
    //Add the list item to the list item div
    itemDiv.appendChild(item);
    //Create a new delete button
    let deleteBtn = document.createElement('button');
    //Set the delete button's text to "Delete"
    deleteBtn.textContent = "Delete";
    //Add an event listener to the delete button
    deleteBtn.addEventListener('click', deleteItem);
    //Add the delete button to the list item div
    itemDiv.appendChild(deleteBtn);
    //Add the list item div to the list
    list.appendChild(itemDiv);

    //Get local storage items
    let items = JSON.parse(localStorage.getItem('items'));
    //If there are no items, create an empty array
    if(items == null){
        items = [];
    }
    //Add the input value to the items array
    items.push(addInput.value);
    //Set the items array to local storage
    localStorage.setItem('items', JSON.stringify(items));

    
    //Clear the input
    addInput.value = "";
})
    
function deleteItem(e){
    //Get the item div that was clicked
    const itemDiv = e.target.parentElement;
    const itemId = itemDiv.id;
    //Remove the item div from the list
    list.removeChild(itemDiv);
    //Get the items from local storage
    let items = JSON.parse(localStorage.getItem('items'));
    //Remove the item from the items array
    items.splice(itemId, 1);
    //Set the items array to local storage
    localStorage.setItem('items', JSON.stringify(items));
    
}`})]})}
