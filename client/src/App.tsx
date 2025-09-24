import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Globe from './components/Globe'
import './App.css'

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="absolute top-4 left-4 z-10 text-white">
        <h1 className="text-3xl font-bold">Terra Spots</h1>
        <p className="text-lg opacity-80">Explorez le monde en 3D</p>
      </div>
      
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Globe />
        <OrbitControls 
          enablePan={false} 
          minDistance={2} 
          maxDistance={10}
        />
      </Canvas>
    </div>
  )
}

export default App