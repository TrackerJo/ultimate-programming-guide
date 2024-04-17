import React from 'react'
import ReactDOM from 'react-dom/client'

import './resources.css'
import '../index.css'


import FallingCode from '../Components/FallingCode/falling_code'
import CardTileHorizontal from '../Components/CardTiles/Card_Tile_Horizontal'
import CircleButton from '../Components/circle_button'
import CardTileSquare from '../Components/CardTiles/Card_Tile_Square'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WebDesignResources />
  </React.StrictMode>,
)


function WebDesignResources() {


  return (
      <div id="welcome" className="selectedDiv">
        <FallingCode/>
        <h1 className="title">Web Design Resources</h1>
        <p className="subtitle"></p>
        <div className="sections">

            <div className="section websites">
                <h2>Websites</h2>
                <CardTileHorizontal title="W3Schools" subtitle="" theme="w3schools" onClick={() => {window.open("https://www.w3schools.com/html/", '_blank')!.focus();}}/>
                <br />
                <CardTileHorizontal title="MDN Web Docs" subtitle="" theme="mdn" onClick={() => {window.open("https://developer.mozilla.org/en-US/docs/Web/HTML", '_blank')!.focus();}}/>
                <br/>
                <CardTileHorizontal title="FreeCodeCamp" subtitle="" theme="freecodecamp" onClick={() => {window.open("https://www.freecodecamp.org/learn/2022/responsive-web-design/", '_blank')!.focus();}}/>
               
                <br/>
                <CardTileHorizontal title="Codecademy" subtitle="" theme="codecademy" onClick={() => {window.open("https://www.codecademy.com/learn/learn-html", '_blank')!.focus();}}/>


            </div>
            <div className="section videos">
                <h2>Videos</h2>
                <CardTileSquare title="Intro to HTML" subtitle="By: Kevin Powell" theme="introHtmlKP" onClick={() => {window.open("https://youtu.be/LGQuIIv2RVA?si=92hVoS40xF7vwS6i", '_blank')!.focus();}}/>
               
                <br/>
                <CardTileSquare title="Intro to CSS" subtitle="By: Kevin Powell" theme="introCSSKP" onClick={() => {window.open("https://youtu.be/TZTaGTQKl2I?si=faqxRUL1ZreFtnCr", '_blank')!.focus();}}/>
                
                <br/>
                <CardTileSquare title="Intro to Web Design" subtitle="By: Kevin Powell" theme="introWebKP" onClick={() => {window.open("https://youtube.com/playlist?list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&si=HoapE7rtW7FXtePH", '_blank')!.focus();}}/>
                
                <br/>
                <CardTileSquare title="Intro to HTML" subtitle="By: Kevin Stratvert" theme="introHtmlKS" onClick={() => {window.open("https://youtu.be/FQdaUv95mR8?si=mH8hkjJKEP_8WQ63", '_blank')!.focus();}}/>
                
          </div>
          
        </div>
        <div className='BackCenter'>
          <CircleButton text="Back" onClick={() => {window.location.href = "/ultimate-programming-guide/WebDesign/"}}/>
        </div>
        
    </div>
  )
}

export default WebDesignResources
