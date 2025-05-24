import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion'
import React from 'react'

function ShoeModel() {
  const { scene } = useGLTF('/models/air_jordan_1/scene.gltf')
  return (
    <primitive
      object={scene}
      scale={0.1}  // smaller shoe
      position={[0, -0.8, 0.6]}
      rotation={[0.1, Math.PI / 2.5, 0]}
    />
  )
}

useGLTF.preload('/models/nike_shoes/scene.gltf')

export default function Hero2() {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-black to-gray-900 text-white font-sans overflow-hidden">
      <div className="flex flex-col md:flex-row h-full items-center justify-center px-4 md:px-16">

        {/* 3D Canvas - Left Side */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full">
          <Canvas
            camera={{ position: [1, 0.5, 5], fov: 40 }}
            gl={{ toneMappingExposure: 1.75 }}
          >
            <ambientLight intensity={0.9} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={1.2}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <ShoeModel />
            <Environment preset="studio" />
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.5}
              scale={10}
              blur={2}
              far={4.5}
            />
            <OrbitControls enableZoom={false} /> {/* No autoRotate */}
          </Canvas>
        </div>

        {/* Text Content - Right Side */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start text-left p-6 md:p-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 text-white"
            style={{
              textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(0,255,255,0.3)',
            }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1>Air JOrdan 1</h1>
            
            Elevate Your Stride
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-6"
            style={{
              textShadow: '0 0 8px rgba(255,255,255,0.2)',
              opacity: 0.9,
            }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Engineered with next-gen materials, NeoKicks adapts to your lifestyle — futuristic, fearless, and fast.
          </motion.p>

          <motion.button
            className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg overflow-hidden hover:scale-105 transition-transform"
            style={{
              boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
            }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="relative z-10">Explore Collection</span>
            <span className="absolute inset-0 bg-white opacity-10 animate-pulse" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
