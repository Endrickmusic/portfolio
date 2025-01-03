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
      <ScrollControls damping={0.2} pages={3} distance={0.5}>
        <Scroll>
          <Typography />
          <Images />
          <Shader position={[0, 0, 3]} uSize={0.6} />
          {/* <Shader position={[0, -1, 7]} uSize={0.005} /> */}
          <Model
            scale={0.1}
            position={[-1, -12, 3]}
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
          <Particles position={[0, -5, 8]} />
        </Scroll>
        <Scroll html>
          <div
            className="serif text-2xl"
            style={{ transform: "translate3d(65vw, 30vh, 0)" }}
          >
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </div>
          <div
            className="serif text-2xl"
            style={{ transform: "translate3d(15vw, 120vh, 0)" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div
            className="serif text-2xl"
            style={{ transform: "translate3d(85vw, 250vh, 0)" }}
          >
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
  )
}
