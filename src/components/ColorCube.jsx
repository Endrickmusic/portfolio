import { useRef, useMemo, useReducer } from "react"
import {
  OrbitControls,
  useTexture,
  MeshTransmissionMaterial,
  useEnvironment,
  useGLTF,
  Image,
  useVideoTexture,
} from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { DoubleSide, Vector3, MathUtils } from "three"
import { easing } from "maath"
import { Perf } from "r3f-perf"
import {
  CuboidCollider,
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier"

const accents = ["#E36702", "#E7CECB", "#E16174", "#B9C449"]
const shuffle = (accent = 0) => [
  { color: "#ffffff", roughness: 0.3 },
  { color: "#ffffff", roughness: 0.75 },
  { color: "#6547C7", roughness: 0.75 },
  { color: "#E5C935", roughness: 0.1 },
  // { color: "#E5C935", roughness: 0.75 },
  // { color: "#E5C935", roughness: 0.1 },
  { color: accents[accent], roughness: 0.5, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  // { color: accents[accent], roughness: 0.4, accent: true },
]

export default function Experience() {
  const normalMap_01 = useTexture("./textures/broken_glass.jpg")
  const envMap = useEnvironment({ files: "./hdri/envmap.hdr" })

  const [accent, click] = useReducer((state) => ++state % accents.length, 0)
  const connectors = useMemo(() => shuffle(accent), [accent])

  return (
    <>
      {/* Set background color */}
      <color attach="background" args={["#eeeeaa"]} />

      {/* <Perf position="top-left" /> */}
      {/* <OrbitControls />  */}

      <Physics /*debug*/ gravity={[0, 0, 0]}>
        <Pointer />

        {
          connectors.map((props, i) => <Connector key={i} {...props} />) /* prettier-ignore */
        }
        <Connector position={[10, 10, 5]}>
          <Model>
            <meshStandardMaterial
              normalMap={normalMap_01}
              normalScale={0.1}
              roughness={0.2}
              metalness={0.3}
            />
          </Model>
        </Connector>

        <RigidBody>
          <Images />
        </RigidBody>
      </Physics>
    </>
  )
}

export function Model({ children, color = "white", roughness = 0, ...props }) {
  const { nodes } = useGLTF("./models/shape_01.glb")
  const [normalMap_01, normalMap_02] = useTexture([
    "./textures/broken_glass.jpg",
    "./textures/Asphalt_1.jpg",
  ])
  const modelRef = useRef()
  useFrame((state, delta) => {
    // modelRef.current.rotation.x = modelRef.current.rotation.y += delta / 3
    easing.dampC(modelRef.current.material.color, color, 0.2, delta)
  })

  return (
    <mesh
      castShadow
      receiveShadow
      ref={modelRef}
      geometry={nodes.Shape.geometry}
      rotation={[0, Math.PI, 0]}
      scale={1}
    >
      <MeshTransmissionMaterial
        ior={1.4}
        thickness={0.9}
        anisotropy={0.5}
        chromaticAberration={0.5}
        // backside={true}
        // backsideThickness={0.4}
        normalMap={normalMap_01}
        normalScale={0.07}
        side={DoubleSide}
        roughness={roughness}
        metalness={0.2}
      />

      {children}
    </mesh>
  )
}

useGLTF.preload("./models/shape_01.glb")

function Connector({
  position,
  children,
  vec = new Vector3(),
  scale,
  r = MathUtils.randFloatSpread,
  accent,
  ...props
}) {
  const api = useRef()
  const pos = useMemo(() => position || [r(10), r(10), r(5)], [])
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
    )
  })
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={"hull"}
    >
      {/* <CuboidCollider args={[0.38, 1.27, 0.38]} />
        <CuboidCollider args={[1.27, 0.38, 0.38]} />
        <CuboidCollider args={[0.38, 0.38, 1.27]} /> */}
      {children ? children : <Model {...props} />}
      {accent && (
        <pointLight intensity={3} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  )
}

function Pointer({ vec = new Vector3() }) {
  const ref = useRef()
  useFrame(({ pointer, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      )
    )
  })
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  )
}

function Images() {
  const { width, height } = useThree((state) => state.viewport)
  const group = useRef()
  const videoTexture = useVideoTexture("./video/Color_Cube_220923.mp4")

  return (
    <group ref={group}>
      <Image
        position={[-10, 0, -5]}
        scale={[10 / 1.5, 18 / 1.5, 1]}
        url="./img/colorcube_01.png"
      />
      <mesh position={[0, 0, -5]} scale={[10 / 1.5, 18 / 1.5, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={videoTexture} />
      </mesh>
      <Image
        position={[10, 0, -5]}
        scale={[10 / 1.5, 18 / 1.5, 1]}
        url="./img/Colorcube_octane_15.png"
      />
    </group>
  )
}
