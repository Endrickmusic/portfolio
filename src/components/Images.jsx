import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Image, useScroll } from "@react-three/drei"
import { useNavigate } from "react-router-dom"

import ComputeShader from "./ComputeShader.jsx"

export default function Images() {
  const navigate = useNavigate()
  const group = useRef()
  const data = useScroll()
  const { width, height } = useThree((state) => state.viewport)
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
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

  return (
    <group ref={group}>
      <Image
        position={[-2, 0, 0]}
        scale={[4, height, 1]}
        url="./img/Colorcube_octane_15.png"
        onClick={() => handleClick("/page1")}
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
        position={[2, 0, 3]}
        scale={3}
        url="./img/crystal_9.png"
        onClick={() => handleClick("/page2")}
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
        position={[-2.05, -height, 6]}
        scale={[1, 3, 1]}
        url="./img/dispersion_octane_08.png"
        onClick={() => handleClick("/page3")}
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
        position={[-0.6, -height, 9]}
        scale={[1, 2, 1]}
        url="./img/more_money_02.png"
        onClick={() => handleClick("/page1")}
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
        position={[1.9, -height, 2]}
        scale={0.0055}
        rotation={[1.9 * Math.PI, -0.15 * Math.PI, 0]}
        onClick={() => handleClick("/page1")}
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
        position={[1, -height * 1.5, 7.5]}
        scale={[1.5, 3, 1]}
        url="./img/ocean_iridescent_05.png"
        onClick={() => handleClick("/page1")}
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
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width / 2, height / 1.1, 1]}
        url="./img/nohdri0114.png"
        onClick={() => handleClick("/page1")}
        onPointerOver={(e) => {
          document.body.style.cursor = "pointer"
          e.stopPropagation()
        }}
        onPointerOut={(e) => {
          document.body.style.cursor = "auto"
          e.stopPropagation()
        }}
      />
    </group>
  )
}
