import { useState } from "react"
import { Leva } from "leva"
import { Routes, Route } from "react-router-dom"

import { Navigation } from "../components/Navigation.jsx"
import { Overlay } from "../components/Overlay.jsx"
import Tooltip from "../components/Tooltip.jsx"

import Home from "./Home.jsx"
import Page01 from "./Page_01.jsx"
import Page02 from "./Page_02.jsx"
import Page03 from "./Page_03.jsx"
import Page04 from "./Page_04.jsx"
import Page05 from "./Page_05.jsx"
import Page06 from "./Page_06.jsx"
import About from "./About.jsx"
import Imprint from "./Imprint.jsx"

export default function App() {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    position: { x: 0, y: 0 },
  })

  return (
    <>
      <Leva hidden={true} />

      {/* Overlay route */}
      <Routes>
        {/* <Route
          path="/overlay"
          element={
            <Overlay
              email="mail@christianhohenbild.de"
              title="Creative Whatever"
              date="09/12/2024"
            />
          }
        /> */}
        <Route path="/" element={<Navigation />} />
        <Route path="/page1" element={<Navigation />} />
        <Route path="/page2" element={<Navigation />} />
        <Route path="/page3" element={<Navigation />} />
        <Route path="/page4" element={<Navigation />} />
        <Route path="/page5" element={<Navigation />} />
        <Route path="/page6" element={<Navigation />} />
        <Route path="/about" element={<Navigation />} />
        <Route path="/imprint" element={<Navigation />} />
      </Routes>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/page1" element={<Page01 />} />
        <Route path="/page2" element={<Page02 />} />
        <Route path="/page3" element={<Page03 />} />
        <Route path="/page4" element={<Page04 />} />
        <Route path="/page5" element={<Page05 />} />
        <Route path="/page6" element={<Page06 />} />
        <Route path="/about" element={<About />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
      {tooltip.visible && (
        <Tooltip position={tooltip.position} text={tooltip.text} />
      )}
    </>
  )
}
