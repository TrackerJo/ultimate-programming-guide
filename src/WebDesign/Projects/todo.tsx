

import './todo.css'

import FallingCode from '../../Components/FallingCode/falling_code'


import React from 'react'
import ReactDOM from 'react-dom/client'

import '../../index.css'
import CircleButton from '../../Components/circle_button'
import { useRef } from 'react'
import CodeWindow from '../../Components/code_window'


import BreakdownPart from '../../Components/breakdown_part'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProject />
  </React.StrictMode>,
)


function TodoProject() {
  const htmlCodeWindowRef = useRef<HTMLDialogElement>(null)
  const cssCodeWindowRef = useRef<HTMLDialogElement>(null)
  const jsCodeWindowRef = useRef<HTMLDialogElement>(null)


  const htmlCode: string = `<!DOCTYPE html>
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
    <script src="./TodoE.js" defer></script>
  </body>
</html>
    `

    const cssCode: string = `.item{
  display: flex;
  gap: 10px;
  padding: 5px;
}
    `

    const jsCode: string = `//Get the add button, the input, and the list
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
    
}`



  return (
    <>
      <div id="welcome" className="selectedDiv">
        <FallingCode/>
        <h1 className="title">Todo Project</h1>
        <div className="section" id="overview">
                <h2>Project Overview</h2>
                <p>Create a simple website with the ability to play Tic Tac Toe. Create an algorithm to check if a player has won the game, and logic for when the game ends</p>
                <p>Heres an examle website: <a href={"./Examples/Todo.html"} target="_blank">Todo List Example</a></p>
        </div>
        <div className="sections">
            <div className="section html">
                <h2 className='sectionTitle'>HTML Breakdown</h2>
                <div className='Breakdown'>
                  <BreakdownPart text='Create Blank HTML Website' snippet={`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./TodoE.css" />
    <title>Todo List Example</title>
  </head>
  <body>
  </body>
</html>`}/>
                   <BreakdownPart text={<p>Import css stylesheet <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link">link</a> in <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head">head</a></p>} snippet={`<link rel="stylesheet" href="./TodoE.css" />`}/>
                  <BreakdownPart text='Create Title to display title of list' snippet={`<h1 class="title">Todo List</h1>`}/>
                  <BreakdownPart text={<p>Create <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul" target="_blank">ul</a> element to hold list held by <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li" target="_blank">li</a> elements</p>} snippet={`<ul class="list">
  //List items will go here     
</ul>`}/>
                  <BreakdownPart text={<p>Create <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input" target='_blank'>input</a> element to add new items to list</p>} snippet={`<input type="text" id="addInput" placeholder="New Todo item">`}/>
                  <BreakdownPart text={<p>Create <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" target='_blank'>button</a> element to add new items to list</p>} snippet={`<button id="addBtn">Add to List</button>`}/>
                  <BreakdownPart text={<p>Import <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#basic_usage" target='_blank'>script</a> at end of body</p>} snippet={`<script src="./todoE.js"></script>`}/>

                    
                </div>
                <br />
                <button onClick={() => {
                  

                  htmlCodeWindowRef.current!.showModal()

                  }}>View HTML Code</button>
            </div>
            <div className="section css">
                <h2>CSS Breakdown</h2>
                <div className='Breakdown'>
                   <BreakdownPart text={<p>Style an item as a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" target='_blank'>flex</a> to align item name and delete button</p>} snippet={`.item{
    display: flex;
    gap: 10px;
    padding: 5px;
}`} type="css"/>
                </div>
                <br />
                <button onClick={() => {
                  

                  cssCodeWindowRef.current!.showModal()

                  }}>View CSS Code</button>
                    
                
            </div>
            <div className="section js">
                <h2>JavaScript Breakdown</h2>
                <div className='Breakdown'>
                    <BreakdownPart text={<p>Create three variables holding the add button, the input, and the list using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById" target='_blank'>getElementById</a></p>} snippet={`const addBtn = document.getElementById('addBtn');
const addInput = document.getElementById('addInput');
const list = document.querySelector('.list');`} type="js"/>
                    <BreakdownPart text={<p>Add <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_value_of_this_within_the_handler" target='_blank'>click event listener</a> to the add button</p>} snippet={`addBtn.addEventListener('click', () => {
    //Code that runs when button is clicked goes here
})`} type='js'/>
                    <BreakdownPart text={<p>Check if the input is empty</p>} snippet={`if(addInput.value === "") {
  return;
} `} type='js'/>
                    <BreakdownPart text={<p>If the input isn't empty, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement" target='_blank'>create an div element</a> to hold the item with the correct class name, and an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id">id</a> as the number of list items there are, using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/childElementCount">childElementCount</a></p>} snippet={`//Create a new list item div
let itemDiv = document.createElement('div');
//Set item div class to item
itemDiv.classList.add('item');
//Add id to item div with count of items
itemDiv.id = list.childElementCount;`} type='js'/>
                    <BreakdownPart text={<p>Add a list element to hold list item and a delete button</p>} snippet={`let item = document.createElement('li');
item.textContent = addInput.value;
itemDiv.appendChild(item);
let deleteBtn = document.createElement('button');
deleteBtn.textContent = "Delete";`} type='js'/>
                    <BreakdownPart text={<p>Get the items from <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localStorage</a> and add the new item to the items array, be sure to parse item using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse">JSON.parse</a></p>} snippet={`//Get local storage items
let items = JSON.parse(localStorage.getItem('items'));
//If there are no items, create an empty array
if(items == null){
    items = [];
}
//Add the input value to the items array
items.push(addInput.value);
//Set the items array to local storage
localStorage.setItem('items', JSON.stringify(items));`} type='js'/>
                    <BreakdownPart text={<p>Create a function to handle deleting the list item when the created button is clicked, and removing it from localStorage based on its id</p>} snippet={`function deleteItem(e){
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
    
}`} type='js'/>
                    <BreakdownPart text={<p>Add an event listener to the delete button and link the created function to it</p>} snippet={`deleteBtn.addEventListener('click', deleteItem);`} type='js'/>
                    <BreakdownPart text={<p>Append the delete button to the item div and item div to list</p>} snippet={`itemDiv.appendChild(deleteBtn);
list.appendChild(itemDiv);`} type='js'/>
                    <BreakdownPart text={<p>Clear the input after adding the item</p>} snippet={`addInput.value = "";`} type='js'/>
                    <BreakdownPart text={<p>On page load, using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event">DOMContentLoaded</a> event listener, load the saved list items in localStorage</p>} snippet={`//On page load, get the items from local storage
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
})`} type='js'/>
                </div>
                <br />
                <button onClick={() => {
                  

                  jsCodeWindowRef.current!.showModal()

                  }}>View JS Code</button>
            </div>
          
        </div>
    
        <div className='BackCenter'>
          <CircleButton text='Back' onClick={() => {window.location.href = "/WebDesign/Projects/"}}/>
        </div>
       
      </div>
      <CodeWindow dialogRef={htmlCodeWindowRef} CodeType='HTML' code={htmlCode}/>
      <CodeWindow dialogRef={cssCodeWindowRef} CodeType='CSS' code={cssCode}/>
      <CodeWindow dialogRef={jsCodeWindowRef} CodeType='JS' code={jsCode}/>
    </>
       
    
  )
}

export default TodoProject
