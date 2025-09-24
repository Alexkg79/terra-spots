import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { Mesh } from 'three'

function Globe() {
  const meshRef = useRef<Mesh>(null!)
  
  // Texture de la Terre (image gratuite)
  const earthTexture = useLoader(
    TextureLoader, 
    'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
  )

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial 
        map={earthTexture}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  )
}

export default Globe