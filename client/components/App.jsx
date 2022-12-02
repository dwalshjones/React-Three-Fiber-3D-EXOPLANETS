import React, { Suspense, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Earth from './Earth'
import HD80606b from './HD80606b'

function App() {
  return (
    <Canvas>
      <Suspense>
        <OrbitControls />
        <Stars count={20000} fade={true} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          {/* <Earth /> */}
          <HD80606b />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App
