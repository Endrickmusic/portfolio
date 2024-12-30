import { useThree } from "@react-three/fiber"
import { OrbitControls, useFBO } from "@react-three/drei"
import { useFrame, createPortal } from "@react-three/fiber"
import { useRef, useMemo, useState } from "react"
import {
  NearestFilter,
  RGBAFormat,
  FloatType,
  Scene,
  OrthographicCamera,
} from "three"

import "../shader/particles/simulationMaterial.js"
import "../shader/particles/renderMaterial.js"

import { generatePositions, infoArray } from "../components/dataTextures.jsx"

export default function Particles({
  size = 128,
  position = [0, -4, 3],
  scale = 1,
}) {
  const simRef = useRef()
  const renderRef = useRef()
  const mouseRef = useRef()

  const viewport = useThree((state) => state.viewport)

  // Set up FBO

  const [scene] = useState(() => new Scene())
  const [camera] = useState(
    () => new OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1)
  )
  camera.position.set(0, 0, 0.5)
  camera.lookAt(0, 0, 0)

  let fbo = useFBO(size, size, {
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    format: RGBAFormat,
    type: FloatType,
  })

  let fbo1 = useFBO(size, size, {
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    format: RGBAFormat,
    type: FloatType,
  })

  const { positions, ref } = useMemo(() => {
    // Generate positions and uvs for the particles

    const count = size * size
    const positions = new Float32Array(count * 3)
    const ref = new Float32Array(count * 2)

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let index = i + j * size

        positions[index * 3 + 0] = Math.random()
        positions[index * 3 + 1] = Math.random()
        positions[index * 3 + 2] = 0

        ref[index * 2 + 0] = i / size
        ref[index * 2 + 1] = j / size
      }
    }
    return { positions, ref }
  }, [size])

  useFrame((state) => {
    let time = state.clock.getElapsedTime()

    mouseRef.current.position.set(
      (state.pointer.x * viewport.width) / 2,
      (state.pointer.y * viewport.height) / 2,
      1
    )

    simRef.current.uniforms.uMouse.value = [
      (state.pointer.x * viewport.width) / 2,
      (state.pointer.y * viewport.height) / 2,
    ]

    simRef.current.uniforms.uTime.value = time
    renderRef.current.uniforms.uTime.value = time

    state.gl.setRenderTarget(fbo)
    // state.gl.clear()
    state.gl.render(scene, camera)
    state.gl.setRenderTarget(null)

    simRef.current.uniforms.uPositions.value = fbo.texture
    renderRef.current.uniforms.uPositions.value = fbo1.texture

    // Pass mouse coordinates to shader uniform

    // simRef.current.uniforms.uMouse.value = [mouse.x, mouse.y]
    // console.log(simRef.current.uniforms.uMouse.value)

    // Swap render targets

    let temp = fbo
    fbo = fbo1
    fbo1 = temp
  })

  return (
    <>
      {/* Simulation goes into a FBO/Off-buffer */}
      {createPortal(
        <mesh>
          <planeGeometry args={[2, 2]} />
          <simulationMaterial
            ref={simRef}
            uPositions={generatePositions(size)}
            uInfo={infoArray(size)}
          />
        </mesh>,
        scene
      )}

      {/* <OrbitControls /> */}
      <mesh ref={mouseRef} scale={[0.1, 0.1, 0.1]} visible={false}>
        <sphereGeometry />
        <meshBasicMaterial />
      </mesh>

      <points scale={[scale, scale, scale]} position={position}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-ref"
            count={ref.length / 2}
            array={ref}
            itemSize={2}
          />
        </bufferGeometry>
        <renderMaterial
          ref={renderRef}
          transparent={true}
          uInfo={infoArray(size)}
        />
      </points>
    </>
  )
}
