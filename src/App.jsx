// import logo from './logo.svg'
import './App.css'
import Header from './Components/Header'
import Hotels from './Components/Hotels'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <div className="App">
      <Header/>
      <div className="app-body">
        <Sidebar />
        <Hotels />
      </div>
    </div>
  )
}

export default App
