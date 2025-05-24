import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion'
import React from 'react'

function ShoeModel() {
  const { scene } = useGLTF('/models/shoe/scene.gltf')
  return <primitive object={scene} scale={1.3} position={[2.2, -1.2, 0]} />
}

useGLTF.preload('/models/shoe/scene.gltf')

export default function Hero() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-black to-gray-900 text-white font-sans relative overflow-hidden">

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 4, 5]} intensity={1} />
          <ShoeModel />
          <Environment preset="city" />
          <ContactShadows position={[0, -1.4, 0]} opacity={0.35} scale={10} blur={2} far={4.5} />
          <OrbitControls enableZoom={false} autoRotate={false} />
        </Canvas>
      </div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center h-full p-8 md:p-16 max-w-2xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
          style={{
            fontFamily: "'Creepster', cursive",
            textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(0,255,255,0.3)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Get Ready to
          Step Into  Future
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-6"
          style={{
            fontFamily: "'Creepster', cursive",
            textShadow: '0 0 8px rgba(255,255,255,0.2)',
            opacity: 0.9
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          
          Discover our latest tech-driven sneakers designed for performance and style.
        </motion.p>

        <motion.button 
          className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg overflow-hidden hover:scale-105 transition-transform"
          style={{
            boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="relative z-10">Shop Now</span>
          <span className="absolute inset-0 bg-white opacity-10 animate-pulse" />
        </motion.button>
      </div>
    </div>
  )
}
