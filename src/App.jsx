import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx'
import Blob from './Blob.jsx'
import Ocean from './Ocean.jsx'

class App extends Component {
  render() {
    return (
    <>
      <div>
      <a href='/Ocean.jsx' />
      </div>

    <Router>
          <Routes>
           <Route exact path="/" element={<Home />} />
           <Route path="/blob" element={<Blob />} />
           <Route path="/ocean" element={<Ocean />} />
          </Routes>
      </Router>
      </>
    )
  }
}

export default App;