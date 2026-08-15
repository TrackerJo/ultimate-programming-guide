
import CardTileVertical from '../Components/CardTiles/Card_Tile_Vertical'

import FallingCode from '../Components/FallingCode/falling_code'
import CircleButton from '../Components/circle_button'
import './unity.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import '../index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Unity />
  </React.StrictMode>,
)


function Unity() {


  return (

    <div id="welcome" className="selectedDiv">
      <FallingCode />
      <h1 className="title">Unity</h1>
      <p className="subtitle">Learn Unity an industry standard game engine</p>
      <div className='courses'>
        {/* <CardTileVertical title="Projects" subtitle="List of applicable projects to quickly get familiar with Unity" theme="projects" onClick={() => {window.location.href = window.location.href + "Projects/"}}/> */}
        <CardTileVertical title="Resources" subtitle="List of helpful resources to learn how to make games with Untiy" theme="resources" onClick={() => { window.location.href = window.location.href + "Resources/" }} />

      </div>
      <br />
      <div className='BackCenter'>
        <CircleButton text='Back' onClick={() => { window.location.href = "/ultimate-programming-guide/" }} />
      </div>


    </div>


  )
}

export default Unity
