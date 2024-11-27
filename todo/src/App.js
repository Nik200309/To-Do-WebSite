import logo from './logo.svg';
import './App.css';
import user from './img/user.png'
import Navbar from './Components/Navbar.js';
import React from 'react';
import "./Styles/columns.css"
import ProfileBar from "./Components/ProfileBar.js"; 


function App() {
  return (
    <div className="App">
      <body>
      <React.Fragment>
         <Navbar/>
      </React.Fragment>
      <div className='main'> 
        <aside className='left'>
          left
        </aside>
        <main>
          Main content
        </main>
        <aside className='right'> 
          right
        </aside>
      </div>
      </body>
    </div>
  );
}



export default App;
