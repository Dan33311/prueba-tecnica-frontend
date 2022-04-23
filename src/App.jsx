// import logo from './logo.svg'
import './App.css'
import Hotels from './Components/Hotels'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <div className="App">
      <Sidebar />
      <div className="app-content">
        <Hotels />
      </div>
    </div>
  )
}

export default App
