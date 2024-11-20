import { useThree } from "@react-three/fiber"
import { Text } from "@react-three/drei"

export default function Typography() {
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
