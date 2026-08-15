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
      <FallingCode />
      <h1 className="title">Flutter Resources</h1>
      <p className="subtitle"></p>
      <div className="sections">

        <div className="section websites">
          <h2>Websites</h2>
          <CardTileHorizontal title="Flutter.Dev" subtitle="" theme="mdn" onClick={() => { window.open("https://flutter.dev/learn", '_blank')!.focus(); }} />
          <br />
          <CardTileHorizontal title="Codecademy" subtitle="" theme="w3schools" onClick={() => { window.open("https://www.codecademy.com/learn/intro-to-flutter", '_blank')!.focus(); }} />
          <br />
          <CardTileHorizontal title="FreeCodeCamp" subtitle="" theme="freecodecamp" onClick={() => { window.open("https://www.freecodecamp.org/news/search/?query=Flutter", '_blank')!.focus(); }} />




        </div>
        <div className="section videos">
          <h2>Videos</h2>
          <CardTileSquare title="Flutter Course For Beginners" subtitle="By: FreeCodeCamp.org" theme="introHtmlKP" onClick={() => { window.open("https://www.youtube.com/watch?v=VPvVD8t02U8", '_blank')!.focus(); }} />

          <br />
          <CardTileSquare title="Chat App in Flutter and Firebase" subtitle="By: Backslash Flutter" theme="introCSSKP" onClick={() => { window.open("https://www.youtube.com/watch?v=Qwk5oIAkgnY&t=2532s", '_blank')!.focus(); }} />

          <br />
          <CardTileSquare title="Flutter Basic Training" subtitle="By: Fireship" theme="introWebKP" onClick={() => { window.open("https://www.youtube.com/watch?v=1xipg02Wu8s", '_blank')!.focus(); }} />

          <br />
          <CardTileSquare title="Flutter Tutorial for Beginners" subtitle="By: Net Ninja" theme="introHtmlKS" onClick={() => { window.open("https://youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ&si=akM9lSlob8QlJbCD", '_blank')!.focus(); }} />

        </div>

      </div>
      <div className='BackCenter'>
        <CircleButton text="Back" onClick={() => { window.location.href = "/ultimate-programming-guide/Unity/" }} />
      </div>

    </div>
  )
}

export default UnityResources
