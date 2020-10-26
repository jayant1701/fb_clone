import React from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widget from './components/Widget'
import Login from './Login'
import { useStateValue } from './StateProvider'

function App() {

  const [{user},dispatch]=useStateValue()

  return (
    <div className="App">
      { !user ?
         (<Login/>)
          :(<>
              <Header />
              <div className="app__body">
                <Sidebar/>
                <Feed/>
                <Widget/>
              </div>
            </>
           )}
    </div>
  )
}

export default App;
