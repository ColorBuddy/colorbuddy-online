import React from 'react'
import { Navigation } from '../navigation/Navigation'
import { Workstation } from '../workstation/Workstation'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Workstation />
    </div>
  )
}

export default App
