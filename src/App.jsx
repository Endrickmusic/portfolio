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
    uResolution: { value: new THREE.Vector2(viewport.width, viewport.height) },
  }

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime
  })

  return (
    <mesh position={[0, -viewport.height * 1, 10]}>
      <planeGeometry args={[viewport.width, viewport.height]} />
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
          uniform vec2 uResolution;
          varying vec2 vUv;

          float sdSphere(vec3 p, float r) {
            return length(p) - r;
          }

          float map(vec3 p) {
            vec3 spherePos = p - vec3(sin(uTime) * 0.5, cos(uTime) * 0.5, 0.0);
            return sdSphere(spherePos, 0.5);
          }

          vec3 calcNormal(vec3 p) {
            vec2 e = vec2(0.001, 0.0);
            return normalize(vec3(
              map(p + e.xyy) - map(p - e.xyy),
              map(p + e.yxy) - map(p - e.yxy),
              map(p + e.yyx) - map(p - e.yyx)
            ));
          }

          void main() {
            // Convert UV to screen coordinates
            vec2 screenPos = (vUv * 2.0 - 1.0) * vec2(uResolution.x/uResolution.y, 1.0);
            
            // Ray origin and direction
            vec3 ro = vec3(0.0, 0.0, -2.0);
            vec3 rd = normalize(vec3(screenPos, 1.0));
            
            vec3 col = vec3(0.0);  // Background color
            float t = 0.0;
            vec3 p = ro;

            // Raymarching loop
            for(int i = 0; i < 64; i++) {
              float d = map(p);
              if(d < 0.001) {
                // Hit something
                vec3 normal = calcNormal(p);
                vec3 lightDir = normalize(vec3(1.0, 1.0, -1.0));
                float diff = max(dot(normal, lightDir), 0.0);
                col = vec3(0.5 + 0.5 * diff);
                break;
              }
              if(t > 10.0) break;  // Ray distance limit
              
              p += rd * d;
              t += d;
            }
            
            gl_FragColor = vec4(col, 1.0);
          }
        `}
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
