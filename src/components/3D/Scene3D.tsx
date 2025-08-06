'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingOrbProps {
  position: [number, number, number]
  color: string
  scale?: number
}

const FloatingOrb: React.FC<FloatingOrbProps> = ({ position, color, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

interface YogaSymbolProps {
  position: [number, number, number]
  rotation?: [number, number, number]
}

const YogaSymbol: React.FC<YogaSymbolProps> = ({ position, rotation = [0, 0, 0] }) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <torusGeometry args={[1.5, 0.3, 16, 100]} />
        <meshStandardMaterial
          color="#8B5CF6"
          transparent
          opacity={0.6}
          roughness={0.2}
          metalness={0.5}
        />
      </mesh>
    </Float>
  )
}

interface Scene3DProps {
  className?: string
  enableControls?: boolean
}

const Scene3D: React.FC<Scene3DProps> = ({ className = '', enableControls = false }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8B5CF6" />
        
        <FloatingOrb position={[-3, 2, 0]} color="#3B82F6" scale={0.8} />
        <FloatingOrb position={[3, -1, -2]} color="#8B5CF6" scale={1.2} />
        <FloatingOrb position={[0, 3, -1]} color="#06B6D4" scale={0.6} />
        
        <YogaSymbol position={[2, 1, 1]} rotation={[Math.PI / 4, 0, 0]} />
        <YogaSymbol position={[-2, -2, 0]} rotation={[0, Math.PI / 3, Math.PI / 6]} />
        
        {enableControls && <OrbitControls enableZoom={false} />}
      </Canvas>
    </div>
  )
}

export { Scene3D, FloatingOrb, YogaSymbol }
