import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect } from 'react'
import { Vector3 } from 'three'
import './index.css'

import Img_About from './Img_About.jsx'
import Img_Ocean from './Img_Ocean.jsx'
import Img_Transmissive from './Img_Transmissive.jsx'
import ShaderText_Y from './ShaderText_Y.jsx'
import ShaderText_Z from './ShaderText_Z.jsx'


function App() {
  

  function Rig() {
    const { camera } = useThree()
    const vec = new Vector3()
  
    return useEffect(() => {
      camera.lookAt(0, 2, 0)
    }), []
  }

  return (
  <>
    
    <Canvas
    camera={{ 
      position: [0, -3, 12],
      fov: 40,
      near: 0.1, 
      far: 2000
    }}  
    >
    <Rig />

      <color attach="background" args={[0x242426]} />
      
      {/* <OrbitControls /> */}



      <directionalLight 
      position={[0.2, 0.1, 0.2]} 
      intensity={0.35} 
      shadow-mapSize={1024}
      castShadow
      />

      <directionalLight 
      position={[-0.2, 0.15, 0.2]} 
      intensity={0.55} 
      shadow-mapSize={1024}
      castShadow
      />

      <directionalLight 
      position={[-2.2, 1.1, 0.2]} 
      intensity={0.35} 
      shadow-mapSize={1024}
      castShadow
      />

      <directionalLight 
      position={[-3.2, 1.15, 0.2]} 
      intensity={0.55} 
      shadow-mapSize={1024}
      castShadow
      />

      <ambientLight 
      intensity={1.5}
      />

    <Img_About />  
    <Img_Ocean />  
    <Img_Transmissive />  
    <ShaderText_Y />
    <ShaderText_Z />
    </Canvas>
  </>
  )
}

export default App
