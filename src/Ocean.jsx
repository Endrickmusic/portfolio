import { Canvas } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'

import './index.css'
import Shader from './Ocean_Shader.jsx'

function App() {
  
  let nav = useNavigate()

  return (
  <>
    <button onClick={ (e) => {nav('/')} }>H o m e &rarr;</button>
    <Canvas
    camera={{ 
      position: [0, 0, 2],
      fov: 40 }}  
    >
      <color attach="background" args={[0x999999]} />
      
      <Shader />
    </Canvas>
  </>
  )
}

export default App
