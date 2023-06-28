import Navbar from './assets/components/Navbar'
import MiApi from './assets/components/MiApi'
import './App.css'

function App() {
  

  return (
    <>
    <Navbar brand="Rick y Morty"/>
    <div className="gallery">
      <div className="box">
        <MiApi/>
      </div>
    </div>
    </>
  )
}

export default App
