import React, { useState } from "react";
import "./App.css";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import About from "./components/About";


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
        <Navbar title="myTextUtils" about="About Us" mode={mode} modechange={toggleMode} />
        <Alerts alertMsg={alert} />
        <Switch>
          <Route path="/home">
            <div className="container mt-4 mb-2">
              <TextForm heading="Write your text here" bodymode={mode} showAlert={showAlert} />
            </div>
          </Route>
          <Route path="/about">
            <About mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;