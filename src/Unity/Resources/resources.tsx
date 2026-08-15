import React from 'react'
import ReactDOM from 'react-dom/client'

import './resources.css'
import '../../index.css'


import FallingCode from '../../Components/FallingCode/falling_code'
import CardTileHorizontal from '../../Components/CardTiles/Card_Tile_Horizontal'
import CircleButton from '../../Components/circle_button'
import CardTileSquare from '../../Components/CardTiles/Card_Tile_Square'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UnityResources />
  </React.StrictMode>,
)


function UnityResources() {


  return (
      <div id="welcome" className="selectedDiv">
        <FallingCode/>
        <h1 className="title">Unity Resources</h1>
        <p className="subtitle"></p>
        <div className="sections">

            <div className="section websites">
                <h2>Websites</h2>
                <CardTileHorizontal title="Unity Learn" subtitle="" theme="w3schools" onClick={() => {window.open("https://learn.unity.com/", '_blank')!.focus();}}/>
                <br />
                <CardTileHorizontal title="GameDev Acadmey" subtitle="" theme="mdn" onClick={() => {window.open("https://academy.zenva.com/product/unity-101-game-engine-foundations/?zva_src=gamedevacademy_homecourses23", '_blank')!.focus();}}/>
                <br/>
                <CardTileHorizontal title="Learn Unity - Walker Boys Studio" subtitle="" theme="freecodecamp" onClick={() => {window.open("http://www.walkerboystudio.com/wbstudio/learn-unity/", '_blank')!.focus();}}/>
               



            </div>
            <div className="section videos">
                <h2>Videos</h2>
                <CardTileSquare title="Learn Unity Beginner/Intermediate" subtitle="By: CodeMonkey" theme="introHtmlKP" onClick={() => {window.open("https://www.youtube.com/watch?v=AmGSEH7QcDg", '_blank')!.focus();}}/>
               
                <br/>
                <CardTileSquare title="How to make a Video Game" subtitle="By: Brackeys" theme="introCSSKP" onClick={() => {window.open("https://youtu.be/j48LtUkZRjU?si=_gsM3gZ2b9jegPX5", '_blank')!.focus();}}/>
                
                <br/>
                <CardTileSquare title="How to make a 2D Game" subtitle="By: Brackeys" theme="introWebKP" onClick={() => {window.open("https://youtu.be/on9nwbZngyw?si=Nt3IPxUFKrVVU-Q9", '_blank')!.focus();}}/>
                
                <br/>
                <CardTileSquare title="The Unity Tutorial For Complete Beginners" subtitle="By: Game Maker's Toolkit" theme="introHtmlKS" onClick={() => {window.open("https://youtu.be/XtQMytORBmM?si=P3CD6EugPlK5_X_P", '_blank')!.focus();}}/>
                
          </div>
          
        </div>
        <div className='BackCenter'>
          <CircleButton text="Back" onClick={() => {window.location.href = "/ultimate-programming-guide/Unity/"}}/>
        </div>
        
    </div>
  )
}

export default UnityResources
