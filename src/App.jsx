import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import HomePage from './Home.jsx'
import BlobPage from './Blob.jsx'
import OceanPage from './Ocean.jsx'

class App extends Component {
  render() {
    return (
    <>
      <div>
      <a href='/Ocean.jsx' />
      </div>

    <Router>
          <Routes>
           <Route exact path="/Home.jsx" element={<HomePage />} />
           <Route path="/Blob.jsx" element={<BlobPage />} />
           <Route path="/Ocean.jsx" element={<OceanPage />} />
          </Routes>
      </Router>
      </>
    )
  }
}

export default App;