import React from 'react'
import TextForm from './TextForm'

const Home = ({mode,showAlert}) => {
  return (
    <div className="container mt-4 mb-2">
        <TextForm heading={"Write your text here"} bodymode={mode} showAlert={showAlert} />
    </div>
  )
}

export default Home