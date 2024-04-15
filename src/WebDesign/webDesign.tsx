
import CardTileVertical from '../Components/CardTiles/Card_Tile_Vertical'

import FallingCode from '../Components/FallingCode/falling_code'
import CircleButton from '../Components/circle_button'
import './webDesgin.css'

function WebDesign() {


  return (
  
      <div id="welcome" className="selectedDiv">
        <FallingCode/>
        <h1 className="title">Web Design</h1>
        <p className="subtitle">Learn HTML, Javascript, and CSS to create webpages.</p>
        <div className='courses'>
          <CardTileVertical title="Tutorials" subtitle="Basic tutorials to quickly start making websites" theme="tutorials" onClick={() => {window.location.href = window.location.href + "Tutorials/"}}/>
          <CardTileVertical title="Projects" subtitle="List of applicable projects to quickly get familiar with Web Design" theme="projects" onClick={() => {window.location.href = window.location.href + "Projects/"}}/>
          <CardTileVertical title="Resources" subtitle="List of applicable projects to quickly get familiar with Web Design" theme="resources" onClick={() => {window.location.href = window.location.href + "resources.html"}}/>

        </div>
        <br />
        <div className='BackCenter'>
          <CircleButton text='Back' onClick={() => {window.location.href = "/ultimate-programming-guide/"}}/>
        </div>
       
         
      </div>
       
    
  )
}

export default WebDesign
