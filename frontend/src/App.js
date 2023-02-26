import logo from './logo.svg';
import './App.css';
import React ,{useState}from 'react'
function App() {
const [data,setData]=useState(null)
const [print,setPrint]=useState(false)

  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
     {
       print?
       <h1> {data}</h1>
       :null
     }
    <input type="text" onChange={getData} />
    <button onClick={()=>setPrint(true)} >Print Data</button>
    </div>
  );
}

export default App;





















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
