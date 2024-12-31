import { useCallback, useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { Scroll, Preload, ScrollControls, Environment } from "@react-three/drei"

// import { useNavigate } from "react-router-dom"

import Images from "../components/Images.jsx"
import Typography from "../components/Typo.jsx"
import Shader from "../components/Shader.jsx"
import Model from "../components/Model_Instances.jsx"
import Particles from "../components/Particles.jsx"

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

// const navigate = useNavigate()

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

export default function Home() {
  return (
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
      <ScrollControls damping={0.2} pages={3.0}>
        <Scroll>
          <Typography />
          <Images />
          <Shader position={[0, 0, 3]} uSize={0.6} />
          {/* <Shader position={[0, -1, 7]} uSize={0.005} /> */}
          <Model
            scale={0.1}
            position={[-1.5, -12.5, 3]}
            rotation={[0, 1.1, 0]}
            onPointerEnter={(e) => handlePointerOver(e, "Model")}
            onPointerLeave={handlePointerOut}
            onPointerOver={(e) => {
              document.body.style.cursor = "pointer"
              e.stopPropagation()
            }}
            onPointerOut={(e) => {
              document.body.style.cursor = "auto"
              e.stopPropagation()
            }}
            onClick={() => navigate("/page5")}
          />
          <Particles position={[-0.4, -5.6, 10]} scale={0.6} />
        </Scroll>
        <Scroll html>
          <div
            className="serif text-2xl"
            style={{ transform: "translate3d(56vw, 5vh, 0)" }}
          >
            Please click the
            <br />
            images to see content.
          </div>
          <div
            className="serif text-2xl text-white"
            style={{ transform: "translate3d(11vw, 127vh, 0)" }}
          >
            Play with the particles.
            {/* <br />
            and the photo. */}
          </div>
          <div
            className="serif text-lg text-gray-500"
            style={{ transform: "translate3d(2vw, 220vh, 0)" }}
          >
            Inspiration and ideas
            <br />
            Fundamentals
            <br />
            Finding models
            <br />
            Preparing them for the web
            <br />
            Displaying and changing models
            <br />
            Animation fundamentals
            <br />
            Effects and making things look good
            <br />
            Performance and time to load
            <br />
          </div>
        </Scroll>
        <Preload />
      </ScrollControls>
    </Canvas>
  )
}
