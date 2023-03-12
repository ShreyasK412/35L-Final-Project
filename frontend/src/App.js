import './App.css'
import React from 'react'
import Navbar from "./Components/Navbar"
import About from "./Pages/about"
import Home from "./Pages/home"
import Scores from './Pages/Scores/scores'
import News from './Pages/news'
import Posts from './Pages/posts'


function App () {  
    let component
   switch (window.location.pathname) {
     case "/about":
      component = <About />
      break
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
     

   }
    return (<>
    <Navbar/>
    <div className='container'> {component}
    </div>
    
    </>); 
}

export default App






















