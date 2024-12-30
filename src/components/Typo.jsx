import { useThree } from "@react-three/fiber"
import { Text } from "@react-three/drei"

export default function Typography() {
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(
    state.camera,
    [0, 0, 12]
  )
  const shared = {
    font: "./fonts/Inter-Regular.woff",
    letterSpacing: -0.07,
    color: "black",
  }
  return (
    <>
      <Text
        children="3D Art"
        anchorX="left"
        position={[-0.6, -0.35, 12]}
        fontSize={0.7}
        {...shared}
      />
      <Text
        children="Coding"
        anchorX="right"
        position={[1.8, -6.0, 12]}
        fontSize={0.7}
        {...shared}
      />
      <Text
        children="Animation"
        position={[0, -height * 4.66, 12]}
        fontSize={0.8}
        {...shared}
      />
    </>
  )
}
