import { Canvas } from "@react-three/fiber"

import BackButton from "../components/BackButton"
import ColorCube from "../components/ColorCube.jsx"

export default function Page03() {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none flex z-[1]"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <h1 className="absolute sans-serif text-4xl top-60 left-60">Ocean</h1>
        <div>
          <video
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/5"
            controls={false}
            preload="none"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="./video/Color_Cube_220923.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 30 }}
        className="absolute z-[2]"
      >
        <ColorCube />
      </Canvas>
      <BackButton />
    </>
  )
}
