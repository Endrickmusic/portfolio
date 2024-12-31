import { Canvas } from "@react-three/fiber"

import ColorCube from "../components/ColorCube.jsx"

export default function Page03() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 30], fov: 30 }}>
        {/* <color attach="background" args={["#eeeeff"]} /> */}
        <ColorCube />
      </Canvas>
    </>
  )
}
