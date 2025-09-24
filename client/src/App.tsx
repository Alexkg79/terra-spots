import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Globe from './components/Globe'
import './App.css'

function App() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh',
      overflow: 'hidden'
    }}>
      {/* Header par-dessus le canvas */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        color: 'white'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>
          Terra Spots
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8, margin: 0 }}>
          Explorez le monde en 3D
        </p>
      </div>
      
      {/* Canvas en plein écran */}
      <Canvas 
        style={{ 
          width: '100vw', 
          height: '100vh',
          background: 'linear-gradient(135deg, #1e3a8a, #581c87)'
        }}
        camera={{ position: [0, 0, 4], fov: 60 }}
      >
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