import"./modulepreload-polyfill-B5Qt9EMX.js";import{c as o,j as e,R as a,r as i,F as r}from"./index-KM1SXsLI.js";import{C as m}from"./circle_button-C5JsPY1w.js";import{B as t,C as l}from"./breakdown_part-D9GugBl9.js";o.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(c,{})}));function c(){const s=i.useRef(null),d=i.useRef(null),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:"welcome",className:"selectedDiv",children:[e.jsx(r,{}),e.jsx("h1",{className:"title",children:"Todo Project"}),e.jsxs("div",{className:"section",id:"overview",children:[e.jsx("h2",{children:"Project Overview"}),e.jsx("p",{children:"Create a simple website with the ability to play Tic Tac Toe. Create an algorithm to check if a player has won the game, and logic for when the game ends"}),e.jsxs("p",{children:["Heres an examle website: ",e.jsx("a",{href:"./Examples/Todo.html",target:"_blank",children:"Todo List Example"})]})]}),e.jsxs("div",{className:"sections",children:[e.jsxs("div",{className:"section html",children:[e.jsx("h2",{className:"sectionTitle",children:"HTML Breakdown"}),e.jsxs("div",{className:"Breakdown",children:[e.jsx(t,{text:"Create Blank HTML Website",snippet:`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./TodoE.css" />
    <title>Todo List Example</title>
  </head>
  <body>
  </body>
</html>`}),e.jsx(t,{text:e.jsxs("p",{children:["Import css stylesheet ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link",children:"link"})," in ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head",children:"head"})]}),snippet:'<link rel="stylesheet" href="./TodoE.css" />'}),e.jsx(t,{text:"Create Title to display title of list",snippet:'<h1 class="title">Todo List</h1>'}),e.jsx(t,{text:e.jsxs("p",{children:["Create ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul",target:"_blank",children:"ul"})," element to hold list held by ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li",target:"_blank",children:"li"})," elements"]}),snippet:`<ul class="list">
  //List items will go here     
</ul>`}),e.jsx(t,{text:e.jsxs("p",{children:["Create ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input",target:"_blank",children:"input"})," element to add new items to list"]}),snippet:'<input type="text" id="addInput" placeholder="New Todo item">'}),e.jsx(t,{text:e.jsxs("p",{children:["Create ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",target:"_blank",children:"button"})," element to add new items to list"]}),snippet:'<button id="addBtn">Add to List</button>'}),e.jsx(t,{text:e.jsxs("p",{children:["Import ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#basic_usage",target:"_blank",children:"script"})," at end of body"]}),snippet:'<script src="./todoE.js"><\/script>'})]}),e.jsx("br",{}),e.jsx("button",{onClick:()=>{s.current.showModal()},children:"View HTML Code"})]}),e.jsxs("div",{className:"section css",children:[e.jsx("h2",{children:"CSS Breakdown"}),e.jsx("div",{className:"Breakdown",children:e.jsx(t,{text:e.jsxs("p",{children:["Style an item as a ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex",target:"_blank",children:"flex"})," to align item name and delete button"]}),snippet:`.item{
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
})`,type:"js"})]}),e.jsx("br",{}),e.jsx("button",{onClick:()=>{n.current.showModal()},children:"View JS Code"})]})]}),e.jsx("div",{className:"BackCenter",children:e.jsx(m,{text:"Back",onClick:()=>{window.location.href="/WebDesign/Projects/"}})})]}),e.jsx(l,{dialogRef:s,CodeType:"HTML",code:`<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./TodoE.css" />
      <title>Todo List Example</title>
  </head>
  <body>
    <h1 class="title">Todo List</h1>
    <ul class="list">
    
    </ul>
    <div class="add">
        <input type="text" id="addInput" placeholder="New Todo item">
        <button id="addBtn">Add to List</button>
    </div>
    <script src="./TodoE.js" defer><\/script>
  </body>
</html>
    `}),e.jsx(l,{dialogRef:d,CodeType:"CSS",code:`.item{
  display: flex;
  gap: 10px;
  padding: 5px;
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
