import './App.css';
import Header from './components/Header.js';
import Toggler from './components/Toggler.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import React from "react";

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
      <Header />  
      <Toggler darkMode={darkMode} toggleDarkMode={toggleDarkMode} />   
      <Main darkMode={darkMode} />      
      <Footer darkMode={darkMode} />      
    </div>
  );
}

export default App;
