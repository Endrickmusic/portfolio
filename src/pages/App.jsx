import { useState } from "react"
import { Leva } from "leva"
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom"
import { Overlay } from "../components/Overlay"

import Tooltip from "../components/Tooltip"

import Home from "./Home.jsx"
import Page01 from "./Page_01.jsx"
import Page02 from "./Page_02.jsx"
import Page03 from "./Page_03.jsx"
import Page04 from "./Page_04.jsx"
import Page05 from "./Page_05.jsx"
import Page06 from "./Page_06.jsx"
import About from "./About.jsx"

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
        <Route path="/" element={<Layout />} />
        <Route path="/page1" element={<Layout />} />
        <Route path="/page2" element={<Layout />} />
        <Route path="/page3" element={<Layout />} />
        <Route path="/page4" element={<Layout />} />
        <Route path="/page5" element={<Layout />} />
        <Route path="/page6" element={<Layout />} />
        <Route path="/about" element={<Layout />} />
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
      </Routes>
      {tooltip.visible && (
        <Tooltip position={tooltip.position} text={tooltip.text} />
      )}
    </>
  )
}

function Layout() {
  const location = useLocation()

  return (
    <div className="absolute z-20">
      <nav className="border-transparent">
        <ul className="flex justify-start mx-6 m-3 space-x-5 border-transparent">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "underline" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "underline" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/page1"
              className={location.pathname === "/page1" ? "underline" : ""}
            >
              Page 1
            </Link>
          </li>
          <li>
            <Link
              to="/page2"
              className={location.pathname === "/page2" ? "underline" : ""}
            >
              Page 2
            </Link>
          </li>
          <li>
            <Link
              to="/page3"
              className={location.pathname === "/page3" ? "underline" : ""}
            >
              Page 3
            </Link>
          </li>
          <li>
            <Link
              to="/page4"
              className={location.pathname === "/page4" ? "underline" : ""}
            >
              Page 4
            </Link>
          </li>
          <li>
            <Link
              to="/page5"
              className={location.pathname === "/page5" ? "underline" : ""}
            >
              Page 5
            </Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  )
}
