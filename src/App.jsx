import * as THREE from "three"
import { useRef, useState } from "react"
import { Canvas, createPortal, useFrame, useThree } from "@react-three/fiber"
import {
  useFBO,
  useGLTF,
  useScroll,
  Text,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  useTexture,
  useEnvironment,
} from "@react-three/drei"
import { easing } from "maath"

import Images from "./Images.jsx"

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
      <ScrollControls damping={0.2} pages={3} distance={0.5}>
        <Lens>
          <Scroll>
            <Typography />
            <Images />
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
        </Lens>
      </ScrollControls>
    </Canvas>
  )
}

function Lens({ children, damping = 0.15, ...props }) {
  const ref = useRef()
  // const { nodes } = useGLTF('/lens-transformed.glb')
  const roughnessMap = useTexture("./Textures/waternormals.jpeg")
  const buffer = useFBO()
  const viewport = useThree((state) => state.viewport)
  const [scene] = useState(() => new THREE.Scene())
  useFrame((state, delta) => {
    // Tie lens to the pointer
    // getCurrentViewport gives us the width & height that would fill the screen in threejs units
    // By giving it a target coordinate we can offset these bounds, for instance width/height for a plane that
    // sits 15 units from 0/0/0 towards the camera (which is where the lens is)
    const viewport = state.viewport.getCurrentViewport(state.camera, [0, 0, 15])
    easing.damp3(
      ref.current.position,
      [
        (state.pointer.x * viewport.width) / 2,
        (state.pointer.y * viewport.height) / 2,
        15,
      ],
      damping,
      delta
    )
    // This is entirely optional but spares us one extra render of the scene
    // The createPortal below will mount the children of <Lens> into the new THREE.Scene above
    // The following code will render that scene into a buffer, whose texture will then be fed into
    // a plane spanning the full screen and the lens transmission material
    state.gl.setRenderTarget(buffer)
    state.gl.setClearColor("#d8d7d7")
    state.gl.render(scene, state.camera)
    state.gl.setRenderTarget(null)

    // Rotation of the cube
    ref.current.rotation.x = ref.current.rotation.y += delta / 3
  })
  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} />
      </mesh>
      <mesh
        scale={0.35}
        ref={ref}
        rotation={[Math.PI / 3, Math.PI / 3, Math.PI / 3]}
        // geometry={nodes.Cylinder.geometry}
        {...props}
      >
        <boxGeometry />
        <MeshTransmissionMaterial
          // buffer={buffer.texture}
          buffer={false}
          ior={1.2}
          thickness={1.5}
          anisotropy={0.1}
          chromaticAberration={0.04}
          roughness={0.2}
          backside={true}
          backsideThickness={0.1}
          transmission={1}
        />
      </mesh>
    </>
  )
}

function Typography() {
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(
    state.camera,
    [0, 0, 12]
  )
  const shared = {
    font: "/Inter-Regular.woff",
    letterSpacing: -0.07,
    color: "black",
  }
  return (
    <>
      <Text
        children="Lorem"
        anchorX="left"
        position={[-width / 2.5, -height / 10, 12]}
        {...shared}
      />
      <Text
        children="Ipsum"
        anchorX="right"
        position={[width / 2.5, -height * 2, 12]}
        {...shared}
      />
      <Text children="dolor." position={[0, -height * 4.624, 12]} {...shared} />
    </>
  )
}
