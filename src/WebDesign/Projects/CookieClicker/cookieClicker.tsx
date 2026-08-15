

import './cookieClicker.css'

import FallingCode from '../../../Components/FallingCode/falling_code'


import React from 'react'
import ReactDOM from 'react-dom/client'

import '../../../index.css'
import CircleButton from '../../../Components/circle_button'
import { useRef } from 'react'
import CodeWindow from '../../../Components/code_window'


import BreakdownPart from '../../../Components/breakdown_part'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CookieClickerProject />
    </React.StrictMode>,
)


function CookieClickerProject() {
    const htmlCodeWindowRef = useRef<HTMLDialogElement>(null)
    const cssCodeWindowRef = useRef<HTMLDialogElement>(null)
    const jsCodeWindowRef = useRef<HTMLDialogElement>(null)


    const htmlCode: string = `<!DOCTYPE html>
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
      <script src="./CookieClicker.js" type="module"></script>
  
  </body>
  </html>
    `

    const cssCode: string = `#cookieImg {
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
                <FallingCode />
                <h1 className="title">Cookie Clicker Project</h1>
                <div className="section" id="overview">
                    <h2>Project Overview</h2>
                    <p>Create cookie that can be clicked, with buildings and upgrades to make gameplay more interesting</p>
                    <p>Heres an examle website: <a href={"../Examples/CookieClicker.html"} target="_blank">Cookie Clicker Example</a></p>
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
    <title>Cookie Clicker Example</title>
  </head>
  <body>
  </body>
</html>`} />
                            <BreakdownPart text={<p>Import css stylesheet <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link">link</a> in <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head">head</a></p>} snippet={`<link rel="stylesheet" href="./CookieClickerE.css" />`} />
                            <BreakdownPart text={<p>Import <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#basic_usage" target='_blank'>script</a> at end of body</p>} snippet={`<script src="./cookieClickerE.js"></script>`} />
                            <BreakdownPart text={<p>Create a text element to display cookie count</p>} snippet={`<h2 id="cookieCount">Cookies: 0</h2>`} />
                            <BreakdownPart text={<p>Create a text element to display cookies per second</p>} snippet={`<label id="cookiesPerSecond">Cookies Per Second: 0</label>`} />
                            <BreakdownPart text={<p>Create an image element to display cookie</p>} snippet={`<img src="./cookie.png" alt="cookie" id="cookieImg">`} />
                            <BreakdownPart text={<p>Create a div element to hold buildings</p>} snippet={`<div class="buildings"></div>`} />
                            <BreakdownPart text={<p>Create a div element to display the cursor building</p>} snippet={`<div class="building" id="cursor">
    <label class="building-title">Cursor</label>
    <br>
    <label class="building-price" id="cursor-price">10 Cookies</label>
</div>`} />
                            <BreakdownPart text={<p>Create a div element to hold upgrades</p>} snippet={`<div class="upgrades"></div>`} />
                            <BreakdownPart text={<p>Create a div element to display the mouse upgrade</p>} snippet={`<div class="upgrade" id="mouse"></div>`} />
                            <BreakdownPart text={<p>Inside the mouse upgrade div add a div to display the upgrade image</p>} snippet={` <div class="upgrade-icon">
    <img src="" alt="mouse" id="mouseImg">
</div>`} />
                            <BreakdownPart text={<p>Inside the mouse upgrade div add another div to display the upgrade popup</p>} snippet={`<div class="upgrade-popup">
    <label>Mouse Upgrade</label>
    <br>
    <label class="price">Price: 50 cookies</label>
    <br>
    <label for="">Discription: Increase the amount of cookies gained per click</label>
</div>`} />


                        </div>
                        <br />
                        <button onClick={() => {


                            htmlCodeWindowRef.current!.showModal()

                        }}>View HTML Code</button>
                    </div>
                    <div className="section css">
                        <h2>CSS Breakdown</h2>
                        <div className='Breakdown'>
                            <BreakdownPart text={<p>Style the cookie image's <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width" target='_blank'>width</a> to a desired length and set the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/cursor" target='_blank'>cursor</a> to a pointer</p>} snippet={`#cookieImg {
    width: 100px;
    cursor: pointer;
}`} type="css" />
                            <BreakdownPart text={<p>Set the body's <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display" target='_blank'>display</a> to flex, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container" target='_blank'>center</a> the content, set the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction" target='_blank'>flex direction</a> to column, and hide the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow" target='_blank'>overflow</a> on the x axis</p>} snippet={`body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
}`} type="css" />
                            <BreakdownPart text={<p>Style the building divs with a border, width, padding, and a pointer as the cursor</p>} snippet={`.building{
    border: 1px black solid;
    width: 100px;
    display: block;
    padding: 5px;
    cursor: pointer;
}`} type="css" />
                            <BreakdownPart text={<p>Style the upgrade icon as a square (set width and height), set pointer as the cursor, and add a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border" target='_blank'>border</a> </p>} snippet={`.upgrade-icon{
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: 1px black dashed;
}`} type='css' />
                            <BreakdownPart text={<p>Style the upgrade popup with a border, padding, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position" target='_blank'>position</a> to absolute, top at 0px, left at 60px, and set the display to none</p>} snippet={`.upgrade-popup {
    display: none;
    position: absolute;
    top:0px;
    left:60px;
    border: 1px black solid;
    padding: 10px;
    width: 300px;
}`} type='css' />
                            <BreakdownPart text={<p>When the upgrade is <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:hover" target='_blank'>hovered</a>, set the display to inline-block</p>} snippet={`.upgrade:hover .upgrade-popup{
    display:inline-block;
}`} type='css' />
                            <BreakdownPart text={<p>Style the upgrade div with a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position" target='_blank'>position</a> of relative</p>} snippet={`.upgrade{
    position: relative;
}`} type='css' />
                            <BreakdownPart text={<p>Style the upgrades div with a flex <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display" target='_blank'>display</a></p>} snippet={`.upgrades {
    display: flex;
}`} type='css' />
                            <BreakdownPart text={<p>Style the mouse image with a width and pointer as the cursor</p>} snippet={`#mouseImg {
    width: 50px;
    cursor: pointer;
}`} type='css' />


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
const list = document.querySelector('.list');`} type="js" />
                            <BreakdownPart text={<p>Add <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_value_of_this_within_the_handler" target='_blank'>click event listener</a> to the add button</p>} snippet={`addBtn.addEventListener('click', () => {
    //Code that runs when button is clicked goes here
})`} type='js' />
                            <BreakdownPart text={<p>Check if the input is empty</p>} snippet={`if(addInput.value === "") {
  return;
} `} type='js' />
                            <BreakdownPart text={<p>If the input isn't empty, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement" target='_blank'>create an div element</a> to hold the item with the correct class name, and an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id">id</a> as the number of list items there are, using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/childElementCount">childElementCount</a></p>} snippet={`//Create a new list item div
let itemDiv = document.createElement('div');
//Set item div class to item
itemDiv.classList.add('item');
//Add id to item div with count of items
itemDiv.id = list.childElementCount;`} type='js' />
                            <BreakdownPart text={<p>Add a list element to hold list item and a delete button</p>} snippet={`let item = document.createElement('li');
item.textContent = addInput.value;
itemDiv.appendChild(item);
let deleteBtn = document.createElement('button');
deleteBtn.textContent = "Delete";`} type='js' />
                            <BreakdownPart text={<p>Get the items from <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localStorage</a> and add the new item to the items array, be sure to parse item using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse">JSON.parse</a></p>} snippet={`//Get local storage items
let items = JSON.parse(localStorage.getItem('items'));
//If there are no items, create an empty array
if(items == null){
    items = [];
}
//Add the input value to the items array
items.push(addInput.value);
//Set the items array to local storage
localStorage.setItem('items', JSON.stringify(items));`} type='js' />
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
    
}`} type='js' />
                            <BreakdownPart text={<p>Add an event listener to the delete button and link the created function to it</p>} snippet={`deleteBtn.addEventListener('click', deleteItem);`} type='js' />
                            <BreakdownPart text={<p>Append the delete button to the item div and item div to list</p>} snippet={`itemDiv.appendChild(deleteBtn);
list.appendChild(itemDiv);`} type='js' />
                            <BreakdownPart text={<p>Clear the input after adding the item</p>} snippet={`addInput.value = "";`} type='js' />
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
})`} type='js' />
                        </div>
                        <br />
                        <button onClick={() => {


                            jsCodeWindowRef.current!.showModal()

                        }}>View JS Code</button>
                    </div>

                </div>

                <div className='BackCenter'>
                    <CircleButton text='Back' onClick={() => { window.location.href = "/ultimate-programming-guide/WebDesign/Projects/" }} />
                </div>

            </div>
            <CodeWindow dialogRef={htmlCodeWindowRef} CodeType='HTML' code={htmlCode} />
            <CodeWindow dialogRef={cssCodeWindowRef} CodeType='CSS' code={cssCode} />
            <CodeWindow dialogRef={jsCodeWindowRef} CodeType='JS' code={jsCode} />
        </>


    )
}

export default CookieClickerProject
