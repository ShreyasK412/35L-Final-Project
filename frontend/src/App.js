import Logo from './logo.svg'
import './App.css'
import React from 'react'
import Navbar from "./Components/Navbar"
import About from "./Pages/about"
import Home from "./Pages/home"
import Scores from './Pages/scores'
import News from './Pages/news'
import Posts from './Pages/posts'

function App () { 
    let component
   switch (window.location.pathname) {
     case "/about":
      component = <About />
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
    {component}
    </>); 
}

export default App





















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
