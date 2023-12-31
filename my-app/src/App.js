import React from 'react';
import './App.css'; 

import NavBar from './components/NavBar.jsx'; 
import CenterBlock from './components/CenterBlock'; 
import Sidebar from './components/SideBar'; 
import PlayerBar from './components/PlayerBar'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <CenterBlock />
            <Sidebar />
          </main>
          <PlayerBar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;