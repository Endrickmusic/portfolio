import { useRef, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Image, useScroll, Html, useTexture } from "@react-three/drei"
import { useNavigate } from "react-router-dom"

import ComputeShader from "./ComputeShader.jsx"

export default function Images() {
  const navigate = useNavigate()
  const group = useRef()
  const data = useScroll()
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const { width, height } = useThree((state) => state.viewport)

  const isMobile = width < 4

  const diffuseMap = useTexture("./textures/Portrait_02.jpg")
  useFrame(() => {
    group.current.children[0].material.zoom = 1.2 - data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[5].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3
  })

  const handleClick = (path) => {
    navigate(path)
  }

  const imageLabels = [
    "Color Cube",
    "Vellum Dance",
    "Dispersion",
    "Kudamm Money",
    "About",
    "Ocean Iridescent",
    "Cloud",
  ]

  const imagePositions = [
    isMobile ? [-0.4, 0.25, 0] : [-2, 0, 0],
    isMobile ? [0.5, -0.95, 3] : [2, 0, 3],
    isMobile ? [-0.5, -height * 1.8, 6] : [-2.05, -height * 2.4, 6],
    isMobile ? [0.5, -height * 2.6, 9] : [-0.6, -height * 2.4, 9],
    isMobile ? [-0.5, -height * 3.4, 2] : [1.9, -height * 2.4, 2],
    isMobile ? [0.5, -height * 4.2, 7.5] : [1, -height * 3.4, 7.5],
    [0, -height * 4.4, 0],
  ]

  return (
    <group ref={group}>
      <Image
        position={imagePositions[0]}
        scale={isMobile ? [2.1, height * 0.6, 1] : [4 * 0.9, height * 0.9, 1]}
        url="./img/Colorcube_octane_15.png"
        onClick={() => handleClick("/page1")}
        onPointerEnter={() => setHoveredIndex(0)}
        onPointerLeave={() => setHoveredIndex(-1)}
        onPointerOver={(e) => {
          document.body.style.cursor = "pointer"
          e.stopPropagation()
        }}
        onPointerOut={(e) => {
          document.body.style.cursor = "auto"
          e.stopPropagation()
        }}
      />
      <Image
        position={imagePositions[1]}
        scale={isMobile ? 1.5 : 3}
        url="./img/vellum_dance.png"
        onClick={() => handleClick("/page2")}
        onPointerEnter={() => setHoveredIndex(1)}
        onPointerLeave={() => setHoveredIndex(-1)}
        onPointerOver={(e) => {
          document.body.style.cursor = "pointer"
          e.stopPropagation()
        }}
        onPointerOut={(e) => {
          document.body.style.cursor = "auto"
          e.stopPropagation()
        }}
      />
      <Image
        position={[-1.6, -height * 1.0, 9]}
        scale={[1.2, 2.3, 1.2]}
        url="./img/kudamm_05.png"
        onClick={() => handleClick("/page4")}
        onPointerEnter={() => setHoveredIndex(3)}
        onPointerLeave={() => setHoveredIndex(-1)}
        onPointerOver={(e) => {
          document.body.style.cursor = "pointer"
          e.stopPropagation()
        }}
        onPointerOut={(e) => {
          document.body.style.cursor = "auto"
          e.stopPropagation()
        }}
      />
      <ComputeShader
        position={[2.3, -height * 0.9, 2.2]}
        scale={0.0045}
        rotation={[1.9 * Math.PI, -0.15 * Math.PI, 0]}
        diffuseMap={diffuseMap}
        color="#ffffff"
        onClick={() => handleClick("/about")}
        onPointerEnter={() => setHoveredIndex(4)}
        onPointerLeave={() => setHoveredIndex(-1)}
        onPointerOver={(e) => {
          document.body.style.cursor = "pointer"
          e.stopPropagation()
        }}
        onPointerOut={(e) => {
          document.body.style.cursor = "auto"
          e.stopPropagation()
        }}
      />
      <Image
        position={[1.7, -height * 2.0, 7.5]}
        scale={[1.3, 2.8, 0.8]}
        url="./img/ocean_iridescent_05.png"
        onClick={() => handleClick("/page3")}
        onPointerEnter={() => setHoveredIndex(5)}
        onPointerLeave={() => setHoveredIndex(-1)}
        onPointerOver={(e) => {
          document.body.style.cursor = "pointer"
          e.stopPropagation()
        }}
        onPointerOut={(e) => {
          document.body.style.cursor = "auto"
          e.stopPropagation()
        }}
      />
      <Image
        position={[0, -height * 2.2, 0]}
        scale={[width / 2.1, height * 1.1, 1]}
        url="./img/nohdri0114.png"
        onClick={() => handleClick("/page6")}
        onPointerEnter={() => setHoveredIndex(6)}
        onPointerLeave={() => setHoveredIndex(-1)}
        onPointerOver={(e) => {
          document.body.style.cursor = "pointer"
          e.stopPropagation()
        }}
        onPointerOut={(e) => {
          document.body.style.cursor = "auto"
          e.stopPropagation()
        }}
      />
      {hoveredIndex !== -1 && (
        <Html
          position={imagePositions[hoveredIndex]}
          style={{
            pointerEvents: "none",
          }}
          center
        >
          <div
            style={{
              background: "white",
              border: "1px solid black",
              padding: "10px 20px",
              color: "#000000",
              borderRadius: "1px",
              transform: "translate(0, -100%)",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              zIndex: 1000,
            }}
          >
            {imageLabels[hoveredIndex]}
          </div>
        </Html>
      )}
    </group>
  )
}
