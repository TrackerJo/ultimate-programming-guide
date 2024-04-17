

import './projects.css'

import CardTileVertical from '../../Components/CardTiles/Card_Tile_Vertical'

import FallingCode from '../../Components/FallingCode/falling_code'
import CircleButton from '../../Components/circle_button'



function WebDesignProjects() {


  return (
  
      <div id="welcome" className="selectedDiv">
        <FallingCode/>
        <h1 className="title">Web Design Projects</h1>
        <p className="subtitle"></p>
        <div className='courses'>
          <CardTileVertical title="Tic Tac Toe" subtitle="Simple Tic-Tac-Toe game" theme="tic" difficulty='Easy' onClick={() => {window.location.href = window.location.href + "TicTacToe/"}}/>
          <CardTileVertical title="Todo List" subtitle="Simple todo list to learn databases" difficulty='Easy' theme="todo" onClick={() => {window.location.href = window.location.href + "ToDo/"}}/>
          <CardTileVertical title="Cookie Clicker" subtitle="Cookie Clicker clone that can range in complexity" difficulty='Medium' theme="cookie" onClick={() => {window.location.href = window.location.href + "CookieClicker/"}}/>
          <CardTileVertical title="Blog" subtitle="Practical website to learn UX and more about databases" difficulty='Medium' theme="blog" onClick={() => {window.location.href = window.location.href + "Blog/"}}/>
          <CardTileVertical title="Slideshow" subtitle="Display photos from a google drive, learn how to use APIs" difficulty='Hard' theme="slideshow" onClick={() => {window.location.href = window.location.href + "Slideshow/"}}/>
          <CardTileVertical title="E-Commerce Store" subtitle="Another practical project, opition to work with APIs or databases" difficulty='Hard' theme="store" onClick={() => {window.location.href = window.location.href + "Ecommerce/"}}/>
          
        </div>
        <br />
        <div className='BackCenter'>
          <CircleButton text='Back' onClick={() => {window.location.href = "/WebDesign/"}}/>
        </div>
         
      </div>
       
    
  )
}

export default WebDesignProjects
