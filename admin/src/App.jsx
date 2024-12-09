import React from 'react'
import Navber from './components/Navber/Navber'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div>
     <Navber/>
     <hr/>
     <div className="app-content">
      <Sidebar/>
     </div>
    </div>
  )
}

export default App
