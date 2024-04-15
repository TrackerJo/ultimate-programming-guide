

import './tutorials.css'

import CardTileVertical from '../../Components/CardTiles/Card_Tile_Vertical'

import FallingCode from '../../Components/FallingCode/falling_code'



function WebDesignTutorial() {


  return (
  
      <div id="welcome" className="selectedDiv">
        <FallingCode/>
        <h1 className="title">Web Design Tutorials</h1>
        <p className="subtitle"></p>
        <div className='courses'>
          <CardTileVertical title="Installing VSCode" subtitle="Demonstrates how to install a widely used IDE" theme="vscode" onClick={() => {window.location.href = window.location.href + "vscode-installation.html"}}/>
        </div>
       
         
      </div>
       
    
  )
}

export default WebDesignTutorial
