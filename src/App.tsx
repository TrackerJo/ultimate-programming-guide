import './App.css'
import CardTileVertical from './Components/CardTiles/Card_Tile_Vertical'
import FallingCode from './Components/FallingCode/falling_code'


function App() {


  return (

    <div id="welcome" className="selectedDiv">
      <FallingCode />
      <h1 className="title">Welcome!</h1>
      <p className="subtitle" data-value="Learn to code for free">Learn all aspects of computer science so you can build your dream projets</p>
      <div className='courses'>
        <CardTileVertical title="Web Design" subtitle="Learn all the ins and outs of Web Design" theme="web" onClick={() => { window.location.href = "/ultimate-programming-guide/WebDesign/" }} />
        <CardTileVertical title="Unity" subtitle="Learn the fundamentals of Unity and learn how to make your own game" theme="unity" onClick={() => { window.location.href = "/ultimate-programming-guide/Unity/" }} />
        <CardTileVertical title="Flutter" subtitle="Learn the popular cross platform programming kit made by Google and learn how to make your own mobile app" theme="flutter" onClick={() => { window.location.href = "/ultimate-programming-guide/Flutter/" }} />
        {/* <CardTileVertical title="Raspberry Pi" subtitle="Learn how to use a Raspberry Pi and make cool projects" theme="raspberry" onClick={() => {window.location.href = "/ultimate-programming-guide/Raspberry/"}}/>
          <CardTileVertical title="Thunkable" subtitle="Learn to use a drag and drop platfrom to make your own app" theme="thunkable" onClick={() => {window.location.href = "/ultimate-programming-guide/Thunkable/"}}/>
          <CardTileVertical title="Git & Github" subtitle="Learn how to use a source control application used in the real world" theme="git" onClick={() => {window.location.href = "/ultimate-programming-guide/Git/"}}/>
          <CardTileVertical title="Python" subtitle="Learn a popular beginner language, used for data processing and machine learning" theme="python" onClick={() => {window.location.href = "/ultimate-programming-guide/Python/"}}/> */}

      </div>

    </div>


  )
}

export default App
