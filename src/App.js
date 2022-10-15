import React, { useState } from "react";
import "./App.css";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route
} from "react-router-dom"
import About from "./components/About";
import Home from "./components/Home";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      typ: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#021b33'
      showAlert("Dark Mode is enable now", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode is enable now", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title={"myTextUtils"} about={"About Us"} mode={mode} modechange={toggleMode} />
        <Alerts alertMsg={alert} />
        <Routes>
          <Route exact path="/home" element={<Home mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About mode={mode} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;