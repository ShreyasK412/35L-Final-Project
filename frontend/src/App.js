import './App.css'
import React from 'react'
import Navbar from "./Components/Navbar"
import Home from "./Pages/home"
import Scores from './Pages/Scores/scores'
import News from './Pages/news'
import Posts from './Pages/posts'
import Basketball from './Pages/Scores/Basketball/basketball'
import Soccer from './Pages/Scores/Soccer/soccer'
import Football from './Pages/Scores/Football/football'

function App () {  
    let component
   switch (window.location.pathname) {
      case "/":
      component = <Home />
      break
      case "/home":
      component = <Home />
      break
      case "/scores":
      component = <Scores />
      break
      case "/news":
      component = <News />
      break
      case "/posts":
      component = <Posts />
      break
      case "/basketball":
      component = <Basketball />
      break
      case "/soccer":
        component = <Soccer />
        break
      case "/football":
        component = <Football />
        break

   }
    return (<>
    <Navbar/>
    <div className='container'> {component}
    </div>
    
    </>); 
}

export default App






















