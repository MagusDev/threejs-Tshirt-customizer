import Canvas from "./canvas"
import Customizer from "./Pages/Customizer"
import Home from "./Pages/Home"

function App() {
  

  return (
   <main className="app transition-all ease-in">
      <Home/>
      <Canvas/>
      <Customizer/>
   </main>

  )
}

export default App
