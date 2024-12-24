import React, { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, useScroll } from "@react-three/drei"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    "./models/Montane_model_instances_ani_01.glb"
  )
  const { actions } = useAnimations(animations, group)
  const scrolling = useScroll()

  useEffect(() => {
    // Pause all animations initially
    Object.values(actions).forEach((action) => {
      if (action) {
        action.play().paused = true
      }
    })
  }, [actions])

  useFrame(() => {
    const scroll = scrolling.offset
    const startScroll = 0.8
    const endScroll = 1.0

    // Define stops with specific animation progress values
    const stops = [
      { scrollAt: 0.85, animationAt: 0.3 }, // At 70% scroll, stop at 30% of animation
      { scrollAt: 0.9, animationAt: 0.6 }, // At 80% scroll, stop at 60% of animation
      { scrollAt: 0.99, animationAt: 0.99 }, // At 90% scroll, stop at 80% of animation
    ]

    // Normalize scroll value
    let normalizedScroll = Math.max(
      0,
      Math.min(0.99, (scroll - startScroll) / (endScroll - startScroll))
    )

    // Find the appropriate animation progress based on stops
    let animationProgress = normalizedScroll
    for (let i = 0; i < stops.length; i++) {
      const currentStop = stops[i]
      const nextStop = stops[i + 1]

      if (normalizedScroll <= currentStop.scrollAt) {
        // Before this stop
        const prevStop = stops[i - 1] || { scrollAt: 0, animationAt: 0 }
        const scrollRange = currentStop.scrollAt - prevStop.scrollAt
        const animationRange = currentStop.animationAt - prevStop.animationAt
        const localProgress =
          (normalizedScroll - prevStop.scrollAt) / scrollRange
        animationProgress =
          prevStop.animationAt + localProgress * animationRange
        break
      } else if (!nextStop) {
        // After last stop
        const remainingScrollRange = 1 - currentStop.scrollAt
        const remainingAnimationRange = 0.99 - currentStop.animationAt
        const localProgress =
          (normalizedScroll - currentStop.scrollAt) / remainingScrollRange
        animationProgress =
          currentStop.animationAt + localProgress * remainingAnimationRange
      }
    }

    Object.values(actions).forEach((action) => {
      if (action) {
        const duration = action.getClip().duration
        action.time = duration * animationProgress
        action.paused = false
      }
    })
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Fascades" position={[0, 18.455, 0]}>
          <group
            name="00_corner"
            position={[-8.789, 16.164, -2.83]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              name="Plane009"
              castShadow
              receiveShadow
              geometry={nodes.Plane009.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane009_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane009_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane009_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane009_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner001"
            position={[14.231, 16.164, -7.571]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          >
            <mesh
              name="Plane009"
              castShadow
              receiveShadow
              geometry={nodes.Plane009.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane009_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane009_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane009_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane009_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_01"
            position={[12.832, 7.126, -1.025]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[2.7, 0.973, 2.15]}
          >
            <mesh
              name="Plane024"
              castShadow
              receiveShadow
              geometry={nodes.Plane024.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane024_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane024_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane024_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane024_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_01001"
            position={[-7.777, 7.126, -1.356]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.7, 0.973, 2.15]}
          >
            <mesh
              name="Plane024"
              castShadow
              receiveShadow
              geometry={nodes.Plane024.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane024_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane024_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane024_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane024_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_01002"
            position={[-7.39, 7.126, -9.376]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={[2.7, 0.973, 2.15]}
          >
            <mesh
              name="Plane024"
              castShadow
              receiveShadow
              geometry={nodes.Plane024.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane024_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane024_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane024_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane024_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_01003"
            position={[13.219, 7.126, -9.045]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[2.7, 0.973, 2.15]}
          >
            <mesh
              name="Plane024"
              castShadow
              receiveShadow
              geometry={nodes.Plane024.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane024_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane024_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane024_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane024_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_02"
            position={[12.822, 11.431, -1.019]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane016"
              castShadow
              receiveShadow
              geometry={nodes.Plane016.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane016_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane016_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane016_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane016_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_02001"
            position={[-7.38, 11.431, -9.382]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane016"
              castShadow
              receiveShadow
              geometry={nodes.Plane016.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane016_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane016_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane016_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane016_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_02002"
            position={[-7.778, 11.431, -1.376]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane016"
              castShadow
              receiveShadow
              geometry={nodes.Plane016.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane016_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane016_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane016_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane016_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_02003"
            position={[13.22, 11.431, -9.025]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane016"
              castShadow
              receiveShadow
              geometry={nodes.Plane016.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane016_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane016_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane016_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane016_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_03"
            position={[12.803, 15.731, -1.021]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane013"
              castShadow
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane013_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane013_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane013_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane013_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_03001"
            position={[-7.361, 15.731, -9.38]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane013"
              castShadow
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane013_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane013_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane013_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane013_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_04"
            position={[12.794, 20.026, -1.015]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane012"
              castShadow
              receiveShadow
              geometry={nodes.Plane012.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane012_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane012_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane012_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane012_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_04001"
            position={[-7.796, 20.026, -1.415]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane012"
              castShadow
              receiveShadow
              geometry={nodes.Plane012.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane012_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane012_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane012_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane012_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_04002"
            position={[-7.352, 20.026, -9.386]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane012"
              castShadow
              receiveShadow
              geometry={nodes.Plane012.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane012_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane012_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane012_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane012_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_corner_04003"
            position={[13.238, 20.026, -8.986]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane012"
              castShadow
              receiveShadow
              geometry={nodes.Plane012.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane012_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane012_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane012_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane012_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_floor_corner"
            position={[12.78, 2.778, -1.045]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Plane032"
              castShadow
              receiveShadow
              geometry={nodes.Plane032.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane032_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_1.geometry}
              material={materials.Fast_Beton}
            />
            <mesh
              name="Plane032_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_2.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane032_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_3.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane032_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_4.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_floor_corner001"
            position={[-7.754, 2.778, -1.416]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              name="Plane032"
              castShadow
              receiveShadow
              geometry={nodes.Plane032.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane032_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_1.geometry}
              material={materials.Fast_Beton}
            />
            <mesh
              name="Plane032_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_2.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane032_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_3.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane032_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_4.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_floor_corner002"
            position={[-7.338, 2.778, -9.357]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          >
            <mesh
              name="Plane032"
              castShadow
              receiveShadow
              geometry={nodes.Plane032.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane032_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_1.geometry}
              material={materials.Fast_Beton}
            />
            <mesh
              name="Plane032_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_2.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane032_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_3.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane032_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_4.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_floor_corner003"
            position={[13.196, 2.778, -8.985]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          >
            <mesh
              name="Plane032"
              castShadow
              receiveShadow
              geometry={nodes.Plane032.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane032_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_1.geometry}
              material={materials.Fast_Beton}
            />
            <mesh
              name="Plane032_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_2.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane032_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_3.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane032_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane032_4.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_floor_large"
            position={[0.052, 2.854, -0.045]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Plane036"
              castShadow
              receiveShadow
              geometry={nodes.Plane036.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane036_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane036_1.geometry}
              material={materials.Fast_Beton}
            />
            <mesh
              name="Plane036_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane036_2.geometry}
              material={materials["Windows.001"]}
            />
            <mesh
              name="Plane036_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane036_3.geometry}
              material={materials["Windows.Frames.001"]}
            />
          </group>
          <group
            name="00_floor_large001"
            position={[5.39, 2.854, -10.356]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          >
            <mesh
              name="Plane036"
              castShadow
              receiveShadow
              geometry={nodes.Plane036.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane036_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane036_1.geometry}
              material={materials.Fast_Beton}
            />
            <mesh
              name="Plane036_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane036_2.geometry}
              material={materials["Windows.001"]}
            />
            <mesh
              name="Plane036_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane036_3.geometry}
              material={materials["Windows.Frames.001"]}
            />
          </group>
          <group
            name="00_floor_small"
            position={[5.939, 2.731, -0.024]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Plane035"
              castShadow
              receiveShadow
              geometry={nodes.Plane035.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane035_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane035_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane035_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane035_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
            <mesh
              name="Plane035_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane035_3.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane035_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane035_4.geometry}
              material={materials.Fast_Beton}
            />
          </group>
          <group
            name="00_floor_small001"
            position={[-0.497, 2.731, -10.378]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          >
            <mesh
              name="Plane035"
              castShadow
              receiveShadow
              geometry={nodes.Plane035.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane035_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane035_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane035_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane035_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
            <mesh
              name="Plane035_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane035_3.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane035_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane035_4.geometry}
              material={materials.Fast_Beton}
            />
          </group>
          <group
            name="00_middle_large_01"
            position={[0.081, 7.456, 0.094]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[3.6, 1, 2.15]}
          >
            <mesh
              name="Plane"
              castShadow
              receiveShadow
              geometry={nodes.Plane.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane_1.geometry}
              material={materials["Windows.001"]}
            />
            <mesh
              name="Plane_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane_2.geometry}
              material={materials["Windows.Frames.001"]}
            />
          </group>
          <group
            name="00_middle_large_01001"
            position={[5.361, 7.456, -10.495]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[3.6, 1, 2.15]}
          >
            <mesh
              name="Plane"
              castShadow
              receiveShadow
              geometry={nodes.Plane.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane_1.geometry}
              material={materials["Windows.001"]}
            />
            <mesh
              name="Plane_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane_2.geometry}
              material={materials["Windows.Frames.001"]}
            />
          </group>
          <group
            name="00_middle_large_02"
            position={[0.04, 11.572, 0.103]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[3.6, 1, 2.15]}
          >
            <mesh
              name="Plane001"
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials["Facade.002"]}
            />
            <mesh
              name="Plane001_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={materials["Windows.002"]}
            />
            <mesh
              name="Plane001_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_2.geometry}
              material={materials["Windows.Frames.002"]}
            />
          </group>
          <group
            name="00_middle_large_02001"
            position={[5.402, 11.572, -10.504]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[3.6, 1, 2.15]}
          >
            <mesh
              name="Plane001"
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials["Facade.002"]}
            />
            <mesh
              name="Plane001_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={materials["Windows.002"]}
            />
            <mesh
              name="Plane001_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_2.geometry}
              material={materials["Windows.Frames.002"]}
            />
          </group>
          <group
            name="00_middle_large_03001"
            position={[5.387, 15.858, -10.455]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[3.6, 1, 2.15]}
          >
            <mesh
              name="Plane010"
              castShadow
              receiveShadow
              geometry={nodes.Plane010.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane010_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane010_1.geometry}
              material={materials["Windows.001"]}
            />
            <mesh
              name="Plane010_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane010_2.geometry}
              material={materials["Windows.Frames.001"]}
            />
          </group>
          <group
            name="00_middle_large_04"
            position={[0.114, 20.188, 0.11]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[3.6, 1, 2.15]}
          >
            <mesh
              name="Plane002"
              castShadow
              receiveShadow
              geometry={nodes.Plane002.geometry}
              material={materials["Facade.003"]}
            />
            <mesh
              name="Plane002_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane002_1.geometry}
              material={materials["Windows.003"]}
            />
            <mesh
              name="Plane002_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane002_2.geometry}
              material={materials["Windows.Frames.003"]}
            />
            <mesh
              name="Plane002_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane002_3.geometry}
              material={materials["Windows.Frames.003"]}
            />
          </group>
          <group
            name="00_middle_large_04001"
            position={[5.328, 20.188, -10.511]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[3.6, 1, 2.15]}
          >
            <mesh
              name="Plane002"
              castShadow
              receiveShadow
              geometry={nodes.Plane002.geometry}
              material={materials["Facade.003"]}
            />
            <mesh
              name="Plane002_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane002_1.geometry}
              material={materials["Windows.003"]}
            />
            <mesh
              name="Plane002_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane002_2.geometry}
              material={materials["Windows.Frames.003"]}
            />
            <mesh
              name="Plane002_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane002_3.geometry}
              material={materials["Windows.Frames.003"]}
            />
          </group>
          <group
            name="00_middle_small_01"
            position={[5.923, 7.134, 0.097]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane006"
              castShadow
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane006_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane006_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane006_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane006_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_middle_small_01001"
            position={[-0.481, 7.134, -10.498]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane006"
              castShadow
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane006_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane006_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane006_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane006_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_middle_small_02"
            position={[6.037, 11.449, 0.106]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane005"
              castShadow
              receiveShadow
              geometry={nodes.Plane005.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane005_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane005_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane005_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane005_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_middle_small_02001"
            position={[-0.596, 11.449, -10.507]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane005"
              castShadow
              receiveShadow
              geometry={nodes.Plane005.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane005_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane005_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane005_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane005_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_middle_small_03"
            position={[5.924, 15.734, 0.081]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane007"
              castShadow
              receiveShadow
              geometry={nodes.Plane007.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane007_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane007_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane007_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane007_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_middle_small_03001"
            position={[-0.482, 15.734, -10.482]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane007"
              castShadow
              receiveShadow
              geometry={nodes.Plane007.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane007_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane007_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane007_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane007_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_middle_small_04"
            position={[5.934, 20.028, 0.094]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane008"
              castShadow
              receiveShadow
              geometry={nodes.Plane008.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane008_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane008_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane008_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane008_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_middle_small_04001"
            position={[-0.492, 20.028, -10.496]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane008"
              castShadow
              receiveShadow
              geometry={nodes.Plane008.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane008_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane008_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane008_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane008_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_roof_corner_01"
            position={[12.8, 24.363, -1.059]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Plane031"
              castShadow
              receiveShadow
              geometry={nodes.Plane031.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane031_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane031_1.geometry}
              material={materials.Fast_Beton}
            />
            <mesh
              name="Plane031_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane031_2.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane031_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane031_3.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane031_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane031_4.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_roof_corner_01001"
            position={[-7.358, 24.363, -9.343]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          >
            <mesh
              name="Plane031"
              castShadow
              receiveShadow
              geometry={nodes.Plane031.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane031_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane031_1.geometry}
              material={materials.Fast_Beton}
            />
            <mesh
              name="Plane031_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane031_2.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane031_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane031_3.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane031_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane031_4.geometry}
              material={materials["Windows.Frames.004"]}
            />
          </group>
          <group
            name="00_roof_corner_02"
            position={[-7.793, 24.34, -1.376]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane011"
              castShadow
              receiveShadow
              geometry={nodes.Plane011.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane011_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane011_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane011_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane011_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
            <mesh
              name="Plane011_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane011_3.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane011_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane011_4.geometry}
              material={materials.Fast_Beton}
            />
          </group>
          <group
            name="00_roof_corner_02001"
            position={[13.235, 24.34, -9.025]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[2.7, 1, 2.15]}
          >
            <mesh
              name="Plane011"
              castShadow
              receiveShadow
              geometry={nodes.Plane011.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane011_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane011_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane011_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane011_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
            <mesh
              name="Plane011_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane011_3.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane011_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane011_4.geometry}
              material={materials.Fast_Beton}
            />
          </group>
          <group
            name="00_roof_large"
            position={[0.113, 24.504, 0.089]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Plane034"
              castShadow
              receiveShadow
              geometry={nodes.Plane034.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane034_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane034_1.geometry}
              material={materials.Fast_Beton}
            />
            <mesh
              name="Plane034_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane034_2.geometry}
              material={materials["Facade.003"]}
            />
            <mesh
              name="Plane034_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane034_3.geometry}
              material={materials["Windows.003"]}
            />
            <mesh
              name="Plane034_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane034_4.geometry}
              material={materials["Windows.Frames.003"]}
            />
          </group>
          <group
            name="00_roof_large001"
            position={[5.329, 24.504, -10.491]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          >
            <mesh
              name="Plane034"
              castShadow
              receiveShadow
              geometry={nodes.Plane034.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane034_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane034_1.geometry}
              material={materials.Fast_Beton}
            />
            <mesh
              name="Plane034_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane034_2.geometry}
              material={materials["Facade.003"]}
            />
            <mesh
              name="Plane034_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane034_3.geometry}
              material={materials["Windows.003"]}
            />
            <mesh
              name="Plane034_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane034_4.geometry}
              material={materials["Windows.Frames.003"]}
            />
          </group>
          <group
            name="00_roof_small"
            position={[5.949, 24.417, -0.012]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Plane004"
              castShadow
              receiveShadow
              geometry={nodes.Plane004.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane004_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane004_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
            <mesh
              name="Plane004_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_3.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane004_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_4.geometry}
              material={materials.Fast_Beton}
            />
          </group>
          <group
            name="00_middle_large_03"
            position={[0.055, 15.858, 0.054]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[3.6, 1, 2.15]}
          >
            <mesh
              name="Plane010"
              castShadow
              receiveShadow
              geometry={nodes.Plane010.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane010_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane010_1.geometry}
              material={materials["Windows.001"]}
            />
            <mesh
              name="Plane010_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane010_2.geometry}
              material={materials["Windows.Frames.001"]}
            />
          </group>
          <group
            name="00_roof_small001"
            position={[-0.507, 24.417, -10.389]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          >
            <mesh
              name="Plane004"
              castShadow
              receiveShadow
              geometry={nodes.Plane004.geometry}
              material={materials["Facade.005"]}
            />
            <mesh
              name="Plane004_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_1.geometry}
              material={materials["Windows.005"]}
            />
            <mesh
              name="Plane004_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_2.geometry}
              material={materials["Windows.Frames.004"]}
            />
            <mesh
              name="Plane004_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_3.geometry}
              material={materials["Facade.001"]}
            />
            <mesh
              name="Plane004_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_4.geometry}
              material={materials.Fast_Beton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("./models/Montane_model_instances_ani_01.glb")
