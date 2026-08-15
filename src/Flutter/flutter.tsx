
import CardTileVertical from '../Components/CardTiles/Card_Tile_Vertical'

import FallingCode from '../Components/FallingCode/falling_code'
import CircleButton from '../Components/circle_button'
import './flutter.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import '../index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Flutter />
  </React.StrictMode>,
)


function Flutter() {


  return (

    <div id="welcome" className="selectedDiv">
      <FallingCode />
      <h1 className="title">Flutter</h1>
      <p className="subtitle">Learn the popular cross platform programming kit made by Google and learn how to make your own mobile app</p>
      <div className='courses'>
        {/* <CardTileVertical title="Projects" subtitle="List of applicable projects to quickly get familiar with Flutter" theme="projects" onClick={() => { window.location.href = window.location.href + "Projects/" }} /> */}
        <CardTileVertical title="Resources" subtitle="List of helpful resources to learn how to make apps with Flutter" theme="resources" onClick={() => { window.location.href = window.location.href + "Resources/" }} />

      </div>
      <br />
      <div className='BackCenter'>
        <CircleButton text='Back' onClick={() => { window.location.href = "/ultimate-programming-guide/" }} />
      </div>


    </div>


  )
}

export default Flutter
