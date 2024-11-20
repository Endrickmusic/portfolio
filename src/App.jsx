import * as THREE from "three"
import { useCallback, useEffect } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { Scroll, Preload, ScrollControls, Plane } from "@react-three/drei"

import Images from "./Images.jsx"
import Lens from "./Lens.jsx"
import Typography from "./Typo.jsx"

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

function ShaderPlane() {
  const { viewport } = useThree()

  const uniforms = {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color("#ff0000") }, // bright red
    uColor2: { value: new THREE.Color("#0000ff") }, // bright blue
  }

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime
  })

  return (
    <mesh position={[0, -viewport.height * 0.8, 13]}>
      <planeGeometry args={[viewport.width * 0.5, viewport.height * 0.5]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          varying vec2 vUv;

          void main() {
            vec2 center = vec2(0.5);
            float dist = length(vUv - center);

            float wave = sin(dist * 5.0 - uTime * 10.0) * 0.5 + 0.5;
            vec3 color = mix(uColor1, uColor2, wave);

            gl_FragColor = vec4(color, 0.5);
          }
        `}
        transparent={false}
      />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 15 }}
      gl={{ outputColorSpace: THREE.SRGBColorSpace }}
    >
      <ResizeHandler />
      <ScrollControls damping={0.2} pages={3} distance={0.5}>
        <Lens>
          <Scroll>
            <Typography />
            <Images />
            <ShaderPlane />
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
