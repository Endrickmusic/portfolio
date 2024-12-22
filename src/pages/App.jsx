import { useCallback, useEffect, useState } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { Scroll, Preload, ScrollControls, Environment } from "@react-three/drei"
import { Leva } from "leva"
import { Routes, Route } from "react-router-dom"

import Images from "../components/Images.jsx"
import Typography from "../components/Typo.jsx"
import Shader from "../components/Shader.jsx"
import Model from "../components/model.jsx"
import Tooltip from "../components/Tooltip"
import Page01 from "./Page_01.jsx"
import Page02 from "./Page_02.jsx"

function ResizeHandler() {
  const { gl, camera } = useThree()

  const handleResize = useCallback(() => {
    const { innerWidth, innerHeight } = window
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    gl.setSize(innerWidth, innerHeight)
  }, [gl, camera])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  return null
}

export default function App() {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    position: { x: 0, y: 0 },
  })

  const handlePointerOver = (event, text) => {
    setTooltip({
      visible: true,
      text,
      position: { x: event.clientX, y: event.clientY },
    })
  }

  const handlePointerOut = () => {
    setTooltip({ ...tooltip, visible: false })
  }

  return (
    <>
      <Leva hidden={true} />
      <Routes>
        <Route
          path="/"
          element={
            <Canvas
              camera={{
                position: [0, 0, 20],
                fov: 15,
                near: 0.1,
                far: 1000,
                aspect: window.innerWidth / window.innerHeight,
              }}
            >
              <ResizeHandler />
              <Environment files="./hdri/aerodynamics_workshop_2k.hdr" />
              <ScrollControls damping={0.2} pages={3} distance={0.5}>
                <Scroll>
                  <Typography />
                  <Images />
                  <Shader position={[0, 0, 3]} uSize={0.6} />
                  <Shader position={[0, -1, 7]} uSize={0.005} />
                  <Model
                    scale={0.1}
                    position={[-1, -12, 3]}
                    rotation={[0, 1.1, 0]}
                    onPointerOver={(e) => handlePointerOver(e, "Model")}
                    onPointerOut={handlePointerOut}
                  />
                </Scroll>
                <Scroll html>
                  <div style={{ transform: "translate3d(65vw, 30vh, 0)" }}>
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit.
                  </div>
                  <div style={{ transform: "translate3d(15vw, 120vh, 0)" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div style={{ transform: "translate3d(85vw, 250vh, 0)" }}>
                    Lorem ipsum
                    <br />
                    dolor sit amet,
                    <br />
                    consectetur
                    <br />
                    adipiscing elit.
                  </div>
                </Scroll>
                <Preload />
              </ScrollControls>
            </Canvas>
          }
        />
        <Route path="/page1" element={<Page01 />} />
        <Route path="/page2" element={<Page02 />} />
      </Routes>
      {tooltip.visible && (
        <Tooltip position={tooltip.position} text={tooltip.text} />
      )}
    </>
  )
}
