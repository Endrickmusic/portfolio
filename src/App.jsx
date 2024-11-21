import * as THREE from "three"
import { useCallback, useEffect } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { Scroll, Preload, ScrollControls, Plane } from "@react-three/drei"

import Images from "./Images.jsx"
import Lens from "./Lens.jsx"
import Typography from "./Typo.jsx"
import Shader from "./Shader.jsx"

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
  return (
    <Canvas
      camera={{
        position: [0, 0, 10],
        fov: 35,
        near: 0.1,
        far: 1000,
        aspect: window.innerWidth / window.innerHeight,
      }}
    >
      <ResizeHandler />
      <ScrollControls damping={0.2} pages={3} distance={0.5}>
        {/* <Lens> */}
        <Scroll>
          <Typography />
          <Images />
          <Shader />
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
        {/** This is a helper that pre-emptively makes threejs aware of all geometries, textures etc
               By default threejs will only process objects if they are "seen" by the camera leading 
               to jank as you scroll down. With <Preload> that's solved.  */}
        <Preload />
        {/* </Lens> */}
      </ScrollControls>
    </Canvas>
  )
}
