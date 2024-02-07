import { Canvas } from '@react-three/fiber'

import './index.css'
import Model from './Model.jsx'
import { OrbitControls } from '@react-three/drei'

function App() {
  
  return (
  <>
    
    <Canvas
    camera={{ 
      position: [0, 0, 2],
      fov: 40 }}  
    >
      <color attach="background" args={[0x999999]} />
      <OrbitControls />
    <Model />  
    </Canvas>
  </>
  )
}

export default App
